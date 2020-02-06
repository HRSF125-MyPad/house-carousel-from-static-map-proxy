const express = require("express");
const app = express();
const port = 3005;
const path = require("path");
const axios = require("axios");

app.use(express.static(path.join(__dirname, "../public/")));

//For mortgage calculator
app.get("/bank", (req, res) => {
  axios.get("http://localhost:3001/bank").then(response => {
    res.send(response.data);
  });
});

app.get("/homes", (req, res) => {
  axios.get("http://localhost:3001/homes").then(response => {
    res.send(response.data);
  });
});

//for image carousel

app.get("/image", (req, res) => {
  // console.log(req.url);
  axios.get(`http://localhost:3004${req.url}`).then(response => {
    res.send(response.data);
  });
});

//for imageCarousel from static map

app.get("/images", (req, res) => {
  axios.get("http://localhost:3003/images").then(response => {
    res.send(response.data);
  });
});

// app.get("/bank", (req, res) => {
//   res.redirect("http://localhost:3001/bank");
// });
// app.get("/homes", (req, res) => {
//   res.redirect("http://localhost:3001/homes");
// });
// app.get("/homes", (req, res) => {
//   res.redirect("http://localhost:3001/homes");
// });

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
