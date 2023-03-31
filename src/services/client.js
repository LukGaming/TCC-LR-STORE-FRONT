import $http from "@/plugins/axios";

export async function createClient(clientName, clientPhoneNumber, clientCpf) {
  var formData = new FormData();
  formData.append("full_name", clientName);
  formData.append("phone_number", clientPhoneNumber);
  formData.append("cpf", clientCpf);

  var resposta = await $http.post("client", formData);
  console.log(resposta);
  if (resposta.status == 201) {
    return resposta.data;
  }
  throw new Error(resposta.data);
}
