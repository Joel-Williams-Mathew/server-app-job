import { Navigate } from "react-router-dom"
import { auth } from "../firebase"

interface Props {
  children: React.ReactNode
}

function ProtectedRoute({ children }: Props) {
  const user = auth.currentUser

  if (!user) {
    return <Navigate to="/login" />
  }

  return <>{children}</>
}

export default ProtectedRoute
