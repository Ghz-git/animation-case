import { _ as __nuxt_component_0 } from "./index-BTmjKmHR.js";
import { ref, mergeProps, unref, useSSRContext, reactive } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderList, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc, u as useI18n } from "../server.mjs";
import { b as SERVICE } from "./index-D3nYuMsg.js";
import "hookable";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import "decimal.js";
import "dayjs";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
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
const _sfc_main$1 = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, locale } = useI18n();
    const list = ref([
      {
        title: "ServiceRules.rules1.h1",
        lis: [
          "ServiceRules.rules1.li1",
          "ServiceRules.rules1.li2",
          "ServiceRules.rules1.li3",
          "ServiceRules.rules1.li4",
          "ServiceRules.rules1.li5",
          "ServiceRules.rules1.li6",
          "ServiceRules.rules1.li7"
        ],
        isObj: false
      },
      {
        title: "ServiceRules.rules2.h1",
        desc: "ServiceRules.rules2.li1.desc",
        lis: [
          "ServiceRules.rules2.li1.item1",
          "ServiceRules.rules2.li1.item2"
        ],
        end: "ServiceRules.rules2.li1.end",
        isObj: false
      },
      {
        title: "ServiceRules.rules3.h1",
        lis: [
          "ServiceRules.rules3.li1",
          "ServiceRules.rules3.li2",
          "ServiceRules.rules3.li3",
          "ServiceRules.rules3.li4",
          "ServiceRules.rules3.li5",
          "ServiceRules.rules3.li6",
          "ServiceRules.rules3.li7",
          "ServiceRules.rules3.li8",
          "ServiceRules.rules3.li9",
          "ServiceRules.rules3.li10",
          "ServiceRules.rules3.li11",
          "ServiceRules.rules3.li12",
          "ServiceRules.rules3.li13"
        ],
        isObj: false
      },
      {
        title: "ServiceRules.rules4.h1",
        lis: [
          "ServiceRules.rules4.li1",
          "ServiceRules.rules4.li2",
          "ServiceRules.rules4.li3",
          "ServiceRules.rules4.li4"
        ],
        isObj: false
      },
      {
        title: "ServiceRules.rules5.h1",
        lis: [
          "ServiceRules.rules5.li1",
          "ServiceRules.rules5.li2",
          "ServiceRules.rules5.li3",
          "ServiceRules.rules5.li4",
          "ServiceRules.rules5.li5",
          "ServiceRules.rules5.li6"
        ],
        isObj: false
      },
      {
        title: "ServiceRules.rules6.h1",
        lis: [
          "ServiceRules.rules6.li1",
          "ServiceRules.rules6.li2",
          "ServiceRules.rules6.li3",
          {
            subtitle: "ServiceRules.rules6.li4.subtitle",
            desc: "ServiceRules.rules6.li4.desc",
            children: [
              "ServiceRules.rules6.li4.item1",
              "ServiceRules.rules6.li4.item2",
              "ServiceRules.rules6.li4.item3",
              "ServiceRules.rules6.li4.item4",
              "ServiceRules.rules6.li4.item5",
              "ServiceRules.rules6.li4.item6",
              "ServiceRules.rules6.li4.item7",
              "ServiceRules.rules6.li4.item8",
              "ServiceRules.rules6.li4.item9",
              "ServiceRules.rules6.li4.item10",
              "ServiceRules.rules6.li4.item11",
              "ServiceRules.rules6.li4.item12",
              "ServiceRules.rules6.li4.item13",
              "ServiceRules.rules6.li4.item14",
              "ServiceRules.rules6.li4.item15",
              "ServiceRules.rules6.li4.item16",
              "ServiceRules.rules6.li4.item17",
              "ServiceRules.rules6.li4.item18",
              "ServiceRules.rules6.li4.item19",
              "ServiceRules.rules6.li4.item20",
              "ServiceRules.rules6.li4.item21",
              "ServiceRules.rules6.li4.item22",
              "ServiceRules.rules6.li4.item23",
              "ServiceRules.rules6.li4.item24",
              "ServiceRules.rules6.li4.item25",
              "ServiceRules.rules6.li4.item26",
              "ServiceRules.rules6.li4.item27",
              "ServiceRules.rules6.li4.item28",
              "ServiceRules.rules6.li4.item29",
              "ServiceRules.rules6.li4.item30",
              "ServiceRules.rules6.li4.item31",
              "ServiceRules.rules6.li4.item32"
            ]
          },
          "ServiceRules.rules6.li5",
          "ServiceRules.rules6.li6",
          "ServiceRules.rules6.li7",
          "ServiceRules.rules6.li8",
          "ServiceRules.rules6.li9",
          "ServiceRules.rules6.li10",
          {
            subtitle: "ServiceRules.rules6.li11.subtitle",
            children: [
              "ServiceRules.rules6.li11.item1",
              "ServiceRules.rules6.li11.item2",
              "ServiceRules.rules6.li11.item3",
              "ServiceRules.rules6.li11.item4",
              "ServiceRules.rules6.li11.item5",
              "ServiceRules.rules6.li11.item6"
            ]
          }
        ],
        isObj: true
      },
      {
        title: "ServiceRules.rules7.h1",
        lis: [
          "ServiceRules.rules7.li1",
          "ServiceRules.rules7.li2",
          "ServiceRules.rules7.li3",
          "ServiceRules.rules7.li4",
          {
            subtitle: "ServiceRules.rules7.li5.subtitle",
            desc: "",
            children: [
              "ServiceRules.rules7.li5.item1",
              "ServiceRules.rules7.li5.item2"
            ]
          },
          "ServiceRules.rules7.li6",
          "ServiceRules.rules7.li7",
          "ServiceRules.rules7.li8",
          "ServiceRules.rules7.li9"
        ],
        isObj: true
      },
      {
        title: "ServiceRules.rules8.h1",
        lis: ["ServiceRules.rules8.li1"],
        isObj: false
      },
      {
        title: "ServiceRules.rules9.h1",
        lis: [
          "ServiceRules.rules9.li1",
          "ServiceRules.rules9.li2",
          "ServiceRules.rules9.li3",
          "ServiceRules.rules9.li4",
          {
            subtitle: "ServiceRules.rules9.li5.subtitle",
            desc: "",
            children: [
              "ServiceRules.rules9.li5.item1",
              "ServiceRules.rules9.li5.item2",
              "ServiceRules.rules9.li5.item3",
              "ServiceRules.rules9.li5.item4",
              "ServiceRules.rules9.li5.item5",
              "ServiceRules.rules9.li5.item6",
              "ServiceRules.rules9.li5.item7",
              "ServiceRules.rules9.li5.item8"
            ]
          }
        ],
        isObj: true
      },
      {
        title: "ServiceRules.rules10.h1",
        lis: [
          "ServiceRules.rules10.li1",
          "ServiceRules.rules10.li2",
          "ServiceRules.rules10.li3",
          "ServiceRules.rules10.li4",
          "ServiceRules.rules10.li5",
          "ServiceRules.rules10.li6"
        ],
        isObj: false
      },
      {
        title: "ServiceRules.rules11.h1",
        lis: ["ServiceRules.rules11.li1", "ServiceRules.rules11.li2"],
        isObj: false
      },
      {
        title: "ServiceRules.rules12.h1",
        lis: [
          "ServiceRules.rules12.li1",
          "ServiceRules.rules12.li2",
          {
            subtitle: "ServiceRules.rules12.li3.subtitle",
            desc: "",
            children: [
              "ServiceRules.rules12.li3.item1",
              "ServiceRules.rules12.li3.item2"
            ]
          },
          {
            subtitle: "ServiceRules.rules12.li4.subtitle",
            desc: "ServiceRules.rules12.li4.desc",
            children: []
          }
        ],
        isObj: true
      },
      {
        title: "ServiceRules.rules13.h1",
        lis: ["ServiceRules.rules13.li1"],
        isObj: false
      },
      {
        title: "ServiceRules.rules14.h1",
        lis: ["ServiceRules.rules14.li1"],
        isObj: false
      },
      {
        title: "ServiceRules.rules15.h1",
        lis: ["ServiceRules.rules15.li1", "ServiceRules.rules15.li2"],
        isObj: false
      },
      {
        title: "ServiceRules.rules16.h1",
        lis: ["ServiceRules.rules16.li1"],
        isObj: false
      },
      {
        title: "ServiceRules.rules17.h1",
        lis: [
          {
            subtitle: "ServiceRules.rules17.li1.subtitle",
            desc: "",
            children: [
              "ServiceRules.rules17.li1.item1",
              "ServiceRules.rules17.li1.item2",
              "ServiceRules.rules17.li1.item3",
              "ServiceRules.rules17.li1.item4",
              "ServiceRules.rules17.li1.item5",
              "ServiceRules.rules17.li1.item6",
              "ServiceRules.rules17.li1.item7",
              "ServiceRules.rules17.li1.item8",
              "ServiceRules.rules17.li1.item9",
              "ServiceRules.rules17.li1.item10",
              "ServiceRules.rules17.li1.item11",
              "ServiceRules.rules17.li1.item12"
            ]
          },
          {
            subtitle: "ServiceRules.rules17.li2.subtitle",
            children: [
              "ServiceRules.rules17.li2.item1",
              "ServiceRules.rules17.li2.item2",
              "ServiceRules.rules17.li2.item3"
            ]
          }
        ],
        isObj: true
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "service-rules",
        lang: unref(locale)
      }, _attrs))} data-v-bfe23254><div class="line-desc" data-v-bfe23254>${ssrInterpolate(unref(t)("ServiceRules.desc"))}</div><!--[-->`);
      ssrRenderList(list.value, (cxt, idx) => {
        _push(`<!--[--><h4 class="line-title" data-v-bfe23254>${ssrInterpolate(unref(t)(cxt.title))}</h4>`);
        if (!cxt.isObj && !cxt.desc) {
          _push(`<!--[-->`);
          ssrRenderList(cxt.lis, (val, key) => {
            _push(`<p class="para" data-v-bfe23254>${ssrInterpolate(unref(t)(val))}</p>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        if (cxt.isObj) {
          _push(`<!--[-->`);
          ssrRenderList(cxt.lis, (val, key) => {
            _push(`<div class="inner" data-v-bfe23254>`);
            if (!val.children) {
              _push(`<p class="para" data-v-bfe23254>${ssrInterpolate(unref(t)(val))}</p>`);
            } else {
              _push(`<!---->`);
            }
            if (val.children) {
              _push(`<!--[--><p class="subtitle" data-v-bfe23254>${ssrInterpolate(unref(t)(val.subtitle))}</p>`);
              if (val.desc) {
                _push(`<p class="desc" data-v-bfe23254>${ssrInterpolate(unref(t)(val.desc))}</p>`);
              } else {
                _push(`<!---->`);
              }
              _push(`<!--[-->`);
              ssrRenderList(val.children, (li4, index) => {
                _push(`<p class="item" data-v-bfe23254>${ssrInterpolate(unref(t)(li4))}</p>`);
              });
              _push(`<!--]--><!--]-->`);
            } else {
              _push(`<!---->`);
            }
            _push(`</div>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        if (cxt.desc) {
          _push(`<div class="para" data-v-bfe23254><div class="para-desc" data-v-bfe23254>${ssrInterpolate(unref(t)(cxt.desc))}</div><ul data-v-bfe23254><!--[-->`);
          ssrRenderList(cxt.lis, (li, index) => {
            _push(`<li class="para-lis" data-v-bfe23254>${ssrInterpolate(unref(t)(li))}</li>`);
          });
          _push(`<!--]--></ul><div class="para-end" data-v-bfe23254>${ssrInterpolate(unref(t)(cxt.end))}</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/serviceRules/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-bfe23254"]]);
const _sfc_main = {
  __name: "service",
  __ssrInlineRender: true,
  setup(__props) {
    const msg = reactive(SERVICE);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_publicPrivacyBanner = __nuxt_component_0;
      const _component_serviceRules = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "trading-rules" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_publicPrivacyBanner, { msg }, null, _parent));
      _push(ssrRenderComponent(_component_serviceRules, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/service.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=service-i4vDAe8B.js.map
