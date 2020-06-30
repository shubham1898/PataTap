var express=require("express");
var app=express();

app.use(express.static("public"));
app.get("/", function(req,res){
	res.send("<h1>CONNECTED<h1>");
	
})

app.get("/project", function(req,res){
	res.render("patatprandomanimate.ejs");
	
})

app.listen(3000, function(req,res){
	console.log("Server Online");
	
})