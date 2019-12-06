var express = require('express');
var app = express(); 
var runWandbox = require('wandbox-api');

const {c, cpp, node, python, java} = require('compile-run');

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
/*
const sourcecode = `print("Hell0 W0rld!")`;
let resultPromise = python.runSource(sourcecode);
resultPromise
    .then(result => {
	            console.log(result);
	        })
    .catch(err => {
	            console.log(err);
	        });
*/
java.runSource(`public class HelloWorld{
			public static void main(String []args){
		             System.out.println("Hello World");
		        }}`, (err, result) => {
	    if(err){
		            console.log(err);
		        }
	    else{
		            console.log(result);
		        }
});


app.listen(3000, function(){
	console.log('Connected!');
});


