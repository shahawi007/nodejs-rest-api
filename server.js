const express = require("express");
const app = express();

//routing
app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
