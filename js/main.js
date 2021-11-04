window.onload = function () {

    let inputs_form = document.querySelectorAll('.form__input');
    let submit = document.querySelector('form');
    let form_message = document.querySelector('.form__valid');


   submit.onsubmit = function (e){

       for (let i=0; i<inputs_form.length; i++) {
           form_message.innerHTML = "Пожалуйста. Заполните поля формы";
            if (inputs_form[i].value ==='') {
                inputs_form[i].classList.add('err');
                e.preventDefault(); /*остановить отправку формы*/
            } else {
                inputs_form[i].classList.remove('err');
                /*form_message.innerHTML = "Форма отправлена";*/
            }

       }



    }


}