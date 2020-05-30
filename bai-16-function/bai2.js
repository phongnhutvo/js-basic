function double( num ) {
    return num * 2; 
}
function sumAndDo( nums , callback ){
        var sum = 0 ;
        for(var i of nums)
        {
                sum = sum + i;
        }
        console.log(callback(sum));
};
sumAndDo([1,2,3],double);