export function CanCloseSerialNumbersForm(fields) {
  for (var i = 0; i < fields.length; i++) {
    if (fields[i] != "") {
      return false;
    }
  }
  return true;
}
