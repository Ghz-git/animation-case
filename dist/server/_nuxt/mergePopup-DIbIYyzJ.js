import { _ as __nuxt_component_1$1 } from "./client-only-Db1Q_2tj.js";
import { ref, inject, computed, defineComponent, openBlock, createElementBlock, normalizeClass, unref, createElementVNode, withDirectives, isRef, withModifiers, vModelRadio, renderSlot, createTextVNode, toDisplayString, nextTick, normalizeStyle, provide, reactive, toRefs, watch, withCtx, createVNode, createBlock, useSSRContext, createCommentVNode, Fragment, mergeProps, renderList } from "vue";
import { ssrRenderComponent, ssrRenderStyle, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderAttrs, ssrRenderSlot, ssrRenderList } from "vue/server-renderer";
import { _ as _imports_0 } from "./doubt-Cq7olve3.js";
import "dayjs";
import { u as useAriaProps, E as ElTooltip } from "./index-C-aEYaqc.js";
import { b as buildProps, ad as useSizeProp, v as isNumber, q as isBoolean, ae as isPropAbsent, e as useNamespace, f as _export_sfc, B as useId, x as debugWarn, w as withInstall, h as withNoopInstall, _ as _export_sfc$1, u as useI18n, C as formatNumberWithCurrency, D as multiply, H as useUserInfo, G as ElMessage } from "../server.mjs";
import { _ as __nuxt_component_0 } from "./index-DcwL4Y5F.js";
import { _ as __nuxt_component_3$1 } from "./index-Bms85OJQ.js";
import { _ as _imports_0$1 } from "./close-CUfcVM9H.js";
import { l as bindSettlement, m as mergeTradeAccount } from "./challenge-C5uxJouc.js";
import "hookable";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import { u as useAppConfig } from "./config-81Rc5edc.js";
import { p as post, E as ElLoading } from "./useRequest-FImzQkjq.js";
import { debounce } from "lodash-es";
import { u as usePayment, _ as __nuxt_component_1$2 } from "./usePayment-DTlV3mZU.js";
import { g as getAssetType } from "./currencyFlag-B5fK02oa.js";
import { E as ElCollapse, a as ElCollapseItem } from "./index-BVvjx3G1.js";
import { U as UPDATE_MODEL_EVENT, C as CHANGE_EVENT } from "./event-DsDEmsKp.js";
import { isString } from "@vue/shared";
import { u as useFormSize, a as useFormDisabled, b as useDeprecated, c as useFormItem, d as useFormItemInputId } from "./use-form-item-BALinmg-.js";
const radioPropsBase = buildProps({
  modelValue: {
    type: [String, Number, Boolean],
    default: void 0
  },
  size: useSizeProp,
  disabled: Boolean,
  label: {
    type: [String, Number, Boolean],
    default: void 0
  },
  value: {
    type: [String, Number, Boolean],
    default: void 0
  },
  name: {
    type: String,
    default: void 0
  }
});
const radioProps = buildProps({
  ...radioPropsBase,
  border: Boolean
});
const radioEmits = {
  [UPDATE_MODEL_EVENT]: (val) => isString(val) || isNumber(val) || isBoolean(val),
  [CHANGE_EVENT]: (val) => isString(val) || isNumber(val) || isBoolean(val)
};
const radioGroupKey = Symbol("radioGroupKey");
const useRadio = (props, emit) => {
  const radioRef = ref();
  const radioGroup = inject(radioGroupKey, void 0);
  const isGroup = computed(() => !!radioGroup);
  const actualValue = computed(() => {
    if (!isPropAbsent(props.value)) {
      return props.value;
    }
    return props.label;
  });
  const modelValue = computed({
    get() {
      return isGroup.value ? radioGroup.modelValue : props.modelValue;
    },
    set(val) {
      if (isGroup.value) {
        radioGroup.changeEvent(val);
      } else {
        emit && emit(UPDATE_MODEL_EVENT, val);
      }
      radioRef.value.checked = props.modelValue === actualValue.value;
    }
  });
  const size = useFormSize(computed(() => radioGroup == null ? void 0 : radioGroup.size));
  const disabled = useFormDisabled(computed(() => radioGroup == null ? void 0 : radioGroup.disabled));
  const focus = ref(false);
  const tabIndex = computed(() => {
    return disabled.value || isGroup.value && modelValue.value !== actualValue.value ? -1 : 0;
  });
  useDeprecated({
    from: "label act as value",
    replacement: "value",
    version: "3.0.0",
    scope: "el-radio",
    ref: "https://element-plus.org/en-US/component/radio.html"
  }, computed(() => isGroup.value && isPropAbsent(props.value)));
  return {
    radioRef,
    isGroup,
    radioGroup,
    focus,
    size,
    disabled,
    tabIndex,
    modelValue,
    actualValue
  };
};
const __default__$2 = defineComponent({
  name: "ElRadio"
});
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  props: radioProps,
  emits: radioEmits,
  setup(__props, { emit }) {
    const props = __props;
    const ns = useNamespace("radio");
    const { radioRef, radioGroup, focus, size, disabled, modelValue, actualValue } = useRadio(props, emit);
    function handleChange() {
      nextTick(() => emit("change", modelValue.value));
    }
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock("label", {
        class: normalizeClass([
          unref(ns).b(),
          unref(ns).is("disabled", unref(disabled)),
          unref(ns).is("focus", unref(focus)),
          unref(ns).is("bordered", _ctx.border),
          unref(ns).is("checked", unref(modelValue) === unref(actualValue)),
          unref(ns).m(unref(size))
        ])
      }, [
        createElementVNode("span", {
          class: normalizeClass([
            unref(ns).e("input"),
            unref(ns).is("disabled", unref(disabled)),
            unref(ns).is("checked", unref(modelValue) === unref(actualValue))
          ])
        }, [
          withDirectives(createElementVNode("input", {
            ref_key: "radioRef",
            ref: radioRef,
            "onUpdate:modelValue": ($event) => isRef(modelValue) ? modelValue.value = $event : null,
            class: normalizeClass(unref(ns).e("original")),
            value: unref(actualValue),
            name: _ctx.name || ((_a = unref(radioGroup)) == null ? void 0 : _a.name),
            disabled: unref(disabled),
            checked: unref(modelValue) === unref(actualValue),
            type: "radio",
            onFocus: ($event) => focus.value = true,
            onBlur: ($event) => focus.value = false,
            onChange: handleChange,
            onClick: withModifiers(() => {
            }, ["stop"])
          }, null, 42, ["onUpdate:modelValue", "value", "name", "disabled", "checked", "onFocus", "onBlur", "onClick"]), [
            [vModelRadio, unref(modelValue)]
          ]),
          createElementVNode("span", {
            class: normalizeClass(unref(ns).e("inner"))
          }, null, 2)
        ], 2),
        createElementVNode("span", {
          class: normalizeClass(unref(ns).e("label")),
          onKeydown: withModifiers(() => {
          }, ["stop"])
        }, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(_ctx.label), 1)
          ])
        ], 42, ["onKeydown"])
      ], 2);
    };
  }
});
var Radio = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__file", "radio.vue"]]);
const radioButtonProps = buildProps({
  ...radioPropsBase
});
const __default__$1 = defineComponent({
  name: "ElRadioButton"
});
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: radioButtonProps,
  setup(__props) {
    const props = __props;
    const ns = useNamespace("radio");
    const { radioRef, focus, size, disabled, modelValue, radioGroup, actualValue } = useRadio(props);
    const activeStyle = computed(() => {
      return {
        backgroundColor: (radioGroup == null ? void 0 : radioGroup.fill) || "",
        borderColor: (radioGroup == null ? void 0 : radioGroup.fill) || "",
        boxShadow: (radioGroup == null ? void 0 : radioGroup.fill) ? `-1px 0 0 0 ${radioGroup.fill}` : "",
        color: (radioGroup == null ? void 0 : radioGroup.textColor) || ""
      };
    });
    return (_ctx, _cache) => {
      var _a;
      return openBlock(), createElementBlock("label", {
        class: normalizeClass([
          unref(ns).b("button"),
          unref(ns).is("active", unref(modelValue) === unref(actualValue)),
          unref(ns).is("disabled", unref(disabled)),
          unref(ns).is("focus", unref(focus)),
          unref(ns).bm("button", unref(size))
        ])
      }, [
        withDirectives(createElementVNode("input", {
          ref_key: "radioRef",
          ref: radioRef,
          "onUpdate:modelValue": ($event) => isRef(modelValue) ? modelValue.value = $event : null,
          class: normalizeClass(unref(ns).be("button", "original-radio")),
          value: unref(actualValue),
          type: "radio",
          name: _ctx.name || ((_a = unref(radioGroup)) == null ? void 0 : _a.name),
          disabled: unref(disabled),
          onFocus: ($event) => focus.value = true,
          onBlur: ($event) => focus.value = false,
          onClick: withModifiers(() => {
          }, ["stop"])
        }, null, 42, ["onUpdate:modelValue", "value", "name", "disabled", "onFocus", "onBlur", "onClick"]), [
          [vModelRadio, unref(modelValue)]
        ]),
        createElementVNode("span", {
          class: normalizeClass(unref(ns).be("button", "inner")),
          style: normalizeStyle(unref(modelValue) === unref(actualValue) ? unref(activeStyle) : {}),
          onKeydown: withModifiers(() => {
          }, ["stop"])
        }, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(_ctx.label), 1)
          ])
        ], 46, ["onKeydown"])
      ], 2);
    };
  }
});
var RadioButton = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__file", "radio-button.vue"]]);
const radioGroupProps = buildProps({
  id: {
    type: String,
    default: void 0
  },
  size: useSizeProp,
  disabled: Boolean,
  modelValue: {
    type: [String, Number, Boolean],
    default: void 0
  },
  fill: {
    type: String,
    default: ""
  },
  textColor: {
    type: String,
    default: ""
  },
  name: {
    type: String,
    default: void 0
  },
  validateEvent: {
    type: Boolean,
    default: true
  },
  ...useAriaProps(["ariaLabel"])
});
const radioGroupEmits = radioEmits;
const __default__ = defineComponent({
  name: "ElRadioGroup"
});
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: radioGroupProps,
  emits: radioGroupEmits,
  setup(__props, { emit }) {
    const props = __props;
    const ns = useNamespace("radio");
    const radioId = useId();
    const radioGroupRef = ref();
    const { formItem } = useFormItem();
    const { inputId: groupId, isLabeledByFormItem } = useFormItemInputId(props, {
      formItemContext: formItem
    });
    const changeEvent = (value) => {
      emit(UPDATE_MODEL_EVENT, value);
      nextTick(() => emit("change", value));
    };
    const name = computed(() => {
      return props.name || radioId.value;
    });
    provide(radioGroupKey, reactive({
      ...toRefs(props),
      changeEvent,
      name
    }));
    watch(() => props.modelValue, () => {
      if (props.validateEvent) {
        formItem == null ? void 0 : formItem.validate("change").catch((err) => debugWarn(err));
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        id: unref(groupId),
        ref_key: "radioGroupRef",
        ref: radioGroupRef,
        class: normalizeClass(unref(ns).b("group")),
        role: "radiogroup",
        "aria-label": !unref(isLabeledByFormItem) ? _ctx.ariaLabel || "radio-group" : void 0,
        "aria-labelledby": unref(isLabeledByFormItem) ? unref(formItem).labelId : void 0
      }, [
        renderSlot(_ctx.$slots, "default")
      ], 10, ["id", "aria-label", "aria-labelledby"]);
    };
  }
});
var RadioGroup = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__file", "radio-group.vue"]]);
const ElRadio = withInstall(Radio, {
  RadioButton,
  RadioGroup
});
const ElRadioGroup = withNoopInstall(RadioGroup);
withNoopInstall(RadioButton);
const _sfc_main$4 = {
  __name: "questionTips",
  __ssrInlineRender: true,
  props: {
    txt: {
      type: Object,
      default: () => {
      }
    },
    appendClass: {
      type: String,
      default: ".challengeDetailMain"
    },
    alignR: {
      type: Boolean,
      default: false
    },
    heightAuto: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const placement = computed(() => {
      const media = (void 0).innerWidth;
      return media > 1024 ? "right" : "bottom-start";
    });
    const labelColor = computed(() => props.alignR ? "#fff" : "#979797");
    const { t } = useI18n();
    const formatFaq = (arr) => {
      return arr.map((item) => item.includes(".") ? t(item) : item).reduce((pre, cur) => {
        return `${pre}
${cur}`;
      });
    };
    const langCondition = (word) => typeof word === "string" && word.includes(".") && isNaN(Number(word.split(".")[1]));
    const isChangeLang = (item) => {
      let res;
      if (langCondition(item)) {
        res = t(item);
      } else if (item instanceof Array) {
        const [lang, val, key] = item;
        let param = {};
        param[key] = val;
        res = t(lang, param);
      } else {
        res = item;
      }
      return res;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_clientOnly = __nuxt_component_1$1;
      _push(ssrRenderComponent(_component_clientOnly, _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f;
          if (_push2) {
            if ((_a = __props.txt) == null ? void 0 : _a.faq) {
              _push2(ssrRenderComponent(unref(ElTooltip), {
                class: "box-item",
                effect: "dark",
                content: formatFaq((_b = __props.txt) == null ? void 0 : _b.faq),
                placement: placement.value,
                "append-to": __props.appendClass,
                "popper-class": "aTips"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a2, _b2;
                  if (_push3) {
                    _push3(`<span style="${ssrRenderStyle({ color: labelColor.value })}" class="${ssrRenderClass([{ "height-auto": __props.heightAuto }, "label hover"])}" data-v-40ea01c2${_scopeId2}><img class="question" alt=""${ssrRenderAttr("src", _imports_0)} data-v-40ea01c2${_scopeId2}> ${ssrInterpolate(isChangeLang((_a2 = __props.txt) == null ? void 0 : _a2.label))}</span>`);
                  } else {
                    return [
                      createVNode("span", {
                        class: ["label hover", { "height-auto": __props.heightAuto }],
                        style: { color: labelColor.value }
                      }, [
                        createVNode("img", {
                          class: "question",
                          alt: "",
                          src: _imports_0
                        }),
                        createTextVNode(" " + toDisplayString(isChangeLang((_b2 = __props.txt) == null ? void 0 : _b2.label)), 1)
                      ], 6)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<div class="label" data-v-40ea01c2${_scopeId}>${ssrInterpolate(isChangeLang((_c = __props.txt) == null ? void 0 : _c.label))}</div>`);
            }
          } else {
            return [
              ((_d = __props.txt) == null ? void 0 : _d.faq) ? (openBlock(), createBlock(unref(ElTooltip), {
                key: 0,
                class: "box-item",
                effect: "dark",
                content: formatFaq((_e = __props.txt) == null ? void 0 : _e.faq),
                placement: placement.value,
                "append-to": __props.appendClass,
                "popper-class": "aTips"
              }, {
                default: withCtx(() => {
                  var _a2;
                  return [
                    createVNode("span", {
                      class: ["label hover", { "height-auto": __props.heightAuto }],
                      style: { color: labelColor.value }
                    }, [
                      createVNode("img", {
                        class: "question",
                        alt: "",
                        src: _imports_0
                      }),
                      createTextVNode(" " + toDisplayString(isChangeLang((_a2 = __props.txt) == null ? void 0 : _a2.label)), 1)
                    ], 6)
                  ];
                }),
                _: 1
              }, 8, ["content", "placement", "append-to"])) : (openBlock(), createBlock("div", {
                key: 1,
                class: "label"
              }, toDisplayString(isChangeLang((_f = __props.txt) == null ? void 0 : _f.label)), 1))
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/public/questionTips.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc$1(_sfc_main$4, [["__scopeId", "data-v-40ea01c2"]]);
const getKycStatus = (data) => {
  const config = useAppConfig();
  const postUrl = config.public.kyc + "/openapi/v1/kyc/third/query/user/verify";
  return post(postUrl, data, {}, {
    headers: {
      token: config.public.kyc_token
    }
  });
};
const getKycVerify = (data) => {
  const config = useAppConfig();
  const postUrl = config.public.kyc + "/openapi/v1/kyc/verify";
  return post(postUrl, data, {}, {
    headers: {
      token: config.public.kyc_token
    }
  });
};
const _sfc_main$3 = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  emits: ["reFlashList"],
  setup(__props, { expose: __expose, emit: __emit }) {
    const { t } = useI18n();
    const props = __props;
    const levelFee = ref([99, 500, 999, 1699, 2499]);
    const { data } = toRefs(props);
    const kycStatus = ref();
    const kycFailReason = ref("");
    const upgradeRef = ref();
    const authenticatedRef = ref();
    const publicTipsRef = ref();
    const submitBol = ref(false);
    const ugBol = ref(false);
    const levelTipsStr = ref("User.tips8");
    const totalAmount = computed(() => {
      return !data.value.withdrawCount ? formatNumberWithCurrency(data.value.amount + levelFee.value[data.value.level - 1]) : formatNumberWithCurrency(data.value.amount);
    });
    const shower = () => {
      upgradeRef.value.maskShow();
      if (data.value.phaseIndex === 1) levelTipsStr.value = "User.tips8";
      if (data.value.phaseIndex === 2) levelTipsStr.value = "User.tips13";
      if (data.value.phaseIndex === 3) {
        levelTipsStr.value = "User.tips14";
        data.value.ratioStr = `${multiply(data.value.profitSharingRatio, 10)}%`;
      }
      const userUid = useUserInfo().getInfo().data.userAccount;
      getKycStatus({ uid: userUid }).then((res) => {
        kycStatus.value = res.data.status;
        kycFailReason.value = res.data.status === "5" ? "Authentication timeout" : res.data.declinedInfo;
      });
    };
    __expose({ shower });
    const emits = __emit;
    const bindDoUpGrade = () => {
      const params = {
        tradingChallengeId: data.value.tradingChallengeId,
        orderNo: data.value.orderNo,
        withdrawType: data.value.withdrawType,
        amount: data.value.amount,
        email: "",
        level: data.value.phaseIndex === 1 ? 2 : 3
      };
      if (data.value.phaseIndex === 2 && kycStatus.value !== "2") {
        authenticatedRef.value.maskShow();
      } else if (data.value.phaseIndex === 3 && data.value.amount < 100) {
        publicTipsRef.value.shower();
      } else {
        upGrade(params);
      }
    };
    const upGrade = debounce(
      (data2) => {
        const loading = ElLoading.service({
          lock: true,
          text: "Loading",
          background: "rgba(0, 0, 0, 0)"
        });
        if (!submitBol.value) {
          submitBol.value = true;
          bindSettlement(data2).then((res) => {
            submitBol.value = false;
            upgradeRef.value.maskHide();
            emits("reFlashList");
            loading.close();
          }).catch((err) => {
            submitBol.value = false;
            loading.close();
          });
        }
      },
      1e3,
      { leading: true, trailing: false }
    );
    const bindKycClose = () => {
      authenticatedRef.value.maskHide();
      upgradeRef.value.maskHide();
    };
    const bindKycVerify = () => {
      if (!ugBol.value) {
        ugBol.value = true;
        const params = {
          uid: useUserInfo().getInfo().data.userAccount,
          verificationUrl: useAppConfig().public.hostUrl + "/user"
        };
        getKycVerify(params).then((res) => {
          ugBol.value = false;
          authenticatedRef.value.maskHide();
          (void 0).open(res.data.verificationUrl, "_blank");
        }).catch((err) => {
          ugBol.value = false;
        });
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_publicMaskPopup = __nuxt_component_0;
      const _component_publicTipsPopup = __nuxt_component_3$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-095f8e2d>`);
      _push(ssrRenderComponent(_component_publicMaskPopup, {
        ref_key: "upgradeRef",
        ref: upgradeRef,
        isCenter: ""
      }, {
        slot_mask: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<div class="upgradeMain" data-v-095f8e2d${_scopeId}><i class="iconfont icon-guanbi" data-v-095f8e2d${_scopeId}></i><div class="mainText" data-v-095f8e2d${_scopeId}><div class="textLine" data-v-095f8e2d${_scopeId}><p class="label" data-v-095f8e2d${_scopeId}>step</p><p class="level" data-v-095f8e2d${_scopeId}>step${ssrInterpolate(unref(data).phaseIndex)}</p></div><div class="textLine" data-v-095f8e2d${_scopeId}><p class="label" data-v-095f8e2d${_scopeId}>${ssrInterpolate(unref(t)("User.txt15"))}</p><p class="value" data-v-095f8e2d${_scopeId}>${ssrInterpolate(unref(formatNumberWithCurrency)(unref(data).amount))}</p></div><div class="textLine" data-v-095f8e2d${_scopeId}><p class="label" data-v-095f8e2d${_scopeId}>${ssrInterpolate(unref(t)("User.txt3"))}</p><p class="value" data-v-095f8e2d${_scopeId}>${ssrInterpolate(unref(data).platform)}</p></div><div class="textLine" data-v-095f8e2d${_scopeId}><p class="label" data-v-095f8e2d${_scopeId}>${ssrInterpolate(unref(t)("User.txt4"))}</p><p class="value" data-v-095f8e2d${_scopeId}>${ssrInterpolate(unref(data).account)}</p></div>`);
            if (!unref(data).withdrawCount && unref(data).phaseIndex === 3) {
              _push2(`<div class="textLine" data-v-095f8e2d${_scopeId}><p class="label" data-v-095f8e2d${_scopeId}>${ssrInterpolate(unref(t)("common.fee"))}</p><p class="value" data-v-095f8e2d${_scopeId}>${ssrInterpolate(unref(formatNumberWithCurrency)(unref(levelFee)[unref(data).level - 1]))}</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(data).phaseIndex === 3) {
              _push2(`<div class="textLine" data-v-095f8e2d${_scopeId}><p class="label" data-v-095f8e2d${_scopeId}>${ssrInterpolate(unref(t)("User.txt16"))}</p><p class="value" data-v-095f8e2d${_scopeId}>${ssrInterpolate(totalAmount.value)}</p></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><p class="tips" data-v-095f8e2d${_scopeId}>${ssrInterpolate(unref(t)(unref(levelTipsStr), { ratio: (_a = unref(data)) == null ? void 0 : _a.ratioStr }))}</p><button class="${ssrRenderClass([{ disabled: unref(data).phaseIndex === 3 && unref(data).amount < 100 }, "btn"])}" data-v-095f8e2d${_scopeId}>${ssrInterpolate(unref(data).phaseIndex === 3 ? unref(t)("User.txt56") : unref(t)("Login.btn2"))}</button>`);
            if (unref(data).phaseIndex === 3 && unref(data).amount < 100) {
              _push2(`<div class="disabled-tips" data-v-095f8e2d${_scopeId}>${ssrInterpolate(unref(t)("User.txt17"))}</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "upgradeMain" }, [
                createVNode("i", {
                  class: "iconfont icon-guanbi",
                  onClick: unref(upgradeRef).maskHide
                }, null, 8, ["onClick"]),
                createVNode("div", { class: "mainText" }, [
                  createVNode("div", { class: "textLine" }, [
                    createVNode("p", { class: "label" }, "step"),
                    createVNode("p", { class: "level" }, "step" + toDisplayString(unref(data).phaseIndex), 1)
                  ]),
                  createVNode("div", { class: "textLine" }, [
                    createVNode("p", { class: "label" }, toDisplayString(unref(t)("User.txt15")), 1),
                    createVNode("p", { class: "value" }, toDisplayString(unref(formatNumberWithCurrency)(unref(data).amount)), 1)
                  ]),
                  createVNode("div", { class: "textLine" }, [
                    createVNode("p", { class: "label" }, toDisplayString(unref(t)("User.txt3")), 1),
                    createVNode("p", { class: "value" }, toDisplayString(unref(data).platform), 1)
                  ]),
                  createVNode("div", { class: "textLine" }, [
                    createVNode("p", { class: "label" }, toDisplayString(unref(t)("User.txt4")), 1),
                    createVNode("p", { class: "value" }, toDisplayString(unref(data).account), 1)
                  ]),
                  !unref(data).withdrawCount && unref(data).phaseIndex === 3 ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "textLine"
                  }, [
                    createVNode("p", { class: "label" }, toDisplayString(unref(t)("common.fee")), 1),
                    createVNode("p", { class: "value" }, toDisplayString(unref(formatNumberWithCurrency)(unref(levelFee)[unref(data).level - 1])), 1)
                  ])) : createCommentVNode("", true),
                  unref(data).phaseIndex === 3 ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "textLine"
                  }, [
                    createVNode("p", { class: "label" }, toDisplayString(unref(t)("User.txt16")), 1),
                    createVNode("p", { class: "value" }, toDisplayString(totalAmount.value), 1)
                  ])) : createCommentVNode("", true)
                ]),
                createVNode("p", { class: "tips" }, toDisplayString(unref(t)(unref(levelTipsStr), { ratio: (_b = unref(data)) == null ? void 0 : _b.ratioStr })), 1),
                createVNode("button", {
                  class: ["btn", { disabled: unref(data).phaseIndex === 3 && unref(data).amount < 100 }],
                  onClick: bindDoUpGrade
                }, toDisplayString(unref(data).phaseIndex === 3 ? unref(t)("User.txt56") : unref(t)("Login.btn2")), 3),
                unref(data).phaseIndex === 3 && unref(data).amount < 100 ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "disabled-tips"
                }, toDisplayString(unref(t)("User.txt17")), 1)) : createCommentVNode("", true)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_publicMaskPopup, {
        ref_key: "authenticatedRef",
        ref: authenticatedRef,
        isCenter: "",
        isClickMaskHide: false
      }, {
        slot_mask: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="authenticatedMain" data-v-095f8e2d${_scopeId}><img class="close" alt=""${ssrRenderAttr("src", _imports_0$1)} data-v-095f8e2d${_scopeId}>`);
            if (unref(kycStatus) === "0") {
              _push2(`<!--[--><p class="text" data-v-095f8e2d${_scopeId}>${ssrInterpolate(unref(t)("User.tips1"))}</p><p class="text" data-v-095f8e2d${_scopeId}>${ssrInterpolate(unref(t)("User.tips2"))}</p><!--]-->`);
            } else if (unref(kycStatus) === "1") {
              _push2(`<p class="text" data-v-095f8e2d${_scopeId}>${ssrInterpolate(unref(t)("User.tips15", { time: 10 }))}</p>`);
            } else if (unref(kycStatus) === "3" || unref(kycStatus) === "5") {
              _push2(`<!--[--><p class="text" data-v-095f8e2d${_scopeId}>${ssrInterpolate(unref(t)("User.tips16"))}</p><p class="text" data-v-095f8e2d${_scopeId}>${ssrInterpolate(unref(t)("User.tips17", { reason: unref(kycFailReason) }))}</p><!--]-->`);
            } else if (unref(kycStatus) === "4") {
              _push2(`<p class="text" style="${ssrRenderStyle({ "text-align": "center" })}" data-v-095f8e2d${_scopeId}>${ssrInterpolate(unref(t)("User.cancelVerify"))}</p>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="btnGroup" data-v-095f8e2d${_scopeId}><button class="btn" data-v-095f8e2d${_scopeId}>`);
            if (unref(kycStatus) === "0") {
              _push2(`<span data-v-095f8e2d${_scopeId}>${ssrInterpolate(unref(t)("User.btn1"))}</span>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(kycStatus) === "1") {
              _push2(`<span data-v-095f8e2d${_scopeId}>${ssrInterpolate(unref(t)("User.btn8"))}</span>`);
            } else {
              _push2(`<!---->`);
            }
            if (unref(kycStatus) === "3" || unref(kycStatus) === "4" || unref(kycStatus) === "5") {
              _push2(`<span data-v-095f8e2d${_scopeId}>${ssrInterpolate(unref(t)("User.btn9"))}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</button>`);
            if (unref(kycStatus) === "1") {
              _push2(`<button class="btn light" data-v-095f8e2d${_scopeId}>${ssrInterpolate(unref(t)("User.close"))}</button>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "authenticatedMain" }, [
                createVNode("img", {
                  class: "close",
                  alt: "",
                  src: _imports_0$1,
                  onClick: unref(authenticatedRef).maskHide
                }, null, 8, ["onClick"]),
                unref(kycStatus) === "0" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                  createVNode("p", { class: "text" }, toDisplayString(unref(t)("User.tips1")), 1),
                  createVNode("p", { class: "text" }, toDisplayString(unref(t)("User.tips2")), 1)
                ], 64)) : unref(kycStatus) === "1" ? (openBlock(), createBlock("p", {
                  key: 1,
                  class: "text"
                }, toDisplayString(unref(t)("User.tips15", { time: 10 })), 1)) : unref(kycStatus) === "3" || unref(kycStatus) === "5" ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                  createVNode("p", { class: "text" }, toDisplayString(unref(t)("User.tips16")), 1),
                  createVNode("p", { class: "text" }, toDisplayString(unref(t)("User.tips17", { reason: unref(kycFailReason) })), 1)
                ], 64)) : unref(kycStatus) === "4" ? (openBlock(), createBlock("p", {
                  key: 3,
                  class: "text",
                  style: { "text-align": "center" }
                }, toDisplayString(unref(t)("User.cancelVerify")), 1)) : createCommentVNode("", true),
                createVNode("div", { class: "btnGroup" }, [
                  createVNode("button", {
                    class: "btn",
                    onClick: bindKycVerify
                  }, [
                    unref(kycStatus) === "0" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(unref(t)("User.btn1")), 1)) : createCommentVNode("", true),
                    unref(kycStatus) === "1" ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString(unref(t)("User.btn8")), 1)) : createCommentVNode("", true),
                    unref(kycStatus) === "3" || unref(kycStatus) === "4" || unref(kycStatus) === "5" ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString(unref(t)("User.btn9")), 1)) : createCommentVNode("", true)
                  ]),
                  unref(kycStatus) === "1" ? (openBlock(), createBlock("button", {
                    key: 0,
                    class: "btn light",
                    onClick: bindKycClose
                  }, toDisplayString(unref(t)("User.close")), 1)) : createCommentVNode("", true)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_publicTipsPopup, {
        ref_key: "publicTipsRef",
        ref: publicTipsRef,
        content: unref(t)("User.tips22"),
        isBtnGroup: false
      }, null, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/public/upGrade/index.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc$1(_sfc_main$3, [["__scopeId", "data-v-095f8e2d"]]);
const _sfc_main$2 = {
  __name: "index",
  __ssrInlineRender: true,
  props: {
    data: {
      type: Object,
      default: {}
    }
  },
  setup(__props, { expose: __expose }) {
    const { bindDoRePayment } = usePayment();
    const { t } = useI18n();
    const props = __props;
    const { data } = toRefs(props);
    const failPaymentRef = ref();
    const publicWaitingPaymentRef = ref();
    ref(false);
    const shower = () => {
      failPaymentRef.value.maskShow();
    };
    __expose({ shower });
    const bindDoRepay = debounce(() => {
      var _a;
      const params = {
        phaseIndex: data.value.phaseIndex,
        challengeUid: data.value.uid,
        localAmount: data.value.renewSignUpCost,
        localCurrency: data.value.currency,
        paymentType: 1
      };
      const payParams = {
        amount: data.value.renewSignUpCost,
        baseCurrency: getAssetType(data.value.currency) === 1 ? "USD" : "USDT",
        targetCurrency: ((_a = data.value) == null ? void 0 : _a.localCurrency) ? data.value.localCurrency : "USD",
        paymentType: 1,
        assetType: getAssetType(data.value.currency)
      };
      bindDoRePayment(params, payParams, () => {
        failPaymentRef.value.maskHide();
        publicWaitingPaymentRef.value.shower();
      });
    }, 1e3, { leading: true, trailing: false });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_publicMaskPopup = __nuxt_component_0;
      const _component_publicWaitingPayment = __nuxt_component_1$2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_publicMaskPopup, {
        ref_key: "failPaymentRef",
        ref: failPaymentRef,
        isCenter: ""
      }, {
        slot_mask: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="failPaymentMain" data-v-3ca126b1${_scopeId}><img class="close" alt=""${ssrRenderAttr("src", _imports_0$1)} data-v-3ca126b1${_scopeId}><p class="title" data-v-3ca126b1${_scopeId}>${ssrInterpolate(unref(t)("Battle.tips8"))}</p><p class="text" data-v-3ca126b1${_scopeId}>${ssrInterpolate(unref(t)("Battle.tips10"))}</p><button class="btn" data-v-3ca126b1${_scopeId}>${ssrInterpolate(unref(t)("Battle.tips9", {
              cost: unref(formatNumberWithCurrency)(unref(data).renewSignUpCost)
            }))}</button></div>`);
          } else {
            return [
              createVNode("div", { class: "failPaymentMain" }, [
                createVNode("img", {
                  class: "close",
                  alt: "",
                  src: _imports_0$1,
                  onClick: unref(failPaymentRef).maskHide
                }, null, 8, ["onClick"]),
                createVNode("p", { class: "title" }, toDisplayString(unref(t)("Battle.tips8")), 1),
                createVNode("p", { class: "text" }, toDisplayString(unref(t)("Battle.tips10")), 1),
                createVNode("button", {
                  class: "btn",
                  onClick: unref(bindDoRepay)
                }, toDisplayString(unref(t)("Battle.tips9", {
                  cost: unref(formatNumberWithCurrency)(unref(data).renewSignUpCost)
                })), 9, ["onClick"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_publicWaitingPayment, {
        ref_key: "publicWaitingPaymentRef",
        ref: publicWaitingPaymentRef
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/public/failRePayment/index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc$1(_sfc_main$2, [["__scopeId", "data-v-3ca126b1"]]);
const _sfc_main$1 = {
  __name: "challengeCollapseItem",
  __ssrInlineRender: true,
  props: {
    title: {
      type: String,
      default: ""
    },
    collapseTitleColor: {
      type: String,
      default: ""
    },
    isColor: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const activeNames = ref([]);
    const handleChange = (val) => {
    };
    useI18n();
    const color = computed(() => {
      return props.isColor ? props.collapseTitleColor : "#fff";
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_clientOnly = __nuxt_component_1$1;
      const _cssVars = { style: {
        "--7a37fd56": color.value
      } };
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "mft-collapse" }, _attrs, _cssVars))} data-v-e5b538b1>`);
      _push(ssrRenderComponent(_component_clientOnly, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(ElCollapse), {
              modelValue: activeNames.value,
              "onUpdate:modelValue": ($event) => activeNames.value = $event,
              onChange: handleChange,
              class: "mft-collapse-item"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(ElCollapseItem), {
                    title: __props.title,
                    name: "1"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push4, _parent4, _scopeId3);
                      } else {
                        return [
                          renderSlot(_ctx.$slots, "default", {}, void 0, true)
                        ];
                      }
                    }),
                    _: 3
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(ElCollapseItem), {
                      title: __props.title,
                      name: "1"
                    }, {
                      default: withCtx(() => [
                        renderSlot(_ctx.$slots, "default", {}, void 0, true)
                      ]),
                      _: 3
                    }, 8, ["title"])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(ElCollapse), {
                modelValue: activeNames.value,
                "onUpdate:modelValue": ($event) => activeNames.value = $event,
                onChange: handleChange,
                class: "mft-collapse-item"
              }, {
                default: withCtx(() => [
                  createVNode(unref(ElCollapseItem), {
                    title: __props.title,
                    name: "1"
                  }, {
                    default: withCtx(() => [
                      renderSlot(_ctx.$slots, "default", {}, void 0, true)
                    ]),
                    _: 3
                  }, 8, ["title"])
                ]),
                _: 3
              }, 8, ["modelValue", "onUpdate:modelValue"])
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/user/home/challengeDetailPopup/challengeCollapseItem.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const challengeCollapseItem = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["__scopeId", "data-v-e5b538b1"]]);
const useChallengeDetails = (detailInfo = {}) => {
  var _a, _b, _c;
  const { scalingPlan = {}, seniorPlan = {} } = detailInfo;
  const summaryStatus = (condition) => condition ? "Battle.tips5" : "User.list.stu1";
  const fundPlanStep = computed(() => {
    var _a2;
    return `Level ${(_a2 = detailInfo == null ? void 0 : detailInfo.scalingPlan) == null ? void 0 : _a2.expandPlansJoinCount}`;
  });
  summaryStatus((scalingPlan == null ? void 0 : scalingPlan.checkExpandPlansConditionCode) === "2");
  const extractTimesSummary = summaryStatus((scalingPlan == null ? void 0 : scalingPlan.extractTimesResult) >= (scalingPlan == null ? void 0 : scalingPlan.extractTimesTarget));
  summaryStatus((scalingPlan == null ? void 0 : scalingPlan.extractTotalAmountResult) >= (scalingPlan == null ? void 0 : scalingPlan.extractTotalAmountTarget));
  const seniorData = (condition, val) => condition ? val : "--";
  const seniorKeepDaysSummary = summaryStatus(Math.floor((seniorPlan == null ? void 0 : seniorPlan.currentKeepDays) / 30) >= Math.floor(((_a = seniorPlan.nextSeniorConfig) == null ? void 0 : _a.profitDays) / 30));
  const scalingPlanKeepDaysSummary = summaryStatus(Math.floor((scalingPlan == null ? void 0 : scalingPlan.profitDaysResult) / 30) >= Math.floor((scalingPlan == null ? void 0 : scalingPlan.profitDaysTarget) / 30));
  const seniorLev = (lev) => lev ? "User.txt32" : "User.txt14";
  const seniorLev1 = computed(() => seniorLev(seniorPlan.currentSeniorConfig !== null && seniorPlan.currentSeniorConfig.level > 0));
  const seniorLev2 = computed(() => seniorLev(seniorPlan.currentSeniorConfig !== null && seniorPlan.currentSeniorConfig.level > 1));
  const currentBenefits = computed(() => seniorPlan.currentSeniorConfig !== null && seniorPlan.currentSeniorConfig.level < 1 ? "User.txt35" : "common.fund31");
  const btnUpgradeSettlement = computed(() => detailInfo.phaseIndex !== 3 && detailInfo.isUserUp);
  const btnMT5 = computed(() => detailInfo.phaseIndex !== 3 && !detailInfo.isUserUp);
  const btnSettlement = computed(() => detailInfo.phaseIndex === 3);
  const btnUpgradeSenior = computed(() => {
    let list = premiumPlanList.value[premiumPlanList.value.length - 1].children;
    return list.every((item) => item.label === "Battle.tips5");
  });
  const totalAccountBalance = computed(() => parseFloat(detailInfo.initAccountFee));
  const fundPlan = ref([
    {
      label: "User.txt18",
      faq: ["User.txt19"],
      val: fundPlanStep
    },
    {
      label: "User.txt20",
      faq: ["User.txt21", "User.txt22"],
      // 擴展賬戶金額
      val: formatNumberWithCurrency(scalingPlan.expandPlansTotalAmount, 0)
    }
  ]);
  const fundPlanList = ref([
    {
      title: "User.txt42",
      children: [
        {
          label: "User.txt23",
          faq: ["User.txt24"]
        },
        {
          label: "User.txt25",
          faq: ["User.txt26"]
        },
        // {
        //     label: "User.txt41",
        // },
        {
          label: "Battle.txt6"
        }
      ]
    },
    {
      title: "TARGET",
      children: [
        {
          label: ["common.fund53", Math.floor(scalingPlan.profitDaysTarget / 30), "num"]
          // 多語言傳參用數組
        },
        {
          label: scalingPlan.extractTimesTarget
        },
        // {
        //     label: formatNumberWithCurrency(scalingPlan.extractTotalAmountTarget, 0),
        // },
        {
          label: "--"
        }
      ]
    },
    {
      title: "RESULT",
      children: [
        {
          label: ["common.fund53", Math.floor(scalingPlan.profitDaysResult / 30), "num"]
        },
        {
          label: scalingPlan.extractTimesResult
        },
        // {
        //     label: formatNumberWithCurrency(scalingPlan.extractTotalAmountResult, 0),
        // },
        {
          label: "--"
        }
      ]
    },
    {
      title: "SUMMARY",
      children: [
        {
          label: scalingPlanKeepDaysSummary
        },
        {
          label: extractTimesSummary
        },
        // {
        //     label: extractSummary,
        // },
        {
          label: summaryStatus(detailInfo.positionResult === 0)
        }
      ]
    }
  ]);
  const premiumPlan = ref([
    {
      label: "common.fund21",
      faq: ["common.fund23", "common.fund24", "common.fund25", "common.fund26", "common.fund27", "common.fund29"],
      val: seniorLev1
    },
    {
      label: "common.fund31",
      faq: ["common.fund34", "common.fund35", "common.fund36", "common.fund37"],
      val: seniorLev2
    }
  ]);
  const premiumPlanList = ref([
    {
      title: currentBenefits.value,
      children: [
        {
          label: "User.txt23",
          faq: ["User.txt24"]
        },
        {
          label: "User.txt25",
          faq: ["User.txt34"]
        },
        {
          label: "User.txt33",
          faq: ["User.txt34"]
        },
        {
          label: "common.fund8"
        },
        {
          label: "Battle.txt6"
        }
      ]
    },
    {
      title: "TARGET",
      children: [
        {
          label: seniorData(seniorPlan.nextSeniorConfig, ["common.fund53", Math.floor(((_b = seniorPlan.nextSeniorConfig) == null ? void 0 : _b.profitDays) / 30), "num"])
        },
        {
          label: seniorData(seniorPlan.nextSeniorConfig, (_c = seniorPlan.nextSeniorConfig) == null ? void 0 : _c.extractTimes)
        },
        {
          label: formatNumberWithCurrency(totalAccountBalance.value * 0.16, 0)
        },
        {
          label: "--"
        },
        {
          label: "--"
        }
      ]
    },
    {
      title: "RESULT",
      children: [
        {
          label: ["common.fund53", Math.floor((seniorPlan == null ? void 0 : seniorPlan.currentKeepDays) / 30), "num"]
        },
        {
          label: seniorData(seniorPlan == null ? void 0 : seniorPlan.currentWithdrawalCount, seniorPlan == null ? void 0 : seniorPlan.currentWithdrawalCount)
        },
        {
          label: formatNumberWithCurrency(seniorPlan == null ? void 0 : seniorPlan.currentWithdrawalAmount, 0)
        },
        {
          label: "--"
        },
        {
          label: "--"
        }
      ]
    },
    {
      title: "SUMMARY",
      children: [
        {
          label: seniorKeepDaysSummary
        },
        {
          label: summaryStatus(seniorPlan == null ? void 0 : seniorPlan.seniorPlanCondition)
        },
        {
          label: summaryStatus(seniorPlan == null ? void 0 : seniorPlan.seniorPlanCondition)
        },
        {
          label: summaryStatus(seniorPlan == null ? void 0 : seniorPlan.profitStatus)
        },
        {
          label: summaryStatus(detailInfo.positionResult === 0)
        }
      ]
    }
  ]);
  const h5DataFormat = (fundPlanList2) => {
    const grouped = Array.from({ length: Math.max(...fundPlanList2.map((item) => item.children.length)) }, () => []);
    let labelArr = [];
    fundPlanList2.forEach((item) => {
      labelArr.push(item.title);
      item.children.forEach((child, index) => {
        grouped[index].push(child);
      });
    });
    return { grouped, labelArr };
  };
  const fundPlanListH5 = ref(h5DataFormat(fundPlanList.value));
  const premiumPlanListH5 = ref(h5DataFormat(premiumPlanList.value));
  return {
    fundPlanStep,
    fundPlan,
    fundPlanList,
    premiumPlan,
    premiumPlanList,
    fundPlanListH5,
    premiumPlanListH5,
    totalAccountBalance,
    seniorLev1,
    seniorLev2,
    btnUpgradeSettlement,
    btnMT5,
    btnSettlement,
    btnUpgradeSenior
  };
};
const _sfc_main = {
  __name: "mergePopup",
  __ssrInlineRender: true,
  setup(__props, { expose: __expose }) {
    const { t } = useI18n();
    const mergePopupRef = ref();
    const tHeaders = ref([t("User.list.th1"), "step", t("Battle.size"), t("User.txt55"), t("common.fund8"), t("Battle.txt6")]);
    const tHeadersh5 = ref({
      orderId: t("User.list.th1"),
      level: "step",
      accountSize: t("Battle.size"),
      currentEquity: t("User.txt55"),
      profitStatus: t("common.fund8"),
      currentPositionCount: t("Battle.txt6")
    });
    let mainChallenge = ref();
    const tableData = ref([]);
    let mergeParams = ref({
      mergeMainOrderId: 0,
      mergeSubOrderId: 0,
      userId: "",
      challengeLevel: 3
    });
    const change = (val) => {
      var _a, _b;
      let subIdx = val === 0 ? 1 : 0;
      mergeParams.value.mergeMainOrderId = (_a = tableData.value[val]) == null ? void 0 : _a.orderId;
      mergeParams.value.mergeSubOrderId = (_b = tableData.value[subIdx]) == null ? void 0 : _b.orderId;
    };
    const show = (data) => {
      tableData.value = [];
      mainChallenge.value = 0;
      data == null ? void 0 : data.map((item) => {
        if (Object.keys(item).length > 1) {
          const { orderId, level, accountSize, currentEquity, currentPositionCount } = item;
          let res = {
            level: `step ${level}`,
            orderId,
            accountSize: formatNumberWithCurrency(accountSize, 0),
            currentEquity: formatNumberWithCurrency(currentEquity, 0),
            profitStatus: currentEquity > accountSize ? t("Battle.tips5") : t("User.list.stu1"),
            currentPositionCount
          };
          tableData.value.push(res);
          change(mainChallenge.value);
        }
      });
      mergePopupRef.value.maskShow();
    };
    const mergeChallenge = async () => {
      try {
        let res = await mergeTradeAccount(mergeParams.value);
        console.log(res, "合并");
        if (res.code == 200) {
          ElMessage.success(`${t("User.txt37")}!`);
          close();
        }
      } catch (err) {
        ElMessage.error(`${err}`);
        close();
      }
    };
    const close = () => mergePopupRef.value.maskHide();
    __expose({ show, close });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_publicMaskPopup = __nuxt_component_0;
      const _component_el_radio_group = ElRadioGroup;
      const _component_el_radio = ElRadio;
      _push(ssrRenderComponent(_component_publicMaskPopup, mergeProps({
        ref_key: "mergePopupRef",
        ref: mergePopupRef,
        isCenter: ""
      }, _attrs), {
        slot_mask: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="merge-popup" data-v-15833c8a${_scopeId}><p class="title" data-v-15833c8a${_scopeId}>${ssrInterpolate(unref(t)("User.txt38"))} <i class="close iconfont icon-guanbi" data-v-15833c8a${_scopeId}></i></p><div class="merge-account" data-v-15833c8a${_scopeId}><div class="header-title" data-v-15833c8a${_scopeId}><!--[-->`);
            ssrRenderList(tHeaders.value, (txt, idx) => {
              _push2(`<span class="header-title-li" data-v-15833c8a${_scopeId}>${ssrInterpolate(txt)}</span>`);
            });
            _push2(`<!--]--></div>`);
            _push2(ssrRenderComponent(_component_el_radio_group, {
              modelValue: unref(mainChallenge),
              "onUpdate:modelValue": ($event) => isRef(mainChallenge) ? mainChallenge.value = $event : mainChallenge = $event,
              "text-color": "#fff",
              fill: "#FF7700",
              size: "large",
              onChange: change
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(tableData.value, (item, idx) => {
                    _push3(ssrRenderComponent(_component_el_radio, {
                      value: idx,
                      key: idx
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="challenge1" data-v-15833c8a${_scopeId3}><!--[-->`);
                          ssrRenderList(item, (prop) => {
                            _push4(`<span class="li" data-v-15833c8a${_scopeId3}>${ssrInterpolate(prop)}</span>`);
                          });
                          _push4(`<!--]--></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "challenge1" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(item, (prop) => {
                                return openBlock(), createBlock("span", { class: "li" }, toDisplayString(prop), 1);
                              }), 256))
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(tableData.value, (item, idx) => {
                      return openBlock(), createBlock(_component_el_radio, {
                        value: idx,
                        key: idx
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "challenge1" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(item, (prop) => {
                              return openBlock(), createBlock("span", { class: "li" }, toDisplayString(prop), 1);
                            }), 256))
                          ])
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="merge-account-h5" data-v-15833c8a${_scopeId}>`);
            _push2(ssrRenderComponent(_component_el_radio_group, {
              modelValue: unref(mainChallenge),
              "onUpdate:modelValue": ($event) => isRef(mainChallenge) ? mainChallenge.value = $event : mainChallenge = $event,
              "text-color": "#fff",
              fill: "#FF7700",
              size: "large",
              onChange: change
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(tableData.value, (item, idx) => {
                    _push3(ssrRenderComponent(_component_el_radio, {
                      value: idx,
                      key: idx
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="challenge-h5" data-v-15833c8a${_scopeId3}><!--[-->`);
                          ssrRenderList(item, (prop, index) => {
                            _push4(`<div class="li" data-v-15833c8a${_scopeId3}><span class="l" data-v-15833c8a${_scopeId3}>${ssrInterpolate(tHeadersh5.value[index])}</span><span class="r" data-v-15833c8a${_scopeId3}>${ssrInterpolate(prop)}</span></div>`);
                          });
                          _push4(`<!--]--></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "challenge-h5" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(item, (prop, index) => {
                                return openBlock(), createBlock("div", { class: "li" }, [
                                  createVNode("span", { class: "l" }, toDisplayString(tHeadersh5.value[index]), 1),
                                  createVNode("span", { class: "r" }, toDisplayString(prop), 1)
                                ]);
                              }), 256))
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(tableData.value, (item, idx) => {
                      return openBlock(), createBlock(_component_el_radio, {
                        value: idx,
                        key: idx
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "challenge-h5" }, [
                            (openBlock(true), createBlock(Fragment, null, renderList(item, (prop, index) => {
                              return openBlock(), createBlock("div", { class: "li" }, [
                                createVNode("span", { class: "l" }, toDisplayString(tHeadersh5.value[index]), 1),
                                createVNode("span", { class: "r" }, toDisplayString(prop), 1)
                              ]);
                            }), 256))
                          ])
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="merge-btn" data-v-15833c8a${_scopeId}>${ssrInterpolate(unref(t)("User.txt39"))}</div></div>`);
          } else {
            return [
              createVNode("div", { class: "merge-popup" }, [
                createVNode("p", { class: "title" }, [
                  createTextVNode(toDisplayString(unref(t)("User.txt38")) + " ", 1),
                  createVNode("i", {
                    class: "close iconfont icon-guanbi",
                    onClick: close
                  })
                ]),
                createVNode("div", { class: "merge-account" }, [
                  createVNode("div", { class: "header-title" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(tHeaders.value, (txt, idx) => {
                      return openBlock(), createBlock("span", { class: "header-title-li" }, toDisplayString(txt), 1);
                    }), 256))
                  ]),
                  createVNode(_component_el_radio_group, {
                    modelValue: unref(mainChallenge),
                    "onUpdate:modelValue": ($event) => isRef(mainChallenge) ? mainChallenge.value = $event : mainChallenge = $event,
                    "text-color": "#fff",
                    fill: "#FF7700",
                    size: "large",
                    onChange: change
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(tableData.value, (item, idx) => {
                        return openBlock(), createBlock(_component_el_radio, {
                          value: idx,
                          key: idx
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "challenge1" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(item, (prop) => {
                                return openBlock(), createBlock("span", { class: "li" }, toDisplayString(prop), 1);
                              }), 256))
                            ])
                          ]),
                          _: 2
                        }, 1032, ["value"]);
                      }), 128))
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", { class: "merge-account-h5" }, [
                  createVNode(_component_el_radio_group, {
                    modelValue: unref(mainChallenge),
                    "onUpdate:modelValue": ($event) => isRef(mainChallenge) ? mainChallenge.value = $event : mainChallenge = $event,
                    "text-color": "#fff",
                    fill: "#FF7700",
                    size: "large",
                    onChange: change
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(tableData.value, (item, idx) => {
                        return openBlock(), createBlock(_component_el_radio, {
                          value: idx,
                          key: idx
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "challenge-h5" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(item, (prop, index) => {
                                return openBlock(), createBlock("div", { class: "li" }, [
                                  createVNode("span", { class: "l" }, toDisplayString(tHeadersh5.value[index]), 1),
                                  createVNode("span", { class: "r" }, toDisplayString(prop), 1)
                                ]);
                              }), 256))
                            ])
                          ]),
                          _: 2
                        }, 1032, ["value"]);
                      }), 128))
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                createVNode("div", {
                  class: "merge-btn",
                  onClick: mergeChallenge
                }, toDisplayString(unref(t)("User.txt39")), 1)
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/user/home/challengeDetailPopup/mergePopup.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const mergePopup = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["__scopeId", "data-v-15833c8a"]]);
export {
  __nuxt_component_3 as _,
  __nuxt_component_2 as a,
  __nuxt_component_1 as b,
  challengeCollapseItem as c,
  mergePopup as m,
  useChallengeDetails as u
};
//# sourceMappingURL=mergePopup-DIbIYyzJ.js.map
