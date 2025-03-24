import { d as defineStore, p as persistedState, K as getQuery, J as useRoute, L as LANGUAGE_LIST, M as extractSubstringAfterMatch, m as useNuxtApp, N as usePhonePrefix, u as useI18n, H as useUserInfo, F as useUserToken, G as ElMessage, n as nuxtTo, O as useLocalePath, P as navigateTo } from "../server.mjs";
import { ref } from "vue";
import "dayjs";
import { p as post, E as ElLoading } from "./useRequest-FImzQkjq.js";
import "destr";
import "klona";
import "defu";
import "#internal/nuxt/paths";
import { f as flagJapan, a as flagIndonesia, b as flagIndia, c as flagHongKong, d as flagTaiWan, e as flagSingapore, g as flagDenmark, h as flagSweden, i as flagSwitzerland, j as flagNorway, k as flagVietnam, l as flagBritain } from "./Norway-DkftQzDj.js";
import "hookable";
import { debounce } from "lodash-es";
const bindRegister = (data) => post(`/api/v1/user/register`, data, { bizName: "MFT" });
const bindLogin = (data) => post(`/api/v1/user/login`, data, { bizName: "MFT" });
const bindLogout = () => post(`/api/v1/user/logout`, {});
const bindCheckUserRegister = (data) => post(`/api/v1/user/checkUserRegisted`, data);
const bindResetPwd = (data) => post(`/api/v1/user/resetPwd`, data, { bizName: "MFT" });
const bindSendVaildCode = (data) => post(`/api/v1/code/sendVaildCodeNew`, data, { businessName: "MFT" });
const bindCheckValidCode = (data) => post(`/api/v1/code/checkValidCode`, data);
const useUtmData = defineStore("utmData", () => {
  const data = ref({});
  const setUtmData = (val) => {
    let obj = getQuery(val);
    if (Object.entries(obj).length > 0) {
      data.value = obj;
    }
  };
  const getUtmData = () => {
    return data.value;
  };
  return { data, setUtmData, getUtmData };
}, {
  persist: {
    storage: persistedState.cookies
  }
});
const useFirstVisitData = defineStore("firstVisitData", () => {
  const data = ref({});
  const setFirstVisitData = (val, bool = false) => {
    val = !val ? "home" : val;
    if (!data.value[`${val}_bol`]) {
      data.value[`${val}_bol`] = bool;
    }
  };
  const getFirstVisitData = (val) => {
    val = !val ? "home" : val;
    return data.value[`${val}_bol`];
  };
  const resetFirstVisitData = () => {
    data.value = {};
  };
  return { data, setFirstVisitData, getFirstVisitData, resetFirstVisitData };
}, {
  persist: {
    storage: persistedState.cookies
  }
});
const intervalError = "[nuxt] `setInterval` should not be used on the server. Consider wrapping it with an `onNuxtReady`, `onBeforeMount` or `onMounted` lifecycle hook, or ensure you only call it in the browser by checking `false`.";
const setInterval = () => {
  console.error(intervalError);
};
const utmKeysMap = {
  "id": {
    label: "utm_id",
    str: "utm_id|utmId"
  },
  "campaign": {
    label: "utm_campaign",
    str: "utm_campaign|utmCampaign"
  },
  "medium": {
    label: "utm_medium",
    str: "utm_medium|utmMedium"
  },
  "source": {
    label: "utm_source",
    str: "utm_source|utmSource"
  },
  "term": {
    label: "utm_term",
    str: "utm_term|utmTerm"
  },
  "content": {
    label: "utm_content",
    str: "utm_content|utmContent"
  }
};
const ga4 = ({ ...data }) => {
  var _a, _b;
  const params = (data == null ? void 0 : data.params) || {};
  let utmData = data.types === "first_visit" ? keysFromData(["id", "source", "campaign"]) : keysFromData(data.utmKeys);
  Object.assign(params, utmData);
  const sysStr = ((_a = useRoute().query) == null ? void 0 : _a.sys) ? "_" + useRoute().query.sys : "";
  if (data == null ? void 0 : data.isDailyVisit) {
    let fvKey = "";
    if (data.types === "first_visit") {
      params.first_visit_time = /* @__PURE__ */ new Date();
      params.first_visit_system = getOperatingSystem();
      params.first_visit_browser = getBrowser();
      params.first_visit_phone = getPhonePlatform();
      const languageValues = Object.values(LANGUAGE_LIST).map((item) => item.value);
      fvKey = extractSubstringAfterMatch(useRoute().path, languageValues).replace(/\//g, "");
    } else if (data.types === "enter_sign_up") {
      fvKey = data.types + "_" + ((_b = data == null ? void 0 : data.params) == null ? void 0 : _b.sign_up_type);
    } else {
      fvKey = data.types;
    }
    useFirstVisitData().setFirstVisitData(fvKey);
    const fistVisitBol = useFirstVisitData().getFirstVisitData(fvKey);
    if (!fistVisitBol) {
      useNuxtApp().$ga(data.types + sysStr, params);
      useFirstVisitData().setFirstVisitData(fvKey, true);
    } else {
      return false;
    }
  } else {
    useNuxtApp().$ga(data.types + sysStr, params);
  }
};
const keysFromData = (keys) => {
  const utmData = useUtmData().data;
  const getMappedValue = (key, data) => {
    const mappings = utmKeysMap[key].str.split("|");
    for (const mapping of mappings) {
      if (mapping in data) {
        return data[mapping];
      }
    }
    return null;
  };
  const result = {};
  keys.forEach((key) => {
    const label = utmKeysMap[key].label;
    const value = getMappedValue(key, utmData);
    if (value !== null) {
      result[label] = value;
    }
  });
  return result;
};
const getOperatingSystem = () => {
  const userAgent = (void 0).userAgent || (void 0).vendor || (void 0).opera;
  if (userAgent.indexOf("Win") !== -1) return "Windows";
  if (userAgent.indexOf("Mac") !== -1) return "MacOS";
  if (userAgent.indexOf("X11") !== -1) return "UNIX";
  if (userAgent.indexOf("Linux") !== -1) return "Linux";
  return "Unknown";
};
const getBrowser = () => {
  const userAgent = (void 0).userAgent;
  if (userAgent.indexOf("Firefox") > -1) return "Firefox";
  if (userAgent.indexOf("Opera") > -1) return "Opera";
  if (userAgent.indexOf("Trident") > -1) return "Internet Explorer";
  if (userAgent.indexOf("Edge") > -1) return "Microsoft Edge";
  if (userAgent.indexOf("Chrome") > -1) return "Google Chrome";
  if (userAgent.indexOf("Safari") > -1) return "Safari";
  return "Unknown";
};
const getPhonePlatform = () => {
  const userAgent = (void 0).userAgent || (void 0).vendor || (void 0).opera;
  if (/Android/.test(userAgent)) return "Android";
  if (/iPhone/.test(userAgent)) return "iPhone";
  return "Unknown";
};
const flagKorea = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAkCAYAAADLsGk3AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAR7SURBVHgB7VlbSBRRGP7tIglbXkgq87KRXeiCuxT1UJb20oUuSj1UEOlLl4dafayHVLo+BOpDRE8qldBDqV0fKlypoBfzghSRoGVlQrHrhUBLTuc7dJaZ2Z2dM84KYn0w7Mw/M/9/vvOff87//xvHOGgaYAZNE/ybRKqrq6mwsJAmE+3t7eT1eikYDNp6T5lIb28vVVVVUVJSkiCE61ijoqJCEIBunNsCU0RRURFzu92subkZHwdxjfNYoKenR+jik8QKCgpYeXm5sGFHvxKRhoYGobiysjJESMpqamqYU3g8HpaXlyf0Qyd0w4bP51PWoUQESnFg0HLwUhYLSC/X1tYKQtAbCATENV/OSjosiUg3w/0wgNmDcsja2tpM3/sdHGI/O9+yH7fvsuDDp+I8GkAAS0t6GnbhfchAyhERDB6KoFC7bkEIMjMCfWcusg73evYmebnu6MrJZ9/r75rawlLCb0lJibCLiZL2HRGBQm2Aw5CMERg0YvjF64gEjMe73H1s9OPnsPf9fn/IK/jVxk0071sSATBgY4BDuRGBR08tCRi9A+8ZATtaAphE2LVCnGBjAR50Yv8oLS0V15yc7v7Ypy/0Ye8R8WsHqSeOUvqlszoZ9wrl5+eLPQv7CV8FxMlZ6lIiAmCjwo7LZ4d4wOvudZ0+R79u3aGJYNn9m+TavEEnQ/aQk5NDPC5JFcpEzDA+OESvsjfR3PExmghSDhVS1rUrOhkmDSvADhwnjf72PhqZGa/8/LDh2cHHz8OesUsCmEUO8bInQGmzXbRobMT0GQz+6qKN5E/MFOdp/NnjA220J9AtPIrYis9cTE7g2CO93wap1bUw6jMHl+2jBynZIW98jXdRWUYu1c9fJa7tfiQiISb1SP381fR+TkrEezcWeKmfD9zs3rCNZRkNjolkJMSJwRxbupMeJGeH5GI5pW3kg/WYvotn/PMyaWbiPHIKxzGyeUkyyUFhueBAvJh5wYiB1DRKWLuSnMKxRzZs81KSa45OpkoCyNi+JUxmtzoElInIDRE7rxYgUXJgPU0UB0/uDZMhg7BbISoRaWxspLq6OvF9Ly4uDpsxHyeSzmPFLs5sW0LuhYlhtpASZWVlCVuqJXVUIhgwPAASSBfKysqEYtTsWsArjRf229rd16Qm0HnfrjA5vCFzKxBCMwL2HRGRXRMkbkBTUxPx1D6U0Gmxbl02PavYHTbDkZDnySR/1WH+tZqrk0MnJo9XoGJp8aybOjo6xK9l3ERLjVGZybrAWFhBFjHt7w+yUxfusfQdVxhtvaw7couus5onnZHf+1suaAsr2ZBQKawsk0bMPtzNlYoZQ5zgQKoNGSdk+m5razcFR0bF+dIV6VG9hXjAMoY3MPs4WlpahAx2LFN5pgDZEDBrEjiFtqmBnoCsQHGtUlQBSkQkASwv2SSQsli0g6ATBIxdGthThXKDzrhucR3LBh1qctnU0HZuVKFMRBv4mDGrZsBEgDpd28m0A2Ui0hBampMJTBAmy443AMel7lTB/z96phr+ALx8vorbLjb6AAAAAElFTkSuQmCC";
const flagMacao = "data:image/png;base64,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";
const flagCyprus = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAkCAYAAADLsGk3AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKzSURBVHgB7ZhLTBNRFIb/AlaeLcIGUUI3ookPmmAMdFV2xMRoApGluHANBNe+1hpgKyui0WCCYkxMF0bKBjDRWElJEBet1oiL1tYCbWkt4zk31phGpTNz206afpvO47aZ7/73nDupSSFQAlSgRCiLGI2yiNEwpIiyE4VaDCXyI+TF5uI1JPwuqKUKBoATiHmnEH8/gwPnZlHZ0Aa1FF0k+WURUfeIONYqwRRFhBNI0TJKrM9QCo9Qd3oM9V1XoQeT7FeU9GYA22/uYF9rDyrMVjHDlfVt2E1+F/dSG0vYen1bjK3Yb0F1xyAaHLegl7yIBB+c2XOcyWxB88ALzUspGyldi5dKpmWySC5UWtqkSTC6a2TH50J0YRi7JFJzdBCp4GpO30tHA0JalozmpZWgIuU6CD/rzzmFbKqaT6CJOpWJakUvmpcWdx2uBbUS/PDVHRdFEuaDPZo2v7/+LgqMtXeCZI6LmpKRRAbNidSevCLapxpYgFsxI1OC0SwilkZ7X85jLc5J0W5lC2TQvY/w+xFvgNm1Utc1RolZf9WCI28CGaRsiLze01ufRCHHVqaoEayKWigk0nd2JUnvUUEvzK0OFBLdIp6vn9FYXYuna+8w3N2r6ntMJBGH03YEepGSyOW5+/RAMRKqwXXnWdgam/87fnJ5HnNrK7C3HEZ7YxNGVEzAv5DyrmWjh+FZPX+sEzfdz+H2fxAz/Sd87o98w6hrFmE6Hu/rF9dZRgZSEuE0Rl2PSeSUkGKRj/TQ9pZDuGTvFmNYgGU66doQXeNzTuMGJSgFRRLh+LYysfRSGXpyT3m7EVB84aA4zzBOx75wSNy78PCu+JSJ9K7FaUx7Xv2ul2nPMqzUDDipBbrnj4RoWQ2I+1JR8gDPNieUzbxvXckX0hMpFuV/Go1GWcRolIzIT3XilXsKJZdvAAAAAElFTkSuQmCC";
const flagFrance = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAkCAYAAADLsGk3AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABcSURBVHgB7c8xEYAwAATBByUUNHigQQMGEISHmKQnHpIUN5lbB7tkK386PPee8p5p9R1XRlgzCSM0RmiM0BihMUJjhMYIjREaIzRGaIzQGKExQmOExgiNERojNBUSpwWirlapRwAAAABJRU5ErkJggg==";
const flagGermany = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAkCAYAAADLsGk3AAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACFSURBVHgB7dIxDkRQFIXh87iZyfQzxRQobdxCVLahQBQKhUrCI3Zx7sv5dvAnf6ir4ornAc/y3Fp7IuLhOwQhQ4ZEKISNQtgohI1C2CQTYk1Z4hfg2hi1Fh+FsFEIG4WwUQibZELC0L2v/3eHZ/30abUWG4WwUQgbhbBRCBublxe8WzfDDcM3GFg/f4psAAAAAElFTkSuQmCC";
const flagSeychelles = "" + __buildAssetsURL("Seychelles.BfKxcl1J.png");
const flagBrunei = "" + __buildAssetsURL("Brunei.CGBPD93M.png");
const flagMalaysia = "" + __buildAssetsURL("Malaysia.BOfPH0pV.png");
const flagLaos = "" + __buildAssetsURL("Laos.C679RtvB.png");
const flagLuxembourg = "" + __buildAssetsURL("Luxembourg.DJObZEzn.png");
const flagIceland = "" + __buildAssetsURL("Iceland.RqMcqBoX.png");
const PHONE_PREFIX = [
  {
    prefix: "82",
    area: "Korea",
    flag: flagKorea
  },
  {
    prefix: "81",
    area: "Japan",
    flag: flagJapan
  },
  {
    prefix: "62",
    area: "Indonesia",
    flag: flagIndonesia
  },
  {
    prefix: "91",
    area: "India",
    flag: flagIndia
  },
  // {
  // 	prefix: '86',
  // 	area: "China",
  // 	flag: flagChina,
  // },
  {
    prefix: "852",
    area: "HongKong",
    flag: flagHongKong
  },
  {
    prefix: "853",
    area: "Macao",
    flag: flagMacao
  },
  {
    prefix: "886",
    area: "TaiWan",
    flag: flagTaiWan
  },
  {
    prefix: "65",
    area: "Singapore",
    flag: flagSingapore
  },
  {
    prefix: "248",
    area: "Seychelles",
    flag: flagSeychelles
  },
  {
    prefix: "357",
    area: "Cyprus",
    flag: flagCyprus
  },
  {
    prefix: "673",
    area: "Brunei",
    flag: flagBrunei
  },
  {
    prefix: "60",
    area: "Malaysia",
    flag: flagMalaysia
  },
  {
    prefix: "856",
    area: "Laos",
    flag: flagLaos
  },
  {
    prefix: "45",
    area: "Denmark",
    flag: flagDenmark
  },
  {
    prefix: "46",
    area: "Sweden",
    flag: flagSweden
  },
  {
    prefix: "41",
    area: "Switzerland",
    flag: flagSwitzerland
  },
  {
    prefix: "352",
    area: "Luxembourg",
    flag: flagLuxembourg
  },
  {
    prefix: "47",
    area: "Norway",
    flag: flagNorway
  },
  {
    prefix: "354",
    area: "Iceland",
    flag: flagIceland
  },
  {
    prefix: "84",
    area: "Vietnam",
    flag: flagVietnam
  },
  {
    prefix: "44",
    area: "Britain",
    flag: flagBritain
  },
  {
    prefix: "33",
    area: "France",
    flag: flagFrance
  },
  {
    prefix: "49",
    area: "Germany",
    flag: flagGermany
  }
];
const time = 60;
class InputMode {
  constructor(type) {
    this.type = type;
    this.value = "";
    this.isFocus = false;
    this.isError = false;
    if (type === "password" || type === "checkPassword" || type === "logInPassword") {
      this.isPassword = true;
      this.inputType = "password";
    } else {
      this.isPassword = false;
      this.inputType = "text";
    }
    this.tips = "";
    this.isOK = false;
    this.placeholder = "";
    this.checkPwdData = {};
    this.codeData = {};
    this.setPlaceholder();
    this.setPasswordCheck();
    this.setPhonePrefixList();
  }
  setPlaceholder() {
    switch (this.type) {
      case "email":
        this.placeholder = "Login.placeholder1";
        break;
      case "phone":
        this.placeholder = "Login.placeholder5";
        break;
      case "logInPassword":
        this.placeholder = "Login.placeholder2";
        break;
      case "validCode":
        this.placeholder = "Login.placeholder3";
        break;
      case "password":
        this.placeholder = "Login.placeholder2";
        break;
      case "checkPassword":
        this.placeholder = "Login.placeholder4";
        break;
      default:
        this.placeholder = "Login.placeholder6";
        return;
    }
  }
  setPasswordCheck() {
    if (this.type !== "password") return false;
    this.checkPwdData.rules = {
      ruleNums: {
        str: "Login.inputTips13",
        bol: /^.{8,18}$/.test(this.value)
      },
      ruleUpper: {
        str: "Login.uppercase",
        bol: /[A-Z]/.test(this.value)
      },
      ruleLower: {
        str: "Login.lowercase",
        bol: /[a-z]/.test(this.value)
      },
      ruleNumber: {
        str: "Login.inputTips15",
        bol: /\d/.test(this.value)
      },
      ruleSpecial: {
        str: "Login.inputTips14",
        bol: /[-~!@#$%^&*_+=;:'"<>?/.,{}()\[\]\\]/.test(this.value)
      }
    };
    this.checkPwdData.isCheckOK = Object.values(this.checkPwdData.rules).every((item) => item.bol);
  }
  setCodeData(type) {
    if (this.type !== "validCode") return false;
    this.codeData = {
      isSend: false,
      sendText: type === "email" ? "Login.getCode" : "Login.getSMSCode",
      sendTime: time,
      isShow: false,
      captcha: false
    };
  }
  setPhonePrefixList() {
    if (this.type !== "phone") return false;
    this.searchPrefixKey = "";
    this.phonePrefixList = PHONE_PREFIX;
    this.phonePrefixList.forEach((item) => {
      item.isSelect = false;
    });
    this.phonePrefix = usePhonePrefix().getPrefix() ? usePhonePrefix().getPrefix() : 0;
    this.isOpenList = false;
    let idx = -1;
    idx = PHONE_PREFIX.findIndex((item) => item.prefix == this.phonePrefix);
    if (idx === -1) {
      this.phonePrefix = PHONE_PREFIX[0].prefix;
      this.areaFlag = PHONE_PREFIX[0].flag;
      this.phonePrefixList[0].isSelect = true;
    } else {
      this.phonePrefix = PHONE_PREFIX[idx].prefix;
      this.areaFlag = PHONE_PREFIX[idx].flag;
      this.phonePrefixList[idx].isSelect = true;
    }
  }
}
class modeList {
  constructor(arr) {
    this.timer = null;
    this.list = [];
    for (let i in arr) {
      this.list.push(new InputMode(arr[i]));
    }
    const idx = this.list.findIndex((item) => item.type === "validCode");
    if (idx > -1) {
      this.list[idx].setCodeData(this.list[0].type);
    }
  }
  bindCheckRobotCheck() {
    let that = this;
    if (that.list.find((item) => item.type === "validCode")) ;
  }
  bindPhonePrefixListTransfer() {
    const idx = this.list.findIndex((item) => item.type === "phone");
    if (idx !== -1) this.list[idx].isOpenList = !this.list[idx].isOpenList;
  }
  bindPhonePrefixListClose() {
    const idx = this.list.findIndex((item) => item.type === "phone");
    if (idx !== -1) this.list[idx].isOpenList = false;
  }
  bindResetPhonePrefix(i, i2) {
    this.list[i].phonePrefixList.forEach((item) => {
      item.isSelect = false;
    });
    this.list[i].phonePrefixList[i2].isSelect = true;
    this.list[i].phonePrefix = this.list[i].phonePrefixList[i2].prefix;
    this.list[i].areaFlag = this.list[i].phonePrefixList[i2].flag;
    this.list[i].isOpenList = false;
  }
  bindSetPrefixList(i) {
    if (this.list[i].type !== "phone") return false;
    this.list[i].phonePrefixList = this.findPrefixList(this.list[i].searchPrefixKey);
  }
  bindChildInputCheck(i) {
    this.list[i].value = this.list[i].value.replace(/\s/g, "");
    if (this.list[i].type !== "password") return false;
    this.list[i].setPasswordCheck();
  }
  bindChildFocus(i) {
    let img = (void 0).getElementsByClassName("aiImg")[0];
    if (img) img.style.transform = "translate(200%)";
    this.list[i].isFocus = true;
  }
  bindChildBlur(i) {
    let img = (void 0).getElementsByClassName("aiImg")[0];
    if (img) img.style.transform = "translate(0)";
    this.list[i].isFocus = false;
    switch (this.list[i].type) {
      case "email":
        const emailBol = /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(this.list[i].value);
        this.list[i].isOK = emailBol;
        this.list[i].tips = emailBol ? "" : "Login.inputTips2";
        this.list[i].isError = !emailBol;
        break;
      case "phone":
        const phoneBol = /^\d{1,11}$/.test(this.list[i].value);
        this.list[i].isOK = phoneBol;
        this.list[i].tips = phoneBol ? "" : "Login.inputTips11";
        this.list[i].isError = !phoneBol;
        break;
      case "logInPassword":
        const lnPwd = /^.{8,18}$/.test(this.list[i].value);
        this.list[i].isOK = lnPwd;
        this.list[i].tips = lnPwd ? "" : "Login.inputTips12";
        this.list[i].isError = !lnPwd;
        break;
      case "validCode":
        const codeBol = !!this.list[i].value;
        this.list[i].isOK = codeBol;
        this.list[i].tips = codeBol ? "" : "Login.placeholder3";
        this.list[i].isError = !codeBol;
        break;
      case "password":
        const pwdBol = this.list[i].checkPwdData.isCheckOK;
        this.list[i].isOK = pwdBol;
        this.list[i].tips = pwdBol ? "" : "Login.inputTips16";
        this.list[i].isError = !pwdBol;
        break;
      case "checkPassword":
        const pwd = this.list.find((item) => item.type === "password").value;
        const pwd_bol = this.list.find((item) => item.type === "password").isOK;
        const ckPwdBol = !!(pwd_bol && this.list[i].value === pwd);
        this.list[i].isOK = ckPwdBol;
        this.list[i].tips = ckPwdBol ? "" : "Login.inputTips7";
        this.list[i].isError = !ckPwdBol;
        break;
      default:
        return;
    }
  }
  bindChildClear(i) {
    this.list[i].value = "";
    this.list[i].isOK = false;
  }
  bindChildChangeInputType(i, val) {
    this.list[i].inputType = val;
  }
  bindChildSendCode(data, from) {
    const idx = this.list.findIndex((item) => item.type === "email" || item.type === "phone");
    const i = this.list.findIndex((item) => item.type === "validCode");
    if (this.list[i].type === "validCode" && idx !== -1) {
      this.bindChildBlur(idx);
      if (this.list[idx].isOK) {
        if (!this.list[i].codeData.isSend) {
          this.list[i].codeData.isSend = true;
          const param = {};
          if (this.list[idx].type === "email") {
            param.email = this.list[idx].value;
          } else if (this.list[idx].type === "phone") {
            param.phonePrefix = this.list[idx].phonePrefix;
            param.phone = this.list[idx].value;
          }
          param.captchaVerifyParam = data;
          bindSendVaildCode(param).then((res) => {
            if (this.list[idx].type === "email" && from === "register") {
              ga4({
                types: "sign_up_mail_code",
                params: {
                  sign_up_sent_mail: param.email
                },
                utmKeys: ["id"]
              });
            } else if (this.list[idx].type === "phone" && from === "register") {
              ga4({
                types: "sign_up_phone_code",
                params: {
                  sign_up_sent_area: param.phonePrefix,
                  sign_up_sent_number: param.phone
                },
                utmKeys: ["id"]
              });
            }
            this.list[i].codeData.sendText = `Login.send`;
            this.list[i].codeData.isShow = true;
            this.list[i].codeData.captcha = true;
            this.timer = setInterval();
          }).catch((err) => {
            this.list[i].codeData.isSend = false;
            this.list[i].codeData.captcha = false;
          });
        }
      }
    }
  }
  bindClearTimer() {
    clearInterval(this.timer);
  }
  findPrefixList(val) {
    const lowerInput = val.toLowerCase();
    const regex = new RegExp(lowerInput, "i");
    return PHONE_PREFIX.filter((item) => {
      item.isSelect = false;
      return regex.test(item.prefix) || regex.test(item.area);
    });
  }
  returnData() {
    const i = this.list.findIndex((item) => item.type === "validCode");
    return this.list[i];
  }
}
const feedBackData = (arr) => {
  let param = {};
  for (let i in arr) {
    if (!arr[i].isOK) {
      return false;
    }
    if (arr[i].type === "phone") {
      param.phonePrefix = arr[i].phonePrefix;
    }
    param[arr[i].type] = arr[i].value;
  }
  return param;
};
const extractKeys = (obj, keys) => {
  const result = {};
  keys.forEach((key) => {
    if (obj.hasOwnProperty(key)) {
      if (key === "logInPassword" || key === "password") {
        result.password = useNuxtApp().$encrypt(obj[key]);
      } else {
        result[key] = obj[key];
      }
    }
  });
  return result;
};
const useAccount = () => {
  const { t } = useI18n();
  const userInfoStore = useUserInfo();
  const userTokenStore = useUserToken();
  const isLogin = ref(false);
  const userInfo = ref({});
  isLogin.value = !!userTokenStore.getToken();
  userInfo.value = userInfoStore.getInfo();
  const bindDoLoginOut = debounce(() => {
    bindLogout().then((res) => {
      if (res.code === "200") {
        ElMessage.success("Log Out Success！");
        userTokenStore.setToken("");
        userInfoStore.setInfo({});
        isLogin.value = false;
        setTimeout(() => {
          nuxtTo("/");
          userInfo.value = {};
        }, 500);
      }
    });
  }, 1e3, { "leading": true, "trailing": false });
  const bindDoLogin = debounce((val) => {
    let type = "";
    let keys = [];
    const data = feedBackData(val);
    type = val[0].type;
    val.forEach((item) => {
      keys.push(item.type);
      if (item.type === "phone") {
        keys.push("phonePrefix");
      }
    });
    if (!data) {
      ElMessage.error(t("Login.inputTips10"));
      return;
    }
    const loading = ElLoading.service({
      lock: true,
      background: "rgba(0, 0, 0, 0.5)"
    });
    const param = extractKeys(data, keys);
    bindLogin(param).then((res) => {
      loading.close();
      ElMessage.success({
        message: `<span style="white-space: nowrap;">${t("Login.logSuccess")}</span>`,
        dangerouslyUseHTMLString: true
      });
      ga4({
        types: "login_success",
        params: {
          "login_type": type
        },
        isDailyVisit: true,
        utmKeys: ["id", "campaign"]
      });
      const localePath = useLocalePath();
      userTokenStore.setToken(res.data.tokenValue);
      userInfoStore.setInfo(res);
      setTimeout(() => {
        navigateTo({
          path: localePath("/user")
        });
      }, 500);
    }).catch(() => {
      loading.close();
    });
  }, 1e3, { "leading": true, "trailing": false });
  const bindDoRegister = debounce((val) => {
    let type = "";
    const keys = [];
    const data = feedBackData(val);
    console.log("sss", data);
    type = val[0].type;
    val.forEach((item) => {
      keys.push(item.type);
      if (item.type === "phone") {
        keys.push("phonePrefix");
      }
    });
    if (!data) {
      ElMessage.error(t("Login.inputTips10"));
      return;
    }
    const loading = ElLoading.service({
      lock: true,
      background: "rgba(0, 0, 0, 0.5)"
    });
    const param = extractKeys(data, keys);
    bindCheckUserRegister(param).then(() => {
      bindCheckValidCode(param).then(() => {
        bindRegister(param).then((res) => {
          loading.close();
          ElMessage.success({
            message: `<span style="white-space: nowrap;">${t("Login.signInSuccess")}</span>`,
            dangerouslyUseHTMLString: true
          });
          ga4({
            types: "sign_up_summit",
            params: {
              sign_up_type: type
            },
            utmKeys: ["id"]
          });
          setInterval();
          const localePath = useLocalePath();
          const userToken = useUserToken();
          const userInfo2 = useUserInfo();
          userToken.setToken(
            res.data.tokenValue
          );
          userInfo2.setInfo(res);
          const route = useRoute();
          const source = route.query.source;
          setTimeout(() => {
            if (source === "app") {
              uni.navigateTo(
                {
                  url: "/pages/login/index"
                }
              );
            } else {
              navigateTo({
                path: localePath(
                  "/user"
                )
              });
            }
          }, 500);
        }).catch(() => {
          loading.close();
        });
      }).catch(() => {
        loading.close();
      });
    }).catch(() => {
      loading.close();
    });
  }, 1e3, { leading: true, trailing: false });
  const bindDoChangePassword = debounce((val) => {
    const keys = [];
    const data = feedBackData(val);
    val.forEach((item) => {
      keys.push(item.type);
      if (item.type === "phone") {
        keys.push("phonePrefix");
      }
    });
    if (!data) {
      ElMessage.error(t("Login.inputTips10"));
      return;
    }
    const loading = ElLoading.service({
      lock: true,
      background: "rgba(0, 0, 0, 0.5)"
    });
    const param = extractKeys(data, keys);
    bindResetPwd(param).then(() => {
      loading.close();
      ElMessage.success(t("Login.pwdChanged"));
      const localePath = useLocalePath();
      const route = useRoute();
      const source = route.query.source;
      setTimeout(() => {
        if (source === "app") {
          uni.navigateTo({ url: "/pages/login/index" });
        } else {
          navigateTo({
            path: localePath("/login")
          });
        }
      }, 1e3);
    }).catch(() => {
      loading.close();
    });
  }, 1e3, { leading: true, trailing: false });
  return { isLogin, userInfo, bindDoLoginOut, bindDoLogin, bindDoRegister, bindDoChangePassword };
};
export {
  flagMacao as a,
  flagCyprus as b,
  flagFrance as c,
  flagGermany as d,
  flagSeychelles as e,
  flagKorea as f,
  flagBrunei as g,
  flagMalaysia as h,
  flagLaos as i,
  flagLuxembourg as j,
  flagIceland as k,
  modeList as m,
  useAccount as u
};
//# sourceMappingURL=useAccount-Ba5l_-oJ.js.map
