import { defaultOptions } from "../src/simple-js-export"

describe("defaultOptions", () => {
  beforeEach(() => {
    window.URL.createObjectURL = () => "blob:fake_URL"
    const element = document.createElement("div")
    element.innerHTML = "<a>Link</a>"
    document.body.appendChild(element)
  })

  test("Default options should be as README shows", () => {
    expect(defaultOptions.data).toBe([])
    expect(defaultOptions.columns).toBe([])
    expect(defaultOptions.columns).toBe([])
    expect(defaultOptions.data).toBe("simple-js-export")
    expect(defaultOptions.delimiter).toBe(",")
  })
})
