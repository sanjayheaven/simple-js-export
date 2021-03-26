# <center>simple-js-export</center>

[![npm](https://img.shields.io/npm/v/simple-js-export)](https://www.npmjs.com/package/simple-js-export)

- Quick & Simple export to CSV in the browser.
- Add Excel data export in the **future** version

## Install

```shell
 npm install simple-js-export
```

## Example

[example.js](https://github.com/sanjayheaven/simple-js-export/blob/main/src/example.js)

```js
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
```

## Option Properties

| Property  | Description                                     | Required |  Type  |     Default      |
| :-------- | :---------------------------------------------- | :------: | :----: | :--------------: |
| data      | Data to be exported into file                   |    ✔     | Array  |        []        |
| columns   | Columns setting of datasource [config](#Column) |    ✔     | Array  |        []        |
| fileName  | Filename to export                              |          | String | simple-js-export |
| delimiter | Delimiter                                       |          | String |        ,         |

## Column

| Property  | Description              | Required | Type   | Default |
| :-------- | ------------------------ | :------: | ------ | :-----: |
| title     | Title of the column      |    ✔     | String |    -    |
| dataIndex | Field of the data record |    ✔     | String |    -    |
