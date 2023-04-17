export function CanCloseSerialNumbersForm(fields) {
  for (var i = 0; i < fields.length; i++) {
    if (fields[i] != "") {
      return false;
    }
  }
  return true;
}
export function VerifyIfCanSendSerialNumbersForm(serialNumbers){
  console.log(serialNumbers)
  for (var i = 0; i < serialNumbers.length; i++) {
    if (serialNumbers[i] == "") {
      console.log("serialNumbers: " ,serialNumbers[i])
      return false;
    }
  }
  return true;
}
export function createSerialNumbersToSend(serialNumbers){
  let serialNumbersToSend = "";
  for (var i = 0; i < serialNumbers.length; i++) {
    serialNumbersToSend += `${serialNumbers[i]};`;
  }
  return serialNumbersToSend;
}
