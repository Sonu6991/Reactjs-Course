import { IonCard, IonCardHeader, IonCardTitle } from '@ionic/react';
import { useHistory } from 'react-router';

const User = () => {
      const history: any = useHistory()
      return (
            <IonCard>
                  <img src={history.location.state.image} />
                  <IonCardHeader className='ion-bord'>
                        <IonCardTitle className='ion-text-center'>{history.location.state.name}</IonCardTitle>
                  </IonCardHeader>
                  {/* <IonCardContent className='ion-text-center'>
                        {history.location.state.name}
                  </IonCardContent> */}
            </IonCard>
      );
};

export default User;
