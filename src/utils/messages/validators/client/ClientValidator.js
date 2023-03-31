export function clientValidator(name, phoneNumber, cpf) {
  return [
    validateClientName(name),
    validateClientPhoneNumber(phoneNumber),
    validateClientCpf(cpf),
  ];
}

function validateClientName(name) {
  return name == null || name == ""
    ? "O campo de Nome não pode ficar vazio."
    : "";
}

function validateClientPhoneNumber(phoneNumber) {
  return phoneNumber == null || phoneNumber == ""
    ? "O campo de Telefone não pode ficar vazio."
    : "";
}

function validateClientCpf(cpf) {
  return cpf == null || cpf == "" ? "O campo de Cpf não pode ficar vazio" : "";
}

export function verifyIfCanSendForm(name, phoneNumber, cpf) {
  let [nameError, phoneError, cpfError] = clientValidator(
    name,
    phoneNumber,
    cpf
  );
  return nameError == "" && phoneError == "" && cpfError == "";
}
