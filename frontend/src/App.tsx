import React, {FC} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.scss';
import { LayoutBase } from './components/layout/LayoutBase';
import routes from './routes'
import { ChainId, Config, DAppProvider } from '@usedapp/core'
import config from './config'

const DAppconfig: Config = {
    readOnlyChainId: ChainId.Mainnet,
    readOnlyUrls: {
      [ChainId.Mainnet]: `https://mainnet.infura.io/v3/${config.infura.project_id}`,
    },
  }

export const App:FC<{}> = (props) => {
  return (
    <DAppProvider config={DAppconfig}>
        <LayoutBase>
            <Router>
            <Switch>
                    {routes.map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        children={<route.component />}
                    />
                    ))}
                </Switch>
            </Router>
        </LayoutBase>
    </DAppProvider>
  )
}

export default App;