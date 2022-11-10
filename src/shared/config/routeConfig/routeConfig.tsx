import { AudioPage } from "pages/AudioPage"
import { AuthorizationPage } from "pages/AuthorizationPage"
import { HomePage } from "pages/HomePage"
import { NotFoundPage } from "pages/NotFoundPage"
import { ProfilePage } from "pages/ProfilePage"
import { RouteProps } from "react-router-dom"

export const enum AppRoutes {
  MAIN = "main",
  AUDIO = "audio",
  AUTH = "auth",
  PROFILE = "proifle",
  NOT_FOUND = "not_found",
}

export type AppRouteProps = {
  authRequire?: boolean
} & RouteProps

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.NOT_FOUND]: "*",
  [AppRoutes.MAIN]: "/",
  [AppRoutes.AUDIO]: "/audio",
  [AppRoutes.AUTH]: "/auth",
  [AppRoutes.PROFILE]: "/profile",
}

export const routeConfig: Record<string, AppRouteProps> = {
  [RoutePaths.main]: {
    path: RoutePaths.main,
    element: <HomePage />,
  },
  [RoutePaths.audio]: {
    path: RoutePaths.audio,
    element: <AudioPage />,
  },
  [RoutePaths.auth]: {
    path: RoutePaths.auth,
    element: <AuthorizationPage />,
  },
  [RoutePaths.proifle]: {
    path: RoutePaths.proifle,
    element: <ProfilePage />,
    authRequire: true,
  },

  ///////////////
  [RoutePaths.not_found]: {
    path: RoutePaths.not_found,
    element: <NotFoundPage />,
  },
}
