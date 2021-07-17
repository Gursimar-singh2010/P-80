function searching(){
    var s = document.getElementById("s1").value;
var found = 0;
var j;
for(j = 0; j<names_of_people.length; j++)
{
    if(s==names_of_people[j]){
        found = found + 1;
    }
}
document.getElementsById("p2").innerHTML = "name found" + "time/s";
console.log("found name" + "time/s")
}
 
names_of_people.sort();
var GuestName = document.getElementById("name1").value
names_of_people.push(GuestName);

