import { _ as __nuxt_component_0 } from "./index-D6B4tX2N.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import Banner from "./index-6USUxNFL.js";
import Trading from "./index-B18RNfRG.js";
import Partner from "./index-CCFTdOgc.js";
import TopTrader from "./index-pkzlXpfe.js";
import challengesHowToSuccess from "./index-CoVUoHfU.js";
import homeChallenges from "./index-DIs-pXPy.js";
import homeChoose from "./index-CoJXZ4AE.js";
import "hookable";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import { u as useI18n } from "../server.mjs";
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
import "./index-DP8eDe_k.js";
import "./index-DcwL4Y5F.js";
import "youtube-player";
import "./isMobile-BdEqHLRM.js";
import "lodash-es";
import "./client-only-Db1Q_2tj.js";
import "swiper/modules";
import "./entry-styles-3.mjs-IQ1Ycl8h.js";
import "./challengesData-Ie0NoZuw.js";
import "./yellow-BzR1n8Bd.js";
import "./detailPopup-BGCepMil.js";
import "./close-CUfcVM9H.js";
import "./item-CdlyubjY.js";
import "./successLi-kfq3FYbI.js";
import "./index-Cugr8uAE.js";
import "./toolsTip-DYRN-MJI.js";
/* empty css                   */
import "./useChallengeInfo-D8ZmMr9V.js";
import "./challenge-C5uxJouc.js";
import "./useRequest-FImzQkjq.js";
import "./directive-o9p6vhNm.js";
import "./config-81Rc5edc.js";
import "./challenges-DfBymhN9.js";
import "./index-BJwCkya4.js";
import "./index-DvP72MIN.js";
import "./index-DV4HU-o-.js";
import "./index-D3nYuMsg.js";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_publicTipsScroll = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "homeBody" }, _attrs))}>`);
      _push(ssrRenderComponent(Banner, null, null, _parent));
      _push(ssrRenderComponent(_component_publicTipsScroll, null, null, _parent));
      _push(ssrRenderComponent(TopTrader, null, null, _parent));
      _push(ssrRenderComponent(challengesHowToSuccess, null, null, _parent));
      _push(ssrRenderComponent(homeChallenges, null, null, _parent));
      _push(ssrRenderComponent(Trading, null, null, _parent));
      _push(ssrRenderComponent(homeChoose, null, null, _parent));
      _push(ssrRenderComponent(Partner, null, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-C9aZtqZO.js.map
