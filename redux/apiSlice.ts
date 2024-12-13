import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_API_URL,
    prepareHeaders: (headers) => {
        if (typeof window !== 'undefined') {
            let token = localStorage.getItem("frontend-interview-token");
            if (token) {
                try {
                    token = JSON.parse(token);
                    // eslint-disable-next-line @typescript-eslint/no-unused-vars
                } catch (e) { }
                headers.set('authorization', `Bearer ${token}`);
            }
        }
        return headers;
    },
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 3 });

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: baseQueryWithRetry,
    tagTypes: ['Auth', 'User'],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    endpoints: builder => ({})
})