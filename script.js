//your JS code here. If required.
const obj1={
	name:"ABC"
}
Object.prototype.getkeys=function(myobj){
	return Object.keys(myobj);
}
console.log(Object.getkeys(obj1));