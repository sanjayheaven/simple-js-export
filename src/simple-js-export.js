const download = function (csvContent, fileName) {
  let blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
  let link = document.createElement("a")
  let url = URL.createObjectURL(blob)
  link.setAttribute("href", url)
  link.setAttribute("download", fileName)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

const isObject = (item) => {
  return Object.prototype.toString.call(item) === "[object Object]"
}
const isFunction = (item) => {
  return Object.prototype.toString.call(item) === "[object Function]"
}

const exportCSV = function ({
  data = [],
  columns = [],
  fileName = "simple-js-export",
  delimiter = ",",
}) {
  if (!Array.isArray(data) || !Array.isArray(columns)) {
    throw new TypeError("Data & Columns should be Array type")
  }
  const instance = {
    options: {
      data,
      columns,
      fileName,
      delimiter,
    },
    save: function () {
      if (typeof columns[0] == "string") {
        let res = data.reduce((acc, item) => {
          return (acc +=
            Object.keys(item)
              .map((i) => item[i])
              .join(delimiter) + "\n")
        }, columns.join(delimiter) + "\n")
        download(res, fileName + ".csv")
      }
      if (typeof columns[0] == "object") {
        let res = data.reduce((acc, item) => {
          columns.forEach((col) => {
            if (isFunction(col.render)) {
              acc = acc + `"${col.render(item[col.dataIndex])}"` + delimiter
            } else {
              acc = acc + `"${item[col.dataIndex] || ""}"` + delimiter
            }
          })
          return (acc += "\n")
        }, columns.map((i) => i.title).join(delimiter) + "\n")
        download(res, fileName + ".csv")
      }
    },
  }
  return instance
}
export const defaultOptions = exportCSV({}).options
export default exportCSV
