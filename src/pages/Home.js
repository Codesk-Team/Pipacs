import React from "react";
import Footer from "../layout/Footer";
import Header from "../layout/Header";
import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div class="home page-template-default page page-id-3699 wpb-js-composer js-comp-ver-5.2.1 vc_responsive">
      <Header />

      <div class="content-block stick-to-footer">
        <div class="page-container container">
          <div class="row">
            <div class="col-md-12 entry-content">
              <article>
                <div
                  data-vc-full-width="true"
                  data-vc-full-width-init="false"
                  data-vc-stretch-content="true"
                  class="vc_row wpb_row vc_row-fluid vc_row-no-padding"
                >
                  <div class="wpb_column vc_column_container vc_col-sm-12">
                    <div class="vc_column-inner">
                      <div class="wpb_wrapper">
                        <div class="wpb_revslider_element wpb_content_element">
                          <div
                            id="rev_slider_2_1_wrapper"
                            class="rev_slider_wrapper fullscreen-container"
                            data-source="gallery"
                            style={{
                              background: "transparent",
                              padding: "0px",
                            }}
                          >
                            {/* START REVOLUTION SLIDER 5.4.5.1 fullscreen mode */}
                            <div
                              id="rev_slider_2_1"
                              class="rev_slider fullscreenbanner"
                              style={{ display: "none" }}
                              data-version="5.4.5.1"
                            >
                              <ul>
                                {/* <!-- SLIDE  --> */}
                                <li
                                  data-index="rs-7"
                                  data-transition="slidingoverlayright"
                                  data-slotamount="default"
                                  data-hideafterloop="0"
                                  data-hideslideonmobile="off"
                                  data-easein="default"
                                  data-easeout="default"
                                  data-masterspeed="default"
                                  data-thumb="assets/img/home_pipacs_main1.webp"
                                  data-rotate="0"
                                  data-saveperformance="off"
                                  data-title="Welcome"
                                  data-param1=""
                                  data-param2=""
                                  data-param3=""
                                  data-param4=""
                                  data-param5=""
                                  data-param6=""
                                  data-param7=""
                                  data-param8=""
                                  data-param9=""
                                  data-param10=""
                                  data-description=""
                                >
                                  {/* <!-- MAIN IMAGE --> */}
                                  <img
                                    src="assets/img/home_pipacs_main1.webp"
                                    alt=""
                                    title="mussels-blacktable"
                                    width="1600"
                                    height="1067"
                                    data-bgposition="center center"
                                    data-bgfit="cover"
                                    data-bgrepeat="no-repeat"
                                    class="rev-slidebg"
                                    data-no-retina
                                  />
                                  {/* <!-- LAYERS --> */}

                                  {/* <!-- LAYER NR. 1 --> */}
                                  <div
                                    class="tp-caption tp-shape tp-shapewrapper tp-resizeme"
                                    id="slide-7-layer-8"
                                    data-x="['center','center','center','center']"
                                    data-hoffset="['0','0','0','0']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-voffset="['0','0','0','0']"
                                    data-width="100%"
                                    data-height="full"
                                    data-whitespace="nowrap"
                                    data-type="shape"
                                    data-basealign="slide"
                                    data-responsive_offset="on"
                                    data-frames='[{"delay":20,"speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                    data-textAlign="['inherit','inherit','inherit','inherit']"
                                    data-paddingtop="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]"
                                    style={{
                                      zIndex: "5",
                                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                                    }}
                                  ></div>

                                  {/* <!-- LAYER NR. 2 --> */}
                                  <h1
                                    class="tp-caption tp-resizeme"
                                    id="slide-7-layer-1"
                                    data-x="['center','center','center','center']"
                                    data-hoffset="['0','0','0','0']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-voffset="['0','0','0','-57']"
                                    data-fontsize="['60','60','60','45']"
                                    data-lineheight="['65','65','65','48']"
                                    data-letterspacing="['-2','-2','-2','']"
                                    data-width="['780','780','780','436']"
                                    data-height="none"
                                    data-whitespace="normal"
                                    data-type="text"
                                    data-responsive_offset="on"
                                    data-frames='[{"delay":20,"speed":2000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"opacity:0;","ease":"Power2.easeIn"}]'
                                    data-textAlign="['center','center','center','center']"
                                    data-paddingtop="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]"
                                    style={{
                                      zIndex: "6",
                                      minWidth: "780px",
                                      maxWidth: "780px",
                                      whiteSpace: "normal",
                                      fontSize: "60px",
                                      lineHeight: "65px",
                                      fontWeight: "400",
                                      color: "rgba(255, 255, 255, 1)",
                                      letterSpacing: "-2px",
                                      fontFamily: "Sorts Mill Goudy",
                                    }}
                                  >
                                    {/* A Pipacs Étterem & Panzió */}
                                    {t("homePage.restaurantAndGuestHouse")}
                                  </h1>

                                  {/* <!-- LAYER NR. 3 --> */}
                                  <div
                                    class="tp-caption tp-resizeme"
                                    id="slide-7-layer-3"
                                    data-x="['center','center','center','center']"
                                    data-hoffset="['0','0','0','0']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-voffset="['92','92','92','50']"
                                    data-lineheight="['27','27','27','35']"
                                    data-color="['rgb(155,155,155)','rgb(155,155,155)','rgb(155,155,155)','rgb(183,183,183)']"
                                    data-letterspacing="['3','3','3','-']"
                                    data-width="['none','none','none','410']"
                                    data-height="none"
                                    data-whitespace="['nowrap','nowrap','nowrap','normal']"
                                    data-type="text"
                                    data-responsive_offset="on"
                                    data-frames='[{"delay":260,"speed":2000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"opacity:0;","ease":"Power2.easeIn"}]'
                                    data-textAlign="['center','center','center','center']"
                                    data-paddingtop="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]"
                                    style={{
                                      zIndex: "7",
                                      whiteSpace: "nowrap",
                                      fontSize: "16px",
                                      lineHeight: "27px",
                                      fontWeight: "400",
                                      color: "#9b9b9b",
                                      letterSpacing: "3px",
                                      fontFamily: "Cabin",
                                    }}
                                  >
                                    {/* Weboldalán */}
                                    {t("homePage.webpage")}
                                  </div>

                                  {/* <!-- LAYER NR. 4 --> */}
                                  <a
                                    class="tp-caption rev-btn"
                                    href="about-us"
                                    target="_self"
                                    id="slide-7-layer-14"
                                    data-x="['center','center','center','center']"
                                    data-hoffset="['0','0','0','0']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-voffset="['184','184','184','145']"
                                    data-color="['rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)','rgba(255,255,255,1)']"
                                    data-width="none"
                                    data-height="none"
                                    data-whitespace="nowrap"
                                    data-type="button"
                                    data-actions=""
                                    data-responsive_offset="on"
                                    data-frames='[{"delay":20,"speed":2000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"opacity:0;","ease":"Power2.easeIn"},{"frame":"hover","speed":"500","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgb(255,255,255);bg:rgb(25,18,13);bs:solid;bw:0 0 0 0;"}]'
                                    data-textAlign="['inherit','inherit','inherit','inherit']"
                                    data-paddingtop="[20,20,20,20]"
                                    data-paddingright="[50,50,50,50]"
                                    data-paddingbottom="[20,20,20,20]"
                                    data-paddingleft="[50,50,50,50]"
                                    style={{
                                      zIndex: "8",
                                      whiteSpace: "nowrap",
                                      fontSize: "18px",
                                      lineHeight: "17px",
                                      fontWeight: "400",
                                      color: "#ffffff",
                                      fontFamily: "Cabin",
                                      backgroundColor: "rgb(198, 159, 124)",
                                      borderColor: "rgba(0, 0, 0, 1)",
                                      borderRadius: "30px 30px 30px 30px",
                                      outline: "none",
                                      boxShadow: "none",
                                      boxSizing: "border-box",
                                      // -moz-box-sizing: border-box;
                                      // -webkit-box-sizing: border-box;
                                      cursor: "pointer",
                                      textDecoration: "none",
                                    }}
                                  >
                                    {/* Rólunk */}
                                    {t("aboutUs")}
                                  </a>

                                  {/* <!-- LAYER NR. 5 --> */}
                                  <h1
                                    class="tp-caption tp-resizeme"
                                    id="slide-7-layer-16"
                                    data-x="['center','center','center','center']"
                                    data-hoffset="['0','0','0','0']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-voffset="['-130','-130','-130','-188']"
                                    data-fontsize="['120','120','120','60']"
                                    data-lineheight="['65','65','65','50']"
                                    data-width="['507','507','507','436']"
                                    data-height="['82','82','82','none']"
                                    data-whitespace="normal"
                                    data-type="text"
                                    data-responsive_offset="on"
                                    data-frames='[{"delay":20,"speed":2000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"opacity:0;","ease":"Power2.easeIn"}]'
                                    data-textAlign="['center','center','center','center']"
                                    data-paddingtop="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]"
                                    style={{
                                      zIndex: "9",
                                      minWidth: "507px",
                                      maxWidth: "507px",
                                      maxWidth: "82px",
                                      maxWidth: "82px",
                                      whiteSpace: "normal",
                                      fontSize: "120px",
                                      lineHeight: "65px",
                                      fontWeight: "400",
                                      color: "#c69f7c",
                                      fontFamily: "Alex Brush",
                                    }}
                                  >
                                    {/* Üdvözöljük */}
                                    {t("homePage.welcome")}
                                  </h1>
                                </li>
                                {/* <!-- SLIDE  --> */}
                                <li
                                  data-index="rs-9"
                                  data-transition="slidingoverlayhorizontal"
                                  data-slotamount="default"
                                  data-hideafterloop="0"
                                  data-hideslideonmobile="off"
                                  data-easein="default"
                                  data-easeout="default"
                                  data-masterspeed="default"
                                  data-thumb="assets/img/home_pipacs_main2.webp"
                                  data-rotate="0"
                                  data-saveperformance="off"
                                  data-title="Menu"
                                  data-param1=""
                                  data-param2=""
                                  data-param3=""
                                  data-param4=""
                                  data-param5=""
                                  data-param6=""
                                  data-param7=""
                                  data-param8=""
                                  data-param9=""
                                  data-param10=""
                                  data-description=""
                                >
                                  {/* <!-- MAIN IMAGE --> */}
                                  <img
                                    src="assets/img/home_pipacs_main2.webp"
                                    alt=""
                                    title="barmen-coctail"
                                    width="1600"
                                    height="2395"
                                    data-bgposition="center center"
                                    data-bgfit="cover"
                                    data-bgrepeat="no-repeat"
                                    class="rev-slidebg"
                                    data-no-retina
                                  />
                                  {/* <!-- LAYERS --> */}

                                  {/* <!-- LAYER NR. 6 --> */}
                                  <div
                                    class="tp-caption tp-shape tp-shapewrapper tp-resizeme"
                                    id="slide-9-layer-8"
                                    data-x="['center','center','center','center']"
                                    data-hoffset="['0','0','0','0']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-voffset="['0','0','0','0']"
                                    data-width="100%"
                                    data-height="full"
                                    data-whitespace="nowrap"
                                    data-type="shape"
                                    data-basealign="slide"
                                    data-responsive_offset="on"
                                    data-frames='[{"delay":20,"speed":300,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":300,"frame":"999","to":"opacity:0;","ease":"Power3.easeInOut"}]'
                                    data-textAlign="['inherit','inherit','inherit','inherit']"
                                    data-paddingtop="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]"
                                    style={{
                                      zIndex: "5",
                                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                                    }}
                                  ></div>

                                  {/* <!-- LAYER NR. 7 --> */}
                                  <h1
                                    class="tp-caption tp-resizeme"
                                    id="slide-9-layer-1"
                                    data-x="['center','center','center','center']"
                                    data-hoffset="['0','0','0','0']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-voffset="['0','0','0','-57']"
                                    data-fontsize="['60','60','60','45']"
                                    data-lineheight="['65','65','65','50']"
                                    data-letterspacing="['-2','-2','-2','']"
                                    data-width="['628','628','628','436']"
                                    data-height="['132','132','132','none']"
                                    data-whitespace="normal"
                                    data-type="text"
                                    data-responsive_offset="on"
                                    data-frames='[{"delay":20,"speed":2000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"opacity:0;","ease":"Power2.easeIn"}]'
                                    data-textAlign="['center','center','center','center']"
                                    data-paddingtop="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]"
                                    style={{
                                      zIndex: "6",
                                      minWidth: "628px",
                                      maxWidth: "628px",
                                      maxWidth: "132px",
                                      maxWidth: "132px",
                                      whiteSpace: "normal",
                                      fontSize: "60px",
                                      lineHeight: "65px",
                                      fontWeight: "400",
                                      color: "rgba(255, 255, 255, 1)",
                                      letterSpacing: "-2px",
                                      fontFamily: "Sorts Mill Goudy",
                                    }}
                                  >
                                    {/* A Pipacs Étterem & Panzió */}
                                    {t("homePage.restaurantAndGuestHouse")}
                                  </h1>

                                  {/* <!-- LAYER NR. 8 --> */}
                                  <div
                                    class="tp-caption tp-resizeme"
                                    id="slide-9-layer-3"
                                    data-x="['center','center','center','center']"
                                    data-hoffset="['0','0','0','0']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-voffset="['92','92','92','30']"
                                    data-lineheight="['27','27','27','35']"
                                    data-color="['rgb(155,155,155)','rgb(155,155,155)','rgb(155,155,155)','rgb(188,188,188)']"
                                    data-letterspacing="['3','3','3','-']"
                                    data-width="['none','none','none','410']"
                                    data-height="none"
                                    data-whitespace="['nowrap','nowrap','nowrap','normal']"
                                    data-type="text"
                                    data-responsive_offset="on"
                                    data-frames='[{"delay":260,"speed":2000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","mask":"x:0px;y:[100%];s:inherit;e:inherit;","to":"o:1;","ease":"Power2.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"opacity:0;","ease":"Power2.easeIn"}]'
                                    data-textAlign="['center','center','center','center']"
                                    data-paddingtop="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]"
                                    // style="z-index: 7; white-space: nowrap; font-size: 16px; line-height: 27px; font-weight: 400; color: #9b9b9b; letter-spacing: 3px; font-family: Cabin;"
                                  >
                                    {/* Weboldalán */}
                                    {t("homePage.webpage")}
                                  </div>

                                  {/* <!-- LAYER NR. 9 --> */}
                                  <a
                                    class="tp-caption rev-btn"
                                    href="rooms"
                                    target="_self"
                                    id="slide-9-layer-14"
                                    data-x="['center','center','center','center']"
                                    data-hoffset="['0','0','0','0']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-voffset="['184','184','184','135']"
                                    data-color="['rgb(255,255,255)','rgb(255,255,255)','rgb(255,255,255)','rgba(255,255,255,1)']"
                                    data-width="none"
                                    data-height="none"
                                    data-whitespace="nowrap"
                                    data-type="button"
                                    data-actions=""
                                    data-responsive_offset="on"
                                    data-frames='[{"delay":20,"speed":2000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"opacity:0;","ease":"Power2.easeIn"},{"frame":"hover","speed":"500","ease":"Linear.easeNone","to":"o:1;rX:0;rY:0;rZ:0;z:0;","style":"c:rgb(255,255,255);bg:rgb(25,18,13);bs:solid;bw:0 0 0 0;"}]'
                                    data-textAlign="['inherit','inherit','inherit','inherit']"
                                    data-paddingtop="[20,20,20,20]"
                                    data-paddingright="[50,50,50,50]"
                                    data-paddingbottom="[20,20,20,20]"
                                    data-paddingleft="[50,50,50,50]"
                                    style={{
                                      zIndex: "8",
                                      whiteSpace: "nowrap",
                                      fontSize: "18px",
                                      lineHeight: "17px",
                                      fontWeight: "400",
                                      color: "#ffffff",
                                      fontFamily: "Cabin",
                                      backgroundColor: "rgb(198, 159, 124)",
                                      borderColor: "rgba(0, 0, 0, 1)",
                                      borderRadius: "30px 30px 30px 30px",
                                      outline: "none",
                                      boxShadow: "none",
                                      boxSizing: "border-box",
                                      // -moz-box-sizing: border-box;
                                      // -webkit-box-sizing: border-box;
                                      cursor: "pointer",
                                      textDecoration: "none",
                                    }}
                                  >
                                    {/* Szobák */}
                                    {t("rooms")}
                                  </a>

                                  {/* <!-- LAYER NR. 10 --> */}
                                  <h1
                                    class="tp-caption tp-resizeme"
                                    id="slide-9-layer-16"
                                    data-x="['center','center','center','center']"
                                    data-hoffset="['0','0','0','0']"
                                    data-y="['middle','middle','middle','middle']"
                                    data-voffset="['-130','-130','-130','-161']"
                                    data-fontsize="['120','120','120','60']"
                                    data-lineheight="['65','65','65','50']"
                                    data-width="['none','none','none','436']"
                                    data-height="['81','81','81','none']"
                                    data-whitespace="normal"
                                    data-type="text"
                                    data-responsive_offset="on"
                                    data-frames='[{"delay":20,"speed":2000,"frame":"0","from":"y:[100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;opacity:0;","to":"o:1;","ease":"Power4.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"opacity:0;","ease":"Power2.easeIn"}]'
                                    data-textAlign="['center','center','center','center']"
                                    data-paddingtop="[0,0,0,0]"
                                    data-paddingright="[0,0,0,0]"
                                    data-paddingbottom="[0,0,0,0]"
                                    data-paddingleft="[0,0,0,0]"
                                    style={{
                                      zIndex: "9",
                                      maxWidth: "81px",
                                      maxWidth: "81px",
                                      whiteSpace: "normal",
                                      fontFize: "120px",
                                      lineHeight: "65px",
                                      fontWeight: "400",
                                      color: "#c69f7c",
                                      fontFamily: "Alex Brush",
                                    }}
                                  >
                                    {/* Üdvözöljük */}
                                    {t("homePage.welcome")}
                                  </h1>
                                </li>
                              </ul>
                              <div
                                class="tp-bannertimer tp-bottom"
                                style={{ visibility: "hidden !important" }}
                              ></div>
                            </div>
                          </div>
                          {/* <!-- END REVOLUTION SLIDER --> */}
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
                        <div class="mgt-promo-block-container wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp">
                          <div class="mgt-promo-block-wrapper mgt-promo-block-hover">
                            <div
                              class="mgt-promo-block animated white-text cover-image darken mgt-promo-block-66293803"
                              data-style="background-color: #ffffff;background-image: url(assets/img/about_us_pipacs_food7.webp);background-repeat: no-repeat;height: 420px;"
                            >
                              <div class="mgt-promo-block-content va-middle">
                                <div class="mgt-promo-block-content-inside vc_custom_1502111254458">
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
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="wpb_column vc_column_container vc_col-sm-6">
                    <div class="vc_column-inner vc_custom_1501610544677">
                      <div class="wpb_wrapper">
                        <div class="mgt-promo-block-container wpb_content_element wpb_animate_when_almost_visible wpb_fadeInRight fadeInRight">
                          <div class="mgt-promo-block-wrapper mgt-promo-block-hover">
                            <div
                              class="mgt-promo-block animated white-text cover-image darken mgt-promo-block-65740325"
                              data-style="background-color: #ffffff;background-image: url(assets/img/about_us_pipacs_bed2.webp);background-repeat: no-repeat;height: 420px;"
                            >
                              <div class="mgt-promo-block-content va-middle">
                                <div class="mgt-promo-block-content-inside vc_custom_1502119337451">
                                  <h5 style={{ textAlign: "center" }}>
                                    {/* Teljes kikapcsolódás */}
                                    {t("totalRelax")}
                                  </h5>
                                  <h2 style={{ textAlign: "center" }}>
                                    {/* Tekintse meg */}
                                    {t("lookAt")}
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
                    <div class="vc_column-inner vc_custom_1502119248785">
                      <div class="wpb_wrapper">
                        <div class="mgt-header-block clearfix text-left text-black wpb_animate_when_almost_visible wpb_fadeInDown fadeInDown wpb_content_element mgt-header-block-style-2 mgt-header-block-fontsize-medium mgt-header-texttransform-none mgt-header-block-2224038">
                          <p class="mgt-header-block-subtitle">
                            {/* Pipacs */}
                            {t("pipacs")}
                          </p>
                          <h2 class="mgt-header-block-title text-font-weight-default">
                            {/* A termőföldünkről egyenesen a konyhánkba */}
                            {t("fromSoilToKitchen")}
                          </h2>
                          <div class="mgt-header-line mgt-header-line-margin-large"></div>
                        </div>
                        <div class="wpb_text_column wpb_content_element wpb_animate_when_almost_visible wpb_fadeInLeft fadeInLeft text-size-medium">
                          <div class="wpb_wrapper">
                            <p>
                              <span style={{ color: "#999999" }}>
                                {/* 2021 júniusában nyitottuk meg éttermünket azzal
                                a céllal, hogy a saját termelésű alapanyagaink
                                közvetlenül, ne kizárólagosan csak a fine dining
                                éttermeken keresztül jussanak el hozzátok. A
                                birtokunkról érkezik a Keleméri bárány, a szabad
                                tartású csirke és a vadon termő gyümölcsök is. */}
                                {t("homePage.ourPurpose")}
                              </span>
                            </p>
                          </div>
                        </div>
                        <div class="mgt-button-wrapper mgt-button-wrapper-align-left mgt-button-wrapper-display-inline mgt-button-top-margin-false mgt-button-right-margin-false mgt-button-round-edges-full wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                          <a
                            class="btn hvr-push mgt-button-icon- mgt-button mgt-style-solid mgt-size-normal mgt-align-left mgt-display-inline mgt-text-size-normal mgt-button-icon-separator- mgt-button-icon-position-left text-font-weight-default mgt-text-transform-none"
                            href="about-us-restaurant.html"
                          >
                            {/* Rólunk  */}
                            {t("aboutUs")}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="wpb_column vc_column_container vc_col-sm-5">
                    <div class="vc_column-inner">
                      <div class="wpb_wrapper">
                        <div class="mgt-promo-block-container wpb_content_element wpb_animate_when_almost_visible wpb_fadeInRight fadeInRight">
                          <div class="mgt-promo-block-wrapper mgt-promo-block-hover">
                            <div
                              class="mgt-promo-block animated white-text cover-image no-darken mgt-promo-block-69094683"
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
                              class="mgt-promo-block black-text cover-image no-darken mgt-promo-block-59326650"
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
                              class="mgt-promo-block black-text cover-image no-darken mgt-promo-block-11490570"
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
                              class="mgt-promo-block black-text cover-image no-darken mgt-promo-block-73119794"
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
                <div
                  data-vc-full-width="true"
                  data-vc-full-width-init="false"
                  class="vc_row wpb_row vc_row-fluid vc_custom_1501767193871"
                >
                  <div class="wpb_column vc_column_container vc_col-sm-12">
                    <div class="vc_column-inner">
                      <div class="wpb_wrapper">
                        <div class="mgt-header-block clearfix text-center text-black wpb_animate_when_almost_visible wpb_fadeInDown fadeInDown wpb_content_element mgt-header-block-style-2 mgt-header-block-fontsize-medium mgt-header-texttransform-none mgt-header-block-65407710">
                          <p class="mgt-header-block-subtitle">
                            {/* Étlap */}
                            {t("menu")}
                          </p>
                          <h2 class="mgt-header-block-title text-font-weight-default">
                            {/* Főmenü */}
                            {t("mainMenu")}
                          </h2>
                          <div class="mgt-header-line mgt-header-line-margin-large"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="vc_row-full-width vc_clearfix"></div>
                <div class="vc_row wpb_row vc_row-fluid vc_custom_1501769916408">
                  <div class="wpb_column vc_column_container vc_col-sm-6">
                    <div class="vc_column-inner">
                      <div class="wpb_wrapper">
                        <div class="mgt-item-price mgt-item-price-badge-color-black clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                          <div class="mgt-item-price-details">
                            <div class="mgt-item-price-line"></div>
                            <div class="mgt-item-price-title-holder">
                              <h4>
                                {/* Mangalica és vízi bivaly ízelítő */}
                                {t("homePage.menuOnePartOne")} <br />
                                {/* házi zöldség krémekkel és kovászos kenyérrel */}
                                {t("homePage.menuOnePartTwo")}
                              </h4>
                            </div>
                            <div class="mgt-item-price-value">2700 Ft</div>
                            <p class="mgt-item-price-description">
                              {/* Allergének: 1,7 */}
                              {t("allergens")}: 1,7
                            </p>
                          </div>
                        </div>
                        <div class="mgt-item-price mgt-item-price-badge-color-black clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                          <div class="mgt-item-price-details">
                            <div class="mgt-item-price-line"></div>
                            <div class="mgt-item-price-title-holder">
                              <h4>
                                {/* Tanyasi tyúkhúsleves zöldségekkel és
                                csigatésztával */}
                                {t("homePage.menuTwo")}
                              </h4>
                            </div>
                            <div class="mgt-item-price-value">2040 Ft</div>
                            <p class="mgt-item-price-description">
                              {/* Allergének: 1,3,9 */}
                              {t("allergens")}: 1,3,9
                            </p>
                          </div>
                        </div>
                        <div class="mgt-item-price mgt-item-price-badge-color-black clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                          <div class="mgt-item-price-details">
                            <div class="mgt-item-price-line"></div>
                            <div class="mgt-item-price-title-holder">
                              <h4>
                                {/* Tárkonyos báránygombóc leves friss tejföllel */}
                                {t("homePage.menuThree")}
                              </h4>
                            </div>
                            <div class="mgt-item-price-value">2475 Ft</div>
                            <p class="mgt-item-price-description">
                              {/* Allergének: 3,7,9 */}
                              {t("allergens")}: 3,7,9
                            </p>
                          </div>
                        </div>
                        <div class="mgt-item-price mgt-item-price-badge-color-black clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                          <div class="mgt-item-price-details">
                            <div class="mgt-item-price-line"></div>
                            <div class="mgt-item-price-title-holder">
                              <h4>
                                {/* Egészben sült szilvásváradi pisztráng friss
                                fűszernövényekkel */}
                                {t("homePage.menuFour")}
                              </h4>
                            </div>
                            <div class="mgt-item-price-value">3590 Ft</div>
                            <p class="mgt-item-price-description">
                              {/* Allergének: 1,3,4,7 */}
                              {t("allergens")}: 1,3,4,7
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="wpb_column vc_column_container vc_col-sm-6">
                    <div class="vc_column-inner">
                      <div class="wpb_wrapper">
                        <div class="mgt-item-price mgt-item-price-badge-color-black clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                          <div class="mgt-item-price-details">
                            <div class="mgt-item-price-line"></div>
                            <div class="mgt-item-price-title-holder">
                              <h4>
                                {/* Keleméri birkapörkölt sztrapacskával kézműves
                                savanyúsággal */}
                                {t("homePage.menuFive")}
                              </h4>
                            </div>
                            <div class="mgt-item-price-value">3880 Ft</div>
                            <p class="mgt-item-price-description">
                              {/* Allergének: 1,3,7 */}
                              {t("allergens")}: 1,3,7
                            </p>
                          </div>
                        </div>
                        <div class="mgt-item-price mgt-item-price-badge-color-black clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                          <div class="mgt-item-price-details">
                            <div class="mgt-item-price-line"></div>
                            <div class="mgt-item-price-title-holder">
                              <h4>
                                {/* Túrógombóc házi tejföllel */}
                                {t("homePage.menuSix")}
                              </h4>
                            </div>
                            <div class="mgt-item-price-value">1620 Ft</div>
                            <p class="mgt-item-price-description">
                              {/* Allergének: 1,3,7,8,5 */}
                              {t("allergens")}: 1,3,7,8,5
                            </p>
                          </div>
                        </div>
                        <div class="mgt-item-price mgt-item-price-badge-color-black clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                          <div class="mgt-item-price-details">
                            <div class="mgt-item-price-line"></div>
                            <div class="mgt-item-price-title-holder">
                              <h4>
                                {/* Erdei gyümölcsökkel töltött gratinírozott
                                palacsinta */}
                                {t("homePage.menuSeven")}
                              </h4>
                            </div>
                            <div class="mgt-item-price-value">1540 Ft</div>
                            <p class="mgt-item-price-description">
                              {/* Allergének: 1,3,7,12 */}
                              {t("allergens")}: 1,3,7,12
                            </p>
                          </div>
                        </div>
                        <div class="mgt-item-price mgt-item-price-badge-color-black clearfix wpb_content_element wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                          <div class="mgt-item-price-details">
                            <div class="mgt-item-price-line"></div>
                            <div class="mgt-item-price-title-holder">
                              <h4>
                                {/* Cigánypecsenye */}
                                {t("homePage.menuEight")}
                              </h4>
                            </div>
                            <div class="mgt-item-price-value">3920 Ft</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="vc_row wpb_row vc_row-fluid vc_custom_1501771059262">
                  <div class="wpb_column vc_column_container vc_col-sm-12">
                    <div class="vc_column-inner">
                      <div class="wpb_wrapper">
                        <div class="mgt-button-wrapper mgt-button-wrapper-align-center mgt-button-wrapper-display-newline mgt-button-top-margin-true mgt-button-right-margin-false mgt-button-round-edges-full wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp">
                          <a
                            class="btn hvr-push mgt-button-icon- mgt-button mgt-style-bordered mgt-size-normal mgt-align-center mgt-display-newline mgt-text-size-normal mgt-button-icon-separator- mgt-button-icon-position-left text-font-weight-default mgt-text-transform-none"
                            href="menu"
                          >
                            {/* Teljes étlap */}
                            {t("homePage.fullMenu")}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-vc-full-width="true"
                  data-vc-full-width-init="false"
                  data-vc-stretch-content="true"
                  data-vc-parallax="1.5"
                  data-vc-parallax-image="assets/img/about_us_pipacs_food4.webp"
                  class="vc_row wpb_row vc_row-fluid vc_custom_1501853930727 vc_row-has-fill vc_row-no-padding vc_general vc_parallax vc_parallax-content-moving"
                >
                  <div class="wpb_column vc_column_container vc_col-sm-12">
                    <div class="vc_column-inner">
                      <div class="wpb_wrapper">
                        <h2
                          style={{
                            fontSize: "55px",
                            color: "#c69f7c",
                            lineHeight: "58px",
                            textAlign: "center",
                            fontFamily: "Alex Brush",
                            fontWeight: "400",
                            fontStyle: "normal",
                          }}
                          class="vc_custom_heading"
                        >
                          {/* Tapasztalja meg Ön is */}
                          {t("homePage.feelByYourself")}
                        </h2>
                        <h2
                          style={{
                            fontSize: "65px",
                            color: "#ffffff",
                            lineHeight: "68px",
                            textAlign: "center",
                          }}
                          class="vc_custom_heading"
                        >
                          {/* Mindig szívesen látjuk éttermünkben és panziónkban
                          egyaránt! */}
                          {t("homePage.youAreAlwysWelcome")}
                        </h2>
                        <div class="mgt-button-wrapper mgt-button-wrapper-align-center mgt-button-wrapper-display-newline mgt-button-top-margin-true mgt-button-right-margin-false mgt-button-round-edges-full wpb_animate_when_almost_visible wpb_fadeInUp fadeInUp">
                          <a
                            class="btn hvr-push mgt-button-icon- mgt-button mgt-style-solid mgt-size-large mgt-align-center mgt-display-newline mgt-text-size-normal mgt-button-icon-separator- mgt-button-icon-position-left text-font-weight-default mgt-text-transform-none"
                            href="contact-us"
                          >
                            {/* Kapcsolat */}
                            {t("contactUs")}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="vc_row-full-width vc_clearfix"></div>
                <div
                  data-vc-full-width="true"
                  data-vc-full-width-init="false"
                  class="vc_row wpb_row vc_row-fluid vc_custom_1501762265855 vc_row-has-fill"
                >
                  <div class="wpb_column vc_column_container vc_col-sm-8">
                    <div class="vc_column-inner vc_custom_1501770932758">
                      <div class="wpb_wrapper">
                        <div class="mgt-portfolio-grid wpb_content_element">
                          <div
                            class="portfolio-list portfolio-columns-4 portfolio-grid-layout-4 clearfix"
                            id="portfolio-list-76440791"
                          >
                            <div
                              class="portfolio-item-block text-left portfolio-item-animation-1 slide-item desert events fish meat"
                              data-item="1"
                              data-name="Beef Brisket Poutine"
                            >
                              <div class="portfolio-item-block-inside">
                                <a
                                  href="assets/img/home_pipacs_img2.webp"
                                  target="_self"
                                  rel="lightbox"
                                >
                                  <div
                                    class="portfolio-item-image"
                                    data-style="background-image: url(assets/img/home_pipacs_img2.webp);"
                                  ></div>
                                  <div class="portfolio-item-bg"></div>

                                  {/* <div class="info">
                                    <span class="sub-title">
                                      Dessert / Events / Fish / Meat
                                    </span>
                                    <h4 class="title">Beef Brisket Poutine</h4>
                                    <div class="project-description">
                                      Seasonal Flavours
                                    </div>
                                  </div> */}
                                </a>
                              </div>
                            </div>
                            <div
                              class="portfolio-item-block text-left portfolio-item-animation-1 slide-item desert events fish meat"
                              data-item="2"
                              data-name="Caesar Salad"
                            >
                              <div class="portfolio-item-block-inside">
                                <a
                                  href="assets/img/home_pipacs_img3.webp"
                                  target="_self"
                                  rel="lightbox"
                                >
                                  <div
                                    class="portfolio-item-image"
                                    data-style="background-image: url(assets/img/home_pipacs_img3.webp);"
                                  ></div>
                                  <div class="portfolio-item-bg"></div>

                                  {/* <div class="info">
                                    <span class="sub-title">
                                      Dessert / Events / Fish / Meat
                                    </span>
                                    <h4 class="title">Caesar Salad</h4>
                                  </div> */}
                                </a>
                              </div>
                            </div>
                            <div
                              class="portfolio-item-block text-left portfolio-item-animation-1 slide-item fish"
                              data-item="3"
                              data-name="Salmon Tartare"
                            >
                              <div class="portfolio-item-block-inside">
                                <a
                                  href="assets/img/home_pipacs_img4.webp"
                                  target="_self"
                                  rel="lightbox"
                                >
                                  <div
                                    class="portfolio-item-image"
                                    data-style="background-image: url(assets/img/home_pipacs_img4.webp);"
                                  ></div>
                                  <div class="portfolio-item-bg"></div>

                                  {/* <div class="info">
                                    <span class="sub-title">Fish</span>
                                    <h4 class="title">Salmon Tartare</h4>
                                    <div class="project-description">
                                      Chef's Menu
                                    </div>
                                  </div> */}
                                </a>
                              </div>
                            </div>
                            <div
                              class="portfolio-item-block text-left portfolio-item-animation-1 slide-item desert events fish meat"
                              data-item="1"
                              data-name="Seared Halloumi Cheese"
                            >
                              <div class="portfolio-item-block-inside">
                                <a
                                  href="assets/img/home_pipacs_img5.webp"
                                  target="_self"
                                  rel="lightbox"
                                >
                                  <div
                                    class="portfolio-item-image"
                                    data-style="background-image: url(assets/img/home_pipacs_img5.webp);"
                                  ></div>
                                  <div class="portfolio-item-bg"></div>

                                  {/* <div class="info">
                                    <span class="sub-title">
                                      Dessert / Events / Fish / Meat
                                    </span>
                                    <h4 class="title">
                                      Seared Halloumi Cheese
                                    </h4>
                                    <div class="project-description">
                                      Seasonal Flavours
                                    </div>
                                  </div> */}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="wpb_column vc_column_container vc_col-sm-4">
                    <div class="vc_column-inner vc_custom_1501770941177">
                      <div class="wpb_wrapper">
                        <div class="mgt-header-block clearfix text-left text-black wpb_animate_when_almost_visible wpb_fadeInDown fadeInDown wpb_content_element mgt-header-block-style-2 mgt-header-block-fontsize-medium mgt-header-texttransform-none mgt-header-block-46788011">
                          <p class="mgt-header-block-subtitle">
                            {/* Pipacs */}
                            {t("pipacs")}
                          </p>
                          <h2 class="mgt-header-block-title text-font-weight-default">
                            {/* Tradicionális magyar ízek */}
                            {t("homePage.traditionalTastes")}
                          </h2>
                          <div class="mgt-header-line mgt-header-line-margin-large"></div>
                        </div>
                        <div class="wpb_text_column wpb_content_element wpb_animate_when_almost_visible wpb_fadeInRight fadeInRight text-size-medium">
                          <div class="wpb_wrapper">
                            <p>
                              <span style={{ color: "#999999" }}>
                                {/* A menü összeállításról Nagy Attila séfünk
                                gondoskodik, aki tudását korábban a Parádsasvári
                                Kastély konyháján pallérozta, amit 9 évig
                                vezetett is. */}
                                {t("homePage.menuByChef")}
                              </span>
                            </p>
                            <p>
                              <span style={{ color: "#999999" }}>
                                {/* A fogásoknál főként a tradicionális magyar és a
                                helyi konyha alapízei dominálnak, kicsit
                                egyszerűen és kicsit kifinomultan is
                                egyidejűleg. */}
                                {t("homePage.localKitchen")}
                              </span>
                            </p>
                          </div>
                        </div>
                        <div class="mgt-button-wrapper mgt-button-wrapper-align-left mgt-button-wrapper-display-inline mgt-button-top-margin-false mgt-button-right-margin-false mgt-button-round-edges-full wpb_animate_when_almost_visible wpb_fadeInUpBig fadeInUpBig">
                          <a
                            class="btn hvr-push mgt-button-icon- mgt-button mgt-style-solid mgt-size-normal mgt-align-left mgt-display-inline mgt-text-size-normal mgt-button-icon-separator- mgt-button-icon-position-left text-font-weight-default mgt-text-transform-none"
                            href="about-us"
                          >
                            {/* Rólunk */}
                            {t("aboutUs")}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="vc_row-full-width vc_clearfix"></div>
              </article>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;
