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
                                                <h4>
                                                  <b>
                                                    {t("menuPage.coldPreMeal1")}{" "}
                                                  </b>
                                                  <span
                                                    style={{
                                                      fontSize: 18,
                                                      fontFamily: "cabin",
                                                    }}
                                                  >
                                                    - 3800 Ft
                                                  </span>
                                                </h4>
                                                {/* <p class="mgt-item-price-description">
                                                  {t("allergens")}: 1,7
                                                </p> */}
                                              </div>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-orange clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp">
                                              <div class="mgt-item-price-details">
                                                <h4>
                                                  <b>
                                                    {t("menuPage.coldPreMeal2")}{" "}
                                                  </b>
                                                  <span
                                                    style={{
                                                      fontSize: 18,
                                                      fontFamily: "cabin",
                                                    }}
                                                  >
                                                    - 2260 Ft
                                                  </span>
                                                </h4>
                                                {/* <p class="mgt-item-price-description">
                                                  {t("allergens")}: 7
                                                </p> */}
                                              </div>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-red clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp">
                                              <div class="mgt-item-price-details">
                                                <h4>
                                                  <b>
                                                    {t("menuPage.coldPreMeal3")}{" "}
                                                  </b>
                                                  <span
                                                    style={{
                                                      fontSize: 18,
                                                      fontFamily: "cabin",
                                                    }}
                                                  >
                                                    - 1680 Ft
                                                  </span>
                                                </h4>
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
                                                <h4>
                                                  <b>{t("menuPage.soup1")} </b>
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
                                                  <b>{t("menuPage.soup2")} </b>
                                                  <span
                                                    style={{
                                                      fontSize: 18,
                                                      fontFamily: "cabin",
                                                    }}
                                                  >
                                                    - 2280 Ft (1640 Ft)
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
                                                  <b>{t("menuPage.soup3")} </b>
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
                                                <h4>
                                                  <b>
                                                    {t("menuPage.localMeal1")}{" "}
                                                  </b>
                                                  <span
                                                    style={{
                                                      fontSize: 18,
                                                      fontFamily: "cabin",
                                                    }}
                                                  >
                                                    - 4260 Ft (2980 Ft)
                                                  </span>
                                                </h4>
                                                {/* <p class="mgt-item-price-description">
                                                  {t("allergens")}: 7
                                                </p> */}
                                              </div>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-theme clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                                              <div class="mgt-item-price-details">
                                                <h4>
                                                  <b>
                                                    {t("menuPage.localMeal2")}{" "}
                                                  </b>
                                                  <span
                                                    style={{
                                                      fontSize: 18,
                                                      fontFamily: "cabin",
                                                    }}
                                                  >
                                                    - 2680 Ft (1880 Ft)
                                                  </span>
                                                </h4>
                                                {/* <p class="mgt-item-price-description">
                                                  {t("allergens")}: 1,3,7
                                                </p> */}
                                              </div>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-red clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                                              <div class="mgt-item-price-details">
                                                <h4>
                                                  <b>
                                                    {t("menuPage.localMeal3")}{" "}
                                                  </b>
                                                  <span
                                                    style={{
                                                      fontSize: 18,
                                                      fontFamily: "cabin",
                                                    }}
                                                  >
                                                    - 2550 Ft (1580 Ft)
                                                  </span>
                                                </h4>
                                                {/* <p class="mgt-item-price-description">
                                                  {t("allergens")}: 1,3,7
                                                </p> */}
                                              </div>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-red clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                                              <div class="mgt-item-price-details">
                                                <h4>
                                                  <b>
                                                    {t("menuPage.localMeal4")}{" "}
                                                  </b>
                                                  <span
                                                    style={{
                                                      fontSize: 18,
                                                      fontFamily: "cabin",
                                                    }}
                                                  >
                                                    - 4480 Ft
                                                  </span>
                                                </h4>
                                                {/* <p class="mgt-item-price-description">
                                                  {t("allergens")}: 1,3,7
                                                </p> */}
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
                                                <h4>
                                                  <b>
                                                    {t(
                                                      "menuPage.childrenMeal1"
                                                    )}{" "}
                                                  </b>
                                                  <span
                                                    style={{
                                                      fontSize: 18,
                                                      fontFamily: "cabin",
                                                    }}
                                                  >
                                                    - 1120 Ft
                                                  </span>
                                                </h4>
                                                {/* <p class="mgt-item-price-description">
                                                  {t("allergens")}: 1,3
                                                </p> */}
                                              </div>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-theme clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                                              <div class="mgt-item-price-details">
                                                <h4>
                                                  <b>
                                                    {t(
                                                      "menuPage.childrenMeal2"
                                                    )}{" "}
                                                  </b>
                                                  <span
                                                    style={{
                                                      fontSize: 18,
                                                      fontFamily: "cabin",
                                                    }}
                                                  >
                                                    - 1120 Ft
                                                  </span>
                                                </h4>
                                                {/* <p class="mgt-item-price-description">
                                                  {t("allergens")}: 7
                                                </p> */}
                                              </div>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-red clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                                              <div class="mgt-item-price-details">
                                                <h4>
                                                  <b>
                                                    {t(
                                                      "menuPage.childrenMeal3"
                                                    )}{" "}
                                                  </b>
                                                  <span
                                                    style={{
                                                      fontSize: 18,
                                                      fontFamily: "cabin",
                                                    }}
                                                  >
                                                    - 2120 Ft
                                                  </span>
                                                </h4>
                                                {/* <p class="mgt-item-price-description">
                                                  {t("allergens")}: 1,3,7
                                                </p> */}
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
                                                <h4>
                                                  <b>
                                                    {t("menuPage.pickle1")}{" "}
                                                  </b>
                                                  <span
                                                    style={{
                                                      fontSize: 18,
                                                      fontFamily: "cabin",
                                                    }}
                                                  >
                                                    - 610 Ft
                                                  </span>
                                                </h4>
                                              </div>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-theme clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                                              <div class="mgt-item-price-details">
                                                <h4>
                                                  <b>
                                                    {t("menuPage.pickle2")}{" "}
                                                  </b>
                                                  <span
                                                    style={{
                                                      fontSize: 18,
                                                      fontFamily: "cabin",
                                                    }}
                                                  >
                                                    - 610 Ft
                                                  </span>
                                                </h4>
                                              </div>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-red clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                                              <div class="mgt-item-price-details">
                                                <h4>
                                                  <b>
                                                    {t("menuPage.pickle3")}{" "}
                                                  </b>
                                                  <span
                                                    style={{
                                                      fontSize: 18,
                                                      fontFamily: "cabin",
                                                    }}
                                                  >
                                                    - 650 Ft
                                                  </span>
                                                </h4>
                                              </div>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-red clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                                              <div class="mgt-item-price-details">
                                                <h4>
                                                  <b>
                                                    {t("menuPage.pickle4")}{" "}
                                                  </b>
                                                  <span
                                                    style={{
                                                      fontSize: 18,
                                                      fontFamily: "cabin",
                                                    }}
                                                  >
                                                    - 590 Ft
                                                  </span>
                                                </h4>
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
                                                <h4>
                                                  <b>
                                                    {t("menuPage.mainDish1")}{" "}
                                                  </b>
                                                  <span
                                                    style={{
                                                      fontSize: 18,
                                                      fontFamily: "cabin",
                                                    }}
                                                  >
                                                    - 4460 Ft
                                                  </span>
                                                </h4>
                                                {/* <p class="mgt-item-price-description">
                                                  {t("allergens")}: 4,9
                                                </p> */}
                                              </div>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-black clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                                              <div class="mgt-item-price-details">
                                                <h4>
                                                  <b>
                                                    {t("menuPage.mainDish2")}{" "}
                                                  </b>
                                                  <span
                                                    style={{
                                                      fontSize: 18,
                                                      fontFamily: "cabin",
                                                    }}
                                                  >
                                                    - 2990 Ft
                                                  </span>
                                                </h4>
                                              </div>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-black clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                                              <div class="mgt-item-price-details">
                                                <h4>
                                                  <b>
                                                    {t("menuPage.mainDish3")}{" "}
                                                  </b>
                                                  <span
                                                    style={{
                                                      fontSize: 18,
                                                      fontFamily: "cabin",
                                                    }}
                                                  >
                                                    - 3620 Ft
                                                  </span>
                                                </h4>
                                              </div>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-red clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                                              <div class="mgt-item-price-details">
                                                <h4>
                                                  <b>
                                                    {t("menuPage.mainDish4")}{" "}
                                                  </b>
                                                  <span
                                                    style={{
                                                      fontSize: 18,
                                                      fontFamily: "cabin",
                                                    }}
                                                  >
                                                    - 3990 Ft
                                                  </span>
                                                </h4>
                                              </div>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-red clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                                              <div class="mgt-item-price-details">
                                                <h4>
                                                  <b>
                                                    {t("menuPage.mainDish5")}{" "}
                                                  </b>
                                                  <span
                                                    style={{
                                                      fontSize: 18,
                                                      fontFamily: "cabin",
                                                    }}
                                                  >
                                                    - 6640 Ft
                                                  </span>
                                                </h4>
                                              </div>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-red clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                                              <div class="mgt-item-price-details">
                                                <h4>
                                                  <b>
                                                    {t("menuPage.mainDish6")}{" "}
                                                  </b>
                                                  <span
                                                    style={{
                                                      fontSize: 18,
                                                      fontFamily: "cabin",
                                                    }}
                                                  >
                                                    - 2960 Ft
                                                  </span>
                                                </h4>
                                              </div>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-red clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                                              <div class="mgt-item-price-details">
                                                <h4>
                                                  <b>
                                                    {t("menuPage.mainDish7")}{" "}
                                                  </b>
                                                  <span
                                                    style={{
                                                      fontSize: 18,
                                                      fontFamily: "cabin",
                                                    }}
                                                  >
                                                    - 3940 Ft
                                                  </span>
                                                </h4>
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
                                                <h4>
                                                  <b>
                                                    {t("menuPage.garnish1")}{" "}
                                                  </b>
                                                  <span
                                                    style={{
                                                      fontSize: 18,
                                                      fontFamily: "cabin",
                                                    }}
                                                  >
                                                    - 1130 Ft (790 Ft)
                                                  </span>
                                                </h4>
                                              </div>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-theme clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                                              <div class="mgt-item-price-details">
                                                <h4>
                                                  <b>
                                                    {t("menuPage.garnish2")}{" "}
                                                  </b>
                                                  <span
                                                    style={{
                                                      fontSize: 18,
                                                      fontFamily: "cabin",
                                                    }}
                                                  >
                                                    - 1240 Ft (870 Ft)
                                                  </span>
                                                </h4>
                                              </div>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-red clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                                              <div class="mgt-item-price-details">
                                                <h4>
                                                  <b>
                                                    {t("menuPage.garnish3")}{" "}
                                                  </b>
                                                  <span
                                                    style={{
                                                      fontSize: 18,
                                                      fontFamily: "cabin",
                                                    }}
                                                  >
                                                    - 1120 Ft (790 Ft)
                                                  </span>
                                                </h4>
                                              </div>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-red clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                                              <div class="mgt-item-price-details">
                                                <h4>
                                                  <b>
                                                    {t("menuPage.garnish4")}{" "}
                                                  </b>
                                                  <span
                                                    style={{
                                                      fontSize: 18,
                                                      fontFamily: "cabin",
                                                    }}
                                                  >
                                                    - 560 Ft (390 Ft)
                                                  </span>
                                                </h4>
                                              </div>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-red clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                                              <div class="mgt-item-price-details">
                                                <h4>
                                                  <b>
                                                    {t("menuPage.garnish5")}{" "}
                                                  </b>
                                                  <span
                                                    style={{
                                                      fontSize: 18,
                                                      fontFamily: "cabin",
                                                    }}
                                                  >
                                                    - 420 Ft
                                                  </span>
                                                </h4>
                                              </div>
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
                                                <h4>
                                                  <b>
                                                    {t("menuPage.desser1")}{" "}
                                                  </b>
                                                  <span
                                                    style={{
                                                      fontSize: 18,
                                                      fontFamily: "cabin",
                                                    }}
                                                  >
                                                    - 1910 Ft
                                                  </span>
                                                </h4>
                                              </div>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-theme clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                                              <div class="mgt-item-price-details">
                                                <h4>
                                                  <b>
                                                    {t("menuPage.desser2")}{" "}
                                                  </b>
                                                  <span
                                                    style={{
                                                      fontSize: 18,
                                                      fontFamily: "cabin",
                                                    }}
                                                  >
                                                    - 2260 Ft (1580 Ft)
                                                  </span>
                                                </h4>
                                              </div>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-red clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                                              <div class="mgt-item-price-details">
                                                <h4>
                                                  <b>
                                                    {t("menuPage.desser3")}{" "}
                                                  </b>
                                                  <span
                                                    style={{
                                                      fontSize: 18,
                                                      fontFamily: "cabin",
                                                    }}
                                                  >
                                                    - 1460 Ft
                                                  </span>
                                                </h4>
                                              </div>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-red clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                                              <div class="mgt-item-price-details">
                                                <h4>
                                                  <b>
                                                    {t("menuPage.desser4")}{" "}
                                                  </b>
                                                  <span
                                                    style={{
                                                      fontSize: 18,
                                                      fontFamily: "cabin",
                                                    }}
                                                  >
                                                    - 2210 Ft
                                                  </span>
                                                </h4>
                                              </div>
                                            </div>
                                            <div class="mgt-item-price mgt-item-price-badge-color-red clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                                              <div class="mgt-item-price-details">
                                                <h4>
                                                  <b>
                                                    {t("menuPage.desser5")}{" "}
                                                  </b>
                                                  <span
                                                    style={{
                                                      fontSize: 18,
                                                      fontFamily: "cabin",
                                                    }}
                                                  >
                                                    - 2210 Ft
                                                  </span>
                                                </h4>
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
                                                <h4>
                                                  <b>
                                                    {t(
                                                      "menuPage.sesionalSoup1"
                                                    )}{" "}
                                                  </b>
                                                  <span
                                                    style={{
                                                      fontSize: 18,
                                                      fontFamily: "cabin",
                                                    }}
                                                  >
                                                    - 2460 Ft
                                                  </span>
                                                </h4>
                                              </div>
                                              {/* <div class="mgt-item-price-details">
                                                <h4>
                                                  <b>
                                                    {t(
                                                      "menuPage.sesionalSoup2"
                                                    )}{" "}
                                                  </b>
                                                  <span
                                                    style={{
                                                      fontSize: 18,
                                                      fontFamily: "cabin",
                                                    }}
                                                  >
                                                    - 2850 Ft
                                                  </span>
                                                </h4>
                                              </div> */}
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
                                                <h4>
                                                  <b>
                                                    {t(
                                                      "menuPage.sesionalDessert1"
                                                    )}{" "}
                                                  </b>
                                                  <span
                                                    style={{
                                                      fontSize: 18,
                                                      fontFamily: "cabin",
                                                    }}
                                                  >
                                                    - 2260 Ft
                                                  </span>
                                                </h4>
                                              </div>
                                              {/* <div class="mgt-item-price mgt-item-price-badge-color-red clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                                                <div class="mgt-item-price-details">
                                                  <h4>
                                                    <b>
                                                      {t(
                                                        "menuPage.sesionalDessert2"
                                                      )}{" "}
                                                    </b>
                                                    <span
                                                      style={{
                                                        fontSize: 18,
                                                        fontFamily: "cabin",
                                                      }}
                                                    >
                                                      - 1250 Ft
                                                    </span>
                                                  </h4>
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
                                            {/* <div class="mgt-item-price mgt-item-price-badge-color-red clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig"> */}
                                            <div class="mgt-item-price-details">
                                              <h4>
                                                <b>
                                                  {t(
                                                    "menuPage.sesionalMainDish1"
                                                  )}{" "}
                                                </b>
                                                <span
                                                  style={{
                                                    fontSize: 18,
                                                    fontFamily: "cabin",
                                                  }}
                                                >
                                                  - 5420 Ft
                                                </span>
                                              </h4>
                                            </div>
                                            <div class="mgt-item-price-details">
                                              <h4>
                                                <b>
                                                  {t(
                                                    "menuPage.sesionalMainDish2"
                                                  )}{" "}
                                                </b>
                                                <span
                                                  style={{
                                                    fontSize: 18,
                                                    fontFamily: "cabin",
                                                  }}
                                                >
                                                  - 4360 Ft
                                                </span>
                                              </h4>
                                            </div>
                                            {/* <div class="mgt-item-price-details">
                                              <h4>
                                                <b>
                                                  {t(
                                                    "menuPage.sesionalMainDish3"
                                                  )}{" "}
                                                </b>
                                                <span
                                                  style={{
                                                    fontSize: 18,
                                                    fontFamily: "cabin",
                                                  }}
                                                >
                                                  - 4480 Ft
                                                </span>
                                              </h4>
                                            </div> */}
                                            {/* </div> */}

                                            {/* <div class="mgt-item-price mgt-item-price-badge-color-black clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                                              <div class="mgt-item-price-details">
                                                <h4>
                                                  <b>
                                                    {t(
                                                      "menuPage.sesionalMainDish3"
                                                    )}{" "}
                                                  </b>
                                                  <span
                                                    style={{
                                                      fontSize: 18,
                                                      fontFamily: "cabin",
                                                    }}
                                                  >
                                                    - 7980 Ft
                                                  </span>
                                                </h4>
                                              </div>
                                            </div> */}
                                          </div>
                                        </div>
                                      </div>
                                      {/* <div class="wpb_column vc_column_container vc_col-sm-6">
                                        <div class="vc_column-inner">
                                          <div class="wpb_wrapper">
                                            <div class="mgt-header-block clearfix text-left text-black wpb_animate_when_almost_visible wpb_fadeInRight fadeInRight wpb_content_element mgt-header-block-style-2 mgt-header-block-fontsize-regular mgt-header-texttransform-header mgt-header-block-82732155">
                                              <p class="mgt-header-block-subtitle">
                                                {t(
                                                  "menuPage.sesionalMenuShort"
                                                )}
                                              </p>
                                              <h2 class="mgt-header-block-title text-font-weight-default">
                                                {t(
                                                  "menuPage.sesionalWarmAppetizers"
                                                )}
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
                                                <h4>
                                                  <b>
                                                    {t(
                                                      "menuPage.sesionalWarmAppetizer1"
                                                    )}{" "}
                                                  </b>
                                                  <span
                                                    style={{
                                                      fontSize: 18,
                                                      fontFamily: "cabin",
                                                    }}
                                                  >
                                                    - 3250 Ft
                                                  </span>
                                                </h4>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div> */}
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
