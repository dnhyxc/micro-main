interface Props extends Record<string, any> {
  info?: string;
  routerBase: string;
}

export interface AppsParams {
  name: string;
  entry: string;
  container: string;
  activeRule: string;
  props: Props;
  loader?: (loading: boolean) => void;
}

export const apps: AppsParams[] = [
  {
    name: 'reactApp',
    entry: 'http://localhost:8989',
    container: '#subapp',
    activeRule: '/dnhyxc/react',
    props: {
      info: '来了老弟',
      routerBase: '/dnhyxc/react',
    },
  },
  {
    name: 'vueApp',
    entry: 'http://localhost:8686',
    container: '#subapp',
    activeRule: '/dnhyxc/vue',
    props: {
      info: '我太难了',
      routerBase: '/dnhyxc/vue',
    },
  },
];
