import { readBody } from "h3"

import lucas from "@/controllers/lucas"

export default eventHandler(async event => {
  const body = await readBody(event)
  console.log(lucas.lol())
  return body
})
