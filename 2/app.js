// ---------1
function twoMas(masOne, masTwo){
    let masOnePlusMasTwo = [...masOne, ...masTwo].sort();
    let counts = {}, max = 0, res;
    for (let key in masOnePlusMasTwo) {
        counts[masOnePlusMasTwo[key]] = ((counts[masOnePlusMasTwo[key]] || 0) + 1);
        if (counts[masOnePlusMasTwo[key]] > max){ 
            max = counts[masOnePlusMasTwo[key]];
            res = masOnePlusMasTwo[key];
        }
    }
    console.log(res + " = " + counts[res]);
}
twoMas([1,1,1,1,1,1,1, 2, 3, 3, 'a', 'test', 'test', 'test'], ['test', 2, 7,  'a', 'a']);

//----------2
function repeatElementMas(mas){
    let j = 0;
    let compareMas = {};
    let resMas = [];
    for(let i = 0; i < mas.length; i++){
        let item = mas[i];
        if(compareMas[item] !== 1){
            compareMas[item] = 1;
            resMas[j++] = item;
        }
    }
    console.log(resMas);
}
repeatElementMas([2, 1,1, 2,1,1, 2,2,2,2, 3, 3, 'a','a','a','a', 'test', 'a','a','a','a','test', 'test']);

//-------------3
function masElement(mas) {
    let resMas = [];
    for(let i = 0; i < mas.length; i++){
        if(mas[i] >= 945e6){
            resMas[i] = (Math.round((mas[i]/1e9)))/100 + "B";
        }else if(mas[i] >= 945e3){
            resMas[i] = (Math.round((mas[i]/1e4)))/100 + "M";
        }else if(mas[i] >= 945){
            resMas[i] = (Math.round((mas[i]/10)))/100 + "K";
        }else{
            resMas[i] = mas[i];
        }
    }
    console.log(resMas);
}
masElement([111896, 9999, 9985, 1024, 999999, 1000100, 60044943, 654648940001]);