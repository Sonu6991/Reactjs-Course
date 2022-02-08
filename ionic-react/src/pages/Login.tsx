import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { AuthContext } from '../context/AuthContext';
const user = {
      "email": "sonu@hops.healthcare",
      "password": "12345678"
}

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
                        <IonButton onClick={() => { loginHandler(user) }}> Login </IonButton>
                  </IonContent>
            </IonPage>
      );
};

export default Login;
