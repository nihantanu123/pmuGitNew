using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using PMU.CODE;

namespace PMU
{
    public partial class Profile : PMUBasePage
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            base.Page_Load(sender, e); // Checking for user session if null redirect  to home page
        }
    }
}