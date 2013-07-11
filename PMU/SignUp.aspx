<%@ Page Title="" Language="C#" MasterPageFile="~/PMUp.Master" AutoEventWireup="true" CodeBehind="SignUp.aspx.cs" Inherits="PMU.SignUp" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
        <div class="container">
            <ul class="signUpBox nav pull-right">
                <li><span class="spanSignUpUserNameErrMsg"></span></li>
                <li><asp:Label ID="userNameErrMsg" runat="Server"></asp:Label></li>
                <li><input type="text" runat="server" id="txtUserName" class="signUpUserName" placeholder="Pick a username" /></li>
                <li><span class="spanSignUpEmailAdd"></span></li>
                <li><input type="text" runat="server" id="txtEmailAdd" class="signUpEmailAdd"  placeholder="Your email" /></li>
                <li><span class="spanSignUpPaswd"></span></li>
                <li><input type="password" runat="server" id="txtSignUpPassword" class="signUpPaswd" placeholder="Create a password" /></li>
                <li><span class="spanSignUpConfPaswd"></span></li>
                <li><input type="password" runat="server" id="txtConfPassword" class="signUpConfPaswd" placeholder="Confirm your password" /></li>
                <li><asp:Button ID="btnSignUp" runat="server" CssClass="btnSignUp btn btn-success btn-large" OnClick="btnSignUp_Click"  OnClientClick="return signUpvalidate();" Text="Sign up for free" /></li>
            </ul>
        </div>
</asp:Content>
