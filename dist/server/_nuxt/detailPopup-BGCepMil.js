import { _ as __nuxt_component_0 } from "./index-DcwL4Y5F.js";
import { S as Swiper, a as SwiperSlide } from "./entry-styles-3.mjs-IQ1Ycl8h.js";
import { _ as _export_sfc, u as useI18n, a as __nuxt_component_2 } from "../server.mjs";
import { Navigation } from "swiper/modules";
import { ref, mergeProps, withCtx, unref, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createTextVNode, withDirectives, vShow, useSSRContext, nextTick } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderStyle } from "vue/server-renderer";
import { _ as _imports_0 } from "./close-CUfcVM9H.js";
import { H as HOW_TO_SUCCESS } from "./challengesData-Ie0NoZuw.js";
import "decimal.js";
import "hookable";
import "destr";
import "klona";
import "dayjs";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "@vue/devtools-api";
import "cookie-es";
import "ohash";
import "consola";
import "@vueuse/core";
import "@vue/shared";
import "lodash-unified";
import "deep-pick-omit";
import "jsencrypt/lib/JSEncrypt.js";
import "axios";
import "./yellow-BzR1n8Bd.js";
const _imports_1 = "" + __buildAssetsURL("detail-pic1.CNMxSAAG.png");
const _imports_2 = "" + __buildAssetsURL("detail-pic2.DO-taXTR.png");
const _imports_3 = "" + __buildAssetsURL("detail-pic3.a-afYULH.png");
const _sfc_main = {
  __name: "detailPopup",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const { t } = useI18n();
    const tipsPopupRef = ref();
    const keyValue = ref(0);
    const swiperRef = ref(null);
    const keepSwiper = ref(null);
    const onSwiper = (swiper) => {
      swiperRef.value = swiper;
    };
    const onChange = (e) => {
      keyValue.value = e.activeIndex;
    };
    const shower = (i) => {
      keyValue.value = i;
      tipsPopupRef.value.maskShow();
      nextTick(() => {
        keepSwiper.value.slideTo(i);
      });
    };
    const maskClose = () => {
      tipsPopupRef.value.maskHide();
    };
    __expose({ shower, maskClose });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_publicMaskPopup = __nuxt_component_0;
      const _component_Swiper = Swiper;
      const _component_SwiperSlide = SwiperSlide;
      const _component_nuxt_link_locale = __nuxt_component_2;
      _push(ssrRenderComponent(_component_publicMaskPopup, mergeProps({
        ref_key: "tipsPopupRef",
        ref: tipsPopupRef,
        isCenter: "",
        isClickMaskHide: false
      }, _attrs), {
        slot_mask: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="detailsPopupMain" data-v-582c0a37${_scopeId}><img class="close" alt=""${ssrRenderAttr("src", _imports_0)} data-v-582c0a37${_scopeId}><div class="dpSwiper" data-v-582c0a37${_scopeId}><div class="swiperContainer" data-v-582c0a37${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Swiper, {
              ref_key: "swiperRef",
              ref: swiperRef,
              "space-between": "20",
              modules: ["SwiperNavigation" in _ctx ? _ctx.SwiperNavigation : unref(Navigation)],
              "auto-height": true,
              navigation: {
                nextEl: ".box.next",
                prevEl: ".box.prev"
              },
              onSwiper,
              onSlideChange: onChange
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_SwiperSlide, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="swiperItem" data-v-582c0a37${_scopeId3}><p class="title" data-v-582c0a37${_scopeId3}>${ssrInterpolate(unref(t)("common.MFTChallenge"))}</p><p class="subTitle" data-v-582c0a37${_scopeId3}>${ssrInterpolate(unref(t)("Home.challenge.text18"))}</p><div class="picWrap" data-v-582c0a37${_scopeId3}><p class="name" data-v-582c0a37${_scopeId3}>MFT Challenge- step1</p><img class="pic" alt=""${ssrRenderAttr("src", _imports_1)} data-v-582c0a37${_scopeId3}></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "swiperItem" }, [
                            createVNode("p", { class: "title" }, toDisplayString(unref(t)("common.MFTChallenge")), 1),
                            createVNode("p", { class: "subTitle" }, toDisplayString(unref(t)("Home.challenge.text18")), 1),
                            createVNode("div", { class: "picWrap" }, [
                              createVNode("p", { class: "name" }, "MFT Challenge- step1"),
                              createVNode("img", {
                                class: "pic",
                                alt: "",
                                src: _imports_1
                              })
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_SwiperSlide, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="swiperItem" data-v-582c0a37${_scopeId3}><p class="title" data-v-582c0a37${_scopeId3}>${ssrInterpolate(unref(t)("common.verification"))}</p><p class="subTitle" data-v-582c0a37${_scopeId3}>${ssrInterpolate(unref(t)("Home.challenge.text19"))}</p><div class="picWrap" data-v-582c0a37${_scopeId3}><p class="name" data-v-582c0a37${_scopeId3}>MFT Challenge- step2</p><img class="pic" alt=""${ssrRenderAttr("src", _imports_2)} data-v-582c0a37${_scopeId3}></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "swiperItem" }, [
                            createVNode("p", { class: "title" }, toDisplayString(unref(t)("common.verification")), 1),
                            createVNode("p", { class: "subTitle" }, toDisplayString(unref(t)("Home.challenge.text19")), 1),
                            createVNode("div", { class: "picWrap" }, [
                              createVNode("p", { class: "name" }, "MFT Challenge- step2"),
                              createVNode("img", {
                                class: "pic",
                                alt: "",
                                src: _imports_2
                              })
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_SwiperSlide, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="swiperItem" data-v-582c0a37${_scopeId3}><p class="title" data-v-582c0a37${_scopeId3}>${ssrInterpolate(unref(t)("common.trader"))}</p><p class="subTitle" data-v-582c0a37${_scopeId3}>${ssrInterpolate(unref(t)("Home.challenge.text20"))}</p><div class="picWrap" data-v-582c0a37${_scopeId3}><p class="name" data-v-582c0a37${_scopeId3}>MFT Challenge- step3</p><img class="pic" alt=""${ssrRenderAttr("src", _imports_3)} data-v-582c0a37${_scopeId3}></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "swiperItem" }, [
                            createVNode("p", { class: "title" }, toDisplayString(unref(t)("common.trader")), 1),
                            createVNode("p", { class: "subTitle" }, toDisplayString(unref(t)("Home.challenge.text20")), 1),
                            createVNode("div", { class: "picWrap" }, [
                              createVNode("p", { class: "name" }, "MFT Challenge- step3"),
                              createVNode("img", {
                                class: "pic",
                                alt: "",
                                src: _imports_3
                              })
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_SwiperSlide, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="swiperItem" data-v-582c0a37${_scopeId3}><p class="title" data-v-582c0a37${_scopeId3}>${ssrInterpolate(unref(t)("common.proTrader"))}</p><p class="subTitle" data-v-582c0a37${_scopeId3}>${ssrInterpolate(unref(t)("Home.challenge.text21"))}</p><div class="descWrap" data-v-582c0a37${_scopeId3}><p class="wrapTitle linearColor" data-v-582c0a37${_scopeId3}>${ssrInterpolate(unref(t)(unref(HOW_TO_SUCCESS)[2].stepList[0].subTitle))}</p><p data-v-582c0a37${_scopeId3}>${ssrInterpolate(unref(t)(unref(HOW_TO_SUCCESS)[2].stepList[0].txt))}</p><p class="wrapTitle linearColor mt" data-v-582c0a37${_scopeId3}>${ssrInterpolate(unref(t)(unref(HOW_TO_SUCCESS)[2].listTitle))}</p><ul class="list" data-v-582c0a37${_scopeId3}><!--[-->`);
                        ssrRenderList(unref(HOW_TO_SUCCESS)[2].list, (item, idx) => {
                          _push4(`<li data-v-582c0a37${_scopeId3}><img class="icon" alt=""${ssrRenderAttr("src", item.listIcon)} data-v-582c0a37${_scopeId3}> ${ssrInterpolate(unref(t)(item.content))}</li>`);
                        });
                        _push4(`<!--]--></ul><p class="linearColor" data-v-582c0a37${_scopeId3}>${ssrInterpolate(unref(t)("Home.challenge.text22"))}</p></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "swiperItem" }, [
                            createVNode("p", { class: "title" }, toDisplayString(unref(t)("common.proTrader")), 1),
                            createVNode("p", { class: "subTitle" }, toDisplayString(unref(t)("Home.challenge.text21")), 1),
                            createVNode("div", { class: "descWrap" }, [
                              createVNode("p", { class: "wrapTitle linearColor" }, toDisplayString(unref(t)(unref(HOW_TO_SUCCESS)[2].stepList[0].subTitle)), 1),
                              createVNode("p", null, toDisplayString(unref(t)(unref(HOW_TO_SUCCESS)[2].stepList[0].txt)), 1),
                              createVNode("p", { class: "wrapTitle linearColor mt" }, toDisplayString(unref(t)(unref(HOW_TO_SUCCESS)[2].listTitle)), 1),
                              createVNode("ul", { class: "list" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(HOW_TO_SUCCESS)[2].list, (item, idx) => {
                                  return openBlock(), createBlock("li", { key: idx }, [
                                    createVNode("img", {
                                      class: "icon",
                                      alt: "",
                                      src: item.listIcon
                                    }, null, 8, ["src"]),
                                    createTextVNode(" " + toDisplayString(unref(t)(item.content)), 1)
                                  ]);
                                }), 128))
                              ]),
                              createVNode("p", { class: "linearColor" }, toDisplayString(unref(t)("Home.challenge.text22")), 1)
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_SwiperSlide, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "swiperItem" }, [
                          createVNode("p", { class: "title" }, toDisplayString(unref(t)("common.MFTChallenge")), 1),
                          createVNode("p", { class: "subTitle" }, toDisplayString(unref(t)("Home.challenge.text18")), 1),
                          createVNode("div", { class: "picWrap" }, [
                            createVNode("p", { class: "name" }, "MFT Challenge- step1"),
                            createVNode("img", {
                              class: "pic",
                              alt: "",
                              src: _imports_1
                            })
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_SwiperSlide, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "swiperItem" }, [
                          createVNode("p", { class: "title" }, toDisplayString(unref(t)("common.verification")), 1),
                          createVNode("p", { class: "subTitle" }, toDisplayString(unref(t)("Home.challenge.text19")), 1),
                          createVNode("div", { class: "picWrap" }, [
                            createVNode("p", { class: "name" }, "MFT Challenge- step2"),
                            createVNode("img", {
                              class: "pic",
                              alt: "",
                              src: _imports_2
                            })
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_SwiperSlide, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "swiperItem" }, [
                          createVNode("p", { class: "title" }, toDisplayString(unref(t)("common.trader")), 1),
                          createVNode("p", { class: "subTitle" }, toDisplayString(unref(t)("Home.challenge.text20")), 1),
                          createVNode("div", { class: "picWrap" }, [
                            createVNode("p", { class: "name" }, "MFT Challenge- step3"),
                            createVNode("img", {
                              class: "pic",
                              alt: "",
                              src: _imports_3
                            })
                          ])
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode(_component_SwiperSlide, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "swiperItem" }, [
                          createVNode("p", { class: "title" }, toDisplayString(unref(t)("common.proTrader")), 1),
                          createVNode("p", { class: "subTitle" }, toDisplayString(unref(t)("Home.challenge.text21")), 1),
                          createVNode("div", { class: "descWrap" }, [
                            createVNode("p", { class: "wrapTitle linearColor" }, toDisplayString(unref(t)(unref(HOW_TO_SUCCESS)[2].stepList[0].subTitle)), 1),
                            createVNode("p", null, toDisplayString(unref(t)(unref(HOW_TO_SUCCESS)[2].stepList[0].txt)), 1),
                            createVNode("p", { class: "wrapTitle linearColor mt" }, toDisplayString(unref(t)(unref(HOW_TO_SUCCESS)[2].listTitle)), 1),
                            createVNode("ul", { class: "list" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(HOW_TO_SUCCESS)[2].list, (item, idx) => {
                                return openBlock(), createBlock("li", { key: idx }, [
                                  createVNode("img", {
                                    class: "icon",
                                    alt: "",
                                    src: item.listIcon
                                  }, null, 8, ["src"]),
                                  createTextVNode(" " + toDisplayString(unref(t)(item.content)), 1)
                                ]);
                              }), 128))
                            ]),
                            createVNode("p", { class: "linearColor" }, toDisplayString(unref(t)("Home.challenge.text22")), 1)
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div class="stepWrap" data-v-582c0a37${_scopeId}><div class="boxOuter" data-v-582c0a37${_scopeId}><p class="box prev" style="${ssrRenderStyle(unref(keyValue) !== 0 ? null : { display: "none" })}" data-v-582c0a37${_scopeId}><i class="iconfont icon-back" data-v-582c0a37${_scopeId}></i></p></div><p class="step" data-v-582c0a37${_scopeId}>Step ${ssrInterpolate(unref(keyValue) + 1)}</p><div class="boxOuter" data-v-582c0a37${_scopeId}><p class="box next" style="${ssrRenderStyle(unref(keyValue) !== 3 ? null : { display: "none" })}" data-v-582c0a37${_scopeId}><i class="iconfont icon-back" data-v-582c0a37${_scopeId}></i></p></div></div>`);
            _push2(ssrRenderComponent(_component_nuxt_link_locale, {
              class: "btn",
              to: "/user"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`${ssrInterpolate(unref(t)("User.list.btn3"))}`);
                } else {
                  return [
                    createTextVNode(toDisplayString(unref(t)("User.list.btn3")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "detailsPopupMain" }, [
                createVNode("img", {
                  class: "close",
                  alt: "",
                  src: _imports_0,
                  onClick: unref(tipsPopupRef).maskHide
                }, null, 8, ["onClick"]),
                createVNode("div", { class: "dpSwiper" }, [
                  createVNode("div", { class: "swiperContainer" }, [
                    createVNode(_component_Swiper, {
                      ref_key: "swiperRef",
                      ref: swiperRef,
                      "space-between": "20",
                      modules: ["SwiperNavigation" in _ctx ? _ctx.SwiperNavigation : unref(Navigation)],
                      "auto-height": true,
                      navigation: {
                        nextEl: ".box.next",
                        prevEl: ".box.prev"
                      },
                      onSwiper,
                      onSlideChange: onChange
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_SwiperSlide, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "swiperItem" }, [
                              createVNode("p", { class: "title" }, toDisplayString(unref(t)("common.MFTChallenge")), 1),
                              createVNode("p", { class: "subTitle" }, toDisplayString(unref(t)("Home.challenge.text18")), 1),
                              createVNode("div", { class: "picWrap" }, [
                                createVNode("p", { class: "name" }, "MFT Challenge- step1"),
                                createVNode("img", {
                                  class: "pic",
                                  alt: "",
                                  src: _imports_1
                                })
                              ])
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_SwiperSlide, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "swiperItem" }, [
                              createVNode("p", { class: "title" }, toDisplayString(unref(t)("common.verification")), 1),
                              createVNode("p", { class: "subTitle" }, toDisplayString(unref(t)("Home.challenge.text19")), 1),
                              createVNode("div", { class: "picWrap" }, [
                                createVNode("p", { class: "name" }, "MFT Challenge- step2"),
                                createVNode("img", {
                                  class: "pic",
                                  alt: "",
                                  src: _imports_2
                                })
                              ])
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_SwiperSlide, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "swiperItem" }, [
                              createVNode("p", { class: "title" }, toDisplayString(unref(t)("common.trader")), 1),
                              createVNode("p", { class: "subTitle" }, toDisplayString(unref(t)("Home.challenge.text20")), 1),
                              createVNode("div", { class: "picWrap" }, [
                                createVNode("p", { class: "name" }, "MFT Challenge- step3"),
                                createVNode("img", {
                                  class: "pic",
                                  alt: "",
                                  src: _imports_3
                                })
                              ])
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode(_component_SwiperSlide, null, {
                          default: withCtx(() => [
                            createVNode("div", { class: "swiperItem" }, [
                              createVNode("p", { class: "title" }, toDisplayString(unref(t)("common.proTrader")), 1),
                              createVNode("p", { class: "subTitle" }, toDisplayString(unref(t)("Home.challenge.text21")), 1),
                              createVNode("div", { class: "descWrap" }, [
                                createVNode("p", { class: "wrapTitle linearColor" }, toDisplayString(unref(t)(unref(HOW_TO_SUCCESS)[2].stepList[0].subTitle)), 1),
                                createVNode("p", null, toDisplayString(unref(t)(unref(HOW_TO_SUCCESS)[2].stepList[0].txt)), 1),
                                createVNode("p", { class: "wrapTitle linearColor mt" }, toDisplayString(unref(t)(unref(HOW_TO_SUCCESS)[2].listTitle)), 1),
                                createVNode("ul", { class: "list" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(HOW_TO_SUCCESS)[2].list, (item, idx) => {
                                    return openBlock(), createBlock("li", { key: idx }, [
                                      createVNode("img", {
                                        class: "icon",
                                        alt: "",
                                        src: item.listIcon
                                      }, null, 8, ["src"]),
                                      createTextVNode(" " + toDisplayString(unref(t)(item.content)), 1)
                                    ]);
                                  }), 128))
                                ]),
                                createVNode("p", { class: "linearColor" }, toDisplayString(unref(t)("Home.challenge.text22")), 1)
                              ])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    }, 8, ["modules"])
                  ])
                ]),
                createVNode("div", { class: "stepWrap" }, [
                  createVNode("div", { class: "boxOuter" }, [
                    withDirectives(createVNode("p", { class: "box prev" }, [
                      createVNode("i", { class: "iconfont icon-back" })
                    ], 512), [
                      [vShow, unref(keyValue) !== 0]
                    ])
                  ]),
                  createVNode("p", { class: "step" }, "Step " + toDisplayString(unref(keyValue) + 1), 1),
                  createVNode("div", { class: "boxOuter" }, [
                    withDirectives(createVNode("p", { class: "box next" }, [
                      createVNode("i", { class: "iconfont icon-back" })
                    ], 512), [
                      [vShow, unref(keyValue) !== 3]
                    ])
                  ])
                ]),
                createVNode(_component_nuxt_link_locale, {
                  class: "btn",
                  to: "/user"
                }, {
                  default: withCtx(() => [
                    createTextVNode(toDisplayString(unref(t)("User.list.btn3")), 1)
                  ]),
                  _: 1
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/challenges/index/components/howToSuccess/detailPopup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const detailPopup = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-582c0a37"]]);
export {
  detailPopup as default
};
//# sourceMappingURL=detailPopup-BGCepMil.js.map
