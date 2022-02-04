import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import PageNotFound from './pages/PageNotFound';
import { routes } from './routes/routes';
import Login from './pages/Login';
import { Protectedroute } from './routes/ProtectedRoute';
import { useContext, useEffect, useState } from 'react';
import { authentication } from './api/api';
import { AuthContext } from './Authentication/Auth';
import AuthProvider from './Authentication/Auth';
import { useHistory } from "react-router";
setupIonicReact();

const App: React.FC = () => {

  return (
    <IonApp>
      <IonReactRouter>
        <AuthProvider>
          <Protectedroute />
        </AuthProvider>
      </IonReactRouter>
    </IonApp>
  )
};

export default App;
