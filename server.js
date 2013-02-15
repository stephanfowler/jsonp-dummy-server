var express = require('express')
  , app = express()
  , port = parseInt(process.env.PORT, 10) || 8080;

app.use(express.bodyParser());
app.enable("jsonp callback");
    
app.get("/", function(req, res) {
  res.redirect("/index.html");
});

app.post("*", function(req, res) {
  var obj = req.body || {};
  console.log(JSON.stringify(obj))
  res.send(JSON.stringify(obj));
});

app.configure(function(){
  app.use(express.methodOverride());
  app.use(express.bodyParser());
  app.use(express.static(__dirname + '/public'));
  app.use(express.errorHandler({
    dumpExceptions: true, 
    showStack: true
  }));
  app.use(app.router);
});

app.listen(port);
