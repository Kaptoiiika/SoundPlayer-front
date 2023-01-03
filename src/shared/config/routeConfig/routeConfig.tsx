/* eslint-disable boundaries/element-types */
import { RouteProps } from "react-router-dom"
import { AlbumDetailsPage } from "pages/AlbumDetailsPage"
import { AlbumPage } from "pages/AlbumPage"
import { AudioPage } from "pages/AudioPage"
import { AuthorizationPage } from "pages/AuthorizationPage"
import { NotFoundPage } from "pages/NotFoundPage"
import { ProfilePage } from "pages/ProfilePage"

export const enum AppRoutes {
  NOT_FOUND = "not_found",

  MAIN = "main",
  AUDIO = "audio",
  AUTH = "auth",
  PROFILE = "proifle",
  MY_PROFILE = "my_profile",
  ALBUMS = "albums",
  ALBUM_DETAILS = "album_details",
  ALBUM_CREATE = "album_create",
}

export type AppRouteProps = {
  authRequire?: boolean
} & RouteProps

export const RoutePaths: Record<AppRoutes, string> = {
  [AppRoutes.NOT_FOUND]: "*",

  [AppRoutes.MAIN]: "/",
  [AppRoutes.AUDIO]: "/audio",
  [AppRoutes.AUTH]: "/auth",
  [AppRoutes.PROFILE]: "/profile/", // + :id
  [AppRoutes.MY_PROFILE]: "/profile/me",
  [AppRoutes.ALBUMS]: "/albums",
  [AppRoutes.ALBUM_CREATE]: "/album/new",
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
    element: <AlbumPage />,
  },
  [RoutePaths.albums]: {
    path: RoutePaths.albums,
    element: <AlbumPage />,
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
  [RoutePaths.my_profile]: {
    path: RoutePaths.my_profile,
    element: <ProfilePage />,
    authRequire: true,
  },
  [RoutePaths.album_details]: {
    path: `${RoutePaths.album_details}:id`,
    element: <AlbumDetailsPage />,
  },
}
