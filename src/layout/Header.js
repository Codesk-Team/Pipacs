import React from "react";

const Header = () => {
  return (
    <header class="sticky-header main-header sticky-header-elements-headeronly mainmenu-position-menu_in_header">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <div class="header-left">
              <a class="logo-link" href="index.html">
                <img
                  src="upload/Barrel-restaurant-logo-black.png"
                  alt="Barrel"
                  class="regular-logo"
                />
                <img
                  src="upload/Barrel-restaurant-logo-white.png"
                  alt="Barrel"
                  class="light-logo"
                />
              </a>
              <div
                class="mobile-main-menu-toggle"
                data-toggle="collapse"
                data-target=".collapse"
              >
                <i class="fa fa-bars"></i>
              </div>
            </div>

            <div class="header-center">
              <div
                id="navbar"
                class="navbar navbar-default clearfix mgt-mega-menu menu-right menu-uppercase menu-style-shadow"
              >
                <div class="navbar-inner">
                  <div class="navbar-collapse collapse">
                    <ul id="menu-main-menu-restaurant-2" class="nav">
                      <li class="menu-item">
                        <a href="about-us-restaurant.html">
                          <span>Főoldal</span>
                        </a>
                      </li>
                      <li class="menu-item">
                        <a href="about-us">
                          <span>Rólunk</span>
                        </a>
                      </li>
                      <li class="menu-item">
                        <a href="about-us">
                          <span>Étlap</span>
                        </a>
                      </li>
                      <li class="menu-item">
                        <a href="contact-us-restaurant.html">
                          <span>Szobák</span>
                        </a>
                      </li>
                      <li class="menu-item">
                        <a href="contact-us-restaurant.html">
                          <span>Kapcsolat</span>
                        </a>
                      </li>
                      {/* <li class="mgt-highlight menu-item">
                        <a href="reservation.html">
                          <span>Reservation</span>
                        </a>
                      </li> */}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div class="header-right">
              <ul class="header-nav"></ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
