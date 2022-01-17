window.onload = ()=> 
{
    // 0~9, ., C 버튼 이벤트
    let btnEvent  = document.querySelectorAll('.numbers div');
    let btnLength = btnEvent.length;

    // input 출력 창
    let inputBox  = document.querySelector('#input');

    // +, -, x, / 버튼 이벤트
    let btnOperators = document.querySelectorAll('.operators div');
    let btnOperatorsLength = btnOperators.length;

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
               inputBoxLastChar === 'x' || 
               inputBoxLastChar === '÷')
               {
                // var newString = inputBoxValue.substring(0, inputBoxValue.length - 1) + e.target.innerHTML;
                // input.innerHTML = newString;
               }

            inputBox.innerHTML += e.target.innerHTML;
        });
    }
}