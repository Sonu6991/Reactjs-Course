import {
      IonBackButton,
      IonButtons,
      IonContent,
      IonHeader,
      IonPage,
      IonTitle,
      IonToolbar,
} from "@ionic/react";
import { useHistory, useParams } from "react-router";
import User from "../components/User";

const UserDetail: React.FC = () => {
      const params: any = useParams()
      const history = useHistory()
      const user = history.location.state;

      return (
            <IonPage>
                  <IonHeader>
                        <IonToolbar>
                              <IonButtons slot="start">
                                    <IonBackButton defaultHref="/home" />
                              </IonButtons>
                              <IonTitle>User Detail Page</IonTitle>
                        </IonToolbar>
                  </IonHeader>
                  <IonContent fullscreen>
                        <User />
                  </IonContent>
            </IonPage>
      );
};

export default UserDetail;
