(function(){
  let allBtns = document.querySelectorAll('.btn');
  let display = document.querySelector('.display');

  let leftOperand = null;
  let currentOperation = null;
  function calculation(leftOperand,currentOperation,display){
    if(currentOperation=='-'){
      return (+leftOperand)-(+display);
    }
    if(currentOperation=='+'){
      return (+leftOperand)+(+display);
    }
    if(currentOperation=='/'){
      return (+leftOperand)/(+display);
    }
    if(currentOperation=='*'){
      return (+leftOperand)*(+display);
    }
  }
  allBtns.forEach(function(el) {
    el.addEventListener('click', function() {

      if (Number.isInteger(+this.innerText)) {
        if (+display.innerText === 0) {
          display.innerText = this.innerText
        } else {
          display.innerText = display.innerText + this.innerText
        }
      }


      if (this.innerText.toLowerCase() === 'c') {
        display.innerText = 0;
        leftOperand = null;
        currentOperation = null;
      }

      if (this.innerText.charCodeAt(0) === 8592) {
        if (+display.innerText.length > 1) {
          display.innerText = display.innerText.slice(0, display.innerText.length-1)
        } else {
          display.innerText = 0
        }
      }

      if (this.innerText === '+' ||
          this.innerText === '-' ||
          this.innerText === '*' ||
          this.innerText === '/')
      {
        leftOperand = display.innerText;
        currentOperation = this.innerText;
        display.innerText = 0;
      }

      if (this.innerText === '=') {
        if (leftOperand) {
          let result =calculation(leftOperand,currentOperation,display.innerText)

          display.innerText = result;

          leftOperand = null;
          currentOperation = null;
        }
      }
    })
  })
})();