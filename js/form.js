document.addEventListener('DOMContentLoaded', function () {
  const formElem = document.querySelector('.form-feedback');
  let error = true;

  function validatePhone(phone) {
    let regex =
      /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    return regex.test(phone);
  }

  function validateEmail(email) {
    let regex =
      /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    return regex.test(email);
  }

  for (item of formElem) {
    if (item.matches('input')) {
      item.addEventListener('input', function (event) {
        const target = event.target;
        const parent = target.parentNode;
        if (parent.matches('.form-group')) {
          parent.classList.add('form-group-change');
          parent.classList.remove('form-group-checked');
          parent.classList.remove('form-group-error');
        }
      });

      item.addEventListener('click', function (event) {
        const target = event.target;
        const parent = target.parentNode;
        if (parent.matches('.form-group')) {
          parent.classList.add('form-group-change');
          parent.classList.remove('form-group-checked');
          parent.classList.remove('form-group-error');
        }
      });

      item.addEventListener('blur', function (event) {
        const target = event.target;
        const parent = target.parentNode;
        if (parent.matches('.form-group')) {
          parent.classList.remove('form-group-change');
        }

        /* Провверка на валидность */
        if ((target.type = 'tel')) {
          if (!validatePhone(target.value)) {
            if (parent.matches('.form-group')) {
              parent.classList.remove('form-group-checked');
              parent.classList.add('form-group-error');
              error = false;
            }
          } else {
            parent.classList.remove('form-group-error');
            parent.classList.add('form-group-checked');
            error = true;
          }
        }

        if ((target.type = 'email')) {
          if (!validateEmail(target.value)) {
            parent.classList.remove('form-group-checked');
            parent.classList.add('form-group-error');
            error = false;
          } else {
            parent.classList.remove('form-group-error');
            parent.classList.add('form-group-checked');
            error = true;
          }
        }

        if ((target.type = 'text')) {
          if (target.value < 2) {
            parent.classList.remove('form-group-checked');
            parent.classList.add('form-group-error');
            error = false;
          } else {
            parent.classList.remove('form-group-error');
            parent.classList.add('form-group-checked');
            error = true;
          }
        }
        console.dir(formElem.submit.disabled);

        const button = formElem.submit;

        if (error) {
          button.disabled = false;
        } else {
          button.disabled = true;
        }
      });
    }
  }
});
