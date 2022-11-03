import { AudioPage } from "pages/AudioPage"
import { AuthorizationPage } from "pages/AuthorizationPage"
import { HomePage } from "pages/HomePage"
import { NotFoundPage } from "pages/NotFoundPage"
import { RouteProps } from "react-router-dom"

export const enum AppRoutes {
  MAIN = "main",
  AUDIO = "audio",
  AUTH = "auth",
  NOT_FOUND = "not_found",
}

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.NOT_FOUND]: "*",
  [AppRoutes.MAIN]: "/",
  [AppRoutes.AUDIO]: "/audio",
  [AppRoutes.AUTH]: "/auth",
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
    path: RoutePaths.auth,
    element: <AuthorizationPage />,
  },

  ///////////////
  {
    path: RoutePaths.not_found,
    element: <NotFoundPage />,
  },
]
