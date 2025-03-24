import { _ as __nuxt_component_0 } from "./index-DP8eDe_k.js";
import { ref, computed, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { L as LEARNING_LIST } from "./image-DxSJLE4L.js";
import { u as useCheckMobile } from "./isMobile-BdEqHLRM.js";
import { _ as _export_sfc, u as useI18n, K as getQuery, n as nuxtTo } from "../server.mjs";
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
const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAARVBMVEX/hQAAAAD/hAD/hAD/fwD/ewD/hAD/eAD/dwD/dwD/eQD/eAD/eAD/gwD/dwD/eQD/egD/ewD/egD/dgD/eAD/eQD/dwCAWPxzAAAAFnRSTlMXABMNCjQG4vHFmXzUJYtuQ19Rt6iLHDliAgAAAixJREFUaN6009GOgkAMQNFrW0ZRWV13w/9/6hqQRQ2J7UDv++QkbYedt2Iq9wDknlpxP/UhpsJCIrYRUmZgEdKyGjHhY2KrEBV8aTUiBNIqRAmmYcSEcGIxRKhKAogJtZkXUVakPkRYlXgQga0VHEa4T4jA9gpxI64QN+IKcSO+fXIMkGVE2TRdQoyNswVE2LoZyTOQd8RIyN4QIaNXRElJXxCSekaUpOQJIa0ZUdLSf4TEJsRIzB6IkJiMSCG1MiBKRde2Pzfe1VM3rdOh7/sWTzIghOuO/ZD3vqi4reY8Gq33voiv5PvwMBrvfyS8kmM/dvQfMcGVNO1IHC6421GIdNuPxrnBX8EI9DWNqiOQobjrplGdCKUI3q6PUe2vxBIk8MmHfjqykO63HztBFtJMo7qR1mX+5NHil0tif9VaOQ7DMAwraMfIYKRn8v+ndtDQpYPJgILjDxCQBIsiGbVanzfnW6MfOghGpveIt8kgdOP9I/yQQAq3cY9NByEa86FLVuKr50rGolRmaS1v7f9q3PrdpaXFEomXUDLQlGjpNJGAQO52dparQlPvJGOhCfdvljnCHU2RWCRxOjT1dOjEESQdKEsf/JKRd5iaL9NcscAve1jrVbKlKL+o5isY0oVOv2RrQ0GajO43BPzWRr5JY0FBgnGG5rcAkWBmok1hy55GwTxW+RnTH3Wu+IIcxJgxUkLDQI/5jCIUf2CpXCF6Fa8C/wGIEJk7DvcFIsgf/zHeqi8AAAAASUVORK5CYII=";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    const cards = ref(null);
    const cardInner = ref(null);
    const isMobile = computed(() => {
      return useCheckMobile().getItem();
    });
    let currentIndex = !isMobile.value ? ref(0) : ref(1);
    const imgToShow = ref(3);
    const clamp = (idx) => {
      var _a;
      const totalImg = (_a = cards.value) == null ? void 0 : _a.length;
      let res = !isMobile.value ? Math.max(0, Math.min(Math.ceil(totalImg / imgToShow.value) - 1, idx)) : Math.max(0, Math.min(totalImg - 1, idx));
      return res;
    };
    const scroll = (direction) => {
      if (direction === "pre") {
        currentIndex.value--;
      } else {
        currentIndex.value++;
      }
      currentIndex.value = clamp(currentIndex.value);
      if (!isMobile.value) {
        cardInner.value.style.transform = `translateX(-${currentIndex.value * 104}%)`;
      } else {
        let move = 0;
        move = currentIndex.value === 0 ? `translateX(${24}%)` : currentIndex.value === 1 ? `translateX(-${currentIndex.value * 33}%)` : `translateX(-${currentIndex.value * 33 + 23 * (currentIndex.value - 1)}%)`;
        cardInner.value.style.transform = move;
      }
    };
    const preHandler = () => {
      scroll("pre");
    };
    const nextHandler = () => {
      scroll("next");
    };
    const linkTo = (url) => {
      let query = url.includes("?") ? getQuery(url) : {};
      nuxtTo(url, query);
    };
    const getAgent = () => {
      const userAgent = (void 0).userAgent.toLowerCase();
      userAgent.indexOf("android") != -1;
      let IOS = /(iphone|ipad|ipod|ios)/i.test(userAgent);
      return IOS ? "ios" : "android";
    };
    computed(() => {
      return getAgent() === "ios" ? true : false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_publicMWrap = __nuxt_component_0;
      _push(ssrRenderComponent(_component_publicMWrap, mergeProps({
        title: unref(t)("Home.tools.title")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="learning-tool" data-v-e6799360${_scopeId}><img class="opt-btn pre"${ssrRenderAttr("src", _imports_0)} data-v-e6799360${_scopeId}><div class="learning-tool-list" data-v-e6799360${_scopeId}><div class="inner" data-v-e6799360${_scopeId}><!--[-->`);
            ssrRenderList(unref(LEARNING_LIST), (v, k) => {
              _push2(`<div class="card"${ssrRenderAttr("id", `Glossary${k + 1}`)} data-v-e6799360${_scopeId}><img${ssrRenderAttr("src", v.url)} alt="" class="pic" data-v-e6799360${_scopeId}><div class="tool-name" data-v-e6799360${_scopeId}>${ssrInterpolate(unref(t)(v.txt))}</div></div>`);
            });
            _push2(`<!--]--></div></div><img class="opt-btn next"${ssrRenderAttr("src", _imports_0)} data-v-e6799360${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "learning-tool" }, [
                createVNode("img", {
                  class: "opt-btn pre",
                  src: _imports_0,
                  onClick: preHandler
                }),
                createVNode("div", { class: "learning-tool-list" }, [
                  createVNode("div", {
                    class: "inner",
                    ref_key: "cardInner",
                    ref: cardInner
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(LEARNING_LIST), (v, k) => {
                      return openBlock(), createBlock("div", {
                        class: "card",
                        id: `Glossary${k + 1}`,
                        ref_for: true,
                        ref_key: "cards",
                        ref: cards,
                        onClick: ($event) => linkTo(v.path)
                      }, [
                        createVNode("img", {
                          src: v.url,
                          alt: "",
                          class: "pic"
                        }, null, 8, ["src"]),
                        createVNode("div", { class: "tool-name" }, toDisplayString(unref(t)(v.txt)), 1)
                      ], 8, ["id", "onClick"]);
                    }), 256))
                  ], 512)
                ]),
                createVNode("img", {
                  class: "opt-btn next",
                  src: _imports_0,
                  onClick: nextHandler
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index/components/learningTools/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e6799360"]]);
export {
  index as default
};
//# sourceMappingURL=index-DB0-m-pK.js.map
