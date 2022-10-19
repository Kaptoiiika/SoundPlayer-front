import { ThemeProvider } from "app/providers/ThemeProvider"
import React from "react"
import { createRoot } from "react-dom/client"
import App from "./app/App"
import "shared/config/i18n/i18n"
import { BrowserRouter } from "react-router-dom"
import { ErrorBoundary } from "app/providers/ErrorBoundary"

const root = createRoot(document.getElementById("root"))

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>
)
