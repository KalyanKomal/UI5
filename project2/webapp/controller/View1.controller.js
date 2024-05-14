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
            }, 	onPIChangeValueButtonPressed : function (oEvent) {
                var sSourceId = oEvent.getSource().getId();
                 var   sButton = 'button';
                    //We are getting the starting index where we will find button
                   var iIndexOfButton = sSourceId.indexOf(sButton);
                    //By this we are gonna extract tht index of the opreogress indicator.
                  var  oProgressIndicator = this.getView().byId(sSourceId.substring(0, iIndexOfButton - 1));
                    //From this we are getting whether the value is 0 or 50 or 100
                   var  sValue = sSourceId.substring(iIndexOfButton + sButton.length);
                   var  sPreviousValue = oProgressIndicator.getDisplayValue();
                    console.log(iIndexOfButton,sValue,sPreviousValue);
                   var  sAccText;
                oProgressIndicator.setDisplayValue(sValue + '%');
                oProgressIndicator.setPercentValue(sValue);
                
            },	onPressNavToDetail: function () {
                this.getSplitAppObj().to(this.createId("detailDetail"));
            },
    
            onPressDetailBack: function () {
                this.getSplitAppObj().backDetail();
            },
    
            onPressMasterBack: function () {
                this.getSplitAppObj().backMaster();
            },
    
            onPressGoToMaster: function () {
                this.getSplitAppObj().toMaster(this.createId("master2"));
            },
    
            onListItemPress: function (oEvent) {
                var sToPageId = oEvent.getParameter("listItem").getCustomData()[0].getValue();
    
                this.getSplitAppObj().toDetail(this.createId(sToPageId));
            },getSplitAppObj: function () {
                var result = this.byId("SplitAppDemo");
                if (!result) {
                    Log.info("SplitApp object can't be found");
                }
                return result;
            },onPressModeBtn: function (oEvent) {
                var sSplitAppMode = oEvent.getSource().getSelectedButton().getCustomData()[0].getValue();
    console.log(sSplitAppMode);
                this.getSplitAppObj().setMode(sSplitAppMode);
            }
        });
    });
