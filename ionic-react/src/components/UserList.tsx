import { IonAvatar, IonItem, IonLabel, IonList } from "@ionic/react";
import { useHistory, useRouteMatch } from "react-router";

const users = [
      {
            id: 1,
            name: "Liam",
            image: 'https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png'
      },
      {
            id: 2,
            name: "Noah",
            image: 'https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg'
      },
      {
            id: 3,
            name: "Oliver",
            image: 'https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg'
      },
      {
            id: 4,
            name: "James",
            image: 'https://thumbs.dreamstime.com/b/happy-smiling-geek-hipster-beard-man-cool-avatar-geek-man-avatar-104871313.jpg'
      },
      {
            id: 5,
            name: "Henry",
            image: 'https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_960_720.png'
      },
      {
            id: 6,
            name: "Alexander",
            image: 'https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/12/9-Best-Online-Avatars-and-How-to-Make-Your-Own-for-Free-image1-5.png'
      },
]
const UserList = (props: any) => {
      const history = useHistory()
      console.log(history);

      const match = useRouteMatch()

      return (
            <IonList>
                  {users.map((user: any) =>
                        <IonItem key={user.id} detail onClick={() => { history.push(`${match.url}/${user.id}`, user) }}>
                              <IonAvatar slot="start" >
                                    <img src={user.image} />
                              </IonAvatar>
                              <IonLabel>{user.name}</IonLabel>
                        </IonItem>
                  )}
            </IonList>
      );
};
export default UserList;