//Disable old Style Sheet
document.styleSheets[0].disabled = true;
//html.find('script[src="/1264886788"]').remove();
//$('link[href="92572174"]').prop('disabled', true);
//$('.page-header').css('background', 'none');
//$('.pagewrapper').css('background', 'none');
//$('.page-heading').css('color', 'black');
//$(".main-nav").removeClass( "nav main-nav" ).addClass( "collapse navbar-collapse" );
//$('.sub-nav-column').removeClass('sub-nav-column').addClass('col-12 col-md-3 home-links').css('background-color', '#f7f7f7;');
//$('.sub-nav').removeClass('nav sub-nav').addClass('inPageNav volunteers mb-0');
//$('.menu-link').removeClass('menu-link').addClass('nav-link');
//$("link[href=/92572174]").attr("disabled", "disabled");


$('.page-header').css('background', 'none');
$('.pagewrapper').css('background', 'none');
$('.page-heading').css('color', 'black');
$('body').removeClass();


$('.header-main').removeClass('header-main').addClass('navbar container-fluid d-none d-lg-block pb-0').html(`        <a class="navbar-brand" href="/">
<img src="/images/img/scouts-logo-purple.svg" width="176" height="50" alt="Scouts logo"></a>
<span class="float-right">

<a href="http://fundraising.scouts.org.uk/donate/donate-now" class="simple-links">Donate</a>
<a href="https://thescouts.disclosures.co.uk/secure/login.php" class="simple-links">Disclosures</a>

<a href="https://compass.scouts.org.uk/login/User/Login" class="simple-links">Compass</a>
</span>
</div>`);

$(`<nav class="navbar navbar-expand-lg navbar navbar-light container-fluid pb-2">
<a class="navbar-brand d-lg-none" href="/">
    <img src="/images/img/scouts-logo-purple.svg" width="141" height="40" alt="Scouts logo"></a>
<button class="navbar-toggler collapsed ml-auto pr-1" type="button" data-toggle="collapse" data-target="#searchDropdown" aria-controls="searchDropdown" aria-expanded="false" aria-label="Toggle search">
    <span class=""><i class="fas fa-search"></i></span>
</button>
<button class="navbar-toggler collapsed pr-0" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
        <li class="nav-item dropdown">
            <a class="nav-link pl-0" id="whatWeDoMenu" role="button" aria-haspopup="false" href="/what-we-do/">What we do</a>
        </li>

        <li class="nav-item dropdown">
            <a class="nav-link" id="whatWeDoMenu" role="button" aria-haspopup="false" href="/get-involved/">Join</a>
            <!-- <a class="nav-link dropdown-toggle" id="whatWeDoMenu" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">Join</a>
                <div class="dropdown-menu" aria-labelledby="whatWeDoMenu">
                    <dl compact>
                        <a class="dropdown-item" href="">
                                                <dt>Join</dt>
                                                <dd>Start your child in Scouting</dd></a>
                        <a class="dropdown-item" href="">  
                                                <dt>Volunteer</dt>
                                                <dd>Help to deliver scouting</dd></a>
                        <a class="dropdown-item" href="">  
                                                <dt>Donate</dt>
                                                <dd>Make a one-off or recurring donation</dd></a>
                        <a class="dropdown-item" href="">  
                                                <dt>Fundraising &amp; Partnerships</dt>
                                                <dd>Other ways to support us</dd></a>
                    </dl>
                </div> -->
        </li>

        <li class="nav-item dropdown">
            <a class="nav-link" id="eventsMenu" role="button" aria-haspopup="false" href="/news/">News</a>
        </li>

        <li class="nav-item dropdown">
            <a class="nav-link" id="eventsMenu" role="button" aria-haspopup="false" href="/events/">Events</a>
        </li>

        <li class="nav-item dropdown">
            <a class="nav-link" id="eventsMenu" role="button" aria-haspopup="false" href="https://www.scoutadventures.org.uk">Our centres </a>
        </li>

        <li class="nav-item dropdown">
            <a class="nav-link" id="shopMenu" role="button" aria-haspopup="false" href="https://shop.scouts.org.uk">Shop </a>
        </li>

        <li class="nav-item dropdown">
            <a class="nav-link" id="unityMenu" role="button" aria-haspopup="false" href="https://www.scoutinsurance.co.uk">Insurance </a>
        </li>


        <li class="nav-item dropdown">
            <a class="nav-link" id="volunteersMenu" role="button" aria-haspopup="false" href="https://members.scouts.org.uk/supportresources">Members </a>
            <!--<a class="nav-link dropdown-toggle" id="volunteersMenu" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">Volunteers</a>
            <div class="dropdown-menu" aria-labelledby="volunteersMenu">
                <dl compact>
                    <a class="dropdown-item" href="https://compass.scouts.org.uk">
                                            <dt>Compass</dt>
                                            <dd>Membership data system</dd></a>
                    <a class="dropdown-item" href="https://thescouts.disclosures.co.uk/secure/login.php">  
                                            <dt>Disclosures</dt>
                                            <dd>Request or complete a disclosure</dd></a>
                    <a class="dropdown-item" href="https://members.scouts.org.uk/supportresources/search?cat=480">  
                                            <dt>POR</dt>
                                            <dd>Curent policies &amp; rules</dd></a>
                    <a class="dropdown-item" href="https://members.scouts.org.uk/supportresources/search/?cat=23">  
                                            <dt>Training</dt>
                                            <dd>Supporting your development</dd></a>
                    <a class="dropdown-item" href="https://www.n2printcentre.com/login.aspx">
                                            <dt>Brand Centre</dt>
                                            <dd>Create branded materials</dd></a>
                    <a class="dropdown-item" href="http://scouts.org.uk/events/">  
                                            <dt>Events</dt>
                                            <dd>Local events</dd></a>
                    <a class="dropdown-item" href="https://members.scouts.org.uk/supportresources">  
                                            <dt>Members</dt>
                                            <dd>Resources home page</dd></a>

                    <a class="dropdown-item bg-light py-3" href="https://www.scoutinsurance.co.uk">
                                            <dt>Unity</dt>
                                            <dd>Scouts insurance</dd></a>
                </dl>  
            </div>-->
        </li>
    </ul>
</div><div class="collapse navbar-collapse" id="searchDropdown">
<div class="search ml-auto">
    <form method="get" action="/cse-search/" id="siteSearch">
        <input type="text" class="form-control" size="14" id="searchBox" name="query">
        <button type="submit" form="siteSearch" value="Submit" onclick='if (document.getElementById("searchBox").value=="") {document.getElementById("searchBox").focus(); return false;}'><span class="fas fa-search 2x"></span></button>
    </form>
</div>
</div>
</nav>`).insertAfter('.pb-0');
$('input[type="text"]').css('margin-bottom', '0');

