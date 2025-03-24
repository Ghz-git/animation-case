import { _ as __nuxt_component_0 } from "./index-DJNlam7R.js";
import { _ as _export_sfc, u as useI18n, a as __nuxt_component_2 } from "../server.mjs";
import "dayjs";
import { v as vLoading } from "./directive-o9p6vhNm.js";
import { ref, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrGetDirectiveProps } from "vue/server-renderer";
import "hookable";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import "decimal.js";
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
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const i18n = useI18n();
    const { t } = i18n;
    const item = ref([
      {
        path: "/academy",
        page: "User.tips7"
      },
      {
        path: "",
        page: "Footer.list.item3.children1"
      }
    ]);
    computed(() => {
      return i18n.locale.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_publicBreadcrumb = __nuxt_component_0;
      const _component_nuxt_link_locale = __nuxt_component_2;
      const _directive_loading = vLoading;
      let _temp0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "calendar" }, _attrs))} data-v-db5b43f5><div class="calendar_header" data-v-db5b43f5><div class="calendar-breadcrumb" data-v-db5b43f5>`);
      _push(ssrRenderComponent(_component_publicBreadcrumb, { item: unref(item) }, null, _parent));
      _push(`</div><div class="title" data-v-db5b43f5>`);
      _push(ssrRenderComponent(_component_nuxt_link_locale, {
        class: "back-m",
        to: "/"
      }, null, _parent));
      _push(`<span class="title-inner" data-v-db5b43f5>${ssrInterpolate(unref(t)("Footer.list.item3.children1"))}</span></div></div><div class="main-box" data-v-db5b43f5><div${ssrRenderAttrs(_temp0 = mergeProps({
        class: "loading-mask",
        "element-loading-background": "#1a1d22"
      }, ssrGetDirectiveProps(_ctx, _directive_loading, true)))} data-v-db5b43f5>${"textContent" in _temp0 ? ssrInterpolate(_temp0.textContent) : _temp0.innerHTML ?? ""}</div><div id="economicCalendarWidget" data-v-db5b43f5></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/academy/calendar/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-db5b43f5"]]);
export {
  index as default
};
//# sourceMappingURL=index-ORJ-4V9n.js.map
