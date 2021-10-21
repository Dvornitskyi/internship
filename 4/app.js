//-------------1-1
function printNumbers(from, to){
	let time = setInterval(() => {
		if(from < to){
			console.log(from);
			from++;
		}
	}, 1000);
}
// printNumbers(1, 10);

///----------1-2
function printNumbersSetTimeout(from, to){
  let fromNumber = from;
  setTimeout(function printNumbersSet(){
    console.log(fromNumber);
    if(fromNumber < to){
      setTimeout(printNumbersSet, 1000);
    }
    fromNumber++;
  }, 1000);
}
// printNumbersSetTimeout(1, 10);

//----------------------------------2
function clock(){
  function clockDate(){
    console.clear();
    console.log(Date());  
  }
  setInterval(clockDate, 1000);
}
// clock();

//------------------3

function debounce(f, ms){
  let isCooldown = false;
  return function(){
    if (isCooldown) return;
    f.apply(this, arguments);
    isCooldown = true;
    setTimeout(() => isCooldown = false, ms);
  };
}
// Вызов debounce возвращает обёртку. Возможны два состояния:
// isCooldown = false – готова к выполнению.
// isCooldown = true – ожидание окончания тайм-аута.
// В первом вызове isCoolDown = false, поэтому вызов продолжается, и состояние изменяется на true.
// Пока isCoolDown имеет значение true, все остальные вызовы игнорируются.
// Затем setTimeout устанавливает его в false после заданной задержки.

//---------------------4

function throttle(func, ms){
    let isThrottled = false,
    savedArgs,
    savedThis;
  function wrapper(){
    if(isThrottled){ // (2)
      savedArgs = arguments;
      savedThis = this;
      return;
    }
    func.apply(this, arguments); // (1)
    isThrottled = true;
    setTimeout(function(){
      isThrottled = false; // (3)
      if(savedArgs){
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }
  return wrapper;
}
// f1000 передаёт вызовы f максимум раз в 1000 мс
let f1000 = throttle(f, 1000);
//f1000(1); // показывает 1
//f1000(2); // (ограничение, 1000 мс ещё нет)
//f1000(3); // (ограничение, 1000 мс ещё нет)
// когда 1000 мс истекли ...
// ...выводим 3, промежуточное значение 2 было проигнорировано
// Вызов throttle(func, ms) возвращает wrapper.
// Во время первого вызова обёртка просто вызывает func и устанавливает состояние задержки (isThrottled = true).
// В этом состоянии все вызовы запоминаются в saveArgs / saveThis. Обратите внимание, что контекст и аргументы 
// одинаково важны и должны быть запомнены. Они нам нужны для того, чтобы воспроизвести вызов позднее.
// … Затем по прошествии ms миллисекунд срабатывает setTimeout. Состояние задержки сбрасывается 
// (isThrottled = false). И если мы проигнорировали вызовы, то «обёртка» выполняется с последними запомненными 
// аргументами и контекстом.
// На третьем шаге выполняется не func, а wrapper, потому что нам нужно не только выполнить func, но и ещё раз 
// установить состояние задержки и таймаут для его сброса.