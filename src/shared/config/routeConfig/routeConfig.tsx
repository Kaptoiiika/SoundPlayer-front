import { AlbumDetailsPage } from "pages/AlbumDetailsPage"
import { AudioPage } from "pages/AudioPage"
import { AuthorizationPage } from "pages/AuthorizationPage"
import { HomePage } from "pages/HomePage"
import { NotFoundPage } from "pages/NotFoundPage"
import { ProfilePage } from "pages/ProfilePage"
import { RouteProps } from "react-router-dom"

export const enum AppRoutes {
  NOT_FOUND = "not_found",

  MAIN = "main",
  AUDIO = "audio",
  AUTH = "auth",
  PROFILE = "proifle",
  ALBUM_DETAILS = "album_details",
}

export type AppRouteProps = {
  authRequire?: boolean
} & RouteProps

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.NOT_FOUND]: "*",

  [AppRoutes.MAIN]: "/",
  [AppRoutes.AUDIO]: "/audio",
  [AppRoutes.AUTH]: "/auth",
  [AppRoutes.PROFILE]: "/profile/",
  [AppRoutes.ALBUM_DETAILS]: "/album/", // + :id
}

export const routeConfig: Record<string, AppRouteProps> = {
  [RoutePaths.not_found]: {
    path: RoutePaths.not_found,
    element: <NotFoundPage />,
  },
  ///////////////

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
    path: `${RoutePaths.proifle}:id`,
    element: <ProfilePage />,
  },
  [RoutePaths.album_details]: {
    path: `${RoutePaths.album_details}:id`,
    element: <AlbumDetailsPage />,
  },
}
