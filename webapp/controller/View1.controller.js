sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("com.incture.project1.controller.View1", {
            onInit: function () {

            },buttonpress:function(){
                alert("It is pressed");
            }
        });
    });