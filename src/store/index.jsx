import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'
import currencyReduser from './redusers/currency.slice'
 
 
export const store = configureStore({
  reducer: {
 
    currency: currencyReduser
  },
  // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(ratesApi.middleware)
})

setupListeners(store.dispatch)

// export type RootState = ReturnType<typeof store.getState>