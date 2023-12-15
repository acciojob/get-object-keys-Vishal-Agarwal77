//your JS code here. If required.
const obj1={
	name:"ABC"
}
Object.prototype.getkeys=function(){
	return Object.keys(this);
}
console.log(obj1.getkeys());