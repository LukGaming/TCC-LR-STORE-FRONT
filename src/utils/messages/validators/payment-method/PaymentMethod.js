export function paymentMethodValidator(paymentMethodName) {
  return [validatePaymentMethodName(paymentMethodName)];
}

export function validatePaymentMethodName(paymentMethodName) {
  return paymentMethodName == "" || paymentMethodName == null
    ? "O método de pagamento não pode ficar vazio."
    : "";
}

export function verifyIfCanSendPaymentMethodForm(paymentMethodName) {
  const [paymentMethodNameError] = paymentMethodValidator(paymentMethodName);
  return paymentMethodNameError == "";
}
