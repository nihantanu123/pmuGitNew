/// <reference path="jquery-2.0.2-vsdoc.js" />

var signInUserName,
    signInPaswd,
    btnSignIn,
    signUpUserName,
    signUpEmailAdd,
    signUpPaswd,
    signUpConfPaswd,
    btnSignUp,
    spanSignUpUserNameErrMsg,
    spanSignUpEmailAdd,
    spanSignUpPaswd,
    spanSignUpConfPaswd,
    showErrMsgSpan,
    showErrMsgInSpan,
    spanSignInUserNameErrMsg,
    spanSignInPwdErrMsg;

$(function () {

    signInUserName = $('.signInUserName');
    signInPaswd = $('.signInPaswd');
    btnSignIn = $('.btnSignIn');
    signUpUserName = $('.signUpUserName');
    signUpEmailAdd = $('.signUpEmailAdd');
    signUpPaswd = $('.signUpPaswd');
    signUpConfPaswd = $('.signUpConfPaswd');
    btnSignUp = $('.btnSignUp');
    signUpUserNameErrMgArea = $('.spanSignUpUserNameErrMsg');
    signUpEmailAddErrMgArea = $('.spanSignUpEmailAdd');
    signUpPwdErrMgArea = $('.spanSignUpPaswd');
    signUpConfErrMgArea = $('.spanSignUpConfPaswd');
    spanSignInUserNameErrMsg = $('.spanSignInUserNameErrMsg');
    spanSignInPwdErrMsg = $('.spanSignInPwdErrMsg');

    signUpUserName.blur(function () {
        WCFJSON();
        var uName = signUpUserName.val();
        if (uName != "") {
            IsValidUserName(uName, signUpUserNameErrMgArea);
        }
    });

    signUpEmailAdd.blur(function () {
        var uEmail = signUpEmailAdd.val();
        if (uEmail != "") {
            IsValidEmailAdd(uEmail, signUpEmailAddErrMgArea);
        } else {
            hideErrMsgArea(signUpEmailAddErrMgArea);
        }
    });

    signUpPaswd.blur(function () {
        var uPwd = signUpPaswd.val();
        var uConfPwd = signUpConfPaswd.val();
        if (uPwd != "") {
            IsValidPassword(uPwd, signUpPwdErrMgArea);
        }
        if (uConfPwd != "" && uPwd != "") {
            IsPasswordMatch(uPwd, uConfPwd, signUpConfErrMgArea);
        }
    });

    signUpConfPaswd.blur(function () {
        var uPwd = signUpPaswd.val();
        var uConfPwd = signUpConfPaswd.val();
        if (uConfPwd != "") {
            IsValidConfPassword(uConfPwd, signUpConfErrMgArea);
        }
        if (uConfPwd != "" && uPwd != "") {
            IsPasswordMatch(uPwd, uConfPwd, signUpConfErrMgArea);
        }
    });

    signInUserName.blur(function () {
        var uName = signInUserName.val();
        if (uName != "") {
            IsValidUserName(uName, spanSignInUserNameErrMsg);
        }
    });

    signInPaswd.blur(function () {
        var uPwd = signInPaswd.val();
        if (uPwd != "") {
            IsValidPassword(uPwd, spanSignInPwdErrMsg);
        }
    });

});

function DoSignInValidation() {
    var uName = signInUserName.val();
    var uPwd = signInPaswd.val();

    if (!IsValidUserName(uName, spanSignInUserNameErrMsg)) {
        return false;
    }
    if (!IsValidPassword(uPwd, spanSignInPwdErrMsg)) {
        return false;
    }
    return true;
}

function signUpvalidate() {
    var uName = signUpUserName.val();
    var uEmail = signUpEmailAdd.val();
    var uPwd = signUpPaswd.val();
    var uConfPwd = signUpConfPaswd.val();

    if (!IsValidUserName(uName, signUpUserNameErrMgArea)) {
        return false;
    }
    if (!IsValidEmailAdd(uEmail, signUpEmailAddErrMgArea)) {
        return false;
    }
    if (!IsValidPassword(uPwd, signUpPwdErrMgArea)) {
        return false;
    }
    if (!IsValidConfPassword(uConfPwd, signUpConfErrMgArea)) {
        return false;
    }
    if (!IsPasswordMatch(uPwd,uConfPwd, signUpConfErrMgArea)) {
        return false;
    }
    return true;
}

