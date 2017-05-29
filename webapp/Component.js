jQuery.sap.declare("routing.Component");
sap.ui.core.UIComponent.extend("routing.Component", {

	metadata: {
		"manifest" : "json"
	},

	init: function() {
		sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
		this.getTargets().display("page1");
	}

});