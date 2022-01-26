import "../styles/globals.css";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { AuthProvider, useAuth } from "../authenticate/auth/auth";
// import { ProtectRoute } from "../authenticate/ProtectRoute";
import ProtectedRoute from "../authenticate/protectedRoute";

function MyApp({ Component, pageProps }) {


  // const router = useRouter();


  // console.log("authorized", authorized);
  //   useEffect(() => {

  //     authCheck(router.asPath);

  //     const hideContent = () => setAuthorized(false);
  //     router.events.on('routeChangeStart', hideContent);

  //     router.events.on('routeChangeComplete', authCheck)

  //     return () => {
  //         router.events.off('routeChangeStart', hideContent);
  //         router.events.off('routeChangeComplete', authCheck);
  //     }

  // }, []);

  // function authCheck(url) {

  //   const publicPaths = ['/login', '/registration','/reset-password'];
  //   const path = url.split('?')[0];
  //   if ((isAuthenticated === false || isAuthenticated === undefined )  && !publicPaths.includes(path)) {
  //     console.log(isAuthenticated);
  //       setAuthorized(false);
  //       // router.push({
  //       //     pathname: '/login',
  //       //     query: { returnUrl: router.asPath }
  //       // });
  //       router.push('/login')
  //   } else {
  //     console.log(">>>> ",   isAuthenticated);
  //       setAuthorized(true);
  //   }
  // }

  // if(isAuthenticated === true){
  //   setAuthorized(true)
  // }else{
  //   false
  // }

  return (
    <>

      <AuthProvider>
        <ProtectedRoute>
          {/* {authorized &&  <Component {...pageProps} />}  */}
          <Component {...pageProps} />
        </ProtectedRoute>
      </AuthProvider>
    </>
  );
}

export default MyApp;

//import { AuthProvider, ProtectRoute } from "../authenticate/auth/auth";
// <AuthProvider>
//     <ProtectRoute>

//     </ProtectRoute>
//   </AuthProvider>
