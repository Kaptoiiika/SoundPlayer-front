import { ThemeProvider } from "app/providers/ThemeProvider"
import React from "react"
import { createRoot } from "react-dom/client"
import App from "./app/App"
import "shared/config/i18n/i18n"
import { BrowserRouter } from "react-router-dom"
import { ErrorBoundary } from "app/providers/ErrorBoundary"
import "app/styles/index.scss"
import { StoreProvider } from "app/providers/StoreProvider"

const root = createRoot(document.getElementById("root") as HTMLElement)

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <StoreProvider>
        <BrowserRouter>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </StoreProvider>
    </ErrorBoundary>
  </React.StrictMode>
)
