import exportCSV from "simple-js-export"

const data = [...Array(100)].map((item) => {
  return {
    name: "name" + item,
    code: "code" + item,
    year: "year" + item,
  }
})
const columns = [
  { title: "NAME", dataIndex: "name" },
  { title: "CODE", dataIndex: "code" },
  { title: "YEAR", dataIndex: "year" },
]

exportCSV({ data, columns }).save()
