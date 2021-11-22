import {
  MicroAppStateActions,
  initGlobalState, // 新增
} from "qiankun";

interface IStateParams {
  [key: string]: any;
}

const state: IStateParams = {
  name: "micro-main",
};

const actions: MicroAppStateActions = initGlobalState(state);

export { actions };
