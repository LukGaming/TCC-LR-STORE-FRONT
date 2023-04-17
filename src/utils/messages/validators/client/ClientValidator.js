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
  // console.log(cpf.lenght.Kkle)
  cpf = cpf.replaceAll("-", "")
  cpf = cpf.replaceAll(".", "")
  console.log(cpf)
  return cpf == null || cpf == ""
    ? "O campo de Cpf não pode ficar vazio"
    : cpf.length != 11
    ? "O cpf deve conter 11 Dígitos"
    : "";

  //removo '/'
  //.
}

export function verifyIfCanSendClientForm(name, phoneNumber, cpf) {
  let [nameError, phoneError, cpfError] = clientValidator(
    name,
    phoneNumber,
    cpf
  );
  return nameError == "" && phoneError == "" && cpfError == "";
}
