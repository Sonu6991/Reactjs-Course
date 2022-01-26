
import { useRouter } from "next/router";

const Other = () => {
    const router = useRouter()
    return (
        <div>
            <h1>Other</h1>
            <button onClick={() => {
                router.back()
            }}>back</button>
        </div>
    )

}

export default Other;