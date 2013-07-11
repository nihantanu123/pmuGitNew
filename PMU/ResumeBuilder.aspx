<%@ Page Title="" Language="C#" MasterPageFile="~/PMUp.Master" AutoEventWireup="true" EnableSessionState="True"
 CodeBehind="ResumeBuilder.aspx.cs" Inherits="PMU.ResumeBuilder" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
 <%-- Place Script and CSS here --%>       
    <link href="Styles/fileuploader.css" rel="stylesheet" type="text/css" />
    <link href="Styles/jquery-ui-1.10.3.custom.min.css" rel="stylesheet" type="text/css" />
    <script src="Scripts/jquery-ui-1.10.3.custom.min.js" type="text/javascript"></script> 
    <script src="Scripts/ResumeBuilder.js" type="text/javascript"></script> 
    <script src="Scripts/fileuploader.js" type="text/javascript"></script>
    <style type="text/css">
        input.watermark { color: #999; }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div id="dialog" title="Dialog Title" style="display:none"> Some text</div>
    <div id="test_modal">
    <asp:DropDownList ID="ddlResumeCategory" runat="server">
    </asp:DropDownList>
      <%--<div class="modal-header">
        <a class="close">&times;</a>
        <h3>Modal Header</h3>
      </div>
      <div class="modal-body">
        <p>Test Modal</p>
      </div>
      <div class="modal-footer">
        <a href="#" class="btn">Close</a>
        <a href="#" class="btn btn-primary">Save Changes</a>
      </div>--%>
    </div>
   <%-- <a type="button" class="btn" href="#test_modal">Add Image</a>--%>

   
    <div>
        <input id="tbFirstName" type="text" />
        <input id="tbLastName" type="text" />
        <div id="fileUploader">
            <noscript>
                <p>Please enable JavaScript to use file uploader.</p>
            </noscript>
        </div>
    </div>
</asp:Content>
