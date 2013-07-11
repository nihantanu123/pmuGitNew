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
    public class UserSignUpInfo
    {
        public static string validateSignUpInputData(string userName, string emailAdd,
                                       string password, string confPassword)
        {

            if (string.IsNullOrEmpty(userName))
            {
                 return Constant.ErrorMessage.userNameEmptyErrMsg;
            }
            else if (CommonFunction.IsContains(userName, Constant.InvalidCharacterSet.invalidCharacterUseNameSet))
            {
                 return Constant.ErrorMessage.userNameInvalidErrMsg;
            }
            if (string.IsNullOrEmpty(emailAdd))
            {
                 return Constant.ErrorMessage.userEmailAddEmptyErrMsg;
            }
            else if (!CommonFunction.IsValidEmail(emailAdd))
            {
                 return Constant.ErrorMessage.userEmailAddInvalidErrMsg;
            }

            if (string.IsNullOrEmpty(password))
            {
                return Constant.ErrorMessage.userConfPasswordEmptyErrMsg;
            }
            else if (password.Length < Convert.ToInt32(EnumValues.PasswordLength.Minimum))
            {
                return Constant.ErrorMessage.passwordShortErrMsg;
            }
            else if (password.Length > Convert.ToInt32(EnumValues.PasswordLength.Maximum))
            {
                 return Constant.ErrorMessage.passwordToolongErrMsg;

            }

            if (string.IsNullOrEmpty(confPassword))
            {
                 return Constant.ErrorMessage.userConfPasswordEmptyErrMsg;
            }
            else if (!password.Equals(confPassword))
            {
                  return Constant.ErrorMessage.passwordMisMatchErrMsg;
                 
            }
            return string.Empty;
        }

        public static User InsertSignUpData(string userName, string emailAdd, string password)
        {
            string userId = string.Empty;
            string encryptedPassword  = string.Empty;

            User userInfo = new User();

            try
            {
                //Encrypt the password
                encryptedPassword = CommonFunction.Encrypt(password);

                userInfo.UserName = userName;
                userInfo.Email = emailAdd;
                userInfo.Password = encryptedPassword;

                using (PMUServiceClient client = new PMUServiceClient("WSHttpBinding_IPMUService"))
                {
                    PMUServiceResult result = new PMUServiceResult();
                    result = client.InsertUserSignUpDetails(userInfo);

                    if (result.Data == null && result.ErrorMessage.Length > 0)
                    {
                        userInfo.UserId = 0;
                    }
                }
            }
            catch (FaultException<PMUServiceResult> Fex)
            {
                ErrorLogging.LogError(Fex.Detail.ErrorMessage, Fex.Detail.ErrorDetails, "www.google.com");
                userInfo.UserId = 0;
                return userInfo;
            }

            return userInfo;
        }

        /// <summary>
        /// Check whether user exist in db with username
        /// Note: Currently this function is not using to check one
        /// </summary>
        /// <param name="userName"></param>
        /// <returns></returns>
        public static WSInteger IsUserExist(string userName)
        {
            WSInteger IsExist = new WSInteger();
            IsExist.IntegerValue = 0;

            try
            {
                using (PMUServiceClient client = new PMUServiceClient("WSHttpBinding_IPMUService"))
                {
                    PMUServiceResult result = new PMUServiceResult();
                    result = client.IsUserNameExist(userName);
                    IsExist = (WSInteger)result.Data;
                    if (result.Data == null && result.ErrorMessage.Length > 0)
                    {
                        IsExist.IntegerValue = 0;
                    }
                }
            }
            catch (FaultException<PMUServiceResult> Fex)
            {
                ErrorLogging.LogError(Fex.Detail.ErrorMessage, Fex.Detail.ErrorDetails, CommonFunction.GetCurrentRequestUrl());
            }
            return IsExist;
        }

    }
}