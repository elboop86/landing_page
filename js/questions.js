(function(){
    const titleQuestions = [...document.querySelectorAll('.questions__title')];
    
    titleQuestions.forEach(question =>{
        question.addEventListener('click', ()=>{
            let height = 0;
            let answer = question.nextElementSibling;

            if (answer.clientHeight === 0){
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;
        });
    });
})();

/*  Esta función hace que el elemento con la clase "questions__title" se expanda cuando se hace clic en él.
 Esto se hace mediante el uso de la propiedad "height" del elemento, que se establece en el valor de la propiedad "scrollHeight" del elemento.
 Esto hace que el elemento se expanda para mostrar todo su contenido.*/