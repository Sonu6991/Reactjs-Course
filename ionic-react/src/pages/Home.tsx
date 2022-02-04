import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useContext } from 'react';
import { callApi } from '../api/api';
import { AuthContext } from '../Authentication/Auth';
import MenuWrapper from '../components/MenuWrapper';
import './Home.scss'
const user: any = {
  id: 11,
  name: "sonu chauhan",
  username: "Sonu@123",
  email: "Sonu123@.com",
}

const newUser: any = {
  name: "someone surname",
  email: "someone@hops.healthcare",
  password: "87654321",
  passwordConfirm: "87654321",
  role: "admin"
}

const Home: React.FC = () => {
  const { token }: any = useContext(AuthContext);

  const getUser = async () => {
    const data = await callApi('/users', 'GET', { 'authorization': 'Bearer ' + token }, null);
    console.log(data);
  }

  const postUser = async () => {
    const data = await callApi('/users/signup', 'POST', { "Content-Type": "application/json" }, newUser);
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
    const data = await callApi('https://reqres.in/api/users?id=1', 'PUT', null, user);
    console.log(data);
  }

  return (

    <MenuWrapper>
      <IonPage id='main'>
        <IonHeader>
          <IonToolbar >
            <IonTitle className="span">
              <span >
                <IonMenuButton />
              </span>
            </IonTitle>
          </IonToolbar>
        </IonHeader>


        <IonContent fullscreen id="content">
          <IonButton routerLink='/dashboard' >go to Dashboard </IonButton>
          <IonButton onClick={getUser} >get users</IonButton>
          <IonButton onClick={postUser}>post user</IonButton>
          <IonButton onClick={deleteUser}>delete user</IonButton>
          <IonButton onClick={patchUser}>patch user</IonButton>
          <IonButton onClick={putUser} >put user</IonButton>
        </IonContent>
      </IonPage>
    </MenuWrapper>
  );
};

export default Home;
