sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("routing.controller.View1", {

		onPress: function() {
			this.getOwnerComponent().getTargets().display("page2");
		}

	});
});