function IsValidUserName(uName, errMsgArea) {
    var showErrMsgSpan = errMsgArea;
    if (uName == "") {
        showErrMsgInSpan = "*Please choose username";
        displayErrMessage(showErrMsgSpan, showErrMsgInSpan);
        return false;
    }
    else {
        hideErrMsgArea(showErrMsgSpan);
        return true;
    }
}

function IsValidEmailAdd(uEmail, errMesgArea) {
    //Validate email address
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var showErrMsgSpan = errMesgArea;
    if (uEmail == "") {
        showErrMsgInSpan = "*Please enter email address";
        displayErrMessage(showErrMsgSpan, showErrMsgInSpan);
        return false;
    }
    else if (!re.test(uEmail)) {
        showErrMsgInSpan = "*Invalid Email Address";
        displayErrMessage(showErrMsgSpan, showErrMsgInSpan);
        return false;
    } else {
        hideErrMsgArea(showErrMsgSpan);
        return true;
    }
}

function IsValidPassword(uPwd, errMesgArea) {
    var showErrMsgSpan = errMesgArea;
    if (uPwd == "") {
        showErrMsgInSpan = "*Please enter password";
        displayErrMessage(showErrMsgSpan, showErrMsgInSpan);
        return false;
    } else {
        hideErrMsgArea(showErrMsgSpan);
        return true;
    }
}

function IsValidConfPassword(uConfPwd, errMesgArea) {
    var showErrMsgSpan = errMesgArea;
    if (uConfPwd == "") {
        showErrMsgInSpan = "*Please enter confirm password";
        displayErrMessage(showErrMsgSpan, showErrMsgInSpan);
        return false;
    } else {
        hideErrMsgArea(showErrMsgSpan);
        return true;
    }
}

function IsPasswordMatch(uPwd, uConfPwd, errMesgArea) {
    var showErrMsgSpan = errMesgArea;
    if (uPwd != uConfPwd) {
        showErrMsgInSpan = "*Password and confirm password should be same.";
        displayErrMessage(showErrMsgSpan, showErrMsgInSpan);
        return false;
    } else {
        hideErrMsgArea(showErrMsgSpan);
        return true;
    }
}

function displayErrMessage(mesgBox, errorMesgTxt) {
    mesgBox.css("display", "block").text(errorMesgTxt);
    return false;
}
function hideErrMsgArea(mesgBox) {
    mesgBox.css("display", "none");
    return false;
}


//Area to test Json Call to wcf service  

function WCFJSON() {
    $.support.cors = true;
    CallService();
}

// Function to call WCF  Service       
function CallService() {
    var uesrName = $('.signUpUserName').val();
    $.ajax({
        url: "http://localhost:60956/PMUServices/PMUServiceHost.svc/IsUserNameExist",
        dataType: "json",
        data: '{"userName": "' + uesrName + '"}',
        type: "POST",
        cache: false,
        contentType: "application/json; charset=utf-8",
        beforeSend: function () {
        },
        success: function (data, st) {
            if (st == 'success') {
                if (data.Data["IntegerValue"] == 1) {
                alert(uesrName + " Allready Exist");
                return false;
              }
            }
        },
        error: function (message) {
            //var jsonFault = JSON.parse(message.responseText);
            alert(jsonFault.Message);
        }
    });
}

function ServiceFailed(result) {
    alert('Service call failed: ' + result.status + '' + result.statusText);
    Type = null;
    varUrl = null;
    Data = null;
    ContentType = null;
    DataType = null;
    ProcessData = null;
}

function ServiceSucceeded(result) {
    alert("Hi");
    //    if (DataType == "json") {
    //        resultObject = result.GetUserResult;

    //        for (i = 0; i < resultObject.length; i++) {
    //            alert(resultObject[i]);
    //        }

    //   }

}

function ServiceFailed(xhr) {
    alert(xhr.responseText);

    if (xhr.responseText) {
        var err = xhr.responseText;
        if (err)
            error(err);
        else
            error({ Message: "Unknown server error." })
    }

    return;
}

//$(document).ready(
//    function () {
//        WCFJSON();
//    }
//);






