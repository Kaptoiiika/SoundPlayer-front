import { render, screen } from "@testing-library/react"
import { Button, ButtonVariant } from "./Button"

describe("Button", () => {
  test("Test render", () => {
    render(<Button>TEST</Button>)
    expect(screen.getByText("TEST")).toBeInTheDocument()
  })

  test("Test Outline variant", () => {
    render(<Button variant={ButtonVariant.OUTLINE}>TEST</Button>)
    expect(screen.getByText("TEST")).toHaveClass(ButtonVariant.OUTLINE)
  })
})
