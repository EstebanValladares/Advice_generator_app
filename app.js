const BtonApi = document.querySelector('.Bton');

BtonApi.addEventListener('click', apiFunction);

function apiFunction() {
    const slip_id = Math.floor(Math.random() * 200) + 1;
    const url = `https://api.adviceslip.com/advice/${slip_id}`;
    fetch(url)
        .then((resp => resp.json()))
        .then(resultado => viewResult(resultado, slip_id)) 
}

function viewResult(datos, slip_id) {
    console.log(datos);
    const { advice } = datos.slip;
    const textApi = document.querySelector('.textDateApi');
    const textIdApi = document.querySelector('.numberDate');

    textApi.innerHTML = advice;
    textIdApi.innerHTML = 'ADVICE # ' + slip_id;
}