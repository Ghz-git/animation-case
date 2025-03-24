import { e as useNamespace, E as ElIcon, ay as caret_top_default, f as _export_sfc, w as withInstall, _ as _export_sfc$1, u as useI18n, J as useRoute, a8 as __nuxt_component_1$1, L as LANGUAGE_LIST, A as APP_DISCORD, a as __nuxt_component_2 } from "../server.mjs";
import { shallowRef, ref, defineComponent, computed, openBlock, createBlock, Transition, unref, withCtx, createElementBlock, normalizeStyle, normalizeClass, withModifiers, renderSlot, createVNode, createCommentVNode, watch, mergeProps, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { M as MENU_LIST, u as useRouteLink, _ as _imports_1, a as _imports_2 } from "./icon_hover-n9y39lIQ.js";
import "decimal.js";
import "hookable";
import "destr";
import "klona";
import "dayjs";
import { F as FLAG_LIST, _ as _imports_0$1, m as mobHeader, a as __nuxt_component_0$1 } from "./mobHead-B7p5ITrc.js";
import { useThrottleFn, useEventListener } from "@vueuse/core";
import { _ as _imports_0 } from "./mft-D9ZFXrBO.js";
import { u as useAccount } from "./useAccount-Ba5l_-oJ.js";
import { debounce } from "lodash-es";
const backtopProps = {
  visibilityHeight: {
    type: Number,
    default: 200
  },
  target: {
    type: String,
    default: ""
  },
  right: {
    type: Number,
    default: 40
  },
  bottom: {
    type: Number,
    default: 40
  }
};
const backtopEmits = {
  click: (evt) => evt instanceof MouseEvent
};
const useBackTop = (props, emit, componentName) => {
  const el = shallowRef();
  const container = shallowRef();
  const visible = ref(false);
  const handleScroll = () => {
    if (el.value)
      visible.value = el.value.scrollTop >= props.visibilityHeight;
  };
  const handleClick = (event) => {
    var _a;
    (_a = el.value) == null ? void 0 : _a.scrollTo({ top: 0, behavior: "smooth" });
    emit("click", event);
  };
  const handleScrollThrottled = useThrottleFn(handleScroll, 300, true);
  useEventListener(container, "scroll", handleScrollThrottled);
  return {
    visible,
    handleClick
  };
};
const COMPONENT_NAME = "ElBacktop";
const __default__ = defineComponent({
  name: COMPONENT_NAME
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: backtopProps,
  emits: backtopEmits,
  setup(__props, { emit }) {
    const props = __props;
    const ns = useNamespace("backtop");
    const { handleClick, visible } = useBackTop(props, emit);
    const backTopStyle = computed(() => ({
      right: `${props.right}px`,
      bottom: `${props.bottom}px`
    }));
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Transition, {
        name: `${unref(ns).namespace.value}-fade-in`
      }, {
        default: withCtx(() => [
          unref(visible) ? (openBlock(), createElementBlock("div", {
            key: 0,
            style: normalizeStyle(unref(backTopStyle)),
            class: normalizeClass(unref(ns).b()),
            onClick: withModifiers(unref(handleClick), ["stop"])
          }, [
            renderSlot(_ctx.$slots, "default", {}, () => [
              createVNode(unref(ElIcon), {
                class: normalizeClass(unref(ns).e("icon"))
              }, {
                default: withCtx(() => [
                  createVNode(unref(caret_top_default))
                ]),
                _: 1
              }, 8, ["class"])
            ])
          ], 14, ["onClick"])) : createCommentVNode("v-if", true)
        ]),
        _: 3
      }, 8, ["name"]);
    };
  }
});
var Backtop = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__file", "backtop.vue"]]);
const ElBacktop = withInstall(Backtop);
const _sfc_main$1 = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t, locale } = useI18n();
    const router = useRoute();
    let activeIdx = ref(0);
    const findCurrent = (name) => {
      var _a;
      let res = MENU_LIST.filter((item) => {
        var _a2;
        return item.children ? (_a2 = item.children) == null ? void 0 : _a2.find((child) => child.path.includes(name)) : item.path.includes(name);
      });
      return (_a = res[0]) == null ? void 0 : _a.active;
    };
    watch(
      () => router.fullPath,
      (newValue, oldValue) => {
        const pageName = newValue.split("/");
        let gotRouteName = locale.value !== "en-us" ? pageName[2] : pageName[1];
        gotRouteName = (gotRouteName == null ? void 0 : gotRouteName.includes("#")) ? gotRouteName.split("#")[0] : gotRouteName;
        activeIdx.value = gotRouteName ? findCurrent(gotRouteName) : 0;
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_1$1;
      _push(`<ul${ssrRenderAttrs(mergeProps({ class: "menu" }, _attrs))} data-v-d4b9e663><!--[-->`);
      ssrRenderList(unref(MENU_LIST), (menu, index) => {
        _push(`<!--[-->`);
        if (!menu.children) {
          _push(`<li class="${ssrRenderClass([{ active: unref(activeIdx) === menu.active }, "menu-item"])}" data-v-d4b9e663>${ssrInterpolate(unref(t)(menu.label))}</li>`);
        } else {
          _push(`<li class="${ssrRenderClass([{ active: unref(activeIdx) === menu.active }, "menu-item sub-menu"])}" data-v-d4b9e663>`);
          if (menu.path) {
            _push(`<span class="menu-name" data-v-d4b9e663>${ssrInterpolate(unref(t)(menu.label))}</span>`);
          } else {
            _push(`<span class="menu-name" data-v-d4b9e663>${ssrInterpolate(unref(t)(menu.label))}</span>`);
          }
          if (menu.children) {
            _push(`<i class="iconfont icon-xiala arrow" data-v-d4b9e663></i>`);
          } else {
            _push(`<!---->`);
          }
          _push(`<ul class="sub-item" data-v-d4b9e663><!--[-->`);
          ssrRenderList(menu.children, (menuItem, idx) => {
            _push(`<!--[-->`);
            if (menuItem.isBlank) {
              _push(ssrRenderComponent(_component_nuxt_link, {
                class: "inner",
                to: menuItem.path,
                target: "_blank",
                rel: "nofollow"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`${ssrInterpolate(unref(t)(menuItem.label))}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(unref(t)(menuItem.label)), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
            } else {
              _push(`<li class="inner" data-v-d4b9e663>${ssrInterpolate(unref(t)(menuItem.label))}</li>`);
            }
            _push(`<!--]-->`);
          });
          _push(`<!--]--></ul></li>`);
        }
        _push(`<!--]-->`);
      });
      _push(`<!--]--></ul>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/public/navBar/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["__scopeId", "data-v-d4b9e663"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    LANGUAGE_LIST.forEach((item) => {
      item.flagUrl = FLAG_LIST.find((item2) => item2.name === item.flag).flag;
    });
    const { t, setLocale, locale } = useI18n();
    const isUserSlide = ref(false);
    const { isLogin, bindDoLoginOut } = useAccount();
    const discordUrl = APP_DISCORD;
    debounce(() => {
      isUserSlide.value = true;
    }, 500, { "leading": false, "trailing": true });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link_locale = __nuxt_component_2;
      const _component_publicNavBar = __nuxt_component_1;
      const _component_publicChangeLanguage = __nuxt_component_0$1;
      const _component_nuxt_link = __nuxt_component_1$1;
      const _component_el_backtop = ElBacktop;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "header" }, _attrs))} data-v-aa0247eb><div class="header-container" data-v-aa0247eb>`);
      _push(ssrRenderComponent(_component_nuxt_link_locale, {
        to: unref(useRouteLink).INSIDE.HOME.path
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} class="logo" alt="" data-v-aa0247eb${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                class: "logo",
                alt: ""
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="header-container__left" data-v-aa0247eb>`);
      _push(ssrRenderComponent(_component_publicNavBar, null, null, _parent));
      if (!unref(isLogin)) {
        _push(`<div class="btn-group" data-v-aa0247eb>`);
        _push(ssrRenderComponent(_component_nuxt_link_locale, {
          to: "/login",
          class: "login",
          plain: "",
          rel: "nofollow"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(t)("Login.title1"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(t)("Login.title1")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_nuxt_link_locale, {
          to: "/register",
          class: "sign-up",
          rel: "nofollow"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(t)("Login.title2"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(t)("Login.title2")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(isLogin)) {
        _push(`<!--[--><div class="btn-group"${ssrRenderAttr("lang", unref(locale))} data-v-aa0247eb>`);
        _push(ssrRenderComponent(_component_nuxt_link_locale, {
          to: "/user",
          class: "sign-up battle"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(t)("Login.btn1"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(t)("Login.btn1")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="userWrap" data-v-aa0247eb><div class="head" data-v-aa0247eb><img alt=""${ssrRenderAttr("src", _imports_0$1)} data-v-aa0247eb></div><div class="${ssrRenderClass([{ active: isUserSlide.value }, "hide"])}" data-v-aa0247eb>`);
        _push(ssrRenderComponent(_component_nuxt_link_locale, {
          class: "item",
          to: "/user"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(unref(t)("Login.btn3"))}`);
            } else {
              return [
                createTextVNode(toDisplayString(unref(t)("Login.btn3")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<p class="item" data-v-aa0247eb>${ssrInterpolate(unref(t)("Login.btn4"))}</p></div></div><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_publicChangeLanguage, null, null, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "df discord",
        to: unref(discordUrl),
        target: "_blank",
        "data-platform": "Discord",
        rel: "nofollow"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_1)} class="i-btn" alt="" data-v-aa0247eb${_scopeId}><img${ssrRenderAttr("src", _imports_2)} alt="" class="icon-active" data-v-aa0247eb${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_1,
                class: "i-btn",
                alt: ""
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
      _push(`</div></div>`);
      _push(ssrRenderComponent(mobHeader, null, null, _parent));
      _push(ssrRenderComponent(_component_el_backtop, { bottom: 100 }, null, _parent));
      _push(`</header>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/public/header/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["__scopeId", "data-v-aa0247eb"]]);
export {
  __nuxt_component_0 as _
};
//# sourceMappingURL=index--7XThH9K.js.map
