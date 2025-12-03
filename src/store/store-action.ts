import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface storeAction {
  isOpen: boolean
}

const initialState: storeAction = {
  isOpen: false,
}

export const storeSlice = createSlice({
  name: 'storeAction',
  initialState,
  reducers: {
    toggle: (state, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload
    },
  },
})

export const { toggle } = storeSlice.actions

export default storeSlice.reducer
