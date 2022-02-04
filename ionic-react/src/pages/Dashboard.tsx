import { IonBackButton, IonButton, IonButtons, IonContent, IonHeader, IonPage, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/react';
import { Redirect, Route, RouteComponentProps } from 'react-router';
import PageNotFound from './PageNotFound';
import UserDetail from './UserDetail';
import Users from './Users';

const DashboardComp: React.FC<RouteComponentProps> = ({ match }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          {/* <IonButton slot='start'>back</IonButton> */}
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div>Dashboard page</div>
        <IonButton routerDirection="forward" routerLink={`${match.url}/users`} >Users List </IonButton>
      </IonContent>
    </IonPage>
  );
};

const Dashboard: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>Dashboard</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div>Dashboard page</div>
        <IonButton routerDirection="forward" routerLink="dashboard/users" >Users List </IonButton>
      </IonContent>
    </IonPage >
  );
};

export default Dashboard;
