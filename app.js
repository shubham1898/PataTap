var express=require("express");
var app=express();

app.use(express.static("public"));
app.set('port',(process.env.PORT || 3000));
app.get("/status", (req,res)=>{
	res.send("<h1>CONNECTED<h1>");
	
})

app.get("/",(req,res)=>{
	res.render("patatprandomanimate.ejs");
	
})

app.listen(app.get('port'),()=>{
	console.log("Server Online");
	
})