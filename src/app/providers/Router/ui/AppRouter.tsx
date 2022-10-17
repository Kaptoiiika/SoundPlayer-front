import { AudioPage } from "pages/AudioPage"
import { HomePage } from "pages/HomePage"
import { Suspense } from "react"
import { Link, Routes, Route } from "react-router-dom"
import { routeConfig } from "shared/config/routeConfig/routeConfig"

export const AppRouter = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routeConfig.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </Routes>
    </Suspense>
  )
}
