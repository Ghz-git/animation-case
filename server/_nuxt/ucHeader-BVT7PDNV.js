import { F as FLAG_LIST, _ as _imports_0, m as mobHeader, a as __nuxt_component_0 } from "./mobHead-B7p5ITrc.js";
import { _ as _export_sfc, u as useI18n, L as LANGUAGE_LIST, A as APP_DISCORD, a8 as __nuxt_component_1, a as __nuxt_component_2 } from "../server.mjs";
import { _ as __nuxt_component_3 } from "./index-Bms85OJQ.js";
import { ref, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderAttr, ssrRenderClass, ssrRenderComponent } from "vue/server-renderer";
import { _ as _imports_1, a as _imports_2 } from "./icon_hover-n9y39lIQ.js";
import "decimal.js";
import "hookable";
import "destr";
import "klona";
import "dayjs";
import { u as useAccount } from "./useAccount-Ba5l_-oJ.js";
import "./isMobile-BdEqHLRM.js";
import "lodash-es";
import "./index-BVvjx3G1.js";
import "@vue/shared";
import "./event-DsDEmsKp.js";
import "lodash-unified";
/* empty css                          */
import "./Norway-DkftQzDj.js";
import "./NewZealand-bu8O6zsF.js";
import "defu";
import "#internal/nuxt/paths";
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
import "deep-pick-omit";
import "jsencrypt/lib/JSEncrypt.js";
import "axios";
import "./index-DcwL4Y5F.js";
import "./close-CUfcVM9H.js";
import "./icon-card1-Cffy6RY4.js";
import "./useRequest-FImzQkjq.js";
import "./directive-o9p6vhNm.js";
import "./config-81Rc5edc.js";
const _imports_3 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAASYSURBVHgB7Zs5TxtBFMefLUMFktOBOGRLUCfuOUtokgba2HwAIC1NTANlAvTYtNAkDZQ44gMYapBsibOLI6g48/7OOlrPzt4zvuSftIIZz8L+/d68mXkzS9SlS0cRIY1cXl7ORCKRD3y9f3t7+8BVcb4SQrMyLm5T4Ta/+DodGRkpkCaUC4bIaDT6mR/8E/0TGIQKfwE/Xl9f91SLVyK4VCrFe3t7V1jkKgUXKYWFl19eXtZHR0fzpIDQgm9ublbYEllSLFRElfDAgtmqiZ6enhz/OkMNBMIfHx9nk8lkmQIQpQDAqiy2SA0WC7jb4IsuXl1drVIAfFv4+vr6K//TLLUAbO3s0NDQuq97/DRmsTkWm6bWIj88PJzx2tiz4BYVW8OzaE992HDjNLUuaTyjl4auFjaGne/UHnxhSzs+q6NgY+hBNNY6xiqk8vT0lHIashxdmsUeU/uIBXFjbmCLrWAe59Jknei3AzNOY7StS/NNJVIs+P7+nu7u7uji4qJaHhgYoL6+PhofHyfFwLXZs5MV8YOYrLVK60Lk0dERnZycULFYlLbp7++nyclJmpubo1QqRQqIx2IxWDkrfiC1sCrrQuDGxgbd3t56vmdxcZGWlpaqlg9JhSP2O7HSIthYtB9TSHZ3d6tXEGDlnZ0dCgvPHWbF9bQlaGHxTiHZ3t52FDs4OOh0e9Uz9vf3KSwyLZY+bGQqQvHw8GCpg9XgqmNjY9U+C87Pz+ng4IAODw8t7VEP9w6DoaVuylnn0qrcGdRcGn1xc3PTMRjBmvAKEYh28wY3RLeuszASbqSIWuBB9HV7aFgSX47oGTJP8YuhqVAri4Kn+RshVfhxSbi5CoEiyJiay3VBi8U2ZRqJYUscujApUTEhMdLD/xGjdIIaDIQuLy9b6sMGrBps4TojNlVwTaxoXYhVJRg5MHM5Rk0CQxEmF5h6mkGww6WLpgiWzcIQ0dfW1mhqaop00nDBMrEIULB22DHXC2IfLpNG0FcbLRaJe3NZFFwhjeRy1mQE+qtOy3LQKpvLdYI5WXdGGhGjMfrt/Pw86YQF/zGX6/owry5O+Ufo1ZIdoiXhzrphly7Ulc0FlYuHVkFcPFgSAJzt+E3tlal0wpL1sCQAuB//pA4BpwjEuqikUZ40gUxGJpOhiYkJWlhYUJLVcAJHJsQ6uySecrdGhIZIESQHsGZWDcZf3kpNivXSRDx39C1SDLIXMmTpHRXgeISsXir4+fkZG1JKJyF2i3tNi/6y3VkQqWAjY+9rZ90NO7fV4c521gW2e0vGtmOBFAFh4hoXiT3sNqjEybrVz51u1rFditQs9pYwy1K0rWLGdbvUdUPc2In7Ru2B64a465EH/AGO2kr7sw7wjG5igedDLWzpPGlcWIRkj8WmvTT0dWypRUV7Fgt8ncTDH24l9zbcOO3nnkBnLY1AhmNCzVpVVecJXvqsSNjDpVg7J6ixFHjoyQQ9XBr6+LBxPALWTpBeAlvVjLIT8RqF49WALczvZYdU/KLlFQCe3qX514/Uqa8A2GF6yWPa2JlMkPwlDwg85TZnul/y6NKlw/gLq7sWgrJIgWsAAAAASUVORK5CYII=";
const _sfc_main = {
  __name: "ucHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, setLocale } = useI18n();
    LANGUAGE_LIST.forEach((item) => {
      item.flagUrl = FLAG_LIST.find((item2) => item2.name === item.flag).flag;
    });
    const tipsPopupRef = ref();
    const { userInfo, bindDoLoginOut } = useAccount();
    const isShowLogOut = ref(false);
    const discordUrl = APP_DISCORD;
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_publicChangeLanguage = __nuxt_component_0;
      const _component_nuxt_link = __nuxt_component_1;
      const _component_nuxt_link_locale = __nuxt_component_2;
      const _component_publicTipsPopup = __nuxt_component_3;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "ucHeader" }, _attrs))} data-v-d4fff45a><div class="inner" data-v-d4fff45a><div class="left" data-v-d4fff45a><button class="startBtn" data-v-d4fff45a>${ssrInterpolate(unref(t)("Login.btn1"))}</button><p class="website" data-v-d4fff45a>${ssrInterpolate(unref(t)("Login.btn5"))}</p></div><div class="right" data-v-d4fff45a><div class="userInfo" data-v-d4fff45a><div class="userHead" data-v-d4fff45a><img class="head" alt=""${ssrRenderAttr("src", _imports_0)} data-v-d4fff45a></div><div class="info" data-v-d4fff45a><p class="name" data-v-d4fff45a>${ssrInterpolate((_a = unref(userInfo).data) == null ? void 0 : _a.nickname)}<i class="iconfont icon-xiangxia" data-v-d4fff45a></i></p><p class="account" data-v-d4fff45a>${ssrInterpolate(((_b = unref(userInfo).data) == null ? void 0 : _b.email) || ((_c = unref(userInfo).data) == null ? void 0 : _c.phone))}</p></div><div class="${ssrRenderClass([{ active: unref(isShowLogOut) }, "showLogOut"])}" data-v-d4fff45a><p class="logOut" data-v-d4fff45a>${ssrInterpolate(unref(t)("Login.btn4"))}</p></div></div><div class="iconsList" data-v-d4fff45a>`);
      _push(ssrRenderComponent(_component_publicChangeLanguage, null, null, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "df discord-hover",
        to: unref(discordUrl),
        target: "_blank",
        "data-platform": "Discord",
        rel: "nofollow"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="iconTap discord" alt=""${ssrRenderAttr("src", _imports_1)} data-v-d4fff45a${_scopeId}><img${ssrRenderAttr("src", _imports_2)} alt="" class="icon-active" data-v-d4fff45a${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                class: "iconTap discord",
                alt: "",
                src: _imports_1
              }),
              createVNode("img", {
                src: _imports_2,
                alt: "",
                class: "icon-active"
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link_locale, {
        class: "df question",
        to: "/contact"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="iconTap" alt=""${ssrRenderAttr("src", _imports_3)} data-v-d4fff45a${_scopeId}><div class="help" data-v-d4fff45a${_scopeId}>${ssrInterpolate(unref(t)("Footer.iconTips"))}</div>`);
          } else {
            return [
              createVNode("img", {
                class: "iconTap",
                alt: "",
                src: _imports_3
              }),
              createVNode("div", { class: "help" }, toDisplayString(unref(t)("Footer.iconTips")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
      _push(ssrRenderComponent(mobHeader, null, null, _parent));
      _push(ssrRenderComponent(_component_publicTipsPopup, {
        ref_key: "tipsPopupRef",
        ref: tipsPopupRef,
        isSingleBtn: "",
        content: unref(t)("common.fund55"),
        isBtnGroup: false
      }, null, _parent));
      _push(`</header>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/components/ucHeader.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ucHeader = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d4fff45a"]]);
export {
  ucHeader as default
};
//# sourceMappingURL=ucHeader-BVT7PDNV.js.map
