window.onload = ()=> 
{
    // 0~9, ., C 버튼 이벤트
    let btnEvent  = document.querySelectorAll('.numbers div');
    let btnLength = btnEvent.length;

    // input 출력 창
    let inputBox  = document.getElementById('input');

    // +, -, x, / 버튼 이벤트
    let btnOperators = document.querySelectorAll('.operators div');
    let btnOperatorsLength = btnOperators.length;

    // = 버튼 이벤트
    let resultBtn = document.getElementById('result');

    // 0~9, ., C 버튼 클릭 이벤트 추가
    for(var i=0; i < btnLength; i++)
    {
        btnEvent[i].addEventListener("click", (e)=> 
        {
            if(e.target.id === 'clear')
            {
                inputBox.innerHTML = "";
            }else{
                inputBox.innerHTML += e.target.innerHTML;
            }
        });
    }

    //  +, -, x, / 버튼 클릭 이벤트 추가
    for(var i=0; i < btnOperatorsLength; i++)
    {
        btnOperators[i].addEventListener("click", (e)=> 
        {   
            var inputBoxValue    = inputBox.innerHTML;
            var inputBoxLastChar = inputBoxValue[inputBoxValue.length - 1];
           
            if(inputBoxLastChar === '+' || 
               inputBoxLastChar === '-' || 
               inputBoxLastChar === '×' || 
               inputBoxLastChar === '÷')
               {
                var newString = inputBoxValue.substring(0, inputBoxValue.length - 1) + e.target.innerHTML;
                inputBox.innerHTML = newString;       
               }
            else if(inputBoxValue.length == 0)
            {
                console.log('숫자부터 입력하세요.');
            }
            else{
                inputBox.innerHTML += e.target.innerHTML;
            }
        });
    }

    // = 버튼 클릭 이벤트
    resultBtn.addEventListener("click", (e)=> 
    {
        var inputString = inputBox.innerHTML;
        // ex) numbers = ["1", "2,", "3," ",4"];
        var numbers     = inputString.split(/\+|\-|\×|\÷/g);
        // ex) operators = ["+", "-", "x", "÷"];
        var operators   = inputString.replace(/[0-9]|\./g, "").split("");
        
//      var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
//      var arr1 = arr.splice(5, 0, 'add');
//      console.log(arr); // [1, 2, 3, 4, 5, "add", 6, 7, 8, 9, 10, 11, 12]
//      console.log(arr1); // []
        // dleteCount가 0이거나 0보다 작은 수이면 어떤 요소도 삭제 되지않는다.

        var divide   = operators.indexOf("÷");
       while(divide != -1)
        {
            //  ex) 85-95÷5+7 일 경우   [85,95,5,7] 에서 ÷의 인덱스 번호 95 부터 2개의 요소를 삭제(95와 5 사이)
            //      그 자리에 95÷5 의 값을 넣는다. 이 과정을 반복한다.            
            numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
            // 여기도 마찬가지로 ÷ 를 썻으니  ÷를 배열에서 제거 한다.
            // ex) [-,÷,+,] 1번쨰 인덱스인 ÷를 제거
            operators.splice(divide, 1);
        }
        var multiply = operators.indexOf("×");
        while (multiply != -1) 
        {
            numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
            operators.splice(multiply, 1);
            multiply = operators.indexOf("×");
        }

        var subtract = operators.indexOf("-");
        while (subtract != -1) 
        {
            numbers.splice(subtract, 2, numbers[subtract] - numbers[subtract + 1]);
            operators.splice(subtract, 1);
            subtract = operators.indexOf("-");
        }

        var add = operators.indexOf("+");
        while (add != -1) 
        {
            numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
            operators.splice(add, 1);
            add = operators.indexOf("+");
        }
        // 최종 값
        inputBox.innerHTML = numbers[0];
    });
}