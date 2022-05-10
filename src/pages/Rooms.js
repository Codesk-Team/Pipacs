import React from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { useTranslation } from "react-i18next";

const Rooms = () => {
  const { t } = useTranslation();

  return (
    <div class="home page-template-default page page-id-3699 wpb-js-composer js-comp-ver-5.2.1 vc_responsive">
      <Header />
      <div class="content-block">
        <div
          class="container-bg with-bg container-fluid"
          data-style="background-image: url(assets/img/rooms_pipacs_main.webp);"
        >
          <div class="container-bg-overlay">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="page-item-title">
                    <h1 class="text-center texttransform-none">
                      {/* Szobák */}
                      {t("rooms")}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="page-container container">
          <div class="row">
            <div class="col-md-12 entry-content">
              <article>
                <div class="vc_row wpb_row vc_row-fluid vc_custom_1502041734192 vc_row-o-equal-height vc_row-flex">
                  <div class="wpb_column vc_column_container vc_col-sm-3">
                    <div class="vc_column-inner vc_custom_1487239752272">
                      <div class="wpb_wrapper"></div>
                    </div>
                  </div>
                  <div class="wpb_column vc_column_container vc_col-sm-6">
                    <div class="vc_column-inner">
                      <div class="wpb_wrapper">
                        <div class="mgt-header-block clearfix text-center text-black wpb_animate_when_almost_visible wpb_fadeInDown fadeInDown wpb_content_element mgt-header-block-style-2 mgt-header-block-fontsize-medium mgt-header-texttransform-none mgt-header-block-43612531">
                          {/* <p class="mgt-header-block-subtitle">{t("rooms")}</p> */}
                          <h2 class="mgt-header-block-title text-font-weight-default">
                            {/* A felejthetetlen pihenésért... */}
                            {t("roomsPage.unforgettableRest")}
                          </h2>
                          <div class="mgt-header-line mgt-header-line-margin-large"></div>
                        </div>
                        <div class="wpb_text_column wpb_content_element wpb_animate_when_almost_visible wpb_fadeInDown fadeInDown text-size-medium">
                          <div class="wpb_wrapper">
                            <p style={{ textAlign: "center" }}>
                              <span style={{ color: "#999999" }}>
                                {/* Ha megpihennél a csodás ételek és borok után, a
                                Pipacs Étterem egyedi, klimatizált szobáiban
                                erre is van lehetőség. A másnap reggelt pedig
                                kezdd a séfünk által összeállított mennyei a’la
                                carte reggelivel! */}
                                {t("roomsPage.restAfterWines")}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="wpb_column vc_column_container vc_col-sm-3">
                    <div class="vc_column-inner">
                      <div class="wpb_wrapper"></div>
                    </div>
                  </div>
                </div>
                <div class="vc_row wpb_row vc_row-fluid vc_custom_1502044524324 vc_row-no-padding">
                  <div class="wpb_column vc_column_container vc_col-sm-12">
                    <div class="vc_column-inner">
                      <div class="wpb_wrapper">
                        <div class="mgt-portfolio-grid wpb_content_element">
                          <div
                            class="portfolio-list portfolio-columns-2 portfolio-grid-layout-4 portfolio-with-spaces clearfix"
                            id="portfolio-list-19092996"
                          >
                            <div class="portfolio-item-block text-left">
                              <div class="portfolio-item-block-inside">
                                <a
                                  href="assets/img/pipacs-room.webp"
                                  target="_self"
                                  rel="lightbox"
                                >
                                  <div
                                    class="portfolio-item-image"
                                    style={{
                                      backgroundImage:
                                        "url(assets/img/pipacs-room.webp)",
                                    }}
                                  ></div>
                                  <div class="portfolio-item-bg"></div>

                                  <div class="info">
                                    {/* <span class="sub-title">
                                      Dessert / Events / Meat
                                    </span> */}
                                    <h4 class="title">
                                      Pipacs {t("roomsPage.room")}
                                    </h4>
                                    <div class="project-description">
                                      20.000 Ft /{" "}
                                      {t("roomsPage.roomSlashNight")}
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div class="portfolio-item-block text-left">
                              <div class="portfolio-item-block-inside">
                                <a
                                  href="assets/img/about_us_pipacs_bed2.webp"
                                  target="_self"
                                  rel="lightbox"
                                >
                                  <div
                                    class="portfolio-item-image"
                                    style={{
                                      backgroundImage:
                                        "url(assets/img/about_us_pipacs_bed2.webp)",
                                    }}
                                  ></div>
                                  <div class="portfolio-item-bg"></div>

                                  <div class="info">
                                    {/* <span class="sub-title">
                                      Dessert / Events / Fish / Meat
                                    </span> */}
                                    <h4 class="title">
                                      Kövirózsa {t("roomsPage.room")}
                                    </h4>
                                    <div class="project-description">
                                      22.000 Ft /{" "}
                                      {t("roomsPage.roomSlashNight")}
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div
                              class="portfolio-item-block text-left"
                              //   data-item="3"
                              //   data-name="Salmon Tartare"
                            >
                              <div class="portfolio-item-block-inside">
                                <a
                                  href="assets/img/rooms_pipacs_main.webp"
                                  target="_self"
                                  rel="lightbox"
                                >
                                  <div
                                    class="portfolio-item-image"
                                    style={{
                                      backgroundImage:
                                        "url(assets/img/rooms_pipacs_main.webp)",
                                    }}
                                  ></div>
                                  <div class="portfolio-item-bg"></div>

                                  <div class="info">
                                    {/* <span class="sub-title">Fish</span> */}
                                    <h4 class="title">
                                      Veronika {t("roomsPage.room")}
                                    </h4>
                                    <div class="project-description">
                                      20.000 Ft /{" "}
                                      {t("roomsPage.roomSlashNight")}
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div
                              class="portfolio-item-block text-left"
                              //   data-item="3"
                              //   data-name="Salmon Tartare"
                            >
                              <div class="portfolio-item-block-inside">
                                <a
                                  href="assets/img/rooms_sarga_napraforgo_main.webp"
                                  target="_self"
                                  rel="lightbox"
                                >
                                  <div
                                    class="portfolio-item-image"
                                    style={{
                                      backgroundImage:
                                        "url(assets/img/rooms_sarga_napraforgo_main.webp)",
                                    }}
                                  ></div>
                                  <div class="portfolio-item-bg"></div>

                                  <div class="info">
                                    {/* <span class="sub-title">Fish</span> */}
                                    <h4 class="title">
                                      Napraforgó {t("roomsPage.familyRoom")}
                                    </h4>
                                    <div class="project-description">
                                      39.000 Ft /{" "}
                                      {t("roomsPage.roomSlashNight")}
                                    </div>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>

      <div class="vc_row-full-width vc_clearfix"></div>
      <div class="vc_row wpb_row vc_row-fluid vc_custom_1501856468228">
        <div class="wpb_column vc_column_container vc_col-sm-12">
          <div class="vc_column-inner">
            <div class="wpb_wrapper">
              <div class="wpb_text_column wpb_content_element wpb_animate_when_almost_visible wpb_fadeInLeft fadeInLeft text-size-medium">
                <div
                  class="wpb_wrapper rooms-details"
                  //style={{ textAlign: "center" }}
                >
                  <span>
                    {/* Az ár tartalmazza: */}
                    {t("roomsPage.priceContains")}
                  </span>
                  <ul>
                    <li>
                      {/* Szállás nemdohányzó, légkondicionált szobában */}
                      {t("roomsPage.notSmoking")}
                    </li>
                    <li>
                      {/* Fürdőszobai felszerelés (szappan, tusfürdő, sampon,
                      zuhanysapka), törölközők */}
                      {t("roomsPage.bathroomEquipments")}
                    </li>
                    <li>
                      {/* Parkolás kamerával megfigyelt, nem őrzött parkolóban */}
                      {t("roomsPage.parking")}
                    </li>
                    <li>Wifi</li>
                  </ul>
                  <p>
                    {/* Szobáink reggelivel foglalhatóak, melyet a szobaár nem
                    tartalmaz, ezt a helyszínen lehet szabadon választani a’la
                    carte reggeli étlapunk alapján. */}
                    {t("roomsPage.tax")}
                  </p>

                  <p>{t("roomsPage.eatingPossibilities")}</p>

                  <p>{t("roomsPage.breakfast")}</p>

                  <p>
                    {/* Félpanziós felár: 2.000 Ft/fő/alkalom */}
                    {t("roomsPage.halfBoard")}
                  </p>

                  <p>
                    {/* Gyermek kedvezmény: */}
                    {t("roomsPage.childDiscount")}
                    <br />
                    {/* Szülőkkel egy szobában pótágyon (max. 2 pótágy/szoba), min.
                    2 teljes fizető vendég esetén: */}
                    {t("roomsPage.withParents")}
                  </p>

                  <p>
                    {/* -0-14 éves korig ingyenes. */}
                    {t("roomsPage.free")}
                  </p>

                  <p>
                    {/* Félpanziós étkezésük kedvezményes ára: */}
                    {t("roomsPage.halfBoardDiscount")}
                    <br />
                    {/* 0-2 éves korig díjmentes, */}
                    {t("roomsPage.freeForBabies")}
                    <br />
                    {/* 2-14 éves korig 2.000 Ft/fő/alkalom. */}
                    {t("roomsPage.olderChild")}
                  </p>

                  <p>
                    {/* Háziállat nem hozható. */}
                    {t("roomsPage.pet")}
                  </p>

                  <p>
                    {/* További információk: */}
                    {t("roomsPage.additionalInfo")}
                    <br />
                    {/* check in: 15.00-tól */}
                    {t("roomsPage.checkIn")}
                    <br />
                    {/* check out: 11.00-ig */}
                    {t("roomsPage.checkOut")}
                  </p>

                  <p>
                    {/* Late check out felára */}
                    {t("roomsPage.lateCheckOut")}
                    <br />
                    5.000 Ft{t("roomsPage.proPerson")}
                    <br />
                    {/* Early check in felár */}
                    {t("roomsPage.earlyCheckIn")}
                    <br />
                    5.000 Ft{t("roomsPage.proPerson")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Rooms;
