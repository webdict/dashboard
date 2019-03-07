import React from 'react';
import Fetch from '../fetch';

export const userContext = React.createContext();
const { Provider } = userContext;
export default class Context extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onChange: this.setState.bind(this),
      username: null,
      userflag: -1
    };
  }

  componentDidMount() {
    Fetch.contxt().then(context => {
      this.setState(context);
    });
  }

  render() {
    return (
      <Provider value={this.state}>{this.props.children(this.state)}</Provider>
    );
  }
}
