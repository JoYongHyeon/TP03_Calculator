window.onload = ()=> 
{
    let btnEvent  = document.querySelectorAll('.numbers div');
    let btnLength = btnEvent.length;
    let btnNum;
  
    let inputValue = document.getElementById('input');

    for(var i=0; i < btnLength; i++)
    {
        btnEvent[i].addEventListener('click', ()=> 
        {
            // inputValue.innerHTML = this.innerText;      
            console.log(btnEvent[i].innerText);
        });
    }
}