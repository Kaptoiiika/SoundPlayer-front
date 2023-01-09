import { ReactNode } from "react"
import { useSelector } from "react-redux"
import { Navigate, useLocation } from "react-router-dom"
import { PageLoader } from "@/widgets/PageLoader"
import { getAuthIsInited } from "@/entities/User"
import { getAuthData } from "@/entities/User/model/selectors/getAuthData/getAuthData"
import { RoutePaths } from "@/shared/config/routeConfig/routeConfig"

type RequireAuthProps = {
  children: ReactNode
}

export const RequireAuth = (props: RequireAuthProps) => {
  const { children } = props
  const isInited = useSelector(getAuthIsInited)
  const authData = useSelector(getAuthData)
  const location = useLocation()

  if (!isInited) {
    return <PageLoader />
  }

  if (!authData)
    return <Navigate to={RoutePaths.auth} state={{ from: location }} replace />

  return <>{children}</>
}
