(function() {
    const sliders = [...document.querySelectorAll('.testimony__body')];
    const buttonNext = document.querySelector('#next');
    const buttonBefore = document.querySelector('#before');
    
    let value;

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });
    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition = (add)=>{
        const currentTestimony = document.querySelector('.testimony__body--show').dataset.id;
        value = Number(currentTestimony);
        value+= add;

        sliders[Number(currentTestimony)-1].classList.remove('testimony__body--show');
        if (value === sliders.length+1 || value === 0) {
                value = value === 0 ? sliders.length : 1;
        }
        sliders[value-1].classList.add('testimony__body--show');
    }
}) ();

/*
Esta función crea un carrusel de testimonios. El carrusel tiene tres testimonios, y el usuario puede desplazarse por ellos haciendo clic en los botones
 "Siguiente" y "Anterior". La función también utiliza la propiedad "dataset" del elemento para almacenar el
 ID del testimonio actual. Esto permite que la función cambie el testimonio que se muestra cuando el usuario hace clic en los botones "Siguiente" y "Anterior".
*/ 