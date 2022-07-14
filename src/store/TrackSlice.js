import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import database from '@react-native-firebase/database';
import { Alert } from 'react-native';

export const FatchTracks = createAsyncThunk(
    'tracks/FatchTracks',
    async ({ trueLoading, falseLoading }) => {
        try {
            trueLoading()
            const TrackData = await database()
                .ref('/tracks/')
                .once('value')

            var TracksArr = []
            TrackData.forEach((item) => {
                TracksArr.push(item.val())
            })
            // console.log(TracksArr)
        } catch (error) {
            Alert.alert(message.error)
        }
        finally {
            falseLoading()
        }

        return TracksArr
    }
)



const initialState = {
    tracksData: []
}


export const TrackSlice = createSlice({
    name: 'tracks',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(FatchTracks.fulfilled, (state, action) => {
           state.tracksData = action.payload
        })
    },
})

// Action creators are generated for each case reducer function
export const { } = TrackSlice.actions

export default TrackSlice.reducer