const isNode = typeof window === "undefined"
const fs = require("fs")
const csvNewLine = "\n"

const isFunction = (item) => {
  return Object.prototype.toString.call(item) === "[object Function]"
}

const browserDownload = function (csvContent, fileName) {
  let blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
  let link = document.createElement("a")
  let url = URL.createObjectURL(blob)
  link.setAttribute("href", url)
  link.setAttribute("download", fileName)
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}

const nodeDownload = function (csvContent, fileName) {
  fs.writeFileSync(fileName, csvContent)
}

const download = function (csvContent, fileName) {
  csvContent = "\ufeff" + csvContent
  console.log(isNode)
  if (isNode) {
    nodeDownload(csvContent, fileName)
  } else {
    browserDownload(csvContent, fileName)
  }
}


const exportCSV = function ({
  data = [],
  columns = [],
  fileName = "simple-js-export",
  delimiter = ",",
} = {}) {
  if (!Array.isArray(data) || !Array.isArray(columns)) {
    throw new TypeError("Data & Columns should be Array type")
  }
  return {
    options: { data, columns, fileName, delimiter },
    save: function () {
      if (typeof columns[0] == "string") {
        let res = data.reduce((acc, item) => {
          return (acc +=
            Object.keys(item)
              .map((i) => item[i])
              .join(delimiter) + csvNewLine)
        }, columns.join(delimiter) + csvNewLine)
        download(res, fileName + ".csv")
      }
      if (typeof columns[0] == "object") {
        let res = data.reduce((acc, item) => {
          columns.forEach((col) => {
            acc =
              acc +
              `"${
                (item[col.dataIndex] || "") + ((col.forceString && "\t") || "")
              }"` +
              delimiter
          })
          return (acc += csvNewLine)
        }, columns.map((i) => i.title).join(delimiter) + csvNewLine)
        download(res, fileName + ".csv")
      }
    },
  }
}

export const defaultOptions = exportCSV().options
export default exportCSV
