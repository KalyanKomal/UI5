sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.incture.project1.controller.View1", {
            onInit: function (oEvent) {

            },buttonpress:function(){
                alert("It is pressed");
            },onSliderMoved: function (oEvent) {
                var iValue = oEvent.getParameter("value");
               // this.byId("_IDGenIconTabHeader1").setWidth(iValue + "%");
                this.byId("_IDGenOverflowToolbar1").setWidth(iValue + "%");
            },
        });
    });
