import React from "react";

const Footer = () => {
  return (
    <div class="container-fluid footer-wrapper">
      <div class="row">
        <div
          class="footer-sidebar-wrapper footer-sidebar-style-dark"
          data-style=""
        >
          <div class="footer-sidebar sidebar container footer-sidebar-col-4">
            <ul id="footer-sidebar" class="clearfix">
              <li id="text-3" class="widget widget_text">
                <h2 class="widgettitle">Working TIme</h2>
                <div class="textwidget">
                  <p>Monday 11:30 am - 10:00 pm</p>
                  <p>Tuesday 11:30 am - 11:00 pm</p>
                  <p>Wednesday 11:30 am - 11:00 pm</p>
                  <p>Thursday 11:30 am - 11:00 pm</p>
                  <p>Friday 11:30 am - 11:00 pm</p>
                  <p>
                    <span class="text-color-theme">
                      Saturday 10:00 am - 9:00 pm
                    </span>
                  </p>
                  <p>
                    <span class="text-color-theme">
                      Sunday 10:00 am - 9:00 pm
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
                id="barrel-recent-posts-3"
                class="widget widget_barrel_recent_entries"
              >
                <h2 class="widgettitle">Recent posts</h2>
                <ul>
                  <li class="clearfix">
                    <div class="widget-post-details-wrapper">
                      <div class="post-title">
                        <a href="single-post.html">Burger Night</a>
                      </div>
                      <div class="post-date">March 3, 2017</div>
                    </div>
                  </li>
                  <li class="clearfix">
                    <div class="widget-post-details-wrapper">
                      <div class="post-title">
                        <a href="single-post.html">Gin Club</a>
                      </div>
                      <div class="post-date">March 3, 2017</div>
                    </div>
                  </li>
                  <li class="clearfix">
                    <div class="widget-post-details-wrapper">
                      <div class="post-title">
                        <a href="single-post.html">Our Anniversary</a>
                      </div>
                      <div class="post-date">March 3, 2017</div>
                    </div>
                  </li>
                </ul>
              </li>
              <li
                id="custom_html-2"
                class="widget_text widget widget_custom_html"
              >
                <h2 class="widgettitle">Reseravations</h2>
                <div class="textwidget custom-html-widget">
                  <p>
                    Our support available to help you 24 hours a day, seven days
                    a week.
                  </p>
                  <p>
                    Please Call: + 1 703 4959 3452
                    <br />
                    For more information
                    <span class="text-color-theme">
                      <a href="#" class="__cf_email__">
                        test@gmail.com
                      </a>
                    </span>
                  </p>
                  <p>
                    <a href="https://www.opentable.com/start/home">
                      Book A Table
                    </a>
                  </p>
                  <div class="widget_barrel_social_icons shortcode_barrel_social_icons">
                    <div class="social-icons-wrapper">
                      <ul>
                        <li>
                          <a
                            href="https://facebook.com/"
                            target="_blank"
                            class="a-facebook"
                          >
                            <i class="fa fa-facebook"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://twitter.com/"
                            target="_blank"
                            class="a-twitter"
                          >
                            <i class="fa fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://behance.net/"
                            target="_blank"
                            class="a-behance"
                          >
                            <i class="fa fa-behance"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://dribbble.com/"
                            target="_blank"
                            class="a-dribbble"
                          >
                            <i class="fa fa-dribbble"></i>
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://pinterest.com/"
                            target="_blank"
                            class="a-pinterest"
                          >
                            <i class="fa fa-pinterest"></i>
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
                Powered by{" "}
                <a
                  href="https://themeforest.net/user/max-themes/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  B-Chef - Restaurant HTML Template
                </a>
              </div>
              <div class="col-md-6 footer-menu">
                <div class="menu-footermenu-simple-container">
                  <ul id="menu-footermenu-simple" class="footer-menu">
                    <li class="menu-item">
                      <a href="#">PERMISSIONS AND COPYRIGHT</a>
                    </li>
                    <li class="menu-item">
                      <a href="#">CONTACT THE TEAM</a>
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