$('input[type="text"]').css('background', 'none');

/*$(`<div id="main" role="main" class="container-fluid">    <div id="main" role="main" class="container-fluid">
<div class="row pt-3">
<div class="px-0 col-12 col-md-9">
<div class="flex-column">
`).insertAfter('nav');*/

var rightSidebar = $('.sub-nav-column').html();
$('.sub-nav-column').remove();

$('.pagewrapper').removeClass('pagewrapper').addClass('container-fluid');
$('#pagewrapper').attr('id', 'main');
$('.factoids').removeClass('factoids').addClass('row pt-3');
$('.pageinner').removeClass('pageinner').addClass('px-0 col-12 col-md-9');
$('<div class="col-12 col-md-3 home-links" style="background-color: #f7f7f7;">').insertAfter('.col-md-9');
$(rightSidebar).appendTo('.home-links');
$('.sub-nav').removeClass('nav sub-nav').addClass('inPageNav volunteers mb-0');

$(".inPageNav ul ul").remove();

$(".inPageNav ul li").unwrap();

$( ".inPageNav li a .text" ).each(function() {
    $( this ).removeClass('text');
  });
$( ".inPageNav li a" ).each(function() {
    $( this ).removeClass('menu-link').addClass('nav-link').append('&nbsp;').unwrap();
  });

$('.bodystitch').css('background', 'none');
   
//var auxContent = $('.aux-content-column').html();
//$('.aux-content-column').remove();
//$(auxContent).insertAfter('#sub-navigation');
$('.aux-items-list-section').removeClass('aux-items-list-section');


