import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useRouteMatch } from "react-router";

const Users: React.FC = () => {

  const { url } = useRouteMatch()
  const userId = 12;
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/dashboard" />
          </IonButtons>
          <IonTitle>Users List Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div>This is Users page</div>
        <IonButton routerDirection="forward" routerLink={`${url}/${userId}`}> View User detail </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Users;
