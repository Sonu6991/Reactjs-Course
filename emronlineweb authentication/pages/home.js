import { useRouter } from "next/router";
import { useAuth } from "../authenticate/auth/auth";

const Home = () => {
    const { logOutUser } = useAuth();
    const router = useRouter();
    return (
        <div>
            <h1>Home</h1>
            <button onClick={() => { logOutUser() }}>logout</button>
            <button onClick={() => {
                router.push("/other")
            }}>go to other page</button>

        </div>
    )

}

export default Home;