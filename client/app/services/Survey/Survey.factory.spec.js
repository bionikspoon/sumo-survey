/* eslint-env angular/mocks, mocha */
/* eslint no-unused-expressions:0 */
import angular from 'angular';
import { expect } from 'chai';
import SurveyFactory from './Survey.factory';
const { beforeEach, describe, it, ngModule, inject } = global;

describe('Survey Factory', () => {
  let Survey;
  let $httpBackend;
  const fingerprint = '4f4b484839c1862f68c293778986233a';

  beforeEach(ngModule(SurveyFactory));
  beforeEach(
    ngModule(($provide) => {
      function MockFingerprintJS(value = fingerprint) {
        this.get = (callback) => callback(value);
      }

      $provide.value('FingerprintJS', MockFingerprintJS);
    })
  );
  beforeEach(inject((_Survey_, _$httpBackend_) => {
    Survey = _Survey_;
    $httpBackend = _$httpBackend_;
  }));

  describe('API', () => {
    it('Should have method question', () => {
      expect(Survey.question).to.be.a('function');
    });

    it('Should have method answer', () => {
      expect(Survey.answer).to.be.a('function');
    });
  });

  describe('question', () => {
    let params;
    beforeEach(() => {
      $httpBackend
        .whenRoute('GET', '/api/Guests/:fingerprint/questions/unanswered/findOne')
        .respond((method, url, data, headers, _params_) => {
          params = _params_;
          return [200];
        });
      Survey.question();
      $httpBackend.flush();
    });

    it('Should call the /api/Guests/:fingerprint/questions/unanswered/findOne endpoint', () => {
      expect(params.fingerprint).to.eql(fingerprint);
    });
  });

  describe('answer', () => {
    let params;
    let data;
    beforeEach(() => {
      $httpBackend
        .whenRoute('POST', '/api/Guests/:fingerprint/responses')
        .respond((method, url, _data_, headers, _params_) => {
          params = _params_;
          data = angular.fromJson(_data_);
          return [200];
        });
      Survey.answer({ fingerprint, choiceId: 1, questionId: 2 });
      $httpBackend.flush();
    });

    it('Should call the /api/Guests/:fingerprint/responses endpoint', () => {
      expect(params.fingerprint).to.eql(fingerprint);
      expect(data.choiceId).to.equal(1);
      expect(data.questionId).to.equal(2);
    });
  });
});
