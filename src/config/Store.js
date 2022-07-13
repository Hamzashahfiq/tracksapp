import { configureStore } from '@reduxjs/toolkit'
import TrackSlice from '../store/TrackSlice'

export const Store = configureStore({
  reducer: {
    Tracks: TrackSlice,
  },
})
