import { d as defineStore, p as persistedState } from "../server.mjs";
import { ref } from "vue";
const useCheckMobile = defineStore("isMobile", () => {
  const bol = ref(false);
  const setItem = (data) => {
    bol.value = data;
  };
  const getItem = () => {
    return bol.value;
  };
  return { bol, setItem, getItem };
}, {
  persist: {
    storage: persistedState.cookies
  }
});
export {
  useCheckMobile as u
};
//# sourceMappingURL=isMobile-BdEqHLRM.js.map
