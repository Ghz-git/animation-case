import { d as defineStore, u as useI18n, _ as _export_sfc, L as LANGUAGE_LIST, A as APP_DISCORD, K as getQuery, n as nuxtTo, a as __nuxt_component_2, a8 as __nuxt_component_1 } from "../server.mjs";
import { ref, computed, mergeProps, unref, useSSRContext, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, withModifiers } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderClass, ssrRenderList, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { u as useCheckMobile } from "./isMobile-BdEqHLRM.js";
import { debounce } from "lodash-es";
import { E as ElCollapse, a as ElCollapseItem } from "./index-BVvjx3G1.js";
import { _ as __nuxt_component_3 } from "./index-Bms85OJQ.js";
/* empty css                          */
import { _ as _imports_1, b as MOB_MENU_LIST } from "./icon_hover-n9y39lIQ.js";
import { f as flagKorea, a as flagMacao, b as flagCyprus, c as flagFrance, d as flagGermany, e as flagSeychelles, g as flagBrunei, h as flagMalaysia, i as flagLaos, j as flagLuxembourg, k as flagIceland, u as useAccount } from "./useAccount-Ba5l_-oJ.js";
import { k as flagVietnam, a as flagIndonesia, b as flagIndia, e as flagSingapore, c as flagHongKong, d as flagTaiWan, f as flagJapan, l as flagBritain, g as flagDenmark, h as flagSweden, i as flagSwitzerland, j as flagNorway } from "./Norway-DkftQzDj.js";
import { j as flagAmerica, k as flagCanada, b as flagAustralia, m as flagNewZealand, a as flagThailand, g as flagPhilippines, l as flagCzech, i as flagEurope, h as flagRussia, e as flagHungary, c as flagIsrael, f as flagMexico, d as flagPoland } from "./NewZealand-bu8O6zsF.js";
import "hookable";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
const flagChina = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAkCAYAAADLsGk3AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF3SURBVHgB7Ze7TsMwFIaPWze0KSoFJDrDxgAzPAXMMLHAK7DwCrDzAOzs7LAz04WBu4SgbVKapuQ3MkJq4iClsq3In2Q1bZrEX87FCeuutydUAipUEpyIbcxEhK/EZJrCIq2dIS0fBcZl/iVS34jSD25OxBg9ms/Q3BnwTkyL+2HqvrjP6P2iLkb0bFYm9+qIBoYqdSAk/4tUQ5R0w9N+9NbG5G+NxHZz++cTdTC8q4rt3pU3FQFMHiKNzYgG17VfOV2wrJW9vRdOpRQm93Lq0+CmlnoyWTMm0oxn7UDeg78yD8fz9NWtZh0iRHVHQqK8dSh0ICfnrY7JVpQiyPe38wbdH7ToM6kLfFeBukJKmiBTBNFAPXxczomIvJ75FNzy3I60sGuma7FZPsaLFp1kYdzTXyuF24tsuwDdKnqqGCn4wiJLhwF1Tvpi7TEJp4JgcQyT2lG1ZR0w96prGU7ENpyIbTgR23AituFEbMOJ2IYTsY3SiHwDBh9+hBnRDucAAAAASUVORK5CYII=";
const _imports_0$1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAMAAAANIilAAAAAOVBMVEUAAADj4+Pk5OTh4eHj4+Pk5OTl5eXk5OTk5OTl5eXf39/k5OTi4uLk5OTj4+Pi4uLm5ubk5OTk5OTbJRO8AAAAEnRSTlMAgHAfQGDf77+gEDBgz5BQb49XclnzAAABsElEQVRIx92W25rCIAyE5SBQetK8/8Nu01UnpFrorjc6F7tV+b8kEyg5fZ98ipT6w5TNy98LrTL8zdW3kdkEGsAS2eWDpTA0sOdIFJb/jh7izBPVcZd4Na8aASeuhB9Gt8deIq8JnAAJccGBH6J9zRoiFRihDex7qo5+5dYsVeh8e+z22XR/hia2TNE6Z2QdSjhm7tZNV02irchaysvebVxzq893rycNTzKbqDuGPDt4DY2FD0mAZVstnBVC0dvEgygPJZdF99LATeBtjJf5GAmbhzij2Ww089GSqz5cPQmdsZcKOXVM+xWFuZtOqcWzsn/V1ALPyLA4XElFQHo75YzYXpBrhMMN1sbYFji+gM0z2OiF74BjS81W9/8dho1/gRPeuZAXO2lv80zYnnon1WH7v4Px4bJHX4CDgE391VvuTgnnWNjoa50Kh6+bswoMpSMXXXjDFQvZQ5e7lpG/xZKN0hZTGWh03l1toAGdkbfIep/FoCbdVyOh2Z9auUIVesD4WB9cPUIXgZOrjcxLiBGNZzESMDLXcCsbb9fAweZTk/yk7MvWV6GtATH509fpB3NtazWa0hTLAAAAAElFTkSuQmCC";
const STORE_KEY = "language";
const useLanguageStore = defineStore({
  id: STORE_KEY,
  state: () => ({
    current: ""
  }),
  actions: {
    handleChangeLanguage(lang) {
      this.current = lang;
    }
  },
  persist: false
});
const useChangeLang = () => {
  const isLangChange = ref(false);
  const languageStore = useLanguageStore();
  const { t, setLocale } = useI18n();
  const bindChangeLanguage = (val) => {
    languageStore.handleChangeLanguage(val);
    setLocale(val);
    isLangChange.value = false;
  };
  return { isLangChange, bindChangeLanguage };
};
const _sfc_main$1 = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const { isLangChange, bindChangeLanguage } = useChangeLang();
    const isMobile = computed(() => useCheckMobile().getItem());
    debounce(() => {
      if (!isMobile.value) {
        isLangChange.value = true;
      }
    }, 500, { "leading": false, "trailing": true });
    const close = () => {
      isLangChange.value = false;
    };
    __expose({ close });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "changeLan" }, _attrs))} data-v-dce2f490><img alt="" class="icon iconEarth"${ssrRenderAttr("src", _imports_0$1)} data-v-dce2f490><div class="${ssrRenderClass([{ active: unref(isLangChange) }, "hide"])}" data-v-dce2f490><!--[-->`);
      ssrRenderList(unref(LANGUAGE_LIST), (item, index) => {
        _push(`<p class="item" data-v-dce2f490><img class="flag"${ssrRenderAttr("alt", item.name)}${ssrRenderAttr("src", item.flagUrl)} data-v-dce2f490> ${ssrInterpolate(item.label)}</p>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/public/changeLanguage/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-dce2f490"]]);
const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAMCAYAAABSgIzaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADzSURBVHgBdVHtDYIwEG2LIYEQwgjdQJzAbqAjuIkzMIG6gSPgBmxgmaAkwF/wqnfpVeP9uY93j/fKScFinmcHqfJ1nudaStkT5pzTaZo+qVdUTNNUE8nHOI47/lEgnVlrFWsMX1RKGa4G6RThrD5wAGzqP2oeC4rQGCwHzFuu5pd/FOE9RBLLsjRYaiBVpMbmgQhxZMp3qpMkMUytpfm6rh+rAOxx1hVF0UG2SLzgvIHlKlL0doBYE/Ere8x6F5wItnuFdsjCgwA2u2VZZgW78VsRiPwMHS63+AQL97xirUX4D3YjwuEHfJ8oy9L/ICniiBRfJ29cO2J7nMgAAAAASUVORK5CYII=";
const FLAG_LIST = [
  { name: "China", flag: flagChina },
  { name: "Korea", flag: flagKorea },
  { name: "Vietnam", flag: flagVietnam },
  { name: "Indonesia", flag: flagIndonesia },
  { name: "India", flag: flagIndia },
  { name: "Singapore", flag: flagSingapore },
  { name: "HongKong", flag: flagHongKong },
  { name: "Macao", flag: flagMacao },
  { name: "TaiWan", flag: flagTaiWan },
  { name: "Japan", flag: flagJapan },
  { name: "Cyprus", flag: flagCyprus },
  { name: "Britain", flag: flagBritain },
  { name: "France", flag: flagFrance },
  { name: "Germany", flag: flagGermany },
  { name: "Seychelles", flag: flagSeychelles },
  { name: "Brunei", flag: flagBrunei },
  { name: "Malaysia", flag: flagMalaysia },
  { name: "Laos", flag: flagLaos },
  { name: "Denmark", flag: flagDenmark },
  { name: "Sweden", flag: flagSweden },
  { name: "Switzerland", flag: flagSwitzerland },
  { name: "Luxembourg", flag: flagLuxembourg },
  { name: "Norway", flag: flagNorway },
  { name: "Iceland", flag: flagIceland },
  { name: "America", flag: flagAmerica },
  { name: "Canada", flag: flagCanada },
  { name: "Australia", flag: flagAustralia },
  { name: "NewZealand", flag: flagNewZealand },
  { name: "Thailand", flag: flagThailand },
  { name: "Philippines", flag: flagPhilippines },
  { name: "Czech", flag: flagCzech },
  { name: "Europe", flag: flagEurope },
  { name: "Russia", flag: flagRussia },
  { name: "Hungary", flag: flagHungary },
  { name: "Israel", flag: flagIsrael },
  { name: "Mexico", flag: flagMexico },
  { name: "Poland", flag: flagPoland }
];
const _imports_2 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABnSURBVHgB7dWxDYAwDETRM8oWyXAwGRkumQMYIEljyQLxX+lrrvJJAL7NZkFr7VKgUsqwy6aXo6BXmgVmVgUAbqup2xXombo6urPFXhT0SovsEAC4Taeu934qUM55+NbYYi8KAvi7G0mcFSRbHSkKAAAAAElFTkSuQmCC";
const _sfc_main = {
  __name: "mobHead",
  __ssrInlineRender: true,
  setup(__props) {
    const changeLanguageRef = ref();
    LANGUAGE_LIST.forEach((item) => {
      item.flagUrl = FLAG_LIST.find((item2) => item2.name === item.flag).flag;
    });
    const { isLogin, userInfo, bindDoLoginOut } = useAccount();
    const waitingSystemRef = ref();
    const { t, setLocale } = useI18n();
    const isShowLogOut = ref(false);
    const discordUrl = APP_DISCORD;
    const maskBol = ref({
      outer: false,
      inner: false
    });
    const maskTransfer = (type) => {
      changeLanguageRef.value.close();
      {
        maskBol.value.outer = false;
        maskBol.value.inner = false;
      }
    };
    const isPwaBol = ref(false);
    const bindMobMenuTap = (url, bol) => {
      let query = url.includes("?") ? getQuery(url) : {};
      if (bol) {
        (void 0).open(url);
        maskTransfer();
      } else {
        nuxtTo(url, query);
        maskTransfer();
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_nuxt_link_locale = __nuxt_component_2;
      const _component_publicChangeLanguage = __nuxt_component_0;
      const _component_nuxt_link = __nuxt_component_1;
      const _component_el_collapse = ElCollapse;
      const _component_el_collapse_item = ElCollapseItem;
      const _component_publicTipsPopup = __nuxt_component_3;
      _push(`<!--[--><div class="mobHeader" data-v-1d79b5e5>`);
      _push(ssrRenderComponent(_component_nuxt_link_locale, {
        class: "logo",
        to: "/"
      }, null, _parent));
      _push(`<div class="right" data-v-1d79b5e5>`);
      if (!unref(isLogin)) {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_nuxt_link_locale, {
          class: "logIn",
          to: "/login",
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
          class: "btn",
          to: "/register",
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
        _push(`<!--]-->`);
      } else {
        _push(`<!--[--><p class="btn" data-v-1d79b5e5>${ssrInterpolate(unref(t)("Login.btn1"))}</p><div class="userHead" data-v-1d79b5e5><img class="head" alt=""${ssrRenderAttr("src", _imports_0)} data-v-1d79b5e5><div class="${ssrRenderClass([{ active: isShowLogOut.value }, "showLogOut"])}" data-v-1d79b5e5><p class="name" data-v-1d79b5e5>${ssrInterpolate((_a = unref(userInfo)) == null ? void 0 : _a.data.nickname)}</p><p class="account" data-v-1d79b5e5>${ssrInterpolate(((_b = unref(userInfo)) == null ? void 0 : _b.data.email) || ((_c = unref(userInfo)) == null ? void 0 : _c.data.phone))}</p><p class="logOut" data-v-1d79b5e5>${ssrInterpolate(unref(t)("Login.btn4"))}</p></div></div><!--]-->`);
      }
      _push(ssrRenderComponent(_component_publicChangeLanguage, {
        ref_key: "changeLanguageRef",
        ref: changeLanguageRef
      }, null, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "df",
        to: unref(discordUrl),
        target: "_blank",
        rel: "nofollow"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img class="icon" alt=""${ssrRenderAttr("src", _imports_1)} data-v-1d79b5e5${_scopeId}>`);
          } else {
            return [
              createVNode("img", {
                class: "icon",
                alt: "",
                src: _imports_1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<img class="${ssrRenderClass([{ open: maskBol.value.outer }, "group"])}" alt=""${ssrRenderAttr("src", _imports_2)} data-v-1d79b5e5></div></div><div class="${ssrRenderClass([{ active: maskBol.value.outer }, "mobMask"])}" data-v-1d79b5e5></div><div class="${ssrRenderClass([{ active: maskBol.value.inner }, "maskContainer"])}" data-v-1d79b5e5><div class="inner" data-v-1d79b5e5>`);
      if (!unref(isLogin)) {
        _push(`<div class="loginWrap" data-v-1d79b5e5>`);
        _push(ssrRenderComponent(_component_nuxt_link_locale, {
          class: "btn login",
          to: "/login",
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
          class: "btn signup",
          to: "/register",
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
      _push(`<div class="menuWrap" data-v-1d79b5e5>`);
      if (unref(isLogin)) {
        _push(ssrRenderComponent(_component_el_collapse, { class: "menuCollapse user" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_el_collapse_item, null, {
                title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<p class="headerTitle" data-v-1d79b5e5${_scopeId2}><img class="icon" alt=""${ssrRenderAttr("src", unref(MOB_MENU_LIST).auth.icon)} data-v-1d79b5e5${_scopeId2}>${ssrInterpolate(unref(t)(unref(MOB_MENU_LIST).auth.title))}</p>`);
                  } else {
                    return [
                      createVNode("p", { class: "headerTitle" }, [
                        createVNode("img", {
                          class: "icon",
                          alt: "",
                          src: unref(MOB_MENU_LIST).auth.icon
                        }, null, 8, ["src"]),
                        createTextVNode(toDisplayString(unref(t)(unref(MOB_MENU_LIST).auth.title)), 1)
                      ])
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(unref(MOB_MENU_LIST).auth.list, (item, index) => {
                      _push3(`<button class="menuTap" data-v-1d79b5e5${_scopeId2}>${ssrInterpolate(unref(t)(item.label))}</button>`);
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(MOB_MENU_LIST).auth.list, (item, index) => {
                        return openBlock(), createBlock("button", {
                          class: "menuTap",
                          key: index,
                          onClick: withModifiers(($event) => bindMobMenuTap(item.path, item.isBlank), ["stop"])
                        }, toDisplayString(unref(t)(item.label)), 9, ["onClick"]);
                      }), 128))
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_el_collapse_item, null, {
                  title: withCtx(() => [
                    createVNode("p", { class: "headerTitle" }, [
                      createVNode("img", {
                        class: "icon",
                        alt: "",
                        src: unref(MOB_MENU_LIST).auth.icon
                      }, null, 8, ["src"]),
                      createTextVNode(toDisplayString(unref(t)(unref(MOB_MENU_LIST).auth.title)), 1)
                    ])
                  ]),
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(MOB_MENU_LIST).auth.list, (item, index) => {
                      return openBlock(), createBlock("button", {
                        class: "menuTap",
                        key: index,
                        onClick: withModifiers(($event) => bindMobMenuTap(item.path, item.isBlank), ["stop"])
                      }, toDisplayString(unref(t)(item.label)), 9, ["onClick"]);
                    }), 128))
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<!--[-->`);
      ssrRenderList(unref(MOB_MENU_LIST).normal, (item, index) => {
        _push(ssrRenderComponent(_component_el_collapse, {
          class: "menuCollapse",
          key: index
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_el_collapse_item, null, {
                title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (!item.path) {
                      _push3(`<p class="headerTitle" data-v-1d79b5e5${_scopeId2}><img class="icon" alt=""${ssrRenderAttr("src", item.icon)} data-v-1d79b5e5${_scopeId2}><span class="name" data-v-1d79b5e5${_scopeId2}>${ssrInterpolate(unref(t)(item.title))}</span></p>`);
                    } else {
                      _push3(`<p class="headerTitle" data-v-1d79b5e5${_scopeId2}><img class="icon" alt=""${ssrRenderAttr("src", item.icon)} data-v-1d79b5e5${_scopeId2}><span class="name" data-v-1d79b5e5${_scopeId2}>${ssrInterpolate(unref(t)(item.title))}</span></p>`);
                    }
                  } else {
                    return [
                      !item.path ? (openBlock(), createBlock("p", {
                        key: 0,
                        class: "headerTitle"
                      }, [
                        createVNode("img", {
                          class: "icon",
                          alt: "",
                          src: item.icon
                        }, null, 8, ["src"]),
                        createVNode("span", { class: "name" }, toDisplayString(unref(t)(item.title)), 1)
                      ])) : (openBlock(), createBlock("p", {
                        key: 1,
                        class: "headerTitle",
                        onClick: withModifiers(($event) => bindMobMenuTap(item.path, false), ["stop"])
                      }, [
                        createVNode("img", {
                          class: "icon",
                          alt: "",
                          src: item.icon
                        }, null, 8, ["src"]),
                        createVNode("span", { class: "name" }, toDisplayString(unref(t)(item.title)), 1)
                      ], 8, ["onClick"]))
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<!--[-->`);
                    ssrRenderList(item.list, (child, idx) => {
                      _push3(`<!--[-->`);
                      if (child.isBlank) {
                        _push3(ssrRenderComponent(_component_nuxt_link, {
                          class: "menuTap",
                          rel: "nofollow",
                          to: child.path,
                          target: "_blank"
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`${ssrInterpolate(unref(t)(child.label))}`);
                            } else {
                              return [
                                createTextVNode(toDisplayString(unref(t)(child.label)), 1)
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        _push3(`<button class="menuTap" data-v-1d79b5e5${_scopeId2}>${ssrInterpolate(unref(t)(child.label))}</button>`);
                      }
                      _push3(`<!--]-->`);
                    });
                    _push3(`<!--]-->`);
                  } else {
                    return [
                      (openBlock(true), createBlock(Fragment, null, renderList(item.list, (child, idx) => {
                        return openBlock(), createBlock(Fragment, { key: idx }, [
                          child.isBlank ? (openBlock(), createBlock(_component_nuxt_link, {
                            key: 0,
                            class: "menuTap",
                            rel: "nofollow",
                            to: child.path,
                            target: "_blank"
                          }, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(unref(t)(child.label)), 1)
                            ]),
                            _: 2
                          }, 1032, ["to"])) : (openBlock(), createBlock("button", {
                            key: 1,
                            class: "menuTap",
                            onClick: withModifiers(($event) => bindMobMenuTap(child.path, child.isBlank), ["stop"])
                          }, toDisplayString(unref(t)(child.label)), 9, ["onClick"]))
                        ], 64);
                      }), 128))
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_el_collapse_item, null, {
                  title: withCtx(() => [
                    !item.path ? (openBlock(), createBlock("p", {
                      key: 0,
                      class: "headerTitle"
                    }, [
                      createVNode("img", {
                        class: "icon",
                        alt: "",
                        src: item.icon
                      }, null, 8, ["src"]),
                      createVNode("span", { class: "name" }, toDisplayString(unref(t)(item.title)), 1)
                    ])) : (openBlock(), createBlock("p", {
                      key: 1,
                      class: "headerTitle",
                      onClick: withModifiers(($event) => bindMobMenuTap(item.path, false), ["stop"])
                    }, [
                      createVNode("img", {
                        class: "icon",
                        alt: "",
                        src: item.icon
                      }, null, 8, ["src"]),
                      createVNode("span", { class: "name" }, toDisplayString(unref(t)(item.title)), 1)
                    ], 8, ["onClick"]))
                  ]),
                  default: withCtx(() => [
                    (openBlock(true), createBlock(Fragment, null, renderList(item.list, (child, idx) => {
                      return openBlock(), createBlock(Fragment, { key: idx }, [
                        child.isBlank ? (openBlock(), createBlock(_component_nuxt_link, {
                          key: 0,
                          class: "menuTap",
                          rel: "nofollow",
                          to: child.path,
                          target: "_blank"
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(unref(t)(child.label)), 1)
                          ]),
                          _: 2
                        }, 1032, ["to"])) : (openBlock(), createBlock("button", {
                          key: 1,
                          class: "menuTap",
                          onClick: withModifiers(($event) => bindMobMenuTap(child.path, child.isBlank), ["stop"])
                        }, toDisplayString(unref(t)(child.label)), 9, ["onClick"]))
                      ], 64);
                    }), 128))
                  ]),
                  _: 2
                }, 1024)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div>`);
      if (!isPwaBol.value) {
        _push(`<button class="startBtn" data-v-1d79b5e5>${ssrInterpolate(unref(t)("GuidePWA.btn"))}</button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="startBtn" data-v-1d79b5e5>${ssrInterpolate(unref(t)("Login.btn1"))}</div></div></div>`);
      _push(ssrRenderComponent(_component_publicTipsPopup, {
        ref_key: "waitingSystemRef",
        ref: waitingSystemRef,
        content: unref(t)("common.fund55"),
        isBtnGroup: false,
        isSingleBtn: ""
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/public/header/mobHead.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mobHeader = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1d79b5e5"]]);
export {
  FLAG_LIST as F,
  _imports_0 as _,
  __nuxt_component_0 as a,
  mobHeader as m
};
//# sourceMappingURL=mobHead-B7p5ITrc.js.map
