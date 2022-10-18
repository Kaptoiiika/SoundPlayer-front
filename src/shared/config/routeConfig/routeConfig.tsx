import { AudioPage } from "pages/AudioPage"
import { HomePage } from "pages/HomePage"
import { RouteProps } from "react-router-dom"

export const enum AppRoutes {
  MAIN = "main",
  AUDIO = "audio",
  LOGIN = "login",
}

export const RoutePaths: Record<AppRoutes, string> = {
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
]
