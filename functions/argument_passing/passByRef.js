// pass by reference
function modifyObj(obj){
    obj.z = 100;
}

myObj = {a:1000}
modifyObj(myObj)
console.log(myObj)