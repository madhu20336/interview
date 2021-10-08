var readline = require("readline-sync")
var num = readline.questionInt("How many items you want in your array: ")
//  var Arr = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
var Arr = []
for (var i = 0; i < num; i++) {
    num1 = readline.questionInt("Enter the number: ")
    Arr.push(num1)
} console.log(Arr)
var Value = readline.questionInt("Which number you want : ")
var a = 0;
while (a < Arr.length){
    var b = 0;
    var x = 0
    while (b < Arr[a]){
        if (((Arr[b]+Arr[b+1])-1) == Value){
            x = (Arr[b]+Arr[b+1])
        }else if(Arr[b] > Value){
            x = (Arr[b])
        }else if(((Arr[a]+Arr[b])-1) == Value){
            x = (Arr[a]+Arr[b])
        }
        b++
    }a++
}
console.log(x)


// var a =0
// while (a < Arr.length){
//     var b = 0;
//     while (b < Arr[a]){
//         switch(Value){
//             case (((Arr[b]+Arr[b+1])-1) == Value):
//                 console.log(Arr[b]+Arr[b+1])
//                 break;
            
//             case Arr[b] > Value:
//                 console.log(Arr[b])
//                 break;

//             case (((Arr[a]+Arr[b])-1) == Value):
//                 console.log(Arr[a]+Arr[b])
//                 break
//         }
//         b++
//     }a++
// }