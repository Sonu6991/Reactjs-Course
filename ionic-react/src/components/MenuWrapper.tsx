import { IonContent, IonHeader, IonMenu, IonSplitPane, IonTitle, IonToolbar } from "@ionic/react";

const MenuWrapper: React.FC = (props: any) => {
  return (
    <IonContent>
      <IonSplitPane contentId="main">
        {/*--  the side menu  --*/}
        <IonMenu contentId="main">
          <IonHeader>
            <IonToolbar>
              <IonTitle>Menu</IonTitle>
            </IonToolbar>
          </IonHeader>
        </IonMenu>
        {props.children}
      </IonSplitPane>
    </IonContent>
  );
};

export default MenuWrapper;
