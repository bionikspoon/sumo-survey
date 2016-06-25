/* eslint-env angular/mocks, mocha */
/* eslint no-unused-expressions:0 */
import { expect } from 'chai';
import AddController from './add.controller';
import { spy } from 'sinon';
const { beforeEach, describe, it, ngModule, inject } = global;

describe('Add Controller', () => {
  let $ctrl;
  let $scope;

  beforeEach(ngModule(AddController));

  beforeEach(() => {
    let $controller;
    let $rootScope;

    inject((_$controller_, _$rootScope_) => {
      $controller = _$controller_;
      $rootScope = _$rootScope_;
      $scope = $rootScope.$new(true);

      $ctrl = $controller('AddController', { $scope });
    });
  });

  it('Should exist', () => {
    expect($ctrl).to.be.an('object');
  });
  describe('API', () => {
    describe('canAddChoice', () => {
      it('Should be true with valid choice', () => {
        const question = { addChoice: { text: 'I like turtles' } };
        expect($ctrl.canAddChoice(question)).to.be.true;
      });

      it('Should be false with no valid choice', () => {
        const question = {};
        expect($ctrl.canAddChoice(question)).to.be.false;
      });

      it('Should be false with repeat choice', () => {
        const question = { addChoice: { text: 'I like turtles' }, choices: [ { text: 'I like turtles' } ] };
        expect($ctrl.canAddChoice(question)).to.be.false;
      });
    });
    describe('canAddQuestion', () => {
      it('Should be true with valid question', () => {
        const question = {
          $valid: true,
          text: 'I like turtles',
          addChoice: { text: '' },
          choices: [ { text: 'Agree' }, { text: 'Strongly Agree' } ],
        };
        expect($ctrl.canAddQuestion(question)).to.be.true;
      });

      it('Should be false with missing text', () => {
        const question = {
          $valid: true,
          choices: [ { text: 'Agree' }, { text: 'Strongly Agree' } ],
        };
        expect($ctrl.canAddQuestion(question)).to.be.false;
      });

      it('Should be false with missing choices', () => {
        const question = {
          $valid: true,
          text: 'I like turtles',
        };
        expect($ctrl.canAddQuestion(question)).to.be.false;
      });

      it('Should be false with $invalid form', () => {
        const question = {
          $valid: false,
          text: 'I like turtles',
          choices: [ { text: 'Agree' }, { text: 'Strongly Agree' } ],
        };
        expect($ctrl.canAddQuestion(question)).to.be.false;
      });

      it('Should be false with partial addChoice data', () => {
        const question = {
          $valid: true,
          addChoice: { text: 'Neutral' },
          text: 'I like turtles',
          choices: [ { text: 'Agree' }, { text: 'Strongly Agree' } ],
        };
        expect($ctrl.canAddQuestion(question)).to.be.false;
      });
    });
    describe('submit', () => {
      beforeEach(() => {
        $ctrl.addChoice = spy();
        $ctrl.addQuestion = spy();
      });

      it('Should call addChoice with valid addChoice', () => {
        const question = {
          $valid: true,
          addChoice: { text: 'Agree' },
          text: 'I like turtles',
        };
        $ctrl.submit(question);
        expect($ctrl.addChoice).to.have.been.calledWith(question);
        expect($ctrl.addQuestion).to.not.have.been.called;
      });

      it('Should call addQuestion with valid question', () => {
        const question = {
          $valid: true,
          addChoice: { text: '' },
          text: 'I like turtles',
          choices: [ { text: 'Agree' }, { text: 'Strongly Agree' } ],
        };
        $ctrl.submit(question);
        expect($ctrl.addQuestion).to.have.been.calledWith(question);
        expect($ctrl.addChoice).to.not.have.been.called;
      });
    });

    describe('addChoice', () => {
      it('Should add addChoice to choices', () => {
        const question = {
          $valid: true,
          addChoice: { text: 'Strongly Agree' },
          text: 'I like turtles',
          choices: [ { text: 'Agree' } ],
        };
        $ctrl.addChoice(question);

        const expected = {
          $valid: true,
          addChoice: { text: '' },
          text: 'I like turtles',
          choices: [ { text: 'Agree' }, { text: 'Strongly Agree' } ],
        };
        expect(question).to.be.eql(expected);
      });
    });

    describe('addQuestion', () => {

    });
  });
});
