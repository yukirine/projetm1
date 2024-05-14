// ** Toolkit imports
import { configureStore } from '@reduxjs/toolkit'

// ** Reducers
import calendar from 'src/store/calendar'
import chat from 'src/store/chat'

export const store = configureStore({
  reducer: {
    calendar,
    chat
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})
