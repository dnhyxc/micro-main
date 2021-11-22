import { Button } from 'antd';
import React, { PureComponent } from 'react';
import { withRouter, RouteComponentProps } from 'dva/router';
import { actions } from '@/microActions';
import styles from './index.less';

interface IProps extends RouteComponentProps {
  history: any;
}
interface ISelfProps {
  name: string;
}

class Login extends PureComponent<IProps, ISelfProps> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      name: 'Login...',
    };
  }

  onLogin = () => {
    console.log('点击登录');
    actions.setGlobalState({ globalToken: '202002090902110106133' });
    this.props.history.push('/');
  };

  render() {
    return (
      <div className={styles.wrap}>
        <div className={styles.name}>{this.state.name}</div>
        <div>
          <Button type="primary" onClick={this.onLogin}>
            点击登录
          </Button>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
