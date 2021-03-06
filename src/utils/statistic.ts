import sentryCaptureException from './sentry';

declare const window: any;

/**
 * 统计页面跳转（虚拟路径）
 * @param {string} contentUrl 跳转页面的url（相对路径）
 */
export function trackPage(contentUrl: string) {
  const { _czc, spm } = window;
  window._czc && _czc.push(['_trackPageview', contentUrl]);
  window.spm && spm.onPageStart({
    page: contentUrl,
  });
}

/**
 *
 * 统计交互元素被触发时的事件统计请求
 * @param {string} category 事件触发的对象
 * @param {string} action 事件类型
 * @param {string} label 详细的事件描述
 */
export function trackEvent(category: string, action: string, label: string) {
  const { _czc, spm } = window;
  window._czc && _czc.push('_trackEvent', category, action, label);
  window.spm && spm.push({
    category,
    action,
  });
}

interface TrackSpmEventParams {
  category: string;
  action: string;
  content?: object | string | Error;
  source?: string;
}

/**
 * spm 打点上报
 * category 分类
 * action 功能
 * content 内容
 */
export function trackSpmEvent(params: TrackSpmEventParams | (() => TrackSpmEventParams)) {
  if (typeof params === 'function') {
    try {
      params = params();
    } catch (err) {
      params = {
        category: 'error',
        action: 'trackSpmEventFunction',
        content: err,
      };
      sentryCaptureException({
        level: 'error',
        action: 'trackSpmEventFunctionError',
        content: err,
        source: 'trackSpmEvent',
      });
    }
  }

  let { content } = params;

  if (content && typeof content === 'object') {
    if (content instanceof Error) {
      // 如果 content 是 error
      content = {
        message: content.message,
        stack: content.stack,
      };
    } else {
      // 如果是对象，需要序列化
      content = JSON.stringify(content);
    }
  }
}
