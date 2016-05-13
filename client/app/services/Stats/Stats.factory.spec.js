/* eslint-env angular/mocks, mocha */
/* eslint no-unused-expressions:0 */
import angular from 'angular';
import { expect } from 'chai';
import StatsFactory from './Stats.factory';
import mockSummaryResponse from './__mock/summaryResponse.json';
import mockQuestionResponse from './__mock/questionResponse.json';
const { beforeEach, afterEach, describe, it, ngModule, inject } = global;

describe('Stats Factory', () => {
  let Stats;
  let $httpBackend;

  beforeEach(ngModule(StatsFactory));
  beforeEach(inject((_Stats_, _$httpBackend_) => {
    Stats = _Stats_;
    $httpBackend = _$httpBackend_;
  }));
  afterEach(() => {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  describe('API', () => {
    it('Should have a summary method', () => {
      expect(Stats.summary).to.be.a('function');
    });
    it('Should have a question method', () => {
      expect(Stats.question).to.be.a('function');
    });
  });

  describe('Responses', () => {
    describe('summary', () => {
      let questions;
      let request;

      beforeEach(done => {
        Stats.summary()
          .then(_questions_ => {
            questions = _questions_;
            done();
          });

        $httpBackend
          .whenRoute('GET', '/api/Questions')
          .respond((method, url, data, headers, params) => {
            request = { method, url, data, headers, params };
            return [ 200, mockSummaryResponse ];
          });

        $httpBackend.flush();
      });

      it('Should call /api/Questions/stats', () => {
        expect(request.url).to.eql('/api/Questions/stats');
      });

      it('Should have count by question', () => {
        const actual = questions.map(question => question.count);

        expect(actual).to.eql([ 13, 12, 10, 14, 12 ]);
      });

      it('Should have questions text', () => {
        const actual = questions.map(question => question.text);
        const expected = [
          'In most ways my life is close to my ideal.',
          'The conditions of my life are excellent.',
          'I am satisfied with life.',
          'So far I have gotten the important things I want in life.',
          'If I could live my life over, I would change almost nothing.',
        ];

        expect(actual).to.eql(expected);
      });
    });

    describe('question', () => {
      let question;
      let request;
      const id = 4;

      beforeEach(done => {
        Stats.question(id)
          .then(_question_ => {
            question = _question_;
            done();
          });

        $httpBackend
          .whenRoute('GET', '/api/Questions/:id')
          .respond((method, _url_, data, headers, params) => {
            const [ url, query ] = _url_.split('?', 2);
            request = {
              method,
              url,
              query,
              data,
              headers,
              params: parseObj(params),
            };
            return [ 200, mockQuestionResponse ];

            function parseObj(obj) {
              return Object.keys(obj).reduce(copyKeys(obj), {});
            }

            function copyKeys(obj) {
              return (copy, key) => {
                copy[ key ] = angular.fromJson(obj[ key ]);
                return copy;
              };
            }
          });
        $httpBackend.flush();
      });

      it('Should call /api/Questions/:id/stats', () => {
        expect(request.url).to.equal(`/api/Questions/${id}/stats`);
      });

      it(`Should have id ${id}`, () => {
        expect(request.params.id).to.equal(id);
      });

      it('Should call the correct query string endpoint', () => {
        const expected = { order: 'order' };
        expect(request.params.filter).to.eql(expected);
      });

      it('Should have question text', () => {
        expect(question.text).to.eql('I am satisfied with life.');
      });

      it('Should have count by choice', () => {
        const actual = question.choices.map(choice => choice.count);

        expect(actual).to.eql([ 1, 2, 1, 2, 3, 1, 0 ]);
      });

      it('Should have choices text', () => {
        const actual = question.choices.map(choice => choice.text);
        const expected = [
          'Strongly Disagree',
          'Disagree',
          'Slightly Disagree',
          'Neither Agree or Disagree',
          'Slightly Agree',
          'Agree',
          'Strongly Agree',
        ];
        expect(actual).to.eql(expected);
      });
    });
  });
});
