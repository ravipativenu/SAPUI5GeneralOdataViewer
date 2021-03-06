sap.ui.define([
	"com/mjzsoft/sapui5/demo/GeneralODataViewer/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("com.mjzsoft.sapui5.demo.GeneralODataViewer.controller.NotFound", {

			onInit: function () {
				this.getRouter().getTarget("notFound").attachDisplay(this._onNotFoundDisplayed, this);
			},

			_onNotFoundDisplayed : function () {
					this.getModel("appView").setProperty("/layout", "OneColumn");
			}
		});
	}
);