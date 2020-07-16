const express = require("express")
const helmet = require("helmet")
const path = require("path")
const port = process.env.PORT || 3000

express()
  .use(helmet())
  .use(express.static(__dirname))
  .use(express.static(path.join(__dirname, "build")))
  .get("/*", (_, response) =>
    response.sendFile(path.join(__dirname, "build", "index.html"))
  )
  .listen(port, () => console.log("Frontend server is started"))
