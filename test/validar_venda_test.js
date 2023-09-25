import { test, expect } from "vitest";
import {
  salesValidator,
  validateProducts,
  validateSelectedPaymentMethod,
  validateSelectedClient,
  validateSalesType,
  validateSaleDate,
  canSendSaleForm,
} from "../src/utils/messages/validators/sales/SalesValidator";

test("validateProducts - should return error message for empty product list", () => {
  expect(validateProducts(null)).toBe(
    "A lista de produtos não pode ficar vazia."
  );
  expect(validateProducts([])).toBe(
    "A lista de produtos não pode ficar vazia."
  );
  expect(validateProducts([{}])).toBe("");
});

test("validateSelectedPaymentMethod - should return error message for empty payment method", () => {
  expect(validateSelectedPaymentMethod(null)).toBe(
    "Selecione um Método de Pagamento."
  );
  expect(validateSelectedPaymentMethod("")).toBe(
    "Selecione um Método de Pagamento."
  );
  expect(validateSelectedPaymentMethod("Credit Card")).toBe("");
});

test("validateSelectedClient - should return error message for empty selected client", () => {
  expect(validateSelectedClient(null)).toBe("Selecione um Cliente.");
  expect(validateSelectedClient("")).toBe("Selecione um Cliente.");
  expect(validateSelectedClient("John Doe")).toBe("");
});

test("validateSalesType - should return error message for empty sales type", () => {
  expect(validateSalesType(null)).toBe("Selecione um tipo de Venda.");
  expect(validateSalesType("")).toBe("Selecione um tipo de Venda.");
  expect(validateSalesType("Online")).toBe("");
});

test("validateSaleDate - should return error message for empty sale date", () => {
  expect(validateSaleDate(null)).toBe("Selecione uma Data.");
  expect(validateSaleDate("")).toBe("Selecione uma Data.");
  expect(validateSaleDate("2023-09-25")).toBe("");
});

test("salesValidator - should validate all fields", () => {
  const [
    productsError,
    paymentMethodError,
    clientError,
    salesTypeError,
    saleDateError,
  ] = salesValidator([], null, null, null, null);
  expect(productsError).toBe("A lista de produtos não pode ficar vazia.");
  expect(paymentMethodError).toBe("Selecione um Método de Pagamento.");
  expect(clientError).toBe("Selecione um Cliente.");
  expect(salesTypeError).toBe("Selecione um tipo de Venda.");
  expect(saleDateError).toBe("Selecione uma Data.");

  const [
    productsError2,
    paymentMethodError2,
    clientError2,
    salesTypeError2,
    saleDateError2,
  ] = salesValidator([{}], "John Doe", "Online", "2023-09-25", "Credit Card");
  expect(productsError2).toBe("");
  expect(paymentMethodError2).toBe("");
  expect(clientError2).toBe("");
  expect(salesTypeError2).toBe("");
  expect(saleDateError2).toBe("");
});

test("canSendSaleForm - should determine if the form can be sent", () => {
  expect(canSendSaleForm([], null, null, null)).toBe(false);
  expect(canSendSaleForm([{}], "John Doe", "Online", "2023-09-25")).toBe(true);
});
