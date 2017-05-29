sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("routing.controller.View2", {

		onBack: function() {
			this.getOwnerComponent().getTargets().display("page1");
		}

	});
});