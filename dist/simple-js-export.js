!(function (e, t) {
  if ("object" == typeof exports && "object" == typeof module)
    module.exports = t()
  else if ("function" == typeof define && define.amd) define([], t)
  else {
    var o = t()
    for (var r in o) ("object" == typeof exports ? exports : e)[r] = o[r]
  }
})(self, function () {
  return (() => {
    "use strict"
    var e = {
        d: (t, o) => {
          for (var r in o)
            e.o(o, r) &&
              !e.o(t, r) &&
              Object.defineProperty(t, r, { enumerable: !0, get: o[r] })
        },
        o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
        r: (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 })
        },
      },
      t = {}
    e.r(t), e.d(t, { default: () => r })
    const o = function (e, t) {
        let o = new Blob([e], { type: "text/csv;charset=utf-8;" }),
          r = document.createElement("a"),
          n = URL.createObjectURL(o)
        r.setAttribute("href", n),
          r.setAttribute("download", t),
          document.body.appendChild(r),
          r.click(),
          document.body.removeChild(r)
      },
      r = function ({
        data: e = [],
        columns: t = [],
        fileName: r = "simple-js-export",
        delimiter: n = ",",
      }) {
        if (!Array.isArray(e) || !Array.isArray(t))
          throw new TypeError("Data & Columns should be Array type")
        return {
          save: function () {
            if ("string" == typeof t[0]) {
              let i = e.reduce(
                (e, t) =>
                  e +
                  (Object.keys(t)
                    .map((e) => t[e])
                    .join(n) +
                    "\n"),
                t.join(n) + "\n"
              )
              o(i, r + ".csv")
            }
            if ("object" == typeof t[0]) {
              let i = e.reduce(
                (e, o) => (
                  t.forEach((t) => {
                    e = ((e) =>
                      "[object Function]" ===
                      Object.prototype.toString.call(e))(t.render)
                      ? e + `"${t.render(o[t.dataIndex])}"` + n
                      : e + `"${o[t.dataIndex] || ""}"` + n
                  }),
                  (e += "\n")
                ),
                t.map((e) => e.title).join(n) + "\n"
              )
              o(i, r + ".csv")
            }
          },
        }
      }
    return t
  })()
})