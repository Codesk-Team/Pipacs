import React from "react";

const Footer = () => {
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
                <h2 class="widgettitle">Nyitvatartás</h2>
                <div class="textwidget">
                  <p>Hétfő, Kedd, Szerda: Zárva</p>
                  <p>Csütörtök: 9:00 &#8211; 20:00</p>
                  <p>Péntek: 9:00 &#8211; 20:00</p>
                  <p>
                    <span class="text-color-theme">
                      Szombat: 9:00 &#8211; 18:00
                    </span>
                  </p>
                  <p>
                    <span class="text-color-theme">
                      Vasárnap: 9:00 &#8211; 18:00
                    </span>
                  </p>
                </div>
              </li>
              <li id="nav_menu-2" class="widget widget_nav_menu">
                <h2 class="widgettitle">About us</h2>
                <div class="menu-footermenu-1-container">
                  <ul id="menu-footermenu-1" class="menu">
                    <li class="menu-item">
                      <a href="#">Our story</a>
                    </li>
                    <li class="menu-item">
                      <a href="#">Blog</a>
                    </li>
                    <li class="menu-item">
                      <a href="#">Offers</a>
                    </li>
                    <li class="menu-item">
                      <a href="#">Weddings</a>
                    </li>
                    <li class="menu-item">
                      <a href="#">Gift Vouchers</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li
                id="custom_html-2"
                class="widget_text widget widget_custom_html"
              >
                <h2 class="widgettitle">Foglalás</h2>
                <div class="textwidget custom-html-widget">
                  <p>
                    Asztalfoglalás: +36-30-117-7949
                    <br />
                    Séf: +36-30-984-0739
                    <br />
                    Email:{" "}
                    <span class="text-color-theme">
                      <a href="#" class="__cf_email__">
                        sef@egerpipacs.hu
                      </a>
                    </span>
                  </p>
                  <p>
                    Szobafoglalás: +36-30-984-0837
                    <br />
                    Email:{" "}
                    <span class="text-color-theme">
                      <a href="#" class="__cf_email__">
                        info@egerpipacs.hu
                      </a>
                    </span>
                    {", "}
                    <span class="text-color-theme">
                      <a href="#" class="__cf_email__">
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
                          >
                            <i class="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.facebook.com/pipacsetteremeger/"
                            target="_blank"
                            class="a-instagram"
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
                Minden jog fenttartva 2022 Pipacs
              </div>
              <div class="col-md-6 footer-menu">
                <div class="menu-footermenu-simple-container">
                  <ul id="menu-footermenu-simple" class="footer-menu">
                    <li class="menu-item">
                      <a href="#">ÁSZF</a>
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
