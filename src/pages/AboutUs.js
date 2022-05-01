import React from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { useTranslation } from "react-i18next";

const AboutUs = () => {
  const { t } = useTranslation();

  return (
    <div class="home page-template-default page page-id-3699 wpb-js-composer js-comp-ver-5.2.1 vc_responsive">
      <Header />
      <div class="content-block stick-to-footer">
        <div
          class="container-bg with-bg container-fluid"
          data-style="background-image: url(assets/img/about_us_main.webp);"
        >
          <div class="container-bg-overlay">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="page-item-title">
                    <h1 class="text-center texttransform-none">
                      {/* Rólunk */}
                      {t("aboutUs")}
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
                <div
                  data-vc-full-width="true"
                  data-vc-full-width-init="false"
                  class="vc_row wpb_row vc_row-fluid"
                >
                  <div class="wpb_column vc_column_container vc_col-sm-12">
                    <div class="vc_column-inner">
                      <div class="wpb_wrapper">
                        <div class="mgt-header-block clearfix text-center text-black wpb_animate_when_almost_visible wpb_fadeInDown fadeInDown wpb_content_element mgt-header-block-style-2 mgt-header-block-fontsize-medium mgt-header-texttransform-none mgt-header-block-12030347">
                          <p class="mgt-header-block-subtitle">
                            {/* Rólunk */}
                            {t("aboutUs")}
                          </p>
                          <h2 class="mgt-header-block-title text-font-weight-default">
                            {/* Pipacs Étterem & Panzió */}
                            {t("pipacsName")}
                          </h2>
                          <div class="mgt-header-line mgt-header-line-margin-large"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="vc_row-full-width vc_clearfix"></div>
                <div class="vc_row wpb_row vc_row-fluid vc_custom_1501856468228">
                  <div class="wpb_column vc_column_container vc_col-sm-6">
                    <div class="vc_column-inner">
                      <div class="wpb_wrapper">
                        <div class="wpb_text_column wpb_content_element wpb_animate_when_almost_visible wpb_fadeInLeft fadeInLeft text-size-medium">
                          <div class="wpb_wrapper">
                            <p class="text-justify">
                              <span style={{ color: "#999999" }}>
                                {/* 2021 júniusában nyitottuk meg éttermünket azzal
                                a céllal, hogy a saját termelésű alapanyagaink
                                közvetlenül, ne kizárólagosan csak a fine dining
                                éttermeken keresztül jussanak el hozzátok. A
                                birtokról érkezik a Keleméri bárány, a szabad
                                tartású csirke és a vadon termő gyümölcsök is. A
                                menü összeállításról Nagy Attila séfünk
                                gondoskodik, aki tudását korábban a Parádsasvári
                                Kastély konyháján pallérozta, amit 9 évig
                                vezetett is. */}
                                {t("aboutPage.aboutTextOne")}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="wpb_column vc_column_container vc_col-sm-6">
                    <div class="vc_column-inner">
                      <div class="wpb_wrapper">
                        <div class="wpb_text_column wpb_content_element wpb_animate_when_almost_visible wpb_fadeInRight fadeInRight text-size-medium">
                          <div class="wpb_wrapper">
                            <p class="text-justify">
                              <span style={{ color: "#999999" }}>
                                {/* A fogásoknál főként a tradicionális magyar és a
                                helyi konyha alapízei dominálnak, kicsit
                                egyszerűen és kicsit kifinomultan is
                                egyidejűleg. Nemcsak a keleméri birtokról
                                érkezik termelői alapanyag, hanem a Mátrai
                                bivalyrezervátumból is, ahonnan Szalai Ferenc
                                személyesen szállítja ki részünkre bivaly
                                termékeit. A vadhúsok csak és kizárólag a
                                környék vadjaiból kerülnek a konyhánkba, ahol
                                Mag László, a Vadker Kft. tulajdonosa
                                személyesen felel, a legjobb minőségű királyi
                                szarvas bélszín beszállításáról. */}
                                {t("aboutPage.aboutTextTwo")}
                              </span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-vc-full-width="true"
                  data-vc-full-width-init="false"
                  class="vc_row wpb_row vc_row-fluid vc_custom_1501762265855 vc_row-has-fill"
                >
                  <div class="wpb_column vc_column_container vc_col-sm-5">
                    <div class="vc_column-inner vc_custom_1502119511003">
                      <div class="wpb_wrapper">
                        <div class="mgt-header-block clearfix text-left text-black wpb_animate_when_almost_visible wpb_fadeInDown fadeInDown wpb_content_element mgt-header-block-style-2 mgt-header-block-fontsize-medium mgt-header-texttransform-none mgt-header-block-47652033">
                          <p class="mgt-header-block-subtitle">
                            {/* Rólunk */}
                            {t("aboutUs")}
                          </p>
                          <h2 class="mgt-header-block-title text-font-weight-default">
                            {/* Különleges gasztro élmény */}
                            {t("aboutPage.gastroExperience")}
                          </h2>
                          <div class="mgt-header-line mgt-header-line-margin-large"></div>
                        </div>
                        <div class="wpb_text_column wpb_content_element wpb_animate_when_almost_visible wpb_fadeInLeft fadeInLeft text-size-medium">
                          <div class="wpb_wrapper">
                            <p>
                              <span style={{ color: "#999999" }}>
                                {/* Séfünk hitvallása, hogy személyesen készíti el,
                                majd szolgálja fel a választott fogásokat.
                                Ezáltal lehetősége nyílik a vendégeknek arra,
                                hogy séfünktől személyesen is kérdezzenek.
                                Éttermünk mellett panziónkban is szívesen látjuk
                                vendégeinket, ahol a kétágyas szobákon mellett,
                                a négyágyas családi szobák is a rendelkezésükre
                                állnak. */}
                                {t("aboutPage.chefMind")}
                              </span>
                            </p>
                          </div>
                        </div>
                        {/* <div class="mgt-button-wrapper mgt-button-wrapper-align-left mgt-button-wrapper-display-inline mgt-button-top-margin-false mgt-button-right-margin-false mgt-button-round-edges-full wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                          <a
                            class="btn hvr-push mgt-button-icon- mgt-button mgt-style-solid mgt-size-normal mgt-align-left mgt-display-inline mgt-text-size-normal mgt-button-icon-separator- mgt-button-icon-position-left text-font-weight-default mgt-text-transform-none"
                            href="gallery.html"
                          >
                            Gallery
                          </a>
                        </div> */}
                      </div>
                    </div>
                  </div>
                  <div class="wpb_column vc_column_container vc_col-sm-5">
                    <div class="vc_column-inner">
                      <div class="wpb_wrapper">
                        <div class="mgt-promo-block-container wpb_content_element wpb_animate_when_almost_visible wpb_fadeInRight fadeInRight">
                          <div class="mgt-promo-block-wrapper mgt-promo-block-hover">
                            <div
                              class="mgt-promo-block animated white-text cover-image no-darken mgt-promo-block-70634358"
                              data-style="background-color: #ffffff;background-image: url(assets/img/about_us_pipacs_food4.webp);background-repeat: no-repeat;height: 495px;"
                            ></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="wpb_column vc_column_container vc_col-sm-2">
                    <div class="vc_column-inner">
                      <div class="wpb_wrapper">
                        <div class="mgt-promo-block-container wpb_content_element">
                          <div class="mgt-promo-block-wrapper mgt-promo-block-shadow mgt-promo-block-hover">
                            <div
                              class="mgt-promo-block black-text cover-image no-darken mgt-promo-block-32822084"
                              data-style="background-color: #f5f5f5;background-image: url(assets/img/about_us_pipacs_food5.webp);background-repeat: no-repeat;height: 145px;"
                            >
                              <div class="mgt-promo-block-content va-middle">
                                <div class="mgt-promo-block-content-inside"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="vc_empty_space" style={{ height: "30px" }}>
                          <span class="vc_empty_space_inner"></span>
                        </div>
                        <div class="mgt-promo-block-container wpb_content_element">
                          <div class="mgt-promo-block-wrapper mgt-promo-block-shadow mgt-promo-block-hover">
                            <div
                              class="mgt-promo-block black-text cover-image no-darken mgt-promo-block-75175961"
                              data-style="background-color: #f5f5f5;background-image: url(assets/img/about_us_pipacs_food6.webp);background-repeat: no-repeat;height: 145px;"
                            >
                              <div class="mgt-promo-block-content va-middle">
                                <div class="mgt-promo-block-content-inside"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="vc_empty_space" style={{ height: "30px" }}>
                          <span class="vc_empty_space_inner"></span>
                        </div>
                        <div class="mgt-promo-block-container wpb_content_element">
                          <div class="mgt-promo-block-wrapper mgt-promo-block-shadow mgt-promo-block-hover">
                            <div
                              class="mgt-promo-block black-text cover-image no-darken mgt-promo-block-27017181"
                              data-style="background-color: #f5f5f5;background-image: url(assets/img/about_us_pipacs_bed1.webp);background-repeat: no-repeat;height: 145px;"
                            >
                              <div class="mgt-promo-block-content va-middle">
                                <div class="mgt-promo-block-content-inside"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="vc_row-full-width vc_clearfix"></div>
                <div class="vc_row wpb_row vc_row-fluid vc_custom_1496400967126">
                  <div class="wpb_column vc_column_container vc_col-sm-6">
                    <div class="vc_column-inner vc_custom_1501610531272">
                      <div class="wpb_wrapper">
                        {/* <div class="mgt-promo-block-container wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp"> */}
                        <div class="mgt-promo-block-wrapper mgt-promo-block-hover">
                          <div
                            class="mgt-promo-block animated white-text cover-image darken mgt-promo-block-15851137"
                            data-style="background-color: #ffffff;background-image: url(assets/img/about_us_pipacs_food7.webp);background-repeat: no-repeat;height: 420px;"
                          >
                            <div class="mgt-promo-block-content va-middle">
                              <div class="mgt-promo-block-content-inside vc_custom_1502117266071">
                                <h5 style={{ textAlign: "center" }}>
                                  {/* Mennyei ízek */}
                                  {t("goodTastes")}
                                </h5>
                                <h2 style={{ textAlign: "center" }}>
                                  {/* Tekintse meg */}
                                  {t("lookAt")}
                                  <br />
                                  {/* étlapunkat! */}
                                  {t("ourMenu")}
                                </h2>
                                <div class="mgt-button-wrapper mgt-button-wrapper-align-center mgt-button-wrapper-display-newline mgt-button-top-margin-true mgt-button-right-margin-false mgt-button-round-edges-full">
                                  <a
                                    class="btn hvr-grow mgt-button-icon- mgt-button mgt-style-solid mgt-size-normal mgt-align-center mgt-display-newline mgt-text-size-normal mgt-button-icon-separator- mgt-button-icon-position-left text-font-weight-default mgt-text-transform-none"
                                    href="menu"
                                  >
                                    {/* Étlap */}
                                    {t("menu")}
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* </div> */}
                      </div>
                    </div>
                  </div>
                  <div class="wpb_column vc_column_container vc_col-sm-6">
                    <div class="vc_column-inner vc_custom_1501610544677">
                      <div class="wpb_wrapper">
                        {/* <div class="mgt-promo-block-container wpb_content_element wpb_animate_when_almost_visible wpb_fadeInRight fadeInRight"> */}
                        <div class="mgt-promo-block-wrapper mgt-promo-block-hover">
                          <div
                            class="mgt-promo-block animated white-text cover-image darken mgt-promo-block-15051295"
                            data-style="background-color: #ffffff;background-image: url(assets/img/about_us_pipacs_bed2.webp);background-repeat: no-repeat;height: 420px;"
                          >
                            <div class="mgt-promo-block-content va-middle">
                              <div class="mgt-promo-block-content-inside vc_custom_1502119503691">
                                <h5 style={{ textAlign: "center" }}>
                                  {/* Teljes kikapcsolódás */}
                                  {t("totalRelax")}
                                </h5>
                                <h2 style={{ textAlign: "center" }}>
                                  {/* Tekintse meg */}
                                  {t("ourRooms")}
                                  <br />
                                  {/* szobáinkat! */}
                                  {t("ourRooms")}
                                </h2>
                                <div class="mgt-button-wrapper mgt-button-wrapper-align-center mgt-button-wrapper-display-newline mgt-button-top-margin-true mgt-button-right-margin-false mgt-button-round-edges-full">
                                  <a
                                    class="btn hvr-grow mgt-button-icon- mgt-button mgt-style-solid mgt-size-normal mgt-align-center mgt-display-newline mgt-text-size-normal mgt-button-icon-separator- mgt-button-icon-position-left text-font-weight-default mgt-text-transform-none"
                                    href="rooms"
                                  >
                                    {/* Szobák */}
                                    {t("rooms")}
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
