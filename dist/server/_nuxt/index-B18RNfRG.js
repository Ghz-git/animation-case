import { _ as __nuxt_component_0 } from "./index-DP8eDe_k.js";
import { _ as __nuxt_component_0$1 } from "./index-DcwL4Y5F.js";
import { ref, computed, mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from "vue/server-renderer";
import youTubePlayer from "youtube-player";
import { d as defineStore, p as persistedState, _ as _export_sfc, u as useI18n } from "../server.mjs";
import { u as useCheckMobile } from "./isMobile-BdEqHLRM.js";
import { debounce } from "lodash-es";
import "decimal.js";
import "hookable";
import "destr";
import "klona";
import "dayjs";
import "ofetch";
import "#internal/nuxt/paths";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
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
const _imports_0 = "" + __buildAssetsURL("videoMask.B8cqNyf9.jpg");
const _imports_1 = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALgAAAC4CAYAAABQMybHAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAufSURBVHgB7d3rdRPJFgXgLRb/x0RAOwLsCJAjACJAjmAggrEjuBABIgJMBDQR4BsBRQTjGwG3jvqUKLX16HfXY39rNUI2w1pjb45PVVdXLUCd/P79+8y+yHWhr4W9nuvv3Xt47/d50EsY7/WXfvxeXheLxT2okwXoJBvmwr4s7fUCVXAv8CfAU9mEXV+/28sw+Kcx4DVamSXAL1GF2lXoEPmBL23gS9AOBhzbCv3aXq8QdqCbKO31FVXgs6/w2QbchnqJKtAS7AJpMva6s9fXXKt7VgG3oZbqLKF+h7irdBcGVdg/2rAbZCL5gGtPvUIV7CVIlPb6bIO+RuKSDbgG+2/kWa2bMqjCfptqVU8u4NpbS7Bfg9pYI8GgJxNwDfY/YBvS1xoJBT36gDPYo1kjgaBHG3Cdu5Zgr0BjWiPioEcXcA4eZ3NjQ36LyEQVcG1HPiHdGzOhM6iq+RqRiCLgWrUl2JwZCcMakbQtTxA4G25pR36C4Q7Jyl7f7PdmhcAFW8FZtaOxRsDVPMiAs9eOjrHXdYgLuoJrUWy4ZervGxjumBSoWpZ/EJhgKri2JF/AGzaxK1FVc4MABBFwXcYq4S5AKTD2ugoh5LO3KDbcb8GWJDWFvX7Y7+3sEwSzBlx7tjV4RzJFm5Zz7r58thZF/8dvQDmY7Tb/LAG34ZYpwBUoJ2sb8mtMbPKAM9xZmzzkkwVcpwFlMHkByplsZSEzLA+YwJQB/wGGmyr3NuCXmMAksyjaljDc5FxoJkY3egVnz01HjN6Tj1rBdSpwBaL9VmPPk49WwTnPTS2MNk8+SsD1Fu0XEDW3siH/jIENHnB92l1mTHj7ndqQacOroXfEHTTgGm4unKKujL0uh5wjH3qQyadwqI8CA7e2gwVcB5VLEPWzHHJmZZAWRZ+h/Aai4VwN8Yxn74Cz76aRGAzQjw/RosiPkwJEwypQjel66RVw3fhlBaJxvLYZe4ceOrcobE1oItKinHdtVfpUcLYmNAW3w1knnSq4tiaTLHckUp1mVboGXDbDLEA0HYMOsyqtWxSdhC9ANK0C1aEHrbSq4Dqw/AmieUj1vmyzY1bbCh7c5oqUFRlwtspg4wrO6k0BaTzgbFPBWb0pFI2z2KiCs3pTgBpV8aYVnNWbQtMokycrOKs3BexkFW9SwVm9KVR/n/oDRys4qzdF4Nmxu5unKjirN4Xu6N3NUxWca04odEeX0x6s4LpisABR2OTu5urQJ4+1KG9BFIdXhz6xN+A6uFyCDpEfhx/t9QbVj8ct+172vZYdUwfdoYmOWupRlI8cquC9noNLnARbQv3OXnf1lW2y9Zi91rrBu/wDMKAp7D2ycO8gk4PLvaRqX0uo0ZKOZ7iOflwP9nvzrP7BRxVcN/EpQHVXXcItpKLLf2+vwXdPpa0zze6OfS3K7KfTBuh9311PpZWx18r+9hwM+lgeZfdRi8L25JFRDkxi2zIKKSLn/gd2KriORAuQ7z1GoAPRc/37DWgIhc3wc/8D9RZlCfKZITaAPMb+/R/A/nxIb/w39YC/Avn+iwnU+vMS1MdOhlnBjzOYkAZdqvk12LZ0daGnam9sA75vioUwyXHTdV5/LiePGVAbEu7tXU2/gi9BQbEhvwH78y6W7jd+wF+CglPrz7m+pZltlv2A8yz5gGnQ3UIuAzpmt0XR+W+eaxmBWn8+yxghAmduPtxV8AIUFe3PpaKzP99Pxi7bgC9B0an15wbk27QpLuAvQNHSoEvI2Z//UcgvLuDsvxNQ689ztynaLuCcQUmI9ue5L8uVhVdnTw49y0Zx8/pzGYga5OkvqeBsTxKmz4jm2p9fSsBZwTPgPTaXU39+xgqeEW1bbpBPf15IwAtQVrz+XJ4mSvlu6HMJ+HNQlryniVIN+bM+R3lTAnS3gFT78r/YopCr5CXSU7CCk5NkFecsCm3o7gGpPVDBaULa8R1pOWOLQr7kHoljwMlnkBgGnJLGgJOvQGIYcPIlt/BOAs4ns8lJbW/KBwacNhLdOvuBLQo5J899j5EE3ICyZqu3hHuF9Bi2KJnT1uQDEiUB/x8oSzbccpr1N6TLPAVblOzoSdafkP6OZr8Y8IzoyQfSb79DHovsHiTg7MEzoMcW/gd5rR69lx6cm6onTI6msZf02dKS5LY0mhU8VdpnS8V+jUzJ86ZP7C8ScANKgvTZ9pITlH8g72PZN53JU+9NAYoajwffselMXMB/gaKlR0BKsJcgZ3OIr1/BKTLaZ0uwV6C6Un556r+hOGQ4n92FkV82AZe96uwXTXoWfrECZ79PMnCU2ZECdMiD7ti180QP25SAefPZX8Bwn7LNsh/w1PbESIJO+0nFlnAvQU1ss+wHvAQFw5vP/omq16bmSvebp94HpayzD981y9dCp/3k1noBak23odt44n1Qws0+fNdfmJA8fKB9tlwFqIvSf1N/JvMryDfJrW6vz5bb60tQHzsZrgf8DuQ703ZhNOyzB1f6b3YCLvPh4MKrurcYgU77SbBvwHHPUIyb/3b2bRvBNmXXasgqLrfX2WeP5lF29wWcbcpjn3TdR2deny1Vewkaw6PsLvb9KfuN+Bf8sVln7HWlbVwruu/IDfg1HZPRE513HNrZ6iOorrDXN11z3YjXZ8u+Iwz3uPa21ocq+AWqKSvar0R1UvCd3j/Y0pV+8vXj+uxpne/76bo49Kd1ILQEneLuAIsCHDjOobThvtr3iadH/iMp+UvQKcntqR2hz4c+cayCy49a6R/ZO1LI9g4unYPbJ2tvycEmha489snFsU9qFf8XROE6PzZ1e3QDfK3ivPFDoVqfui9xtIILvU2d8ha7FK/zUwE/eYSJLh4vQRSWk9VbnKzgglWcAnTeJOCNDqFiFafANKreolEFF6ziFJDzpgFvfIygVvHPIJpX4+otGldwoWuiZREW727SXM7bBLzVQbD6F/PuJs3ltu16/FYVXOjdTaniBYimc3TNySGtj/LWu5vXIJrWLTrodFa9Djh5C5+mIgPLNTpo3aI4XE5LEzHo+Cys6FTBhbYqnX5sELVw2zXconMFd2wll/2qJ9nijLIjrUmv8d4QAeesCo3BoEdr4nRuURzOqtBIrvuGW/QOuNBZFfbjNJTbhbfHdx+9WxQft5qgARzcAqKLoQPOfpz6MBig7/YNGnChu2JJJef8OLUhY7nLIcMtBunBfbo/83sQtXM9dLjF4AEXeluVg05qSgaVoyz9GLxF8dl25QbVJpREh0i4bzCSUQMubMjXGOkYEIreZxvuFUY0esAFQ057jB5uMUnAhQ25TB9yJ1YS9zbcl5jAKIPMA2TyngfNkmRgsBs5p0wWcFmzov9q+WR+vqQtuVzUTsUY02Qtio89eZYm6bnrpmxRtvR/lPPk+bidI9xilgrucJ48C6POc58ya8CFDbk8DfQJXLuSGumz33d9WHgoswdc6I5ZPNo6HcZebxa1c+PnMEsPXqeLbGTqqATFrkS1KjCIKeEgAi4k5LrQnYPPeEm/fTXlNOApQbQodbpVs/TlBSgGBtVy1xKBCaaC+/QLJdWcN4XCJ8tcL0MMtwgy4EJblhWqJ/YNKDRuluRNSC1JXZAtSp3OstyAdz9DIVX7OuRgO1EE3LFBX6G6MVSA5mAQaK99SFQBd3gHdHLuWPcPMVRtX5QBF2xbJrNGzw0w5xRtwB0GfTQlBtxhai7RB9xh0AdTIoFgO8kE3GHQO5OZkY+pBNtJLuCOF/SX4KzLIdEOHptKNuA+nV6Uir4EidJeX1FtMJ9ksJ0sAu5oVX9nr1fIr6q7an0Xykq/KWQVcJ8u6JKHLVIOu0FVqe9S662byjbgPt0Rd4kq7EvES6q0VGcXaoPMMeB7aHWXSwaoEv5QH6dzgf6Oqq++T72nbosBb0ArfIEq9C9QBX7qXboMqjD/0teSFfo0BrwHDb4Lu7w+x59+3r2e4fBPgAe9hPHe//LeS5gfWJm7+T+1e97BybzYxAAAAABJRU5ErkJggg==";
const useVideo = defineStore("video", () => {
  const currentTime = ref(0);
  const setCurrentTime = (data) => {
    currentTime.value = data;
  };
  const getCurrentTime = () => {
    return currentTime.value;
  };
  return { currentTime, setCurrentTime, getCurrentTime };
}, {
  persist: {
    storage: persistedState.localStorage
  }
});
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n();
    computed(() => useCheckMobile().getItem());
    const iframeRef = ref();
    const player = ref();
    const clickPlayer = ref();
    const isClick = ref(false);
    const isShow = ref(false);
    const picBox = ref();
    const clickMasker = () => {
      var _a, _b;
      isClick.value = true;
      if (!clickPlayer.value) {
        clickPlayer.value = youTubePlayer("youtubePlayer", {
          videoId: "GfBcitFGqlk",
          width: "100%",
          height: "100%"
        });
      }
      (_a = clickPlayer.value) == null ? void 0 : _a.getIframe().then((res) => {
        res && (isNetworkErr.value = false);
      });
      iframeRef.value.maskShow();
      (_b = clickPlayer.value) == null ? void 0 : _b.seekTo(useVideo().currentTime);
    };
    const keepCurrentTime = async () => {
      const currentTime = await player.value.getCurrentTime();
      useVideo().setCurrentTime(currentTime);
    };
    const pauseIt = () => {
      var _a;
      (_a = player.value) == null ? void 0 : _a.pauseVideo();
      keepCurrentTime();
    };
    const playIt = () => {
      if (!isClick.value) {
        player.value.mute();
        player.value.playVideo();
      } else {
        player.value.unMute();
        pauseIt();
      }
    };
    let pauseNum = 0;
    let autoPauseNum = 0;
    const isNetworkErr = ref(true);
    debounce(async () => {
      const clientRect = picBox.value && picBox.value.getBoundingClientRect();
      let top = (clientRect == null ? void 0 : clientRect.top) < (void 0).innerHeight - (clientRect == null ? void 0 : clientRect.height) * 0.7;
      let bottom = (clientRect == null ? void 0 : clientRect.bottom) > (clientRect == null ? void 0 : clientRect.height) * 0.7;
      if (bottom && top && pauseNum === autoPauseNum) {
        player.value && player.value.getPlayerState().then((res) => {
          isShow.value = true;
          isNetworkErr.value = false;
          if (res !== 1) {
            playIt();
          }
        });
      } else {
        isShow.value = false;
        player.value && player.value.getPlayerState().then((res) => {
          if (res === 1) {
            pauseIt();
            autoPauseNum++;
          }
        });
      }
    }, 300);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_publicMWrap = __nuxt_component_0;
      const _component_publicMaskPopup = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "trading" }, _attrs))} data-v-a80a8b46>`);
      _push(ssrRenderComponent(_component_publicMWrap, {
        title: unref(t)("Home.trading.title2")
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p class="subTitle" data-v-a80a8b46${_scopeId}>${ssrInterpolate(unref(t)("Home.trading.subTitle"))}</p><div class="${ssrRenderClass([{ pausing: !isShow.value || isClick.value }, "picBox"])}" data-v-a80a8b46${_scopeId}><div class="iframeBox" data-v-a80a8b46${_scopeId}><div id="youtubePlayerAuto" data-v-a80a8b46${_scopeId}></div></div>`);
            if (!isShow.value || isClick.value) {
              _push2(`<!--[--><img class="img"${ssrRenderAttr("src", _imports_0)} alt="" data-v-a80a8b46${_scopeId}><img class="play"${ssrRenderAttr("src", _imports_1)} alt="" data-v-a80a8b46${_scopeId}><!--]-->`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("p", { class: "subTitle" }, toDisplayString(unref(t)("Home.trading.subTitle")), 1),
              createVNode("div", {
                class: ["picBox", { pausing: !isShow.value || isClick.value }],
                ref_key: "picBox",
                ref: picBox
              }, [
                createVNode("div", { class: "iframeBox" }, [
                  createVNode("div", { id: "youtubePlayerAuto" })
                ]),
                !isShow.value || isClick.value ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                  createVNode("img", {
                    class: "img",
                    src: _imports_0,
                    alt: "",
                    onClick: clickMasker
                  }),
                  createVNode("img", {
                    class: "play",
                    src: _imports_1,
                    alt: "",
                    onClick: clickMasker
                  })
                ], 64)) : createCommentVNode("", true)
              ], 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_publicMaskPopup, {
        ref_key: "iframeRef",
        ref: iframeRef,
        isCenter: "",
        isClickMaskHide: ""
      }, {
        slot_mask: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="iframeBox mobBox" data-v-a80a8b46${_scopeId}>`);
            if (isNetworkErr.value) {
              _push2(`<div class="err" data-v-a80a8b46${_scopeId}><i class="iconfont icon-guanbi" data-v-a80a8b46${_scopeId}></i><p class="text" data-v-a80a8b46${_scopeId}>${ssrInterpolate(unref(t)("Education.errTips"))}</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div id="youtubePlayer" data-v-a80a8b46${_scopeId}></div></div>`);
          } else {
            return [
              createVNode("div", { class: "iframeBox mobBox" }, [
                isNetworkErr.value ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "err"
                }, [
                  createVNode("i", {
                    class: "iconfont icon-guanbi",
                    onClick: iframeRef.value.maskHide
                  }, null, 8, ["onClick"]),
                  createVNode("p", { class: "text" }, toDisplayString(unref(t)("Education.errTips")), 1)
                ])) : createCommentVNode("", true),
                createVNode("div", { id: "youtubePlayer" })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index/components/trading/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Trading = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a80a8b46"]]);
export {
  Trading as default
};
//# sourceMappingURL=index-B18RNfRG.js.map
