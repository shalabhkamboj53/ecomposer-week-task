import { ReactNodeChildren } from "../../utils/type"

const PrivateRoute = ({children}:ReactNodeChildren) => {
    const isAuth = true
    if(isAuth){
        return (
            <div className="overflow-x-hidden">{children}</div>
        )
    } else {
        return (
            <div className="w-full h-screen flex justify-center items-center overflow-x-hidden">You are not Authorized to access this page.</div>
        )
    }
}

export default PrivateRoute