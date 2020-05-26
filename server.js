const express = require("express");
const nunjucks = require("nunjucks")

const courses = require("./data")
const server = express();

server.use(express.static('public'))

server.set("view engine", "html")

nunjucks.configure("views", {
  express: server,
  autoescape: false
})

server.get("/", (req, res) => {
  return res.render("about.njk")
})


server.get("/courses", (req, res) => {
  return res.render("courses.njk", { courses })
})

server.get("/courses/:id", (req, res) => {
  const id = req.params.id;

  const infos = {
    name: "",
    image_url: "",
    link: ""
  }

  if (id == "gostack") {
    infos.name = "GoStack"
    infos.image_url = "https://rocketseat.com.br/static/images/og/bootcamp.png"
    infos.link = "https://rocketseat.com.br/gostack"
  } else if (id == "launchbase") {
    infos.name = "LaunchBase"
    infos.image_url = "https://repository-images.githubusercontent.com/220316471/0d516b80-0461-11ea-946d-d1e3bfa1ea92"
    infos.link = "https://rocketseat.com.br/launchbase"
  } else if (id == "starter") {
    infos.name = "Starter"
    infos.image_url = "https://rocketseat.com.br/static/images/og/starter.png"
    infos.link = "https://rocketseat.com.br/launchbase"
  }
  return res.render("info.njk", { infos }) 
})

server.get("/a", (req, res) => {
    res.render("a.njk")
})

server.use(function(req, res) {
  res.status(404).render("not-found.njk");
});


server.listen(3000, function() {
  console.log("server is running")
})