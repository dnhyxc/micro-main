import {
  MicroAppStateActions,
  initGlobalState, // 新增
} from 'qiankun';

interface IStateParams {
  [key: string]: any;
}

const state: IStateParams = {
  name: 'micro-main',
  globalToken: '',
};

const actions: MicroAppStateActions = initGlobalState(state);
// 将actions挂载到全局
(window as any).__MAIN_GLOBALSTATE_ACTIONS__ = actions;

export { actions };
