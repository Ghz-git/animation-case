import { _ as __nuxt_component_0 } from "./index-DzSnyPvj.js";
import { _ as _export_sfc, u as useI18n, a as __nuxt_component_2 } from "../server.mjs";
import { ref, withCtx, unref, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { m as modeList, u as useAccount } from "./useAccount-Ba5l_-oJ.js";
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
import "./useRequest-FImzQkjq.js";
import "./directive-o9p6vhNm.js";
import "./config-81Rc5edc.js";
import "./Norway-DkftQzDj.js";
import "lodash-es";
const _sfc_main = {
  __name: "email",
  __ssrInlineRender: true,
  setup(__props) {
    const formClass = ref(new modeList(["email", "logInPassword"]));
    const formList = ref(formClass.value.list);
    const { t } = useI18n();
    useAccount();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_publicInputForm = __nuxt_component_0;
      const _component_nuxt_link_locale = __nuxt_component_2;
      _push(`<!--[-->`);
      {
        _push(`<!---->`);
      }
      {
        _push(`<!---->`);
      }
      _push(`<div class="phoneWrap" data-v-922cc43a></div>`);
      _push(ssrRenderComponent(_component_publicInputForm, {
        formList: formList.value,
        formClass: formClass.value
      }, null, _parent));
      _push(`<p class="fwd" data-v-922cc43a>`);
      _push(ssrRenderComponent(_component_nuxt_link_locale, {
        class: "link",
        to: "/forgetPassword?type=1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("Login.forget"))}?`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("Login.forget")) + "?", 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p><button class="subBtn" data-v-922cc43a>${ssrInterpolate(unref(t)("Login.title1"))}</button><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login/components/email.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const loginEmail = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-922cc43a"]]);
export {
  loginEmail as default
};
//# sourceMappingURL=email-BoJtxVN9.js.map
