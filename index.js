const express = require("express");
const app = express();
const PORT = 5000;
const path = require("path");

app.use(express.static(path.join(__dirname, "public")))
app.listen(PORT, ()=>{
  console.log(`listen PORT ${PORT}`);
})

app.get("/",(req,res)=>{
	res.sendFile("index.html")
})

module.exports = app;