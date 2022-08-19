function hasDuplicates(arr) {
    return new Set(arr).size !== arr.length;
}
 
var arr = [ 2, 4, 6, 5, 9 ];
 
if (hasDuplicates(arr)) {
    console.log("Duplicate elements found.");
}
else {
    console.log("No Duplicates found.");
}