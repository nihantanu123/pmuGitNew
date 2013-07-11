<%@ Page Title="" Language="C#" MasterPageFile="~/PMUMain.Master" AutoEventWireup="true"
    CodeBehind="Profile.aspx.cs" Inherits="PMU.Profile" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <style type="text/css">
        .span2 
        {
          width: 140px;
        }
        .span8
        {
             width:960px;
        }
    [class*="span"] 
    {
      float: left;
      margin-left: 20px;
      min-height: 1px;
    }
    .contentArea
    {
        min-height :500px;
        margin: 0 auto;
        width: 950px;
    }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="contentArea">
        <div class="span2">sdfsdfjhjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj kjh kjh kh kjh kljh kjh kjh kjh kjhjk </div>
        <div class="span8">sdfsd</div>
    </div>
</asp:Content>
