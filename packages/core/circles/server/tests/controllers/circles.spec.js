(function(){
  'use strict';

  var expect = require('expect.js');

  //TODO mock the necessary Circles and app functionality for more in depth testing
  var Circles = {};
  var app = {};
  var controller = require('../../controllers/circles.js')(Circles, app);

  describe('<Unit Test>', function(){
    describe('Circles Controller', function(){
      it('has functions', function(){
        expect(controller.aclBlocker).to.be.a('function');
        expect(controller.all).to.be.a('function');
        expect(controller.create).to.be.a('function');
        expect(controller.loadCircles).to.be.a('function');

        expect(controller.mine).to.be.a('function');
        expect(controller.test).to.be.a('function');
        expect(controller.visualize).to.be.a('function');
        expect(controller.tree).to.be.a('function');

        expect(controller.update).to.be.a('function');
        expect(controller.show).to.be.a('function');
        expect(controller.userAcl).to.be.a('function');
      });
    });
  });
})();
