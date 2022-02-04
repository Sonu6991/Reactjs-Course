import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { AuthContext } from '../Authentication/Auth';

const Login: React.FC = () => {

      const { loginHandler }: any = useContext(AuthContext)

      return (
            <IonPage>
                  <IonHeader>
                        <IonToolbar>
                              <IonTitle>Login</IonTitle>
                        </IonToolbar>
                  </IonHeader>
                  <IonContent fullscreen>
                        <div>This is Login page</div>
                        <IonButton onClick={loginHandler}> Login </IonButton>
                  </IonContent>
            </IonPage>
      );
};

export default Login;
