export const mutations = {
    setManufacturers(state, payload){
        state.manufacturers = payload;
    },
    setManufacturerName(state, payload){
        state.manufacturerName = payload;
    },
    setErrorMessages(state, payload){

        state.manufacturerMessages[payload.part] = payload.value
    },
    addNewManufacturer(state, payload){
        state.manufacturers.push(payload)
    }
    
};
