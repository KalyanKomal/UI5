sap.ui.define([
    "sap/ui/core/mvc/Controller","sap/ui/model/json/JSONModel","sap/ui/core/BusyIndicator"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,JSONModel,BusyIndicator) {
        "use strict";

        return Controller.extend("com.incture.project2.controller.View1", {
            onInit: function () {
              /*  var oModel=new JSONModel("model/data.json");
                this.getView().setModel(oModel);*/
            },show4000 : function() {
                this.showBusyIndicator(4000);
            },
    
            show4000_0 : function() {
                this.showBusyIndicator(4000, 0);
            },
    
            show1000_2000 : function() {
                this.showBusyIndicator(8000, 2000);
            },showBusyIndicator:function(iDuration,iDelay){
                //IT WILL SHOW THE DELAY AFTER iDelay
                BusyIndicator.show(iDelay);
                if(iDuration>0){
                    //REMOVING ANY PREVIOUS INSTANCE OF TIMEOUT
                    if(this._sTimeoutId){
                        clearTimeout(this._sTimeoutId);
                        this._sTimeoutId=null;
                    }
                //ADDING THE TIMEOUT
				this._sTimeoutId = setTimeout(function() {
					this.hideBusyIndicator();
				}.bind(this), iDuration);
                }
            },	hideBusyIndicator : function() {
                BusyIndicator.hide();
            },
        });
    });
