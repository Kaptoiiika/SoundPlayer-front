import { AudioPage } from "pages/AudioPage"
import { HomePage } from "pages/HomePage"
import { NotFoundPage } from "pages/NotFoundPage"
import { RouteProps } from "react-router-dom"
import { PageLoader } from "widgets/PageLoader"

export const enum AppRoutes {
  MAIN = "main",
  AUDIO = "audio",
  LOGIN = "login",
  NOT_FOUND = "not_found",
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.NOT_FOUND]: "*",
  [AppRoutes.MAIN]: "/",
  [AppRoutes.AUDIO]: "/audio",
  [AppRoutes.LOGIN]: "/login",
}

export const routeConfig: RouteProps[] = [
  {
    path: RoutePaths.main,
    element: <HomePage />,
  },
  {
    path: RoutePaths.audio,
    element: <AudioPage />,
  },
  {
    path: RoutePaths.not_found,
    element: <NotFoundPage />,
  },
]

if (__IS_DEV__) {
  const devRoute = [
    {
      path: "/loader",
      element: <PageLoader />,
    },
  ]
  
  routeConfig.push(...devRoute)
}
