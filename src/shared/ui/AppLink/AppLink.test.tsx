import { render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { AppLink } from "./AppLink"

describe("AppLink", () => {
  test("test children render text", () => {
    render(
      <BrowserRouter>
        <AppLink to={"/asd"} title={"someTextButton"} />
      </BrowserRouter>
    )
    expect(screen.getByText("someTextButton")).toBeInTheDocument()
  })
})
