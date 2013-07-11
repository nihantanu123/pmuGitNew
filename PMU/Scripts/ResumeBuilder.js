/// <reference path="jquery-2.0.2-vsdoc.js" />
$(document).ready(function () {

    /* fucntion to show and hide main navigation conatct box */
    $("#test_modal").dialog({
        width: 600,
        modal: true,
        close: function (event, ui) {
            $("#test_modal").remove();
        }
    });
    //alert("Hi");
});