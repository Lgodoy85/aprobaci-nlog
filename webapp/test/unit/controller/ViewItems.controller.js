/*global QUnit*/

sap.ui.define([
	"geo/aprobacionlog/controller/ViewItems.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ViewItems Controller");

	QUnit.test("I should test the ViewItems controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
