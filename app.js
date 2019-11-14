var express = require('express');
var app = express(); 
var runWandbox = require('wandbox-api');

runWandbox.fromString('console.log(1+1);',{'compiler':'nodejs-head'},function clbk(error, results){
	if(error){
		throw new Error(error.message);
	}
	var out=results;
	
	app.get('/',function(req,res){
		var response = JSON.parse(JSON.stringify(out));
		res.send(response['program_output']);
	});
});

app.listen(3000, function(){
	console.log('Connected!');
});

