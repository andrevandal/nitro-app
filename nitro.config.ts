// nitro.config.ts
// https://nitro.unjs.io/config
import path from "node:path"

import { defineNitroConfig } from 'nitropack'
export default defineNitroConfig({
  alias: {
    "@/controllers": path.resolve(__dirname, 'controllers')
  }
})
