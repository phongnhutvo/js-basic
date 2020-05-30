var coffeeMachine = {
    makeCoffee: function(onfinish){
        console.log('make Coffee');
        onfinish();
    }
};

var beep = function(){
    console.log('bit bit');
};

coffeeMachine.makeCoffee(beep);
/**
call back la gi call back duoc su dung ntn
call back ban co the hieu la mot ham nay truyen vao mot ham khac giong nhu mot tham so 
vd 
*/