<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Home.aspx.cs" Inherits="PMU.Home"
    MasterPageFile="~/PMUMain.Master" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <%-- Place Script and CSS here --%>
    <%--<script src="Scripts/Home.js" type="text/javascript"></script>--%>
    <style type="text/css">
        
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <!-- shell -->
    <div class="shell">
        <!-- main -->
        <div class="main">
            <!-- slider-holder -->
            <div class="slider-section">
                <h2 class="alignleft">WE CREATE <strong>BEAUTIFUL</strong> WEBSITE TEMPLATES</h2>
                <a href="#" class="buy-btn">Wanna Buy One ?</a>
                <div class="cl">&nbsp;</div>
                <!-- slider -->
                <div class="slider-holder">
                    <span class="slider-shadow"></span>
                    <div class="flexslider">
                        <ul class="slides">
                            <li>
                                <img src="images/slide-img.jpg" alt="">
                                <div class="slide-cnt">
                                    <h3>Integer Aliquam Amet Sit Dolor</h3>
                                    <p>Quam vel tempor porta, dolor tortor cursus elit, sit amet ultrices ipsum metus quis.</p>
                                    <a href="#" class="slider-btn"><span></span>Explore More</a>
                                </div>
                            </li>
                            <li>
                                <img src="images/slide-img.jpg" alt="">
                                <div class="slide-cnt">
                                    <h3>Integer Aliquam Amet Sit Dolor</h3>
                                    <p>Quam vel tempor porta, dolor tortor cursus elit, sit amet ultrices ipsum metus quis.</p>
                                    <a href="#" class="slider-btn"><span></span>Explore More</a>
                                </div>
                            </li>
                            <li>
                                <img src="images/slide-img.jpg" alt="">
                                <div class="slide-cnt">
                                    <h3>Integer Aliquam Amet Sit Dolor</h3>
                                    <p>Quam vel tempor porta, dolor tortor cursus elit, sit amet ultrices ipsum metus quis.</p>
                                    <a href="#" class="slider-btn"><span></span>Explore More</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- end of slider -->
            </div>
            <!-- slider-holder -->
            <!-- cols -->
            <div class="cols">
                <div class="col">
                    <h3 class="starter-ico">
                        <a href="#">Starter Themes</a></h3>
                    <p>
                        Integer aliquam, quam vel tempor porta, dolor tortor cursus elit, sit amet ultrices
                        ipsum metus quis aliquam, quam vel tempor porta</p>
                    <a href="#" class="more">Read More</a>
                </div>
                <div class="col">
                    <h3 class="awesome-ico">
                        <a href="#">Awesome Colours</a></h3>
                    <p>
                        Integer aliquam, quam vel tempor porta, dolor tortor cursus elit, sit amet ultrices
                        ipsum metus quis \aliquam, quam vel tempor porta</p>
                    <a href="#" class="more">Read More</a>
                </div>
                <div class="col">
                    <h3 class="save-ico">
                        <a href="#">Save Time</a></h3>
                    <p>
                        Integer aliquam, quam vel tempor porta, dolor tortor cursus elit, sit amet ultrices
                        ipsum metus quis aliquam, quam vel tempor porta</p>
                    <a href="#" class="more">Read More</a>
                </div>
                <div class="cl">
                    &nbsp;</div>
            </div>
            <!-- end of cols -->
            <!-- featured -->
            <div>
                <h3 class="alignleft">
                    Featured Projects</h3>
                <a href="#" class="all-projects"><strong>+</strong>All projects</a>
                <div class="cl">
                    &nbsp;</div>
                <div class="featured">
                    <div class="entry">
                        <a href="#"><em></em>
                            <img src="/images/entry-img1.png" alt="">
                            <span>Integer Aliquam,Quam </span></a><strong></strong>
                    </div>
                    <div class="entry">
                        <a href="#"><em></em>
                            <img src="/images/entry-img2.png" alt="">
                            <span>Integer Aliquam,Quam </span></a><strong></strong>
                    </div>
                    <div class="entry">
                        <a href="#"><em></em>
                            <img src="/images/entry-img3.png" alt="">
                            <span>Integer Aliquam,Quam </span></a><strong></strong>
                    </div>
                    <div class="entry">
                        <a href="#"><em></em>
                            <img src="/images/entry-img4.png" alt="">
                            <span>Integer Aliquam,Quam </span></a><strong></strong>
                    </div>
                    <div class="entry">
                        <a href="#"><em></em>
                            <img src="/images/entry-img5.png" alt="">
                            <span>Integer Aliquam,Quam </span></a><strong></strong>
                    </div>
                    <div class="cl">
                        &nbsp;</div>
                </div>
            </div>
            <!-- end of featured -->
        </div>
        <!-- end of main -->
    </div>
    <!-- end of shell -->
    <%--    <span id="signinButton"><span class="g-signin" data-callback="signinCallback" data-clientid="633669750818.apps.googleusercontent.com"
        data-cookiepolicy="single_host_origin" data-requestvisibleactions="http://schemas.google.com/AddActivity"
        data-scope="https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/userinfo.profile">
    </span></span><span id="revokeButton" style="display: none">Log out</span>--%>
</asp:Content>
