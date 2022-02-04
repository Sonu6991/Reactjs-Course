import {
      IonBackButton,
      IonButtons,
      IonContent,
      IonHeader,
      IonPage,
      IonTitle,
      IonToolbar,
} from "@ionic/react";
import { useParams } from "react-router";

const UserDetail: React.FC = () => {
      const params: any = useParams()
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
                        <div>This is User Detail page and the user id is {params.id}</div>
                  </IonContent>
            </IonPage>
      );
};

export default UserDetail;
