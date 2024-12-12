import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { User } from '@/types/types'
import { RootState } from '../store'

type LoginState = {
    data: User | null
    token: string | null
    message: string
    success: boolean

}

const slice = createSlice({
    name: 'login',
    initialState: {
        data: null,
        token: null,
        success: false,
        message: '',
    } as LoginState,
    reducers: {
        setUserCredentials: (
            state,
            {
                payload: { data, token },
            }: PayloadAction<{ data: User; token: string }>,
        ) => {
            state.data = data
            state.token = token
        },
    },
})

export const { setUserCredentials } = slice.actions

export default slice.reducer

export const selectCurrentUser = (state: RootState) => state.login.data
