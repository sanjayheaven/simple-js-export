import { defaultOptions } from "../src/simple-js-export"

describe("defaultOptions", () => {
  test("Default options should be as README shows", () => {
    expect(Array.isArray(defaultOptions.data)).toBe(true)
    expect(Array.isArray(defaultOptions.columns)).toBe(true)
    expect(defaultOptions.fileName).toBe("simple-js-export")
    expect(defaultOptions.delimiter).toBe(",")
  })
})
