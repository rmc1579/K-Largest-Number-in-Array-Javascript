// K Largest Number in Array


// K Largest Number Ascending Array
function findKLargestAscending(numbers, n){
    var sortA = numbers.sort(function (a, b){
        return a - b;
    });
    console.log(sortA);
    return sortA[sortA.length - n];
}



// K Largest Number Descending Array
function findKLargestDescending(numbers, n){
    var sortD = numbers.sort(function (a, b){
        return b - a;
    });
    console.log(sortD);
    return sortD[n - 1];
}

console.log (a = [12, 5, 787, 1, 23]);
console.log("Ascending K Largest Number in Array")
console.log("K Largest Number in Array = " + findKLargestAscending(a, 1));
console.log("---------------");
console.log("Descending K Largest Number in Array");
console.log("K Largest Number in Array = " + findKLargestDescending(a, 2));
