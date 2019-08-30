//區域變數覆蓋全域變數
var tmp = "JavaScript";
function f(){
    console.log(tmp);
    if(true){
        var tmp = "Hello World";
    }
};

f(); //undefined(注意：變數hoisting)

//循環變數洩漏為全域變數
var s = "hello";
for(var i = 0 ; i < s.length ; i++){
    console.log(s[i]);
}
console.log(i); //5