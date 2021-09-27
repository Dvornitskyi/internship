//--------------1
//--------------imperative
function PrimeNumber(num){
    function Prime(m){
        for(let i = 2; i < m; i++){
            if(m % i === 0){
                return false;
            }
        }
        return true;
    }
    let sequence = [];
    for(let j = 2; j < num; j++){
        if(num % j === 0 && Prime(j)){
            sequence.push(j);
        }
    }
    return sequence;
}
console.log(PrimeNumber(100));

//----------------declarative
function PrimeNumberDec(num){
  let x = 2, y = '';
  while(num > x){
    while(num % x == 0){
      num /= x;
      y += x;
    }
    x++;
    if(num == x) y += x;
  }
  console.log(y.split(''));
}
PrimeNumberDec(100);

//----------2
class Validator{
    isEmail(value){
      let reg = new RegExp(/@\w+\.\w+/g);
      if(reg.test(value))return true;
      return false;
    }
    isUrkainianPhoneNumber(number){
      if(number.length < 13) throw new Error('Включает в себя код Украины +38 и номер из 10 цифр, мало цифр');
      if(number.length > 13) throw new Error('Включает в себя код Украины +38 и номер из 10 цифр, больше цифр');
      if(/\+38\d{10}/g.test(number)) return true;
    }
    isDate(date){
      if(date.search(/[a-z]/g) != -1) throw new Error('Введите только цифры');
      let reg = /\d{4}\-\d{2}\-\d{2}/g;
      if(reg.test(date) && date.length < 11) return true;
      return false;
    }
}