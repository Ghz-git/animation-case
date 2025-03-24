import { _ as __nuxt_component_0 } from "./index-DJNlam7R.js";
import { _ as _export_sfc, u as useI18n, a as __nuxt_component_2 } from "../server.mjs";
import { ref, computed, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import "hookable";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import { u as useAppConfig } from "./config-81Rc5edc.js";
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
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const item = ref([
      {
        path: "/academy",
        page: "User.tips7"
      },
      {
        path: "",
        page: "Glossary.glossary"
      }
    ]);
    const MODE = ref();
    const i18n = useI18n();
    const { t } = i18n;
    MODE.value = useAppConfig().public.mode;
    const currentList = computed(() => {
      const lang = i18n.locale.value;
      const messages = i18n.messages.value[lang];
      return accessNestedProperty(messages, "Glossary.main");
    });
    function accessNestedProperty(obj, path) {
      const keys = path.split(".");
      let current = obj;
      for (const key of keys) {
        if (current && typeof current === "object" && key in current) {
          current = current[key];
        } else {
          return null;
        }
      }
      return current;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_publicBreadcrumb = __nuxt_component_0;
      const _component_nuxt_link_locale = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "glossaryMain" }, _attrs))} data-v-00fd36ad><div class="glossaryMain-breadcrumb" data-v-00fd36ad>`);
      _push(ssrRenderComponent(_component_publicBreadcrumb, { item: unref(item) }, null, _parent));
      _push(`</div><div class="inner" data-v-00fd36ad><h1 class="title" data-v-00fd36ad>`);
      _push(ssrRenderComponent(_component_nuxt_link_locale, {
        class: "back-m",
        to: "/"
      }, null, _parent));
      _push(`<span class="title-inner" data-v-00fd36ad>${ssrInterpolate(unref(t)("Glossary.glossary"))}</span></h1><div class="letterList" data-v-00fd36ad><!--[-->`);
      ssrRenderList(currentList.value, (item2, index2) => {
        _push(`<a${ssrRenderAttr(
          "href",
          "#letter-" + (item2.name.body ? item2.name.body.static : item2.name.b.s)
        )} class="letter" data-v-00fd36ad>${ssrInterpolate(item2.name.body ? item2.name.body.static : item2.name.b.s)}</a>`);
      });
      _push(`<!--]--></div><div class="content" data-v-00fd36ad><!--[-->`);
      ssrRenderList(currentList.value, (item2, index2) => {
        _push(`<div${ssrRenderAttr(
          "id",
          "letter-" + (item2.name.body ? item2.name.body.static : item2.name.b.s)
        )} class="con" data-v-00fd36ad><h2 data-v-00fd36ad>${ssrInterpolate(item2.name.body ? item2.name.body.static : item2.name.b.s)}</h2><div class="typeCon" data-v-00fd36ad><!--[-->`);
        ssrRenderList(item2.list, (child, index22) => {
          _push(`<div class="textCon" data-v-00fd36ad><h3 data-v-00fd36ad>${ssrInterpolate(item2.name.body ? child.title.body.static : child.title.b.s)}</h3><div data-v-00fd36ad><p data-v-00fd36ad>${ssrInterpolate(item2.name.body ? child.content.body.static : child.content.b.s)}</p></div></div>`);
        });
        _push(`<!--]--></div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/academy/glossary/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-00fd36ad"]]);
export {
  index as default
};
//# sourceMappingURL=index-CgoTi5EM.js.map
