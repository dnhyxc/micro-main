import React, { useState } from 'react';
import { withRouter } from 'dva/router';
import { Spin } from 'antd';
import {
  registerMicroApps,
  start,
  setDefaultMountApp,
  runAfterFirstMounted,
  addGlobalUncaughtErrorHandler,
} from 'qiankun';
import { apps, AppsParams } from '@/microConfig';
import MainLayout from './layout';

import styles from './app.less';

const App: React.FC<any> = ({ children, location }): any => {
  const [loading, setLoading] = useState<boolean>(false);

  // 设置首次加载loading效果
  const loader = (load: boolean) => {
    // 此处可以获取微应用是否加载成功,可以用来触发全局的 loading
    setLoading(load);
  };

  const newApps = apps.map((i) => {
    // 为props增加参数
    i.props = {
      ...i.props,
      // 需要增肌的属性
      // data: "",
    };
    return {
      ...i,
      loader,
    };
  });

  registerMicroApps(newApps as AppsParams[], {
    beforeLoad: (app): any => {
      console.log('before load app.name=====>>>>>', app.name);
    },
    beforeMount: (app): any => {
      // console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
    },
    afterMount: (app): any => {
      // console.log('[LifeCycle] after mount %c%s', 'color: green;', app.name);
      // setLoading(false);
    },
    afterUnmount: (app): any => {
      // console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
    },
  });

  start({
    // prefetch: true, // 开启预加载
    // sandbox: {
    //   experimentalStyleIsolation: true, //   开启沙箱模式,实验性方案
    // },
  });

  // 设置主应用启动后默认进入的微应用（reactApp）
  setDefaultMountApp('/dnhyxc/react');

  runAfterFirstMounted(() => {
    console.log('[MainApp] first app mounted');
  });

  // 添加全局异常捕获
  addGlobalUncaughtErrorHandler((handler) => {
    console.log('异常捕获', handler);
  });

  return (
    <MainLayout>
      <div className={styles.flexContent}>
        {loading && (
          <div className={styles.loading}>
            <Spin />
          </div>
        )}
        <div id="subapp" />
      </div>
    </MainLayout>
  );
};

export default withRouter(App);
