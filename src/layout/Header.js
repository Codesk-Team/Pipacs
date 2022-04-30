import React from "react";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();

  return (
    <header class="sticky-header main-header sticky-header-elements-headeronly mainmenu-position-menu_in_header">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <div class="header-left">
              <a class="logo-link" href="/">
                <img
                  src="assets/img/logo_pipacs.png"
                  alt="Pipacs"
                  class="regular-logo"
                />
                <img
                  src="assets/img/logo_pipacs.png"
                  alt="Pipacs"
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
                        <a href="/">
                          <span>{t("home")}</span>
                        </a>
                      </li>
                      <li class="menu-item">
                        <a href="about-us">
                          <span>{t("aboutUs")}</span>
                        </a>
                      </li>
                      <li class="menu-item">
                        <a href="menu">
                          <span>{t("menu")}</span>
                        </a>
                      </li>
                      <li class="menu-item">
                        <a href="rooms">
                          <span>{t("rooms")}</span>
                        </a>
                      </li>
                      <li class="menu-item">
                        <a href="contact-us">
                          <span>{t("contactUs")}</span>
                        </a>
                      </li>
                      <li class="menu-item">
                        <a href="contact-us">
                          <span style={{ color: "#c69f7c" }}>English</span>
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
