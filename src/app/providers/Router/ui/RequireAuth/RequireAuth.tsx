import { getAuthData } from "entities/User"
import { ReactNode } from "react"
import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"
import { RoutePaths } from "shared/config/routeConfig/routeConfig"

type RequireAuthProps = {
  children: ReactNode
}

export const RequireAuth = (props: RequireAuthProps) => {
  const { children } = props
  const authData = useSelector(getAuthData)
  const location = useLocation()

  if (!authData)
    return <Navigate to={RoutePaths.auth} state={{ from: location }} replace />

  return <>{children}</>
}
