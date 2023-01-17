import { readBody } from "h3"

export default eventHandler(async event => {
  return `Hello ${event.context.params.uuid}!`
})
