using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using PMU.CODE.BLogic;
using PMU.PMUService;
using PMU.CODE.Utilities;

namespace PMU
{
    public partial class PMUp : System.Web.UI.MasterPage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!IsPostBack)
            {
                Session["UserID"] = null;
            }
        }

        protected void btnSignIn_Click(object sender, EventArgs e)
        {
            string userName = txtSignInUserName.Value.Trim();
            string password = txtSignInPassword.Value;
            string validateInput = string.Empty;
            WSInteger IsUserExist = new WSInteger();

            validateInput = LoginDetail.validateSignInData(userName, password);

            if (validateInput == string.Empty)
            {
                try
                {
                    // Encrypt password
                    string encrptedPwd = CommonFunction.Encrypt(password);

                    //Call Authorized function for validate username and password
                    IsUserExist = LoginDetail.IsAuthorizedUser(userName, encrptedPwd);

                    if (IsUserExist.IntegerValue != 0)
                    {
                        // Set session ID
                        Session["UserID"] = IsUserExist;
                        Session["IsFB"] = 0;
                        Session["Isg+"] = 0;

                        Response.Redirect("Profile.aspx");
                    }
                }
                catch (Exception ex)
                {

                }
            }
        }
    }
}