
// прошу при необходимости удалить коментариии



// function checkAge(age){
//     if (age>18){
//         return true;
//     }else{
//         return confirm('Родители разрешили?');
//     }
// }number one
// function checkAge1(age){
//     return (age>18)? true: confirm ('Родители разрешили?');
// }





//pow
// function pow2(x,n){
//     let power=x;

//     for(let i=1; i<n; i++){
//         power*=x;
//     }
//     return power;

// }
// let x=prompt('x='), n=prompt('n=');

// (n>0)?alert(pow2(x,n)):(n==0)?alert(1):alert('error!!!')







//function expression

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   ask(
//     "Вы согласны?",
//     () => alert("Вы согласились.") ,
//     () => alert("Вы отменили выполнение.")
//   );









// //buble sort 
//сортировка по убиванию without  methot .sort()

// let arr = [5, 2, 1, -10, 8];
// let temp;
// let c=arr[0];
// for(let i=Number(0); i<arr.length; i++){
//     for(let j=Number(0); j<arr.length; j++){
//         if(arr[j]<arr[i]){
//             temp=arr[i];
//             arr[i]=arr[j];
//             arr[j]=temp;
//         }
//     }
// }
//alert( arr );//8 5 2 1 -10




//сортировка по возрастанию without  methot .sort()

// let arr = [5, 2, 1, -10, 8];
// let temp;
// let c=arr[0];
// for(let i=Number(0); i<arr.length; i++){
//     for(let j=i+1; j<arr.length; j++){
//         if(arr[j]<arr[i]){
//             temp=arr[i];
//             arr[i]=arr[j];
//             arr[j]=temp;
//         }
//     }
// }


// alert( arr );// -10 1 2 5 8




//трансформировать в массив имен

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map(item => item.name);

// alert( names ); // Вася, Петя, Маша









//трансформировать в объекты

// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let usersMapped = users.map(user=>({
//     fullName:`${user.name} ${user.surname}`,
//     id:user.id
// }));
// /*
// usersMapped = [
//   { fullName: "Вася Пупкин", id: 1 },
//   { fullName: "Петя Иванов", id: 2 },
//   { fullName: "Маша Петрова", id: 3 }
// ]
// */

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // Вася Пупкин






//========================
//получить средний возраст

// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [ vasya, petya, masha ];
// function getAverageAge(arrs){
//     return arrs.reduce((a,b) => a+b.age, 0) / arrs.length;
// }

// alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28



