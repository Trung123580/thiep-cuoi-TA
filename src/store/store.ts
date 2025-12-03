import { configureStore } from '@reduxjs/toolkit'
import storeAction from './store-action'

export const store = configureStore({
  reducer: {
    storeAction: storeAction,
  },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store
