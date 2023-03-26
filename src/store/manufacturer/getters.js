export const getters = {
    manufacturers(state){
        return state.manufacturers;
    },
    getHeaders(state){
        return state.headers;
    },
    manufacturerName(state){
        return state.manufacturerName;
    },
    getManufacturerMessages(state){
        return state.manufacturerMessages;
    },
    canSendManufacturerForm(state) {
        let canSend = true;
        for (const key in state.manufacturerMessages) {
          if (state.manufacturerMessages[key].length > 0) {
            canSend = false;
            break;
          }
        }
        return canSend;
      },
}
