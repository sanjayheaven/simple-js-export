const SimpleJsExport = require("../dist/simple-js-export")

const data = [...Array(10000)].map((item, index) => {
  return {
    name: "name" + index,
    code: "code" + index,
    year: "year" + index,
  }
})
const columns = [
  { title: "NAME", dataIndex: "name" },
  { title: "CODE", dataIndex: "code" },
  { title: "YEAR", dataIndex: "year" },
]

SimpleJsExport({ data, columns }).save()
