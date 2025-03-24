import { d as defineStore, p as persistedState } from "../server.mjs";
import { ref } from "vue";
const useChallenges = defineStore("challenges", () => {
  const scalingPlan = ref({});
  const setData = (data) => {
    scalingPlan.value = data;
  };
  const getData = () => {
    return scalingPlan.value;
  };
  return { scalingPlan, setData, getData };
}, {
  persist: {
    storage: persistedState.localStorage
  }
});
export {
  useChallenges as u
};
//# sourceMappingURL=challenges-DfBymhN9.js.map
