import Navbar from "../../components/navbar"
import { ReactNodeChildren } from "../../utils/type"

const PublicRoute = ({children}:ReactNodeChildren) => {
  return (
    <div className="overflow-x-hidden">
        <Navbar />
        {children}
    </div>
  )
}

export default PublicRoute