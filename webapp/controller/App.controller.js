/*sap.ui.controller("routing.controller.App", "sap.ui.core.routing.History", {
	onInit: function() {
		var sUrl = "#" + this.getOwnerComponent().getRouter().getURL("page1");
		this.byId("link").setHref(sUrl);
	},

	onToPage1: function() {
		this.getOwnerComponent().getRouter().navTo("page1");
	},

	onBack: function() {
		var sPreviousHash = History.getInstance().getPreviousHash();

		//The history contains a previous entry
		if (sPreviousHash !== undefined) {
			window.history.go(-1);
		} else {
			// There is no history!
			// replace the current hash with page 1 (will not add an history entry)
			this.getOwnerComponent().getRouter().navTo("page1", null, true);
		}
	}

});*/

sap.ui.controller("routing.controller.App", {
	onInit: function() {
	}	
	});