sap.ui.define([
    "sap/ui/core/mvc/Controller","sap/ui/core/date/UI5Date","sap/ui/model/json/JSONModel"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,UI5Date,JSONModel) {
        "use strict";

        return Controller.extend("com.incture.project1.controller.View1", {
         /*   _data : {
                dtValue: UI5Date.getInstance(),
                dtPattern: undefined
            },*/
            onInit: function () {

        




               /* var oModel = new JSONModel(this._data);
                console.log(UI5Date.getInstance());

        this.getView().setModel(oModel);
        oModel.setProperty("/dtPattern",
            this.getView().byId("dtInput").getBinding("value").getType().getPlaceholderText());*/
            },buttonpress:function(){
                alert("It is pressed");
            },onSliderMoved: function (oEvent) {
                var iValue = oEvent.getParameter("value");
               // this.byId("_IDGenIconTabHeader1").setWidth(iValue + "%");
                this.byId("_IDGenOverflowToolbar1").setWidth(iValue + "%");
            },onButtonPress: function(oEvent) {
                var oButton = oEvent.getSource();
                //alert("CONTROLLER");
                console.log(oButton);
                console.log(this.byId("actionSheet"));
                this._fragmentview=sap.ui.xmlfragment(this.getView(),getId(),"com.incture.project1.view.View1",this);
                this.getView().addDependent();
                this._fragmentview.open();
              //  this.byId("actionSheet").openBy(oButton);
                alert("exit");
            }
        });
    });
