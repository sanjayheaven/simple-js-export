const SimpleJsExport = require("../dist/simple-js-export")

const data = [...Array(100)].map((item, index) => {
  return {
    name: "name" + index,
    code: "code" + index,
    year: "year" + index,
    index: "0" + index,
  }
})
const columns = [
  { title: "Index", dataIndex: "index" },
  { title: "NAME", dataIndex: "name" },
  { title: "CODE", dataIndex: "code" },
  { title: "YEAR", dataIndex: "year" },
]
SimpleJsExport({ data, columns }).save()
