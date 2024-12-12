import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const BaseUrl = process.env.NEXT_PUBLIC_API_URL;

export const baseQuery = fetchBaseQuery({
    baseUrl: BaseUrl,
    prepareHeaders: (headers) => {
        const token = localStorage.getItem("jointly-userToken");
        if (token) {
            headers.set('authorization', `Bearer ${token}`)
        }
        return headers
    },
    responseHandler: async (response: any) => {
        try {
            if (response.status === 401 || response.status === 403) {
                const data = await response.json();
                console.log(data, "data.message");
            }
            // Return the serialized data instead of the whole Response object
            return response.ok ? await response.json() : Promise.reject(response);
        } catch (error) {
            console.error("Error parsing response JSON:", error);
            // Handle the error as necessary
            throw error;
        }
    },
});