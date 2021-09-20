//---------1
// function twoMas(x, y){
//     function twoMasPlunk(masOne, masTwo){
//         let counterSecond = 0;
//         let counterFirst = 0;
//         let valueArray = "";
//         for(let i = 0; i < masOne.length; i++)
//             {      
//                 counterFirst = 0;  
//                 for(let j = 0; j < masTwo.length; j++){
//                     if(masOne[i] == masTwo[j]){
//                         counterFirst++;              
//                     }
//                     if(counterFirst >= counterSecond){
//                         counterSecond = counterFirst;
//                         valueArray = masOne[i];             
//                     }  
//                 }  
//             }
//             return masRes1 = [counterSecond, valueArray];
//     }
//     let firstRes = twoMasPlunk(x,y);
//     let secondRes = twoMasPlunk(y,x);
//     if(firstRes[0] > secondRes[0]){
//         console.log(firstRes[1]);
//     }else  if(firstRes[0] < secondRes[0]){
//         console.log(secondRes[1]);
//     }else{
//         console.log(firstRes[1], "=", secondRes[1]);
//     }    
// }
// twoMas([1, 2, 3, 3, 'a', 'test'], ['test', 2, 7,  'a', 'a']);

//----------2
// function repeatElementMas(mas) {
//     let j = 0;
//     let compareMas = {};
//     let resMas = [];
//     for(let i = 0; i < mas.length; i++) {
//          let item = mas[i];
//          if(compareMas[item] !== 1) {
//                compareMas[item] = 1;
//                resMas[j++] = item;
//          }
//     }
//     console.log(resMas);
// }
// repeatElementMas([2, 1,1, 2,1,1, 2,2,2,2, 3, 3, 'a','a','a','a', 'test', 'a','a','a','a','test', 'test']);

//-------------3
// function masElement(mas) {
//     let resMas = [];
//     for(let i = 0; i < mas.length; i++) {
//         if(mas[i] >= 945000000){
//             resMas[i] = (Math.round((mas[i]/1000000000)))/100 + "B";
//         }else if(mas[i] >= 945000){
//             resMas[i] = (Math.round((mas[i]/10000)))/100 + "M";
//         }else if(mas[i] >= 945){
//             resMas[i] = (Math.round((mas[i]/10)))/100 + "K";
//         }else{
//             resMas[i] = mas[i];
//         }
//     }
//     console.log(resMas);
// }
// masElement([111896, 9999, 9985, 1024, 999999, 1000100, 60044943, 654648940001]);