export function clientValidator(name, phoneNumber, cpf) {
  return [
    validateClientName(name),
    validateClientPhoneNumber(phoneNumber),
    validateClientCpf(cpf),
  ];
}

export function validateClientName(name) {
  return name == null || name == ""
    ? "O campo de Nome não pode ficar vazio."
    : "";
}

export function validateClientPhoneNumber(phoneNumber) {
  return phoneNumber == null || phoneNumber == ""
    ? "O campo de Telefone não pode ficar vazio."
    : "";
}

export function validateClientCpf(cpf) {
  if (cpf === null) {
    return "O campo de Cpf não pode ficar vazio";
  }

  // Check for other falsy values if needed (e.g., an empty string)
  if (!cpf) {
    return "O campo de Cpf não pode ficar vazio";
  }

  // Remove dashes and periods from the CPF
  cpf = cpf.replaceAll("-", "").replaceAll(".", "");

  // Check if the resulting CPF has 11 digits
  if (cpf.length !== 11) {
    return "O cpf deve conter 11 Dígitos";
  }

  // Additional validation logic for CPF can be added here

  // If no validation errors were found, return an empty string
  return "";
}

export function verifyIfCanSendClientForm(name, phoneNumber, cpf) {
  let [nameError, phoneError, cpfError] = clientValidator(
    name,
    phoneNumber,
    cpf
  );
  return nameError == "" && phoneError == "" && cpfError == "";
}
