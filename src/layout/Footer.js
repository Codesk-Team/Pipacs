import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div class="container-fluid footer-wrapper">
      <div class="row">
        <div
          class="footer-sidebar-wrapper footer-sidebar-style-dark"
          data-style=""
        >
          <div class="footer-sidebar sidebar container footer-sidebar-col-3">
            <ul id="footer-sidebar" class="clearfix">
              <li id="text-3" class="widget widget_text">
                <h2 class="widgettitle">
                  {t("contactUsPage.restaurantOpeningHours")}
                </h2>
                <div class="textwidget">
                  <p>{t("footer.openingHoursFirstPartOfWeek")}</p>
                  <p> {t("contactUsPage.thursday")}</p>
                  <p> {t("contactUsPage.fridayOH")}</p>
                  <p> {t("contactUsPage.sundayOH")}</p>
                  <p> {t("contactUsPage.saturdayOH")}</p>
                  <p>
                    <span class="text-color-theme">
                      {t("footer.openEveryDay")}
                    </span>
                  </p>
                </div>
              </li>
              <li id="nav_menu-2" class="widget widget_nav_menu">
                <h2 class="widgettitle">{t("footer.navigation")}</h2>
                <div class="menu-footermenu-1-container">
                  <ul id="menu-footermenu-1" class="menu">
                    <li class="menu-item">
                      <a href="/">{t("home")}</a>
                    </li>
                    <li class="menu-item">
                      <a href="about-us">{t("aboutUs")}</a>
                    </li>
                    <li class="menu-item">
                      <a href="menu">{t("menu")}</a>
                    </li>
                    <li class="menu-item">
                      <a href="rooms">{t("rooms")}</a>
                    </li>
                    <li class="menu-item">
                      <a href="contact-us">{t("contactUs")}</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li
                id="custom_html-2"
                class="widget_text widget widget_custom_html"
              >
                <h2 class="widgettitle">{t("footer.reservation")}</h2>
                <div class="textwidget custom-html-widget">
                  <p>
                    {t("contactUsPage.tableReservation")} +36 30 117 7949{", "}
                    +36 30 984 0739
                    <br />
                    Email:{" "}
                    <span class="text-color-theme">
                      <a href="mailto:sef@egerpipacs.hu" class="__cf_email__">
                        sef@egerpipacs.hu
                      </a>
                    </span>
                  </p>
                  <p>
                    {t("contactUsPage.roomResarvation")} +36 30 984 0837
                    <br />
                    Email:{" "}
                    <span class="text-color-theme">
                      <a href="mailto:info@egerpipacs.hu" class="__cf_email__">
                        info@egerpipacs.hu
                      </a>
                    </span>
                  </p>
                  <div class="widget_barrel_social_icons shortcode_barrel_social_icons">
                    <div class="social-icons-wrapper">
                      <ul>
                        <li>
                          <a
                            href="https://www.facebook.com/pipacsetteremeger/"
                            target="_blank"
                            class="a-facebook"
                            rel="noreferrer"
                          >
                            <i class="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.instagram.com/pipacsetteremespanzio/"
                            target="_blank"
                            class="a-instagram"
                            rel="noreferrer"
                          >
                            <i class="fa fa-instagram"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <footer class="footer-style-dark footer-col-2">
          <div class="container">
            <div class="row">
              <div class="col-md-6 footer-copyright">
                {t("footer.allRightsReserved")} &#169; 2022 Almári Pipacs Kft.
              </div>
              <div class="col-md-6 footer-menu">
                <div class="menu-footermenu-simple-container">
                  <ul id="menu-footermenu-simple" class="footer-menu">
                    <li class="menu-item">
                      <Link
                        to="assets/files/Pipacs_ASZF.pdf"
                        target="_blank"
                        download
                      >
                        {t("footer.tac")}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <a class="scroll-to-top" href="#top"></a>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
