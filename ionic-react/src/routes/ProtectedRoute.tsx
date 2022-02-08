import { IonRouterOutlet } from '@ionic/react';
import { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import Login from '../pages/Login';
import PageNotFound from '../pages/PageNotFound';
import { routes } from './routes';


export const Protectedroute = () => {
      const { isAuthenticated }: any = useContext(AuthContext)
      console.log("isAuthenticated", isAuthenticated);

      return (
            // <IonRouterOutlet>
            <Switch>
                  <Route exact path="/login" component={Login} />
                  {routes.map((route: any, i) => {
                        const ComponentObj = route.component as React.FC;
                        return (
                              <Route
                                    key={i}
                                    path={route.url}
                                    render={() => isAuthenticated ? <ComponentObj /> : <Redirect to="/login" />}
                                    exact={true} />)
                  }
                  )}
                  <Route exact path="/" render={() => <Redirect to="/home" />} />
                  <Route component={PageNotFound} />
            </Switch>
            // </IonRouterOutlet>
      )
}
