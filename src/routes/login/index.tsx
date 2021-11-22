import React, { PureComponent } from 'react';
import styles from './index.less';

interface IProps {}
interface ISelfProps {
  name: string;
}

class Login extends PureComponent<IProps, ISelfProps> {
  constructor(props: IProps | ISelfProps) {
    super(props);
    this.state = {
      name: 'Login...',
    };
  }

  render() {
    return <div className={styles.wrap}>{this.state.name}</div>;
  }
}

export default Login;
