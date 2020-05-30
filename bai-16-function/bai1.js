function sayHello(){
console.log('i love you tokyo');
}
function countAndDo(callback){
    for(var i = 0 ; i < 10 ; i ++)
    {
        console.log(i);
    }
callback();
}
countAndDo(sayHello);