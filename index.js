var express = require("express")
var app = express()
var os = require("os")




app.get("/", function rootRoute(req, res){
	var requestAddress = req.headers["x-forwarded-for"]||req.socket.remoteAdress||req.ip
	var browserInfo = req.header("user-agent")
	var requestInfo = {
		browserInfo: req.header("user-agent"),
		ipAdress: req.ip
	}
	var response = {
		Message: "This is an expressJS Server Hosted on an android device through Termux (A Linux Compatibility Layer). I'm running Termux on a Galaxy Grand Prime (AKA J2 Prime in other regions), on Android 6.0. This is limiting since i only have access to NodeJS v13 and no access to docker through Termux.",
		Platform: os.platform(),
		Release: os.release(),
		Architecture: os.arch(),
		CPU: os.cpus(),
		TotalMem: os.totalmem() + " bits",
		FreeMem: os.freemem() + " bits",
		requestInfo,
	}
	console.log("New Request From: ", requestInfo)
	res.send(response)
})


app.listen(8090, function logging(){
	console.log("Listening on port: ", 8090)
})
