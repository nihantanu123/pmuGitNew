//======================================================================================================
// Created By :  Nish
// Description:  Contains login related static function which call PMU wcf service 
// Created On:   6/14/2013
//======================================================================================================

using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using PMU.CODE.Utilities;
using PMU.CODE.Enum;
using PMU.PMUService;
using System.ServiceModel;

namespace PMU.CODE.BLogic
{
    public class LoginDetail
    {
        public static string validateSignInData(string userName, string password)
        {
            string validationMessage = string.Empty;

            if (string.IsNullOrEmpty(userName))
            {
                validationMessage = Constant.ErrorMessage.userNameEmptyErrMsg;
                return validationMessage;
            }
            else if (CommonFunction.IsContains(userName, Constant.InvalidCharacterSet.invalidCharacterUseNameSet))
            {
                validationMessage = Constant.ErrorMessage.userNameInvalidErrMsg;
                return validationMessage;
            }

            if (string.IsNullOrEmpty(password))
            {
                validationMessage = Constant.ErrorMessage.userConfPasswordEmptyErrMsg;
                return validationMessage;
            }
            else if (password.Length < Convert.ToInt32(EnumValues.PasswordLength.Minimum))
            {
                validationMessage = Constant.ErrorMessage.passwordShortErrMsg;
                return validationMessage;
            }
            else if (password.Length > Convert.ToInt32(EnumValues.PasswordLength.Maximum))
            {
                validationMessage = Constant.ErrorMessage.passwordToolongErrMsg;
                return validationMessage;
            }

            return validationMessage;
        }

        public static WSInteger IsAuthorizedUser(string userName, string password)
        {
            WSInteger IsAuthorized = new WSInteger();
            IsAuthorized.IntegerValue = 0;

            try
            {
                using (PMUServiceClient client = new PMUServiceClient("WSHttpBinding_IPMUService"))
                {
                    PMUServiceResult result = new PMUServiceResult();
                    result = client.IsUserNameExist(userName);
                    IsAuthorized = (WSInteger)result.Data;
                    if (result.Data == null && result.ErrorMessage.Length > 0)
                    {
                        IsAuthorized.IntegerValue = 0;
                    }
                }
            }
            catch (FaultException<PMUServiceResult> Fex)
            {
                ErrorLogging.LogError(Fex.Detail.ErrorMessage, Fex.Detail.ErrorDetails, CommonFunction.GetCurrentRequestUrl());
            }
            return IsAuthorized;
        }
    }
}