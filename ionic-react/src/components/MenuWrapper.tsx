import { IonAvatar, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonMenu, IonMenuButton, IonNote, IonSplitPane, IonTitle, IonToolbar } from "@ionic/react";
import { archive, heart, mail, paperPlane, trash, warning } from 'ionicons/icons'
import classes from './MenuWrapper.module.scss'

const MenuWrapper: React.FC = (props: any) => {
  return (
    <IonContent>
      <IonMenu contentId="main">
        <IonHeader>
          <IonToolbar>
            <IonTitle className="ion-text-center">Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonItem>
            <IonAvatar slot="start" className={classes.avtar}><IonIcon icon={mail} className={classes.icon} /> </IonAvatar>
            <IonLabel>Inbox</IonLabel>
          </IonItem>
          <IonItem>
            <IonAvatar slot="start" className={classes.avtar}><IonIcon icon={paperPlane} className={classes.icon} /> </IonAvatar>
            <IonLabel>Outbox</IonLabel>
          </IonItem>
          <IonItem>
            <IonAvatar slot="start" className={classes.avtar}><IonIcon icon={heart} className={classes.icon} /> </IonAvatar>
            <IonLabel>Favorites</IonLabel>
          </IonItem>
          <IonItem>
            <IonAvatar slot="start" className={classes.avtar}><IonIcon icon={archive} className={classes.icon} /> </IonAvatar>
            <IonLabel>Archived</IonLabel>
          </IonItem>
          <IonItem>
            <IonAvatar slot="start" className={classes.avtar}><IonIcon icon={trash} className={classes.icon} /> </IonAvatar>
            <IonLabel>Trash</IonLabel>
          </IonItem>
          <IonItem>
            <IonAvatar slot="start" className={classes.avtar}><IonIcon icon={warning} className={classes.icon} /> </IonAvatar>
            <IonLabel>Spam</IonLabel>
          </IonItem>
        </IonContent>
      </IonMenu>
      {props.children}
    </IonContent>
  );
};

export default MenuWrapper;
