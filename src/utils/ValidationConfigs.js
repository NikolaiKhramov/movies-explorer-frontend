const usernameValidation = {
  pattern: "[а-яА-ЯёЁa-zA-Z -]+$",
  message: 'Используются недопустимые символы. Имя может содержать кириллицу, латиницу, дефис и пробел.',
}

const emailValidation = {
  pattern: "[-\\w.]+@([A-z0-9][-A-z0-9]+\\.)+[A-z]{2,4}$",
  message: 'Некорректный формат электронной почты.'
}

export { usernameValidation, emailValidation };
