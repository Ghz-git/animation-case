import { _ as _export_sfc, u as useI18n, a as __nuxt_component_2 } from "../server.mjs";
import { computed, ref, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderStyle } from "vue/server-renderer";
import typesTap from "./index-Cugr8uAE.js";
import toolsTip from "./toolsTip-DYRN-MJI.js";
import { u as useCheckMobile } from "./isMobile-BdEqHLRM.js";
import { u as useChallengeInfo } from "./useChallengeInfo-D8ZmMr9V.js";
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
import "./client-only-Db1Q_2tj.js";
/* empty css                   */
import "./challenge-C5uxJouc.js";
import "./useRequest-FImzQkjq.js";
import "./directive-o9p6vhNm.js";
import "./config-81Rc5edc.js";
import "./challengesData-Ie0NoZuw.js";
import "./yellow-BzR1n8Bd.js";
import "./challenges-DfBymhN9.js";
import "lodash-es";
const _imports_0 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAaCAYAAABCfffNAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARuSURBVHgB7VVbaFxVFF3n3NfMpPNI07zTNGOkBqtFEVvwUVo0XyKCIPhAEe2fP/nwVRTMh/SjUZGIFPzR+iMUKdgfq5VaaEt9hBYhYKRpkk4m70kzk8ncedzHcd2ZfoTOtKhfgh7mMHPnnr3XXmuvfS/w//q3LfFXDq2+d2fMas08pVvWM7rM75GWvwVmM0Q8OYnWfT+gY/AT0fXYtX8EotSwtI8eeVuP2K+ZJuJQGmDogNlUi3RLgGMDnU+46Hj6iLjr1cN/C0Qd39mtMP2lcp29hTnm5UmzWUAZ3EJCSBOOF4YZ9vm7zJsdwK7PzkIlXxD9/bnNuWRDgK/6t8NKfV9c8/cu/CqhLOboYkVRBUoFzXQhhQ1TW0Wl6KO0SoY2K0mN7oc/P3JzvjoQNXcygrj33fqC3LE+66PlPoFYHwHCvBnSobZv53ecsgkIKmeZORjhMlwnAiyfAjYuPq/OfnNgc069jsbk4TehqV65bqN1dzO0qEFkB9hKpJYeSlMEYteB9ASQZz8UoBkVlOwm6CFerJ1AdiIxxEw/NmSizj3eS4DXy+klWN0E2NrMMkhh26NQLSzOceEtZniSwO1JfslaBhl4oQxF08FO4fryz3umh18ONZYrFD9UyRagR00YPTsIwCDJs9EHIUpLQLEEzSvAnZmDWlqlhqpmHW6p+XCLLpSdhRYyomGc6WoslyYfFoUMZDhRs6lLmXyPp9qBLQSzA+uGoDsErMwGAfy4N8oNXMcdyKdyKBYKsTomamx4gOXcocoVIN5VY6CblISJM6dqMxHbzb48AiT3EZRSagSXkVq868MIBGJcNOLB2NaZqZfLyvX6Lv2vhVks+yDpW2EFXWUvUsD8cahcGip1GlVPRweCzDfYsAa3ierl4YW7EWtvX+x5azJdD+JHWkRQfVChESUAIyUBDF63P0tWCQhjK4TDWD9wHLesBIE8a7AWAdePQEvshGh94PfNXdgEEsoJKwqvzC46Xg0gAKqypHwtg0C4B+h6CUpug1q+RCCeFZx824DwsrBFkpdtNNDAscYg2ewvDFJmZx98u1yTSwY65NkTWr6ppyaNt87JPkZ8rwrgFQV7biGfN0mum381X8NDkRMNQcSBDzOwnYuiqQ3C96EqhaoM9COdNAGV/gJq7TwBv61qz6mEays4Gw5B1ummBOLJu8mubUiIYb8xkyqbuQ8E3eR41Hf2MiWk5sGzgxUL4UBsXKgmDwbDzfEenehKD+PndSSoADwxIu4fOo2bVt1TWJ177mMkYgdRSKE8Mw49FhjB5AixOGcDqrAOr6JD0tkrU3lM/KTQ1mmj797k0cgrV95Ag1UPMjZmwP10BGH/IPwivNwyRDlHt9okQf1JzF5cwczlCmavSlgRQ7V1Rt7Z9VFqFLdYt36fXHr/RRjeIRR/60UlC5RWmH0epdkcpqc0pGc5+UbspGeG3h38/MoUbrNu/2ZcXY0hn32Sw7gfhUwHlq86+fEzKwtL6T+cYvPX94xeSOE/tf4EQEOta2UIim4AAAAASUVORK5CYII=";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { challengesData, isEmptyData, getChallengeInfoHooks } = useChallengeInfo();
    computed(() => useCheckMobile().getItem());
    const curIndex = ref(0);
    const curStep = ref(0);
    const { t, locale } = useI18n();
    const lang = computed(() => locale.value);
    const getItemByKey = (key) => {
      const i = curIndex.value;
      const c = curStep.value;
      return challengesData.value.list[i].levelList[c].children.find((item) => item.key === key);
    };
    ref();
    ref([]);
    const stepTranslate = ref([]);
    const bindCurChange = (e) => {
      curIndex.value = e;
      curStep.value = 0;
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
      const _component_nuxt_link_locale = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "challenges" }, _attrs))} data-v-e905af06>`);
      _push(ssrRenderComponent(typesTap, {
        curIndex: curIndex.value,
        data: (_a = unref(challengesData)) == null ? void 0 : _a.list,
        onCurChange: bindCurChange
      }, null, _parent));
      if (!unref(isEmptyData)) {
        _push(`<div class="contentWrap" data-v-e905af06><div class="leftCon" data-v-e905af06><div class="totalBox" data-v-e905af06><div class="unLimit" data-v-e905af06><img class="coin" alt=""${ssrRenderAttr("src", _imports_0)} data-v-e905af06><p class="text" data-v-e905af06>${ssrInterpolate(unref(t)((_b = unref(challengesData)) == null ? void 0 : _b.noLimit))}</p></div><div class="view" data-v-e905af06><p class="title" data-v-e905af06>${ssrInterpolate(unref(t)((_c = unref(challengesData)) == null ? void 0 : _c.list[curIndex.value].name))}</p><div class="textCon" data-v-e905af06><p class="name" data-v-e905af06>${ssrInterpolate(unref(t)("User.list.th6"))}</p><p class="value" data-v-e905af06>${ssrInterpolate((_d = unref(challengesData)) == null ? void 0 : _d.list[curIndex.value].amount)}</p></div><div class="textCon" data-v-e905af06><p class="name" data-v-e905af06>${ssrInterpolate(unref(t)("Home.challenge.text17"))}</p><p class="value" data-v-e905af06>${ssrInterpolate((_e = unref(challengesData)) == null ? void 0 : _e.list[curIndex.value].payment)}</p></div></div>`);
        _push(ssrRenderComponent(_component_nuxt_link_locale, {
          class: "tbBtn",
          to: "/user"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="bg" data-v-e905af06${_scopeId}></span><span class="text"${ssrRenderAttr("lang", unref(lang))} data-v-e905af06${_scopeId}>${ssrInterpolate(unref(t)("Login.btn1"))}</span>`);
            } else {
              return [
                createVNode("span", { class: "bg" }),
                createVNode("span", {
                  class: "text",
                  lang: unref(lang)
                }, toDisplayString(unref(t)("Login.btn1")), 9, ["lang"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="stepBox" data-v-e905af06><div class="stepWrap" data-v-e905af06><div class="inner" data-v-e905af06><!--[-->`);
        ssrRenderList((_f = unref(challengesData)) == null ? void 0 : _f.list[curIndex.value].levelList, (item, idx) => {
          _push(`<p class="${ssrRenderClass([{ active: curStep.value === idx }, "tap"])}" data-v-e905af06>step ${ssrInterpolate(item.step)}</p>`);
        });
        _push(`<!--]--><div class="currentTag" style="${ssrRenderStyle({ transform: `translateX(${stepTranslate.value[curStep.value]}px)` })}" data-v-e905af06></div></div></div><ul class="textList" data-v-e905af06><!--[-->`);
        ssrRenderList((_g = unref(challengesData)) == null ? void 0 : _g.list[curIndex.value].levelList[curStep.value].children.slice(0, 3), (item, idx) => {
          _push(`<li data-v-e905af06><p class="label" data-v-e905af06>`);
          _push(ssrRenderComponent(toolsTip, {
            contentStr: unref(t)(item.desc),
            valueStr: unref(t)(item.title)
          }, null, _parent));
          _push(`</p><p class="value" data-v-e905af06>${ssrInterpolate(item.isLang ? unref(t)(item.content) : item.content)}</p></li>`);
        });
        _push(`<!--]-->`);
        if (curStep.value === 0) {
          _push(`<li data-v-e905af06><p class="label" data-v-e905af06>`);
          _push(ssrRenderComponent(toolsTip, {
            contentStr: unref(t)((_h = getItemByKey(6)) == null ? void 0 : _h.desc),
            valueStr: unref(t)((_i = getItemByKey(6)) == null ? void 0 : _i.title)
          }, null, _parent));
          _push(`</p><p class="value" data-v-e905af06>${ssrInterpolate(unref(t)((_j = getItemByKey(6)) == null ? void 0 : _j.content))}</p></li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</ul></div></div><div class="rightCon" data-v-e905af06><p class="title" data-v-e905af06>${ssrInterpolate(unref(t)("Home.challenge.text12"))}</p><ul class="textList" data-v-e905af06><li data-v-e905af06><p class="label" data-v-e905af06>`);
        _push(ssrRenderComponent(toolsTip, {
          contentStr: unref(t)("Home.challenge.text16"),
          valueStr: unref(t)("Battle.li.li7")
        }, null, _parent));
        _push(`</p><p class="value" data-v-e905af06>${ssrInterpolate(unref(t)("Home.challenge.text7", { most: "90" }))}</p></li><li data-v-e905af06><p class="label" data-v-e905af06>${ssrInterpolate(unref(t)("Home.challenge.text13"))}</p><p class="value" data-v-e905af06>${ssrInterpolate(unref(t)("Home.challenge.text8"))}</p></li><li data-v-e905af06><p class="label" data-v-e905af06>`);
        _push(ssrRenderComponent(toolsTip, {
          contentStr: unref(t)("Glossary.main.L.list.item2.content"),
          valueStr: unref(t)("Home.challenge.text10")
        }, null, _parent));
        _push(`</p><p class="value" data-v-e905af06>${ssrInterpolate(unref(t)("Home.challenge.text14", { most: 200 }))}</p></li><li data-v-e905af06><p class="label" data-v-e905af06>${ssrInterpolate(unref(t)("Home.challenge.text9"))}</p><p class="value" data-v-e905af06>${ssrInterpolate(unref(t)("Home.challenge.text15"))}</p></li>`);
        if (getItemByKey(4)) {
          _push(`<li data-v-e905af06><p class="label" data-v-e905af06>`);
          _push(ssrRenderComponent(toolsTip, {
            contentStr: unref(t)((_k = getItemByKey(4)) == null ? void 0 : _k.desc),
            valueStr: unref(t)((_l = getItemByKey(4)) == null ? void 0 : _l.title)
          }, null, _parent));
          _push(`</p><p class="value" data-v-e905af06>${ssrInterpolate((_m = getItemByKey(4)) == null ? void 0 : _m.content)}</p></li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<li data-v-e905af06><p class="label" data-v-e905af06>${ssrInterpolate(unref(t)("Footer.list.item7.name"))}</p><p class="value" data-v-e905af06>MT5、MC Markets</p></li>`);
        if (getItemByKey(5)) {
          _push(`<li data-v-e905af06><p class="label" data-v-e905af06>`);
          _push(ssrRenderComponent(toolsTip, {
            contentStr: unref(t)((_n = getItemByKey(5)) == null ? void 0 : _n.desc),
            valueStr: unref(t)((_o = getItemByKey(5)) == null ? void 0 : _o.title)
          }, null, _parent));
          _push(`</p><p class="value" data-v-e905af06>${ssrInterpolate((_p = getItemByKey(5)) == null ? void 0 : _p.content)}</p></li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</ul></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index/components/challenges/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const homeChallenges = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e905af06"]]);
export {
  homeChallenges as default
};
//# sourceMappingURL=index-DIs-pXPy.js.map
