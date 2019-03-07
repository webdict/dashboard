import React from 'react';
import ReactDOM from 'react-dom';
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import './conf/reset.scss';
import Context from './page/Context';
import Header from './page/Header';
import Signin from './page/Signin';
import History from './page/History';
import Webnote from './page/Webnote';
import Loading from './page/Loading';
import { Layout, LocaleProvider } from 'antd';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import 'moment/locale/zh-cn';
import './conf/cover.scss';

ReactDOM.render(
  <LocaleProvider locale={zh_CN}>
    <Context>{renderRouter}</Context>
  </LocaleProvider>,
  document.getElementById('root')
);

function renderRouter({ userflag }) {
  switch (userflag) {
    case -1:
      return <Loading />;
    case 0:
      return <Signin />;
    default:
      return (
        <Router>
          <Layout>
            <Route component={Header} />
            <Layout>
              <Layout style={{ padding: '8px 0 0 8px' }}>
                <Layout className="page-content">
                  <Switch>
                    <Route path="/webnote/:page" component={Webnote} />
                    <Route path="/history/:page" component={History} />
                    <Redirect from="/webnote" to="/webnote/1" />
                    <Redirect to="/history/1" />
                  </Switch>
                </Layout>
              </Layout>
            </Layout>
          </Layout>
        </Router>
      );
  }
}
