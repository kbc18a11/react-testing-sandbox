import { fireEvent, render, screen } from "@testing-library/react"

import { Counter } from "./"

describe("Counter", () => {
  test("render", () => {
    const { asFragment, getByText } = render(<Counter />)
    expect(asFragment()).toMatchSnapshot()
    getByText('Count: 0');
  })
  test("click:count", () => {
    render(<Counter />)
    const button = screen.getByText("Increment")
    fireEvent.click(button)
    fireEvent.click(button)
    screen.getByText("Count: 2")
  })
})
