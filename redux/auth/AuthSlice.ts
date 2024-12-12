import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { User } from '@/types/types'
import { RootState } from '../store'

type LoginState = {
    user: User | null
    token: string | null
    message: string
}

const slice = createSlice({
    name: 'login',
    initialState: { user: null, token: null } as LoginState,
    reducers: {
        setCredentials: (
            state,
            {
                payload: { user, token },
            }: PayloadAction<{ user: User; token: string }>,
        ) => {
            state.user = user
            state.token = token
        },
    },
})

export const { setCredentials } = slice.actions

export default slice.reducer

export const selectCurrentUser = (state: RootState) => state.login.user
