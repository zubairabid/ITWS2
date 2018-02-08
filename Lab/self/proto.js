var Person=function(name,id) { 
	this.name = name; 
	this.id = id;
}
var Student = function(name, id, program){
	Person.call(this, name, id); 
	this.program = program;
}
var TStudent = function(name, id, program, subject){
	Student.call(this, name, id, program); 
	this.subject = subject;
}
