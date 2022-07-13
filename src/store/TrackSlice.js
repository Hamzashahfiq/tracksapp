import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import database from '@react-native-firebase/database';
import { Alert } from 'react-native';

export const FatchTracks = createAsyncThunk(
    'tracks/FatchTracks',
    async () => {
        try {
         const TrackData = await database()
                .ref('/tracks/')
                .once('value')

            const TracksArr = []    
                TrackData.forEach((item) => {
                    TracksArr.push(item.val())
                })
            console.log(TracksArr)
        } catch (error) {
            Alert.alert(message.error)
        }

        return null
    }
)



const initialState = []


export const TrackSlice = createSlice({
    name: 'tracks',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(FatchTracks.fulfilled, (state, action) => {

        })
    },
})

// Action creators are generated for each case reducer function
export const { } = TrackSlice.actions

export default TrackSlice.reducer