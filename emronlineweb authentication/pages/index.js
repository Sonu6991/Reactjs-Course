import { useRouter } from "next/router";
// import { ProtectRoute } from "../authenticate/ProtectRoute";
import LoginForm from "../components/clinic/Login/LoginForm";
import { LoginPage } from "../components/clinic/Login/LoginPage";

export default function Home() {
  const router = useRouter;

  return (
    <>

      {/* <ProtectRoute>  */}
      <LoginPage ><LoginForm /></LoginPage>
      {/* </ProtectRoute> */}
    </>
  );
}
