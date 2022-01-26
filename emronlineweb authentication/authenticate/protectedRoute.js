import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useAuth } from "./auth/auth";

const ProtectedRoute = (props) => {
    const router = useRouter();
    const [authorized, setAuthorized] = useState(false);
    const { isAuthenticated } = useAuth();

    console.log("protected route ", isAuthenticated);

    useEffect(() => {

        authCheck(router.asPath);

        console.log("authorized", authorized);
        const hideContent = () => setAuthorized(false);
        router.events.on('routeChangeStart', hideContent);

        router.events.on('routeChangeComplete', authCheck)

        return () => {
            router.events.off('routeChangeStart', hideContent);
            router.events.off('routeChangeComplete', authCheck);
        }

    }, [isAuthenticated]);

    function authCheck(url) {

        const publicPaths = ['/login', '/registration', '/reset-password'];
        const path = url.split('?')[0];
        if ((!isAuthenticated || isAuthenticated === undefined) && !publicPaths.includes(path)) {
            console.log("if>>>>>>>>>>>>>>>>>>>>>isAuthenticated", isAuthenticated);
            setAuthorized(false);
            router.replace('/login')
        } else if (isAuthenticated) {
            console.log("else>>>>>>>>>>>>>> isAuthenticated", isAuthenticated);
            setAuthorized(true);
            // router.push(router.asPath);
        }
    }

    // if (isAuthenticated === true) {
    //     setAuthorized(true)
    // } else {
    //     setAuthorized(false)
    // }
    return <>{props.children}</>


}

export default ProtectedRoute