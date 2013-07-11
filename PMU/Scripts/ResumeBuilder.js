/// <reference path="jquery-2.0.2-vsdoc.js" />
$(document).ready(function () {
    /* fucntion to show and hide main navigation conatct box */
    $("#test_modal").dialog({
        width: 600,
        modal: true,
        //close: function (event, ui) {
        //    $("#test_modal").remove();
        //}
    });
});



$(document).ready(function () {

    var firstnameWatermark = 'First Name';
    var lastnameWatermark = 'Last Name';

    //init, set watermark text and class
    $('#tbFirstName').val(firstnameWatermark).addClass('watermark');
     $('#tbLastName').val(lastnameWatermark).addClass('watermark');

    //if blur and no value inside, set watermark text and class again.
    $(document).find("input").blur(function () {
        if ($(this).val().length == 0) {
            $(this).val(watermark).addClass('watermark');
        }
    });

    //if focus and text is watermrk, set it to empty and remove the watermark class
    $('#tbFirstName').focus(function () {
        if ($(this).val() == firstnameWatermark) {
            $(this).val('').removeClass('watermark');
        }
    });

    
    var uploader = new qq.FileUploader({
        element: document.getElementById('fileUploader'),
        action: '../GlobalHandler.ashx',       
        allowedExtensions: ['jpg','jpeg','png','gif'] ,
        debug: true,
        onComplete: function(id, fileName, responseJSON){
        debugger;
            if(!responseJSON.success){
            alert(responseJSON.errorMessage);
            }
        }
    });   

});