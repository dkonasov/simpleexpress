var cp=require("child_process");
var gulp_process;
var main_process;
var in_process=false;
var server_script="app.js";

var start=function (){
	
	in_process=true;
	console.log("building app...");
	gulp=cp.spawn("gulp", [], { stdio: [0, 1, 2]});
	gulp.on('close', function(code){
		
		console.log("Build ended with code "+code+", starting server");
		main_process=cp.spawn("node", [server_script], { stdio: [0, 1, 2]});
		in_process=false;
	});
	
}
start();
var watch=require('node-watch');
var filter = function(pattern, fn) {
  return function(filename) {
    if (!pattern.test(filename) && process.env.NODE_ENV==="development" && !in_process && main_process) {
      fn(filename);
    }
  }
}
watch("./", filter(/dist\//, function(filename){

main_process.kill();
start();


}));
