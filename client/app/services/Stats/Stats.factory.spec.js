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
      let response;
      let filter;

      beforeEach(done => {
        Stats.summary()
          .then(results => {
            response = results;
            done();
          });

        $httpBackend
          .whenRoute('GET', '/api/Questions')
          .respond((method, url, data, headers, params) => {
            filter = angular.fromJson(params.filter);
            return [ 200, mockSummaryResponse ];
          });

        $httpBackend.flush();
      });

      it('Should call /api/Questions', () => {
        const expected = { include: { relation: 'responses', scope: { fields: [] } } };
        expect(filter).to.eql(expected);
      });

      it('Should have count by question', () => {
        const actual = response.map(i => i.count);
        const expected = [ 13, 10, 10, 12, 9 ];

        expect(actual).to.eql(expected);
      });

      it('Should have questions text', () => {
        const actual = response.map(i => i.text);
        const expected = [
          'The conditions of my life are excellent.',
          'In most ways my life is close to my ideal.',
          'I am satisfied with life.',
          'So far I have gotten the important things I want in life.',
          'If I could live my life over, I would change almost nothing.',
        ];

        expect(actual).to.eql(expected);
      });
    });

    describe('question', () => {
      let question;
      let params;
      const id = 4;

      beforeEach(done => {
        Stats.question(id)
          .then(results => {
            question = results;
            done();
          });

        $httpBackend
          .whenRoute('GET', '/api/Questions/:id')
          .respond((method, url, data, headers, _params_) => {
            params = {};
            params.filter = angular.fromJson(_params_.filter);
            params.id = parseInt(_params_.id.split('?', 1)[ 0 ], 10);
            return [ 200, mockQuestionResponse ];
          });
        $httpBackend.flush();
      });

      it('Should call /api/Questions/:id', () => {
        expect(params.id).to.equal(id);
      });
      it('Should call the correct query string endpoint', () => {
        const expected = {
          include: {
            relation: 'choices',
            scope: {
              include: {
                relation: 'responses', scope: { fields: [] },
              },
              order: 'order',
            },
          },
        };
        expect(params.filter).to.eql(expected);
      });

      it('Should have question text', () => {
        expect(question.text).to.eql('So far I have gotten the important things I want in life.');
      });

      it('Should have count by choice', () => {
        const actual = question.choices.map(i => i.count);
        const expected = [ 1, 2, 3, 1, 2, 0, 3 ];

        expect(actual).to.eql(expected);
      });

      it('Should have choices text', () => {
        const actual = question.choices.map(i => i.text);
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
