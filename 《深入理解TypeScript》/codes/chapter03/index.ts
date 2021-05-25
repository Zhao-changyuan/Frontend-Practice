
import * as fs from "fs"

function loadJSONSync(filename: string) {
  fs.readFileSync()
  return JSON.parse(fs.readFileSync(filename).toString())
}

console.log(loadJSONSync('good.json'))