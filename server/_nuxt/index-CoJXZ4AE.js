import { S as Swiper, a as SwiperSlide } from "./entry-styles-3.mjs-IQ1Ycl8h.js";
import { _ as _export_sfc, a4 as useRouter, u as useI18n, a as __nuxt_component_2 } from "../server.mjs";
import { E as ElImage } from "./index-BJwCkya4.js";
import { Navigation } from "swiper/modules";
import { ref, computed, unref, withCtx, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import { ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { W as WHY_CHOOSE_MFT } from "./index-D3nYuMsg.js";
import { u as useCheckMobile } from "./isMobile-BdEqHLRM.js";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "@vue/devtools-api";
import "cookie-es";
import "destr";
import "ohash";
import "klona";
import "decimal.js";
import "dayjs";
import "consola";
import "@vueuse/core";
import "@vue/shared";
import "lodash-unified";
import "deep-pick-omit";
import "jsencrypt/lib/JSEncrypt.js";
import "axios";
import "./index-DvP72MIN.js";
import "./index-DV4HU-o-.js";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const router = useRouter();
    const { t } = useI18n();
    const slideList = ref([]);
    const spaceBetween = ref(0);
    const swiperView = ref(0);
    const isMobile = computed(() => useCheckMobile().getItem());
    const linkTo = (url) => {
      if (url.includes("discord")) {
        (void 0).open(url);
      } else {
        router.push(url);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Swiper = Swiper;
      const _component_SwiperSlide = SwiperSlide;
      const _component_nuxt_link_locale = __nuxt_component_2;
      const _component_el_image = ElImage;
      _push(`<!--[--><div class="choose choose-h5" data-v-0a8373d1><h1 class="title" data-v-0a8373d1><span class="swiperBtn prev" data-v-0a8373d1><i class="iconfont icon-fanhui" data-v-0a8373d1></i></span> ${ssrInterpolate(unref(t)(unref(WHY_CHOOSE_MFT).title))} <span class="swiperBtn next" data-v-0a8373d1><i class="iconfont icon-fanhui" data-v-0a8373d1></i></span></h1><div class="chooseSwiper" data-v-0a8373d1><div class="swiperContainer" data-v-0a8373d1>`);
      _push(ssrRenderComponent(_component_Swiper, {
        modules: ["SwiperNavigation" in _ctx ? _ctx.SwiperNavigation : unref(Navigation)],
        navigation: {
          nextEl: ".swiperBtn.next",
          prevEl: ".swiperBtn.prev"
        },
        "slides-per-view": unref(swiperView),
        "space-between": unref(spaceBetween),
        loop: true,
        centeredSlides: unref(isMobile)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(slideList), (slide, idx) => {
              _push2(ssrRenderComponent(_component_SwiperSlide, { key: idx }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (idx !== unref(slideList).length - 1) {
                      _push3(ssrRenderComponent(_component_nuxt_link_locale, {
                        to: slide.url,
                        class: "chooseItem",
                        style: { backgroundColor: "#28292C" }
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="textCon" data-v-0a8373d1${_scopeId3}><img${ssrRenderAttr("src", slide.pic)} class="pic" data-v-0a8373d1${_scopeId3}><p class="desc" data-v-0a8373d1${_scopeId3}>${ssrInterpolate(unref(t)(slide.name))}</p></div><p class="more" data-v-0a8373d1${_scopeId3}>${ssrInterpolate(unref(t)("Education.more"))}<i class="iconfont icon-arrow-right" data-v-0a8373d1${_scopeId3}></i></p>`);
                          } else {
                            return [
                              createVNode("div", { class: "textCon" }, [
                                createVNode("img", {
                                  src: slide.pic,
                                  class: "pic"
                                }, null, 8, ["src"]),
                                createVNode("p", { class: "desc" }, toDisplayString(unref(t)(slide.name)), 1)
                              ]),
                              createVNode("p", { class: "more" }, [
                                createTextVNode(toDisplayString(unref(t)("Education.more")), 1),
                                createVNode("i", { class: "iconfont icon-arrow-right" })
                              ])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<div class="chooseItem" style="${ssrRenderStyle({ backgroundColor: "#28292C" })}" data-v-0a8373d1${_scopeId2}><div class="textCon" data-v-0a8373d1${_scopeId2}><img${ssrRenderAttr("src", slide.pic)} class="pic" data-v-0a8373d1${_scopeId2}><p class="desc" data-v-0a8373d1${_scopeId2}>${ssrInterpolate(unref(t)(slide.name))}</p></div><p class="more" data-v-0a8373d1${_scopeId2}>${ssrInterpolate(unref(t)("Education.more"))}<i class="iconfont icon-arrow-right" data-v-0a8373d1${_scopeId2}></i></p></div>`);
                    }
                  } else {
                    return [
                      idx !== unref(slideList).length - 1 ? (openBlock(), createBlock(_component_nuxt_link_locale, {
                        key: 0,
                        to: slide.url,
                        class: "chooseItem",
                        style: { backgroundColor: "#28292C" }
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "textCon" }, [
                            createVNode("img", {
                              src: slide.pic,
                              class: "pic"
                            }, null, 8, ["src"]),
                            createVNode("p", { class: "desc" }, toDisplayString(unref(t)(slide.name)), 1)
                          ]),
                          createVNode("p", { class: "more" }, [
                            createTextVNode(toDisplayString(unref(t)("Education.more")), 1),
                            createVNode("i", { class: "iconfont icon-arrow-right" })
                          ])
                        ]),
                        _: 2
                      }, 1032, ["to"])) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "chooseItem",
                        onClick: ($event) => linkTo(slide.url),
                        style: { backgroundColor: "#28292C" }
                      }, [
                        createVNode("div", { class: "textCon" }, [
                          createVNode("img", {
                            src: slide.pic,
                            class: "pic"
                          }, null, 8, ["src"]),
                          createVNode("p", { class: "desc" }, toDisplayString(unref(t)(slide.name)), 1)
                        ]),
                        createVNode("p", { class: "more" }, [
                          createTextVNode(toDisplayString(unref(t)("Education.more")), 1),
                          createVNode("i", { class: "iconfont icon-arrow-right" })
                        ])
                      ], 8, ["onClick"]))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(slideList), (slide, idx) => {
                return openBlock(), createBlock(_component_SwiperSlide, { key: idx }, {
                  default: withCtx(() => [
                    idx !== unref(slideList).length - 1 ? (openBlock(), createBlock(_component_nuxt_link_locale, {
                      key: 0,
                      to: slide.url,
                      class: "chooseItem",
                      style: { backgroundColor: "#28292C" }
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "textCon" }, [
                          createVNode("img", {
                            src: slide.pic,
                            class: "pic"
                          }, null, 8, ["src"]),
                          createVNode("p", { class: "desc" }, toDisplayString(unref(t)(slide.name)), 1)
                        ]),
                        createVNode("p", { class: "more" }, [
                          createTextVNode(toDisplayString(unref(t)("Education.more")), 1),
                          createVNode("i", { class: "iconfont icon-arrow-right" })
                        ])
                      ]),
                      _: 2
                    }, 1032, ["to"])) : (openBlock(), createBlock("div", {
                      key: 1,
                      class: "chooseItem",
                      onClick: ($event) => linkTo(slide.url),
                      style: { backgroundColor: "#28292C" }
                    }, [
                      createVNode("div", { class: "textCon" }, [
                        createVNode("img", {
                          src: slide.pic,
                          class: "pic"
                        }, null, 8, ["src"]),
                        createVNode("p", { class: "desc" }, toDisplayString(unref(t)(slide.name)), 1)
                      ]),
                      createVNode("p", { class: "more" }, [
                        createTextVNode(toDisplayString(unref(t)("Education.more")), 1),
                        createVNode("i", { class: "iconfont icon-arrow-right" })
                      ])
                    ], 8, ["onClick"]))
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="swiperBtn prev" data-v-0a8373d1><i class="iconfont icon-fanhui" data-v-0a8373d1></i></div><div class="swiperBtn next" data-v-0a8373d1><i class="iconfont icon-fanhui" data-v-0a8373d1></i></div></div></div></div><div class="choose" data-v-0a8373d1><h1 class="title" data-v-0a8373d1>${ssrInterpolate(unref(t)(unref(WHY_CHOOSE_MFT).title))}</h1><div class="choose-list" data-v-0a8373d1><!--[-->`);
      ssrRenderList(unref(WHY_CHOOSE_MFT).children, (item, idx) => {
        _push(ssrRenderComponent(_component_nuxt_link_locale, {
          to: item.url,
          class: "choose-list-item",
          key: idx
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div data-v-0a8373d1${_scopeId}>`);
              _push2(ssrRenderComponent(_component_el_image, {
                src: item.pic,
                lazy: "",
                class: "choose-list-item__pic"
              }, null, _parent2, _scopeId));
              _push2(`<div class="choose-list-item__txt" data-v-0a8373d1${_scopeId}>${ssrInterpolate(unref(t)(item.name))}</div></div><div class="choose-list-item__more" data-v-0a8373d1${_scopeId}>${ssrInterpolate(unref(t)("Education.more"))}<i class="iconfont icon-arrow-right" data-v-0a8373d1${_scopeId}></i></div>`);
            } else {
              return [
                createVNode("div", null, [
                  createVNode(_component_el_image, {
                    src: item.pic,
                    lazy: "",
                    class: "choose-list-item__pic"
                  }, null, 8, ["src"]),
                  createVNode("div", { class: "choose-list-item__txt" }, toDisplayString(unref(t)(item.name)), 1)
                ]),
                createVNode("div", { class: "choose-list-item__more" }, [
                  createTextVNode(toDisplayString(unref(t)("Education.more")), 1),
                  createVNode("i", { class: "iconfont icon-arrow-right" })
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index/components/choose/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const homeChoose = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0a8373d1"]]);
export {
  homeChoose as default
};
//# sourceMappingURL=index-CoJXZ4AE.js.map
