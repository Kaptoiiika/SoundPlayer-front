import React from "react"
import { createRoot } from "react-dom/client"
import "shared/config/i18n/i18n"
import { BrowserRouter } from "react-router-dom"
import { ErrorBoundary } from "app/providers/ErrorBoundary"
import "app/styles/index.scss"
import { StoreProvider } from "app/providers/StoreProvider"
import { ThemeProvider } from "app/providers/ThemeProvider"
import App from "./app/App"

const container = document.getElementById("root")

if (!container) {
  throw new Error(
    "Контейнер root не найден. Не удалось вмонтировать реакт приложение"
  )
}

const root = createRoot(container)

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
