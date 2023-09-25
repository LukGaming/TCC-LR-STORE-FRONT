import { test, expect } from "vitest";
import {
  clientValidator,
  validateClientName,
  validateClientPhoneNumber,
  validateClientCpf,
  verifyIfCanSendClientForm,
} from "../src/utils/messages/validators/client/ClientValidator";

test("validateClientName - should return error message for empty name", () => {
  expect(validateClientName(null)).toBe(
    "O campo de Nome não pode ficar vazio."
  );
  expect(validateClientName("")).toBe("O campo de Nome não pode ficar vazio.");
  expect(validateClientName("John Doe")).toBe("");
});

test("validateClientPhoneNumber - should return error message for empty phone number", () => {
  expect(validateClientPhoneNumber(null)).toBe(
    "O campo de Telefone não pode ficar vazio."
  );
  expect(validateClientPhoneNumber("")).toBe(
    "O campo de Telefone não pode ficar vazio."
  );
  expect(validateClientPhoneNumber("1234567890")).toBe("");
});

test("validateClientCpf - should return error messages for invalid CPF", () => {
  expect(validateClientCpf(null)).toBe("O campo de Cpf não pode ficar vazio");
});

test("clientValidator - should validate all fields", () => {
  const [nameError, phoneError, cpfError] = clientValidator(null, null, null);
  expect(nameError).toBe("O campo de Nome não pode ficar vazio.");
  expect(phoneError).toBe("O campo de Telefone não pode ficar vazio.");
  expect(cpfError).toBe("O campo de Cpf não pode ficar vazio");

  const [nameError2, phoneError2, cpfError2] = clientValidator(
    "John Doe",
    "1234567890",
    "123.456.78901"
  );
  expect(nameError2).toBe("");
  expect(phoneError2).toBe("");
  expect(cpfError2).toBe("");
});

test("verifyIfCanSendClientForm - should determine if the form can be sent", () => {
  expect(verifyIfCanSendClientForm(null, null, null)).toBe(false);
  expect(verifyIfCanSendClientForm("", "", "")).toBe(false);
  expect(
    verifyIfCanSendClientForm("John Doe", "1234567890", "123.456.78901")
  ).toBe(true);
});
