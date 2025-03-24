import { _ as __nuxt_component_0 } from "./index-BTmjKmHR.js";
import { ref, useSSRContext, mergeProps, unref, reactive } from "vue";
import { ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc, u as useI18n } from "../server.mjs";
import { a as PRIVACY } from "./index-D3nYuMsg.js";
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
const _sfc_main$2 = {
  __name: "rulesCookie",
  __ssrInlineRender: true,
  setup(__props) {
    useI18n();
    const rulesCookie = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div id="rulesCookie" data-v-4840a7fb></div><!--[-->`);
      ssrRenderList(rulesCookie.value, (item, index) => {
        var _a;
        _push(`<div class="${ssrRenderClass([[`tag-${item == null ? void 0 : item.type}`], "rules-cookie"])}" data-v-4840a7fb>`);
        if (item == null ? void 0 : item.text) {
          _push(`<div class="rules-text" data-v-4840a7fb>${ssrInterpolate(item.text)}</div>`);
        } else {
          _push(`<!---->`);
        }
        if ((_a = item.data) == null ? void 0 : _a.length) {
          _push(`<!--[-->`);
          if (["ol", "ul"].includes(item.type)) {
            _push(`<ol class="tag-ol" data-v-4840a7fb><!--[-->`);
            ssrRenderList(item == null ? void 0 : item.data, (sub, subIndex) => {
              _push(`<li class="${ssrRenderClass([`tag-sub-${sub == null ? void 0 : sub.type}`])}" data-v-4840a7fb>${ssrInterpolate(sub == null ? void 0 : sub.text)}</li>`);
            });
            _push(`<!--]--></ol>`);
          } else {
            _push(`<!---->`);
          }
          if ("table" === item.type) {
            _push(`<table class="rules-table" data-v-4840a7fb><tbody data-v-4840a7fb><!--[-->`);
            ssrRenderList(item == null ? void 0 : item.data, (sub, subIndex) => {
              _push(`<tr data-v-4840a7fb><!--[-->`);
              ssrRenderList(sub == null ? void 0 : sub.data, (third, thirdIndex) => {
                _push(`<td class="${ssrRenderClass([`td-${sub.type}`])}" data-v-4840a7fb>${ssrInterpolate(third)}</td>`);
              });
              _push(`<!--]--></tr>`);
            });
            _push(`<!--]--></tbody></table>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<!--]-->`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--><!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/privacyRules/rulesCookie.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const RulesCookie = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-4840a7fb"]]);
const _sfc_main$1 = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, locale, getLocaleMessage } = useI18n();
    let list = ref([
      {
        title: "PrivacyRules.rules1.title",
        txt: "PrivacyRules.rules1.txt"
      },
      {
        title: "PrivacyRules.rules2.title",
        txt: "PrivacyRules.rules2.txt"
      },
      {
        title: "PrivacyRules.rules3.title",
        txt: "PrivacyRules.rules3.txt",
        children: [
          {
            title: "PrivacyRules.rules3Li1.title",
            txt: "PrivacyRules.rules3Li1.txt"
          },
          {
            title: "PrivacyRules.rules3Li2.title",
            txt: "PrivacyRules.rules3Li2.txt"
          },
          {
            title: "PrivacyRules.rules3Li3.title",
            txt: "PrivacyRules.rules3Li3.txt"
          },
          {
            title: "PrivacyRules.rules3Li4.title",
            txt: "PrivacyRules.rules3Li4.txt"
          },
          {
            title: "PrivacyRules.rules3Li5.title",
            txt: "PrivacyRules.rules3Li5.txt"
          },
          {
            title: "PrivacyRules.rules3Li6.title",
            txt: "PrivacyRules.rules3Li6.txt"
          }
        ]
      },
      {
        title: "PrivacyRules.rules4.title",
        txt: "PrivacyRules.rules4.txt"
      },
      {
        title: "PrivacyRules.rules5.title",
        txt: "PrivacyRules.rules5.txt"
      },
      {
        title: "PrivacyRules.rules6.title",
        txt: "PrivacyRules.rules6.txt"
      },
      {
        title: "PrivacyRules.rules7.title",
        txt: "PrivacyRules.rules7.txt",
        children: [
          {
            title: "PrivacyRules.rules7Li1.title",
            txt: "PrivacyRules.rules7Li1.txt"
          },
          {
            title: "PrivacyRules.rules7Li2.title",
            txt: "PrivacyRules.rules7Li2.txt"
          },
          {
            title: "PrivacyRules.rules7Li3.title",
            txt: "PrivacyRules.rules7Li3.txt"
          },
          {
            title: "PrivacyRules.rules7Li4.title",
            txt: "PrivacyRules.rules7Li4.txt"
          },
          {
            title: "PrivacyRules.rules7Li5.title",
            txt: "PrivacyRules.rules7Li5.txt"
          },
          {
            title: "PrivacyRules.rules7Li6.title",
            txt: "PrivacyRules.rules7Li6.txt"
          },
          {
            title: "PrivacyRules.rules7Li7.title",
            txt: "PrivacyRules.rules7Li7.txt"
          },
          {
            title: "PrivacyRules.rules7Li8.title",
            txt: "PrivacyRules.rules7Li8.txt"
          },
          {
            title: "PrivacyRules.rules7Li9.title",
            txt: "PrivacyRules.rules7Li9.txt"
          }
        ]
      },
      {
        title: "PrivacyRules.rules8.title",
        txt: "PrivacyRules.rules8.txt"
      }
    ]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "privacy-rules" }, _attrs))} data-v-387dba59><h4 class="line-title" data-v-387dba59>${ssrInterpolate(unref(t)("PrivacyRules.desc"))}</h4><p class="para" data-v-387dba59>${ssrInterpolate(unref(t)("PrivacyRules.descLis"))}</p><!--[-->`);
      ssrRenderList(unref(list), (val, idx) => {
        var _a;
        _push(`<!--[-->`);
        if (idx === 2) {
          _push(ssrRenderComponent(RulesCookie, null, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<h4 class="line-title" data-v-387dba59>${ssrInterpolate(unref(t)(val.title))}</h4><p class="para" data-v-387dba59>${ssrInterpolate(unref(t)(val.txt))}</p>`);
        if ((_a = val.children) == null ? void 0 : _a.length) {
          _push(`<ul class="privacy-rules-list" data-v-387dba59><!--[-->`);
          ssrRenderList(val.children, (li, index) => {
            _push(`<li data-v-387dba59><h4 class="title" data-v-387dba59>${ssrInterpolate(unref(t)(li.title))}</h4><p class="txt" data-v-387dba59>${ssrInterpolate(unref(t)(li.txt))}</p><br data-v-387dba59></li>`);
          });
          _push(`<!--]--></ul>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/privacyRules/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-387dba59"]]);
const _sfc_main = {
  __name: "privacy",
  __ssrInlineRender: true,
  setup(__props) {
    const msg = reactive(PRIVACY);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_publicPrivacyBanner = __nuxt_component_0;
      const _component_privacyRules = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "trading-rules" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_publicPrivacyBanner, { msg }, null, _parent));
      _push(ssrRenderComponent(_component_privacyRules, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/privacy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=privacy-DNVaN9gj.js.map
