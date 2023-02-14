import {configureStore} from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'
import currencyReduser from './redusers/currency.slice'
import currencyAddReduser from './redusers/currencyAdd.slice'
 
 
export const store = configureStore({
  reducer: {
    currency: currencyReduser,
    currencyAdd: currencyAddReduser
  },
  // middleware: getDefaultMiddleware => getDefaultMiddleware().concat(ratesApi.middleware)
})

setupListeners(store.dispatch)

// export type RootState = ReturnType<typeof store.getState>