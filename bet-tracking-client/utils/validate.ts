interface form {
  [key: string]: any
}

/**
 * @param {object} form - form to be validated
 * @param {object} validate - what form is supposed to be
 */
export function validateForm(form: form, validate: form) {
  const inputs = Object.keys(form);
  let valid = true;
  inputs.forEach((input: string) => {
    if(typeof form[input] !== validate[input]) {
      valid = false;
    }
  });
  return valid;
}
