import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useRouteMatch } from "react-router";
import UserList from "../components/UserList";

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
        <UserList />
      </IonContent>
    </IonPage>
  );
};

export default Users;
