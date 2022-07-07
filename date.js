
//Remember that the modules that we require in nodejs are just OBJECTS!!!
//console.log() these required packages to see what they are!!
 function getDate() {
    const today = new Date();
    const options = {
    weekday : "long",
    day: "numeric",
    month : "long"
}
 return today.toLocaleDateString("en-US",options);


}

function getDay() {
    //value is const because we're not reassinging them
    const today = new Date();
    const options = {
    weekday : "long",

}
 return today.toLocaleDateString("en-US",options);

}
module.exports = {getDate, getDay };