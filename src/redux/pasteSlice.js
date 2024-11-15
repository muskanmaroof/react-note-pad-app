import { createSlice } from '@reduxjs/toolkit'
import toast from 'react-hot-toast';

const initialState = {
  pastes : localStorage.getItem("pastes") ? 
  JSON.parse(localStorage.getItem("pastes")) : []
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPastes: (state , action) => {
      state.pastes.push(action.payload) // => action.payload is actuall a paste that we send to payload using dispatch 
      localStorage.setItem("pastes", JSON.stringify(state.pastes))
      toast.success("Paste added successfully")
    },
    updateToPaste: (state,action) => {
      const paste = action.payload;
      const index = state.pastes.findIndex((item) => item._id === paste._id);
      if (index !== -1) {
        state.pastes[index] = paste // => action.payload is the updated paste that we send to payload using dispatch
        localStorage.setItem("pastes", JSON.stringify(state.pastes))
        toast.success("Paste updated successfully")
      }
     
      
    },
    resetAllPastes: (state, action) => {
      state.pastes = [] // => clears all pastes from the state
      localStorage.setItem("pastes", JSON.stringify(state.pastes))
      toast.success("All pastes removed successfully")
    },
    removeFromPastes: (state,action) => {
      console.log(action.payload)  // => action.payload is the index of paste that we want to remove
      state.pastes.splice(action.payload, 1) // => action.payload is the index of paste that we want to remove
      localStorage.setItem("pastes", JSON.stringify(state.pastes))
      toast.success("Paste removed successfully")

    }
  },
})

// Action creators are generated for each case reducer function
export const { addToPastes, updateToPaste, resetAllPastes,removeFromPastes } = pasteSlice.actions

export default pasteSlice.reducer