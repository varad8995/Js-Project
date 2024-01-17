const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function name(params) {
    console.log(params);
    params.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id == 'grey'){
            body.style.backgroundColor=e.target.id;
        }else if(e.target.id == 'white'){
            body.style.backgroundColor=e.target.id
        }else if(e.target.id == 'blue'){
            body.style.backgroundColor=e.target.id
        }else if(e.target.id == 'yellow'){
            body.style.backgroundColor=e.target.id
        }
    })
})