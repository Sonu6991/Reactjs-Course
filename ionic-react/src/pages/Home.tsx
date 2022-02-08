import { IonButton, IonCol, IonContent, IonHeader, IonLabel, IonMenuButton, IonRow, IonSegment, IonSegmentButton, IonTitle, IonToolbar } from '@ionic/react';
import { useContext } from 'react';
import { useHistory } from 'react-router';
import { AuthContext } from '../context/AuthContext';
import MenuWrapper from '../components/MenuWrapper';
import './Home.scss'
import { ApiContext } from '../api/api';

const user1: any = {
  id: 11,
  name: "sonu chauhan",
  username: "Sonu@123",
  email: "Sonu123@.com",
}

const user2: any = {
  name: "someone surname",
  email: "someone@hops.healthcare",
  password: "87654321",
  passwordConfirm: "87654321",
  role: "admin"
}

const Home: React.FC = () => {
  const { token, logOutHandler }: any = useContext(AuthContext);
  const apiCotext: any = useContext(ApiContext)
  const { callApi } = apiCotext;
  const history = useHistory()


  const getUser = async () => {
    const data = await callApi('/users', 'GET', { 'authorization': 'Bearer ' + token }, null);
    console.log(data);
    history.push('/dashboard/users')
  }

  const postUser = async () => {
    const data = await callApi('/users/signup', 'POST', { "Content-Type": "application/json" }, user2);
    console.log(data);
  }

  const deleteUser = async () => {
    const data = await callApi('https://reqres.in/api/users', 'DELETE', null, { data: { id: 1 } });
    console.log(data);
  }

  const patchUser = async () => {
    const data = await callApi('https://reqres.in/api/users?id=1', 'PATCH', null, { name: "sonu" });
    console.log(data);
  }

  const putUser = async () => {
    const data = await callApi('https://reqres.in/api/users?id=1', 'PUT', null, user1);
    console.log(data);
  }


  return (

    <MenuWrapper>
      <div id='main'>
        <IonHeader>
          <IonToolbar >
            <IonTitle className="span">
              <IonRow >
                <IonCol size='2'><IonMenuButton /></IonCol>

                <IonCol size='10'> <IonLabel >Home</IonLabel></IonCol>
              </IonRow>
            </IonTitle>
          </IonToolbar>
        </IonHeader>


        <IonContent fullscreen id="content">

          {/* <form action='_blank' method='post'>
            <input type='text' name='fName' id='fname'></input>
            <input type='text' name='mName' id='lname'></input>
            <input type='text' name='lName' id='lname'></input>
            <input type='submit' value='submit' id='submit'></input>
          </form> */}


          <IonButton routerLink='/dashboard' >go to Dashboard </IonButton>
          <IonButton onClick={getUser} >get users</IonButton>
          <IonButton onClick={postUser}>post user</IonButton>
          <IonButton onClick={deleteUser}>delete user</IonButton>
          <IonButton onClick={patchUser}>patch user</IonButton>
          <IonButton onClick={putUser} >put user</IonButton>

          {/* <IonRow className='row'>
            <IonSegment value="favorite" className="segment">
              <IonSegmentButton className='segmentBtn' value="call">
                <IonLabel>Vitals</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton className='segmentBtn' value="favorite">
                <IonLabel>Messages</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton className='segmentBtn' value="map">
                <IonLabel>Appointments</IonLabel>
              </IonSegmentButton>
            </IonSegment>
          </IonRow> */}
          <IonButton onClick={logOutHandler} >logout</IonButton>
        </IonContent>
      </div>
    </MenuWrapper>
  );
};

export default Home;