$(`    <footer class="w1440 social py-5">
<div class="container-fluid vertical-center">
    <div class="row">
        <div class="col-md-6 d-flex justify-content-center justify-content-sm-start">
            <a href="http://www.facebook.com/scoutassociation" class="mr-3">
                <img src="/images/img/facebook.svg" alt="facebook"></a>
            <a href="https://twitter.com/UKScouting" class="mr-3">
                <img src="/images/img/twitter.svg" alt="twitter"></a>
            <a href="https://instagram.com/scouts/" class="mr-3">
                <img src="/images/img/instagram.svg" alt="instagram"></a>
            <a href="https://www.pinterest.com/ukscouting/" class="mr-3">
                <img src="/images/img/pinterest.svg" alt="pinterest"></a>
            <a href="http://www.youtube.com/UKScoutAssociation" class="mr-3">
                <img src="/images/img/youtube.svg" alt="youtube"></a>
        </div>
        <div class="col-md-6">
            <!--<button>feedback <img src="img/feedback-icon.png" alt=""></button>-->
        </div>
    </div>
</div>
</footer>
<footer class="w1440 footerlinks">
<div class="container-fluid ">
    <div class="row pt-5 pb-5">
        <img width="110" height="80" src="/images/img/Scouts-Logo-Stack-White.svg" alt="Scouts logo" class="ml-auto mr-auto">
    </div>
    <div class="row">
        <div class="col-lg-3 col-md-4 nav navbar-expand-md d-block pl-3">
            <button class="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#scoutAssociation">&plus;</button>
            <h3>The Scouts<br />
                <br />
            </h3>
            <div class="navbar-collapse collapse" id="scoutAssociation">
                <ul class="pt-2">
                    <li><a href="/about-us/volunteering-vacancies/">National volunteering vacancies</a></li>
                    <li><a href="/about-us/jobs/">Paid job vacancies</a></li>
                    <li><a href="/about-us/key-policies/">Key policies</a></li>
                    <li><a href="/about-us/reports/">Reports</a></li>
                    <li><a href="http://scouts.org.uk/brand">Brand centre</a></li>
                </ul>
            </div>
        </div>

        <div class="col-lg-6 col-md-4 nav navbar-expand-md d-block pl-3">
            <button class="navbar-toggler float-right" type="button" data-toggle="collapse" data-target="#scoutingWebsites">&plus;</button>
            <h3>Websites<br />
                <br />
            </h3>
            <div class="navbar-collapse collapse" id="scoutingWebsites">
                <div class="row" style="width: 100%;">
                    <ul class="pt-2 col-12 col-sm-6 col-md-12 col-lg-6">
                        <li><a href="https://shop.scouts.org.uk">Scout Store</a></li>
                        <li><a href="https://www.scoutadventures.org.uk">Scout Adventures</a></li>
                        <li class="pb-5"><a href="https://www.scoutinsurance.co.uk">Unity (Scout Insurance Services)</a></li>
                        <li><a href="https://www.scout.org">World Scouting</a></li>
                        <li><a href="http://www.worldscoutshops.com">World Scout Shop</a></li>
                    </ul>
                    <ul class="pt-2 col-12 col-sm-6 col-md-12 col-lg-6">
                        <li><a href="https://www.scouts.scot">Scouts Scotland</a></li>
                        <li><a href="http://www.scoutscymru.org.uk">Scouts Cymru</a></li>
                        <li><a href="http://scoutsni.org">Scouts NI</a></li>
                    </ul>
                </div>
            </div>

        </div>
        <div class="col-md-4 col-lg-3 order-first order-md-last no-gutters">
            <h3>Contact us<br>
                &nbsp;</h3>
            <ul class="pt-2">
                <a href="tel:0345 300 1818" id="infoPhone">
                    <nobr>0345 300 1818</nobr>
                </a>
                <li>Open 8am-7pm weekdays and 9am-midday on Saturdays</li>
                <li><a href="mailto:info.centre@scouts.org.uk">info.centre@scouts.org.uk</a></li>
                <li><a href="/media-centre/">Media enquiries</a></li>
                <li><a href="https://goo.gl/maps/PpcEMrfYgH32" target="_new">Find us...</a></li>
            </ul>
        </div>
    </div>

    <div class="row mt-5">
        <div class="col-12 col-md-8 col-lg-9">
            <p>
                &copy; Copyright The Scout Association 2018. All Rights Reserved.
                <br>
                Charity numbers: 306101 (England and Wales) and SC038437 (Scotland).
                <br>
                Registered address: The Scout Association, Gilwell Park, Chingford, London, England E4 7QW
               
                <br>
                Website <a href="/terms-and-conditions/">Terms and Conditions</a> and <a href="/privacy-policy/">Privacy Policy</a>
            </p>
        </div>
        <div class="col-4 col-lg-3 d-none d-md-block">
            <img height="58" width="222" src="/images/img/investors-in-people.png" alt="Investors in people badge">
        </div>
    </div>
</div>
</footer>

`).insertAfter('#main');
$('.footerwrapper').hide();