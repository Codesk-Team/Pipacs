import React from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { useTranslation } from "react-i18next";

const Menu = () => {
  const { t, i18n } = useTranslation();

  const menuSlicer = (text, huMaxLength, enMaxLength) => {
    const textLenght = text.length;
    let maxLength = i18n.language === "hu" ? huMaxLength : enMaxLength;

    if (!maxLength) {
      maxLength = 25;
    }

    return (
      <>
        {textLenght > maxLength ? (
          <>
            {text.slice(0, maxLength)}
            <br />
            {text.slice(maxLength, textLenght)}
          </>
        ) : (
          <>{text}</>
        )}
      </>
    );
  };

  const threeLinerMenuSlicer = (
    text,
    huMaxLengthOne,
    huMaxLengthTwo,
    enMaxLengthOne,
    enMaxLengthTwo
  ) => {
    const textLenght = text.length;
    let maxLengthOne = i18n.language === "hu" ? huMaxLengthOne : enMaxLengthOne;

    if (!maxLengthOne) {
      maxLengthOne = 15;
    }

    let maxLengthTwo = i18n.language === "hu" ? huMaxLengthTwo : enMaxLengthTwo;

    if (!maxLengthTwo) {
      maxLengthTwo = 15;
    }

    return (
      <>
        {text.slice(0, maxLengthOne)}
        <br />
        {text.slice(maxLengthOne, maxLengthTwo)}
        {/* <br /> */}
        {text.slice(maxLengthTwo, textLenght)}
      </>
    );
  };

  return (
    <div class="home page-template-default page page-id-3699 wpb-js-composer js-comp-ver-5.2.1 vc_responsive">
      <Header />
      <div class="content-block stick-to-footer">
        <div
          class="container-bg with-bg container-fluid"
          data-style="background-image: url(assets/img/menu_pipacs_main.webp);"
        >
          <div class="container-bg-overlay">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <div class="page-item-title">
                    <h1 class="text-center texttransform-none">
                      {/* Étlap */}
                      {t("menu")}
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
                <div class="vc_row wpb_row vc_row-fluid">
                  <div class="wpb_column vc_column_container vc_col-sm-12">
                    <div class="vc_column-inner vc_custom_1501950320442">
                      <div class="wpb_wrapper">
                        <div class="mgt-header-block clearfix text-center text-black wpb_animate_when_almost_visible wpb_fadeInDown fadeInDown wpb_content_element mgt-header-block-style-2 mgt-header-block-fontsize-medium mgt-header-texttransform-none mgt-header-block-76637847">
                          {/* <p class="mgt-header-block-subtitle">
                            {t("menu")}
                          </p> */}
                          <h2 class="mgt-header-block-title text-font-weight-default">
                            {/* A termőföldünkről egyenes a konyhánkba! */}
                            {t("fromSoilToKitchen")}
                          </h2>
                          <div class="mgt-header-line mgt-header-line-margin-large"></div>
                        </div>
                        <div class="wpb_text_column wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp text-size-medium">
                          <div class="wpb_wrapper">
                            <p style={{ textAlign: "center" }}>
                              <span style={{ color: "#999999" }}>
                                {/* Ételeinket hazai, főként saját termelésű
                                alapanyagokból készítjük. Fogásainknál főként a
                                tradicionális magyar és a helyi konyha alapízei
                                dominálnak. */}
                                {t("menuPage.ourFoods")}
                              </span>
                            </p>
                          </div>
                        </div>
                        <div class="vc_separator wpb_content_element vc_separator_align_center vc_sep_width_100 vc_sep_pos_align_center vc_separator_no_text vc_sep_color_grey">
                          <span class="vc_sep_holder vc_sep_holder_l">
                            <span class="vc_sep_line"></span>
                          </span>
                          <span class="vc_sep_holder vc_sep_holder_r">
                            <span class="vc_sep_line"></span>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="vc_row wpb_row vc_row-fluid">
                  <div class="wpb_column vc_column_container vc_col-sm-12">
                    <div class="vc_column-inner">
                      <div class="wpb_wrapper">
                        <div class="vc_tta-container" data-vc-action="collapse">
                          <div class="vc_general vc_tta vc_tta-tabs vc_tta-color-grey vc_tta-style-outline vc_tta-shape-rounded vc_tta-o-shape-group vc_tta-o-no-fill vc_tta-tabs-position-top vc_tta-controls-align-center">
                            <div class="vc_tta-tabs-container">
                              <ul class="vc_tta-tabs-list">
                                <li class="vc_tta-tab vc_active" data-vc-tab>
                                  <a
                                    href="#1501871514474-98fac6cb-b327"
                                    data-vc-tabs
                                    data-vc-container=".vc_tta"
                                  >
                                    <span class="vc_tta-title-text">
                                      {/* Főmenü  */}
                                      {t("mainMenu")}
                                    </span>
                                  </a>
                                </li>
                                <li class="vc_tta-tab" data-vc-tab>
                                  <a
                                    href="#1501952660577-bab994a5-2ce0"
                                    data-vc-tabs
                                    data-vc-container=".vc_tta"
                                  >
                                    <span class="vc_tta-title-text">
                                      {/* Szezonális menü (Bárányos április) */}
                                      {t("menuPage.sesionalMenu")}
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div class="vc_tta-panels-container">
                              <div class="vc_tta-panels">
                                <div
                                  class="vc_tta-panel vc_active"
                                  id="1501871514474-98fac6cb-b327"
                                  data-vc-content=".vc_tta-panel-body"
                                >
                                  <div class="vc_tta-panel-heading">
                                    <h4 class="vc_tta-panel-title">
                                      <a
                                        href="#1501871514474-98fac6cb-b327"
                                        data-vc-accordion
                                        data-vc-container=".vc_tta-container"
                                      >
                                        <span class="vc_tta-title-text">
                                          {/* Főmenü  */}
                                          {t("mainMenu")}
                                        </span>
                                      </a>
                                    </h4>
                                  </div>
                                  <div class="vc_tta-panel-body">
                                    <div class="mgt-header-block clearfix text-center text-black wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp wpb_content_element mgt-header-block-style-2 mgt-header-block-fontsize-regular mgt-header-texttransform-none mgt-header-block-42722978">
                                      <h2 class="mgt-header-block-title text-font-weight-default">
                                        {/* Főmenü  */}
                                        {t("mainMenu")}
                                      </h2>
                                      <div class="mgt-header-line mgt-header-line-margin-small"></div>
                                    </div>
                                    <div class="wpb_text_column wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp vc_custom_1501952538196 text-size-medium">
                                      <div class="wpb_wrapper">
                                        <p style={{ textAlign: "center" }}>
                                          <span style={{ color: "#999999" }}>
                                            <em>
                                              {/* Felhívjuk kedves vendégeink
                                              figyelmét, hogyha van zarojel
                                              akkor az a feladag (MEGFOGALMAZNI
                                              VHOGY) */}
                                              {t("menuPage.warningHalfPrice")}
                                            </em>
                                          </span>
                                        </p>
                                        <p style={{ textAlign: "center" }}>
                                          <span style={{ color: "#999999" }}>
                                            <em>
                                              {/* Feltüntetett árainkra +10%
                                              szervízdíjat számolunk fel, melyet
                                              számlája végösszege tartalmaz. */}
                                              {t("menuPage.servicePrice")}
                                            </em>
                                          </span>
                                        </p>
                                        <p style={{ textAlign: "center" }}>
                                          <span style={{ color: "#999999" }}>
                                            <em>
                                              {/* Az étlapon jelölve találják az
                                              egyes ételek allergén tartalmát! A
                                              további allergén információkkal
                                              kapcsolatos tájékoztatásban kérje
                                              Kollegáink segítségét! Köszönjük! */}
                                              {t("menuPage.allergies")}
                                            </em>
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                    <div class="vc_row wpb_row vc_inner vc_row-fluid vc_custom_1501952123390">
                                      <div class="wpb_column vc_column_container vc_col-sm-6">
                                        <div class="vc_column-inner">
                                          <div class="wpb_wrapper">
                                            <div class="mgt-header-block clearfix text-left text-black wpb_animate_when_almost_visible wpb_fadeInLeft fadeInLeft wpb_content_element mgt-header-block-style-2 mgt-header-block-fontsize-regular mgt-header-texttransform-header mgt-header-block-60691344">
                                              <p class="mgt-header-block-subtitle">
                                                {/* Főmenü  */}
                                                {t("mainMenu")}
                                              </p>
                                              <h2 class="mgt-header-block-title text-font-weight-default">
                                                {t("menuPage.coldPreMeals")}
                                              </h2>
                                            </div>
                                            <div class="vc_separator wpb_content_element vc_separator_align_center vc_sep_width_100 vc_sep_border_width_3 vc_sep_pos_align_center vc_separator_no_text vc_sep_color_black wpb_animate_when_almost_visible wpb_fadeInLeft fadeInLeft wpb_animate_when_almost_visible wpb_fadeInLeft fadeInLeft">
                                              <span class="vc_sep_holder vc_sep_holder_l">
                                                <span class="vc_sep_line"></span>
                                              </span>
                                              <span class="vc_sep_holder vc_sep_holder_r">
                                                <span class="vc_sep_line"></span>
                                              </span>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-red clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp">
                                              <div class="mgt-item-price-details">
                                                <div class="mgt-item-price-line"></div>
                                                <div class="mgt-item-price-title-holder">
                                                  <h4>
                                                    {menuSlicer(
                                                      t(
                                                        "menuPage.coldPreMeal1"
                                                      ),
                                                      31,
                                                      28
                                                    )}
                                                  </h4>
                                                </div>
                                                <div class="mgt-item-price-value">
                                                  3800,-Ft
                                                </div>
                                                <p class="mgt-item-price-description">
                                                  {/* {t("allergens")}: 1,7 */}
                                                </p>
                                              </div>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-orange clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp">
                                              <div class="mgt-item-price-details">
                                                <div class="mgt-item-price-line"></div>
                                                <div class="mgt-item-price-title-holder">
                                                  <h4>
                                                    {/* Grill sajt padlizsánkrémmel */}
                                                    {menuSlicer(
                                                      t(
                                                        "menuPage.coldPreMeal2"
                                                      ),
                                                      27,
                                                      29
                                                    )}
                                                  </h4>
                                                </div>
                                                <div class="mgt-item-price-value">
                                                  2260,-Ft
                                                </div>
                                                <p class="mgt-item-price-description">
                                                  {/* {t("allergens")}: 7 */}
                                                </p>
                                              </div>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-red clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp">
                                              <div class="mgt-item-price-details">
                                                <div class="mgt-item-price-line"></div>
                                                <div class="mgt-item-price-title-holder">
                                                  <h4>
                                                    {/* Zöld saláta tökmagolajjal */}
                                                    {menuSlicer(
                                                      t(
                                                        "menuPage.coldPreMeal3"
                                                      ),
                                                      25,
                                                      33
                                                    )}
                                                  </h4>
                                                </div>
                                                <div class="mgt-item-price-value">
                                                  1680,-Ft
                                                </div>
                                              </div>
                                            </div>
                                            <div class="mgt-header-block clearfix text-left text-black wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp wpb_content_element mgt-header-block-style-2 mgt-header-block-fontsize-regular mgt-header-texttransform-header mgt-header-block-9635760">
                                              <p class="mgt-header-block-subtitle">
                                                {/* Főmenü  */}
                                                {t("mainMenu")}
                                              </p>
                                              <h2 class="mgt-header-block-title text-font-weight-default">
                                                {t("menuPage.soups")}
                                              </h2>
                                            </div>
                                            <div class="vc_separator wpb_content_element vc_separator_align_center vc_sep_width_100 vc_sep_border_width_3 vc_sep_pos_align_center vc_separator_no_text vc_sep_color_black wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp">
                                              <span class="vc_sep_holder vc_sep_holder_l">
                                                <span class="vc_sep_line"></span>
                                              </span>
                                              <span class="vc_sep_holder vc_sep_holder_r">
                                                <span class="vc_sep_line"></span>
                                              </span>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-red clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                                              <div class="mgt-item-price-details">
                                                {/* <div class="mgt-item-price-line"></div> */}
                                                {/* <div class="mgt-item-price-title-holder"> */}
                                                <h4>
                                                  {t("menuPage.soup1")}{" "}
                                                  <span
                                                    style={{
                                                      fontSize: 18,
                                                      fontFamily: "cabin",
                                                    }}
                                                  >
                                                    - 2460 Ft (1720 Ft)
                                                  </span>
                                                </h4>
                                                {/* <p class="mgt-item-price-description">
                                                  {t("allergens")}: 1,3,9
                                                </p> */}
                                              </div>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-theme clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                                              <div class="mgt-item-price-details">
                                                <h4>
                                                  {t("menuPage.soup2")}{" "}
                                                  <span
                                                    style={{
                                                      fontSize: 18,
                                                      fontFamily: "cabin",
                                                    }}
                                                  >
                                                    - 2850 Ft (1990 Ft)
                                                  </span>
                                                </h4>
                                                {/* <p class="mgt-item-price-description">
                                                  {t("allergens")}: 3,7,9
                                                </p>  */}
                                              </div>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-red clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                                              <div class="mgt-item-price-details">
                                                <h4>
                                                  {t("menuPage.soup3")}{" "}
                                                  <span
                                                    style={{
                                                      fontSize: 18,
                                                      fontFamily: "cabin",
                                                    }}
                                                  >
                                                    - 3120Ft (2190 Ft)
                                                  </span>
                                                </h4>
                                                {/* <p class="mgt-item-price-description">
                                                  {t("allergens")}: 1,3,9
                                                </p> */}
                                              </div>
                                            </div>
                                            <div class="mgt-header-block clearfix text-left text-black wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp wpb_content_element mgt-header-block-style-2 mgt-header-block-fontsize-regular mgt-header-texttransform-header mgt-header-block-9635760">
                                              <p class="mgt-header-block-subtitle">
                                                {/* Főmenü  */}
                                                {t("mainMenu")}
                                              </p>
                                              <h2 class="mgt-header-block-title text-font-weight-default">
                                                {t("menuPage.localMeals")}
                                              </h2>
                                            </div>
                                            <div class="vc_separator wpb_content_element vc_separator_align_center vc_sep_width_100 vc_sep_border_width_3 vc_sep_pos_align_center vc_separator_no_text vc_sep_color_black wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp">
                                              <span class="vc_sep_holder vc_sep_holder_l">
                                                <span class="vc_sep_line"></span>
                                              </span>
                                              <span class="vc_sep_holder vc_sep_holder_r">
                                                <span class="vc_sep_line"></span>
                                              </span>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-red clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                                              <div class="mgt-item-price-details">
                                                <div class="mgt-item-price-line"></div>
                                                <div class="mgt-item-price-title-holder">
                                                  <h4>
                                                    {/* Vargányás pacal habos
                                                    burgonyapürével */}
                                                    {menuSlicer(
                                                      t("menuPage.localMeal1"),
                                                      22,
                                                      27
                                                    )}
                                                  </h4>
                                                </div>
                                                <div class="mgt-item-price-value">
                                                  4260,-Ft (2980,-Ft)
                                                </div>
                                                <p class="mgt-item-price-description">
                                                  {/* {t("allergens")}: 7 */}
                                                </p>
                                              </div>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-theme clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                                              <div class="mgt-item-price-details">
                                                <div class="mgt-item-price-line"></div>
                                                <div class="mgt-item-price-title-holder">
                                                  <h4>
                                                    {menuSlicer(
                                                      t("menuPage.localMeal2"),
                                                      22,
                                                      25
                                                    )}
                                                  </h4>
                                                </div>
                                                <div class="mgt-item-price-value">
                                                  6260,-Ft (4380,-Ft)
                                                </div>
                                                <p class="mgt-item-price-description">
                                                  {/* {t("allergens")}: 1,3,7 */}
                                                </p>
                                              </div>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-red clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                                              <div class="mgt-item-price-details">
                                                <div class="mgt-item-price-line"></div>
                                                <div class="mgt-item-price-title-holder">
                                                  <h4>
                                                    {menuSlicer(
                                                      t("menuPage.localMeal3"),
                                                      21,
                                                      26
                                                    )}
                                                  </h4>
                                                </div>
                                                <div class="mgt-item-price-value">
                                                  2680,-Ft (1880, -Ft)
                                                </div>
                                                <p class="mgt-item-price-description">
                                                  {/* {t("allergens")}: 1,3,7 */}
                                                </p>
                                              </div>
                                            </div>
                                            <div class="mgt-header-block clearfix text-left text-black wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp wpb_content_element mgt-header-block-style-2 mgt-header-block-fontsize-regular mgt-header-texttransform-header mgt-header-block-9635760">
                                              <p class="mgt-header-block-subtitle">
                                                {/* Főmenü  */}
                                                {t("mainMenu")}
                                              </p>
                                              <h2 class="mgt-header-block-title text-font-weight-default">
                                                {/* Kis lurkóknak */}
                                                {t("menuPage.childrenMeals")}
                                              </h2>
                                            </div>
                                            <div class="vc_separator wpb_content_element vc_separator_align_center vc_sep_width_100 vc_sep_border_width_3 vc_sep_pos_align_center vc_separator_no_text vc_sep_color_black wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp">
                                              <span class="vc_sep_holder vc_sep_holder_l">
                                                <span class="vc_sep_line"></span>
                                              </span>
                                              <span class="vc_sep_holder vc_sep_holder_r">
                                                <span class="vc_sep_line"></span>
                                              </span>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-red clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                                              <div class="mgt-item-price-details">
                                                <div class="mgt-item-price-line"></div>
                                                <div class="mgt-item-price-title-holder">
                                                  <h4>
                                                    {menuSlicer(
                                                      t(
                                                        "menuPage.childrenMeal1"
                                                      ),
                                                      21,
                                                      26
                                                    )}
                                                  </h4>
                                                </div>
                                                <div class="mgt-item-price-value">
                                                  1120,-Ft
                                                </div>
                                                <p class="mgt-item-price-description">
                                                  {/* {t("allergens")}: 1,3 */}
                                                </p>
                                              </div>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-theme clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                                              <div class="mgt-item-price-details">
                                                <div class="mgt-item-price-line"></div>
                                                <div class="mgt-item-price-title-holder">
                                                  <h4>
                                                    {menuSlicer(
                                                      t(
                                                        "menuPage.childrenMeal2"
                                                      ),
                                                      31,
                                                      31
                                                    )}
                                                  </h4>
                                                </div>
                                                <div class="mgt-item-price-value">
                                                  1120,-Ft
                                                </div>
                                                <p class="mgt-item-price-description">
                                                  {/* {t("allergens")}: 7 */}
                                                </p>
                                              </div>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-red clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                                              <div class="mgt-item-price-details">
                                                <div class="mgt-item-price-line"></div>
                                                <div class="mgt-item-price-title-holder">
                                                  <h4>
                                                    {menuSlicer(
                                                      t(
                                                        "menuPage.childrenMeal3"
                                                      ),
                                                      30,
                                                      25
                                                    )}
                                                  </h4>
                                                </div>
                                                <div class="mgt-item-price-value">
                                                  2120,-Ft
                                                </div>
                                                <p class="mgt-item-price-description">
                                                  {/* {t("allergens")}: 1,3,7 */}
                                                </p>
                                              </div>
                                            </div>
                                            <div class="mgt-header-block clearfix text-left text-black wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp wpb_content_element mgt-header-block-style-2 mgt-header-block-fontsize-regular mgt-header-texttransform-header mgt-header-block-9635760">
                                              <p class="mgt-header-block-subtitle">
                                                {/* Főmenü  */}
                                                {t("mainMenu")}
                                              </p>
                                              <h2 class="mgt-header-block-title text-font-weight-default">
                                                {t("menuPage.pickles")}
                                              </h2>
                                            </div>
                                            <div class="vc_separator wpb_content_element vc_separator_align_center vc_sep_width_100 vc_sep_border_width_3 vc_sep_pos_align_center vc_separator_no_text vc_sep_color_black wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp">
                                              <span class="vc_sep_holder vc_sep_holder_l">
                                                <span class="vc_sep_line"></span>
                                              </span>
                                              <span class="vc_sep_holder vc_sep_holder_r">
                                                <span class="vc_sep_line"></span>
                                              </span>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-red clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                                              <div class="mgt-item-price-details">
                                                <div class="mgt-item-price-line"></div>
                                                <div class="mgt-item-price-title-holder">
                                                  <h4>
                                                    {menuSlicer(
                                                      t("menuPage.pickle1")
                                                    )}
                                                  </h4>
                                                </div>
                                                <div class="mgt-item-price-value">
                                                  610,-Ft
                                                </div>
                                              </div>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-theme clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                                              <div class="mgt-item-price-details">
                                                <div class="mgt-item-price-line"></div>
                                                <div class="mgt-item-price-title-holder">
                                                  <h4>
                                                    {menuSlicer(
                                                      t("menuPage.pickle2")
                                                    )}
                                                  </h4>
                                                </div>
                                                <div class="mgt-item-price-value">
                                                  610,-Ft
                                                </div>
                                              </div>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-red clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                                              <div class="mgt-item-price-details">
                                                <div class="mgt-item-price-line"></div>
                                                <div class="mgt-item-price-title-holder">
                                                  <h4>
                                                    {menuSlicer(
                                                      t("menuPage.pickle3")
                                                    )}
                                                  </h4>
                                                </div>
                                                <div class="mgt-item-price-value">
                                                  650,-Ft
                                                </div>
                                              </div>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-red clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                                              <div class="mgt-item-price-details">
                                                <div class="mgt-item-price-line"></div>
                                                <div class="mgt-item-price-title-holder">
                                                  <h4>
                                                    {t("menuPage.pickle4")}
                                                  </h4>
                                                </div>
                                                <div class="mgt-item-price-value">
                                                  590,-Ft
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="wpb_column vc_column_container vc_col-sm-6">
                                        <div class="vc_column-inner">
                                          <div class="wpb_wrapper">
                                            <div class="mgt-header-block clearfix text-left text-black wpb_animate_when_almost_visible wpb_fadeInRight fadeInRight wpb_content_element mgt-header-block-style-2 mgt-header-block-fontsize-regular mgt-header-texttransform-header mgt-header-block-44557323">
                                              <p class="mgt-header-block-subtitle">
                                                {/* Főmenü  */}
                                                {t("mainMenu")}
                                              </p>
                                              <h2 class="mgt-header-block-title text-font-weight-default">
                                                {t("menuPage.mainDishes")}
                                              </h2>
                                            </div>
                                            <div class="vc_separator wpb_content_element vc_separator_align_center vc_sep_width_100 vc_sep_border_width_3 vc_sep_pos_align_center vc_separator_no_text vc_sep_color_black wpb_animate_when_almost_visible wpb_fadeInRight fadeInRight wpb_animate_when_almost_visible wpb_fadeInRight fadeInRight">
                                              <span class="vc_sep_holder vc_sep_holder_l">
                                                <span class="vc_sep_line"></span>
                                              </span>
                                              <span class="vc_sep_holder vc_sep_holder_r">
                                                <span class="vc_sep_line"></span>
                                              </span>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-red clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                                              <div class="mgt-item-price-details">
                                                <div class="mgt-item-price-line"></div>
                                                <div class="mgt-item-price-title-holder">
                                                  <h4>
                                                    {menuSlicer(
                                                      t("menuPage.mainDish1"),
                                                      27,
                                                      25
                                                    )}
                                                  </h4>
                                                </div>
                                                <div class="mgt-item-price-value">
                                                  4460,-Ft
                                                </div>
                                                <p class="mgt-item-price-description">
                                                  {/* {t("allergens")}: 4,9 */}
                                                </p>
                                              </div>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-black clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                                              <div class="mgt-item-price-details">
                                                <div class="mgt-item-price-line"></div>
                                                <div class="mgt-item-price-title-holder">
                                                  <h4>
                                                    {menuSlicer(
                                                      t("menuPage.mainDish2"),
                                                      25,
                                                      45
                                                    )}
                                                  </h4>
                                                </div>
                                                <div class="mgt-item-price-value">
                                                  2990,-Ft
                                                </div>
                                                <p class="mgt-item-price-description">
                                                  {/* {t("allergens")}: 1,3,7 */}
                                                </p>
                                              </div>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-black clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                                              <div class="mgt-item-price-details">
                                                <div class="mgt-item-price-line"></div>
                                                <div class="mgt-item-price-title-holder">
                                                  <h4>
                                                    {menuSlicer(
                                                      t("menuPage.mainDish3"),
                                                      27,
                                                      39
                                                    )}
                                                  </h4>
                                                </div>
                                                <div class="mgt-item-price-value">
                                                  3620,-Ft
                                                </div>
                                                <p class="mgt-item-price-description">
                                                  {/* {t("allergens")}: 7 */}
                                                </p>
                                              </div>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-red clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                                              <div class="mgt-item-price-details">
                                                <div class="mgt-item-price-line"></div>
                                                <div class="mgt-item-price-title-holder">
                                                  <h4>
                                                    {menuSlicer(
                                                      t("menuPage.mainDish4"),
                                                      25,
                                                      26
                                                    )}
                                                  </h4>
                                                </div>
                                                <div class="mgt-item-price-value">
                                                  3990,-Ft
                                                </div>
                                              </div>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-red clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                                              <div class="mgt-item-price-details">
                                                <div class="mgt-item-price-line"></div>
                                                <div class="mgt-item-price-title-holder">
                                                  <h4>
                                                    {menuSlicer(
                                                      t("menuPage.mainDish5"),
                                                      29,
                                                      29
                                                    )}
                                                  </h4>
                                                </div>
                                                <div class="mgt-item-price-value">
                                                  6640,-Ft
                                                </div>
                                                <p class="mgt-item-price-description">
                                                  {/* {t("allergens")}: 9, 12 */}
                                                </p>
                                              </div>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-red clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                                              <div class="mgt-item-price-details">
                                                <div class="mgt-item-price-line"></div>
                                                <div class="mgt-item-price-title-holder">
                                                  <h4>
                                                    {menuSlicer(
                                                      t("menuPage.mainDish6")
                                                    )}
                                                  </h4>
                                                </div>
                                                <div class="mgt-item-price-value">
                                                  2960,-Ft
                                                </div>
                                                <p class="mgt-item-price-description">
                                                  {/* {t("allergens")}: 7 */}
                                                </p>
                                              </div>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-red clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                                              <div class="mgt-item-price-details">
                                                <div class="mgt-item-price-line"></div>
                                                <div class="mgt-item-price-title-holder">
                                                  <h4>
                                                    {menuSlicer(
                                                      t("menuPage.mainDish7")
                                                    )}
                                                  </h4>
                                                </div>
                                                <div class="mgt-item-price-value">
                                                  3940,-Ft
                                                </div>
                                                <p class="mgt-item-price-description">
                                                  {/* {t("allergens")}: 1,3 */}
                                                </p>
                                              </div>
                                            </div>
                                            <div class="mgt-header-block clearfix text-left text-black wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp wpb_content_element mgt-header-block-style-2 mgt-header-block-fontsize-regular mgt-header-texttransform-header mgt-header-block-9635760">
                                              <p class="mgt-header-block-subtitle">
                                                {/* Főmenü  */}
                                                {t("mainMenu")}
                                              </p>
                                              <h2 class="mgt-header-block-title text-font-weight-default">
                                                {t("menuPage.garnishes")}
                                              </h2>
                                            </div>
                                            <div class="vc_separator wpb_content_element vc_separator_align_center vc_sep_width_100 vc_sep_border_width_3 vc_sep_pos_align_center vc_separator_no_text vc_sep_color_black wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp">
                                              <span class="vc_sep_holder vc_sep_holder_l">
                                                <span class="vc_sep_line"></span>
                                              </span>
                                              <span class="vc_sep_holder vc_sep_holder_r">
                                                <span class="vc_sep_line"></span>
                                              </span>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-red clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                                              <div class="mgt-item-price-details">
                                                <div class="mgt-item-price-line"></div>
                                                <div class="mgt-item-price-title-holder">
                                                  <h4>
                                                    {menuSlicer(
                                                      t("menuPage.garnish1"),
                                                      25,
                                                      27
                                                    )}
                                                  </h4>
                                                </div>
                                                <div class="mgt-item-price-value">
                                                  1130,-Ft (790,-Ft)
                                                </div>
                                                <p class="mgt-item-price-description">
                                                  {/* {t("allergens")}: 7 */}
                                                </p>
                                              </div>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-theme clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                                              <div class="mgt-item-price-details">
                                                <div class="mgt-item-price-line"></div>
                                                <div class="mgt-item-price-title-holder">
                                                  <h4>
                                                    {menuSlicer(
                                                      t("menuPage.garnish2"),
                                                      20,
                                                      23
                                                    )}
                                                  </h4>
                                                </div>
                                                <div class="mgt-item-price-value">
                                                  1240,-Ft (870,-Ft)
                                                </div>
                                                <p class="mgt-item-price-description">
                                                  {/* {t("allergens")}: 7 */}
                                                </p>
                                              </div>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-red clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                                              <div class="mgt-item-price-details">
                                                <div class="mgt-item-price-line"></div>
                                                <div class="mgt-item-price-title-holder">
                                                  <h4>
                                                    {menuSlicer(
                                                      t("menuPage.garnish3"),
                                                      23,
                                                      25
                                                    )}
                                                  </h4>
                                                </div>
                                                <div class="mgt-item-price-value">
                                                  1120,-Ft (790,-Ft)
                                                </div>
                                              </div>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-red clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                                              <div class="mgt-item-price-details">
                                                <div class="mgt-item-price-line"></div>
                                                <div class="mgt-item-price-title-holder">
                                                  <h4>
                                                    {menuSlicer(
                                                      t("menuPage.garnish4")
                                                    )}
                                                  </h4>
                                                </div>
                                                <div class="mgt-item-price-value">
                                                  560,-Ft (390,-Ft)
                                                </div>
                                              </div>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-red clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                                              <div class="mgt-item-price-details">
                                                <div class="mgt-item-price-line"></div>
                                                <div class="mgt-item-price-title-holder">
                                                  <h4>
                                                    {menuSlicer(
                                                      t("menuPage.garnish5")
                                                    )}
                                                  </h4>
                                                </div>
                                                <div class="mgt-item-price-value">
                                                  420,-Ft
                                                </div>
                                              </div>
                                              <p class="mgt-item-price-description">
                                                {/* {t("allergens")}: 1 */}
                                              </p>
                                            </div>
                                            <div class="mgt-header-block clearfix text-left text-black wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp wpb_content_element mgt-header-block-style-2 mgt-header-block-fontsize-regular mgt-header-texttransform-header mgt-header-block-9635760">
                                              <p class="mgt-header-block-subtitle">
                                                {/* Főmenü  */}
                                                {t("mainMenu")}
                                              </p>
                                              <h2 class="mgt-header-block-title text-font-weight-default">
                                                {t("menuPage.desserts")}
                                              </h2>
                                            </div>
                                            <div class="vc_separator wpb_content_element vc_separator_align_center vc_sep_width_100 vc_sep_border_width_3 vc_sep_pos_align_center vc_separator_no_text vc_sep_color_black wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp">
                                              <span class="vc_sep_holder vc_sep_holder_l">
                                                <span class="vc_sep_line"></span>
                                              </span>
                                              <span class="vc_sep_holder vc_sep_holder_r">
                                                <span class="vc_sep_line"></span>
                                              </span>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-red clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                                              <div class="mgt-item-price-details">
                                                <div class="mgt-item-price-line"></div>
                                                <div class="mgt-item-price-title-holder">
                                                  <h4>
                                                    {menuSlicer(
                                                      t("menuPage.desser1"),
                                                      27,
                                                      26
                                                    )}
                                                  </h4>
                                                </div>
                                                <div class="mgt-item-price-value">
                                                  1910,-Ft
                                                </div>
                                                <p class="mgt-item-price-description">
                                                  {/* {t("allergens")}: 1,3,7 */}
                                                </p>
                                              </div>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-theme clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                                              <div class="mgt-item-price-details">
                                                <div class="mgt-item-price-line"></div>
                                                <div class="mgt-item-price-title-holder">
                                                  <h4>
                                                    {menuSlicer(
                                                      t("menuPage.desser2")
                                                    )}
                                                  </h4>
                                                </div>
                                                <div class="mgt-item-price-value">
                                                  2260,-Ft (1580,-Ft)
                                                </div>
                                                <p class="mgt-item-price-description">
                                                  {/* {t("allergens")}: 1,3,7,8,5 */}
                                                </p>
                                              </div>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-red clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                                              <div class="mgt-item-price-details">
                                                <div class="mgt-item-price-line"></div>
                                                <div class="mgt-item-price-title-holder">
                                                  <h4>
                                                    {menuSlicer(
                                                      t("menuPage.desser3"),
                                                      26,
                                                      26
                                                    )}
                                                  </h4>
                                                </div>
                                                <div class="mgt-item-price-value">
                                                  1460,-Ft
                                                </div>
                                                <p class="mgt-item-price-description">
                                                  {/* {t("allergens")}: 3,7 */}
                                                </p>
                                              </div>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-red clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                                              <div class="mgt-item-price-details">
                                                <div class="mgt-item-price-line"></div>
                                                <div class="mgt-item-price-title-holder">
                                                  <h4>
                                                    {menuSlicer(
                                                      t("menuPage.desser4"),
                                                      26,
                                                      28
                                                    )}
                                                  </h4>
                                                </div>
                                                <div class="mgt-item-price-value">
                                                  2210,-Ft
                                                </div>
                                                <p class="mgt-item-price-description">
                                                  {/* {t("allergens")}: 1,3,7,8,5 */}
                                                </p>
                                              </div>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-red clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                                              <div class="mgt-item-price-details">
                                                <div class="mgt-item-price-line"></div>
                                                <div class="mgt-item-price-title-holder">
                                                  <h4>
                                                    {menuSlicer(
                                                      t("menuPage.desser5"),
                                                      26,
                                                      28
                                                    )}
                                                  </h4>
                                                </div>
                                                <div class="mgt-item-price-value">
                                                  2210,-Ft
                                                </div>
                                                <p class="mgt-item-price-description">
                                                  {/* {t("allergens")}: 1,3,7,8 */}
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                <div
                                  class="vc_tta-panel"
                                  id="1501952660577-bab994a5-2ce0"
                                  data-vc-content=".vc_tta-panel-body"
                                >
                                  <div class="vc_tta-panel-heading">
                                    <h4 class="vc_tta-panel-title">
                                      <a
                                        href="#1501952660577-bab994a5-2ce0"
                                        data-vc-accordion
                                        data-vc-container=".vc_tta-container"
                                      >
                                        <span class="vc_tta-title-text">
                                          {t("menuPage.sheepApril")}
                                        </span>
                                      </a>
                                    </h4>
                                  </div>
                                  <div class="vc_tta-panel-body">
                                    <div class="mgt-header-block clearfix text-center text-black wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp wpb_content_element mgt-header-block-style-2 mgt-header-block-fontsize-regular mgt-header-texttransform-none mgt-header-block-66790373">
                                      <h2 class="mgt-header-block-title text-font-weight-default">
                                        {t("menuPage.sheepApril")}
                                      </h2>
                                      <div class="mgt-header-line mgt-header-line-margin-small"></div>
                                    </div>
                                    <div class="wpb_text_column wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp vc_custom_1501952538196 text-size-medium">
                                      <div class="wpb_wrapper">
                                        <p style={{ textAlign: "center" }}>
                                          <span style={{ color: "#999999" }}>
                                            <em>
                                              {t("menuPage.warningHalfPrice")}
                                            </em>
                                          </span>
                                        </p>
                                        <p style={{ textAlign: "center" }}>
                                          <span style={{ color: "#999999" }}>
                                            <em>
                                              {t("menuPage.servicePrice")}
                                            </em>
                                          </span>
                                        </p>
                                        <p style={{ textAlign: "center" }}>
                                          <span style={{ color: "#999999" }}>
                                            <em>{t("menuPage.allergies")}</em>
                                          </span>
                                        </p>
                                      </div>
                                    </div>
                                    <div class="vc_row wpb_row vc_inner vc_row-fluid vc_custom_1501952123390">
                                      <div class="wpb_column vc_column_container vc_col-sm-6">
                                        <div class="vc_column-inner">
                                          <div class="wpb_wrapper">
                                            <div class="mgt-header-block clearfix text-left text-black wpb_animate_when_almost_visible wpb_fadeInLeft fadeInLeft wpb_content_element mgt-header-block-style-2 mgt-header-block-fontsize-regular mgt-header-texttransform-header mgt-header-block-28213419">
                                              <p class="mgt-header-block-subtitle">
                                                {t(
                                                  "menuPage.sesionalMenuShort"
                                                )}
                                              </p>
                                              <h2 class="mgt-header-block-title text-font-weight-default">
                                                {t("menuPage.soups")}
                                              </h2>
                                            </div>
                                            <div class="vc_separator wpb_content_element vc_separator_align_center vc_sep_width_100 vc_sep_border_width_3 vc_sep_pos_align_center vc_separator_no_text vc_sep_color_black wpb_animate_when_almost_visible wpb_fadeInLeft fadeInLeft wpb_animate_when_almost_visible wpb_fadeInLeft fadeInLeft">
                                              <span class="vc_sep_holder vc_sep_holder_l">
                                                <span class="vc_sep_line"></span>
                                              </span>
                                              <span class="vc_sep_holder vc_sep_holder_r">
                                                <span class="vc_sep_line"></span>
                                              </span>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-red clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp">
                                              <div class="mgt-item-price-details">
                                                <div class="mgt-item-price-line"></div>
                                                <div class="mgt-item-price-title-holder">
                                                  <h4>
                                                    {menuSlicer(
                                                      t(
                                                        "menuPage.sesionalSoup1"
                                                      ),
                                                      33,
                                                      31
                                                    )}
                                                  </h4>
                                                </div>
                                                <div class="mgt-item-price-value">
                                                  2850 Ft
                                                </div>
                                                <p class="mgt-item-price-description">
                                                  {/* {t("allergens")}: 1,3,7,9 */}
                                                </p>
                                              </div>
                                            </div>
                                            <div class="mgt-header-block clearfix text-left text-black wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp wpb_content_element mgt-header-block-style-2 mgt-header-block-fontsize-regular mgt-header-texttransform-header mgt-header-block-16188151">
                                              <p class="mgt-header-block-subtitle">
                                                {t(
                                                  "menuPage.sesionalMenuShort"
                                                )}
                                              </p>
                                              <h2 class="mgt-header-block-title text-font-weight-default">
                                                {t("menuPage.desserts")}
                                              </h2>
                                            </div>
                                            <div class="vc_separator wpb_content_element vc_separator_align_center vc_sep_width_100 vc_sep_border_width_3 vc_sep_pos_align_center vc_separator_no_text vc_sep_color_black wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp">
                                              <span class="vc_sep_holder vc_sep_holder_l">
                                                <span class="vc_sep_line"></span>
                                              </span>
                                              <span class="vc_sep_holder vc_sep_holder_r">
                                                <span class="vc_sep_line"></span>
                                              </span>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-red clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                                              <div class="mgt-item-price-details">
                                                <div class="mgt-item-price-line"></div>
                                                <div class="mgt-item-price-title-holder">
                                                  <h4>
                                                    {menuSlicer(
                                                      t(
                                                        "menuPage.sesionalDessert1"
                                                      ),
                                                      29,
                                                      29
                                                    )}
                                                  </h4>
                                                </div>
                                                <div class="mgt-item-price-value">
                                                  2240 Ft
                                                </div>
                                                <p class="mgt-item-price-description">
                                                  {/* {t("allergens")}: 1,3,7,8 */}
                                                </p>
                                              </div>
                                              {/* <div class="mgt-item-price mgt-item-price-badge-color-red clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                                                <div class="mgt-item-price-details">
                                                  <div class="mgt-item-price-line"></div>
                                                  <div class="mgt-item-price-title-holder">
                                                    <h4>
                                                      {menuSlicer(
                                                        t(
                                                          "menuPage.sesionalDessert2"
                                                        ),
                                                        26,
                                                        26
                                                      )}
                                                    </h4>
                                                  </div>
                                                  <div class="mgt-item-price-value">
                                                    1200 Ft
                                                  </div>
                                                  <p class="mgt-item-price-description">
                                                    {t("allergens")}: 3,7
                                                  </p>
                                                </div>
                                              </div> */}
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div class="wpb_column vc_column_container vc_col-sm-6">
                                        <div class="vc_column-inner">
                                          <div class="wpb_wrapper">
                                            <div class="mgt-header-block clearfix text-left text-black wpb_animate_when_almost_visible wpb_fadeInRight fadeInRight wpb_content_element mgt-header-block-style-2 mgt-header-block-fontsize-regular mgt-header-texttransform-header mgt-header-block-82732155">
                                              <p class="mgt-header-block-subtitle">
                                                {t(
                                                  "menuPage.sesionalMenuShort"
                                                )}
                                              </p>
                                              <h2 class="mgt-header-block-title text-font-weight-default">
                                                {t("menuPage.mainDishes")}
                                              </h2>
                                            </div>
                                            <div class="vc_separator wpb_content_element vc_separator_align_center vc_sep_width_100 vc_sep_border_width_3 vc_sep_pos_align_center vc_separator_no_text vc_sep_color_black wpb_animate_when_almost_visible wpb_fadeInRight fadeInRight wpb_animate_when_almost_visible wpb_fadeInRight fadeInRight">
                                              <span class="vc_sep_holder vc_sep_holder_l">
                                                <span class="vc_sep_line"></span>
                                              </span>
                                              <span class="vc_sep_holder vc_sep_holder_r">
                                                <span class="vc_sep_line"></span>
                                              </span>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-red clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                                              <div class="mgt-item-price-details">
                                                <div class="mgt-item-price-line"></div>
                                                <div class="mgt-item-price-title-holder">
                                                  <h4>
                                                    {menuSlicer(
                                                      t(
                                                        "menuPage.sesionalMainDish1"
                                                      ),
                                                      26,
                                                      26
                                                    )}
                                                  </h4>
                                                </div>
                                                <div class="mgt-item-price-value">
                                                  4480 Ft
                                                </div>
                                                <p class="mgt-item-price-description">
                                                  {/* {t("allergens")}: 1,3,7,10 */}
                                                </p>
                                              </div>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-black clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                                              <div class="mgt-item-price-details">
                                                <div class="mgt-item-price-line"></div>
                                                <div class="mgt-item-price-title-holder">
                                                  <h4>
                                                    {menuSlicer(
                                                      t(
                                                        "menuPage.sesionalMainDish2"
                                                      ),
                                                      28,
                                                      32
                                                    )}
                                                  </h4>
                                                </div>
                                                <div class="mgt-item-price-value">
                                                  3680 Ft
                                                </div>
                                                <p class="mgt-item-price-description">
                                                  {/* {t("allergens")}: 1,3,4,7 */}
                                                </p>
                                              </div>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-black clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                                              <div class="mgt-item-price-details">
                                                <div class="mgt-item-price-line"></div>
                                                <div class="mgt-item-price-title-holder">
                                                  <h4>
                                                    {menuSlicer(
                                                      t(
                                                        "menuPage.sesionalMainDish3"
                                                      ),
                                                      25,
                                                      29
                                                    )}
                                                  </h4>
                                                </div>
                                                <div class="mgt-item-price-value">
                                                  7980 Ft
                                                </div>
                                                <p class="mgt-item-price-description">
                                                  {/* {t("allergens")}: 1,3,7,12 */}
                                                </p>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
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
      <Footer />
    </div>
  );
};

export default Menu;
