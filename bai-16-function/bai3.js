function transform(numbers, callback) {
    var  result = [] ;
    for(var i =0 ; i < numbers.length ; i++)
    {
        result.push(callback(numbers[i]));
    }
    console.log(result);
}
function double(num) {
    return num * 2;
}
transform([1,2,3],double);