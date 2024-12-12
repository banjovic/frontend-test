import { LoginPayloadType, LoginResponseType, SignupPayloadType, SignupResponseType } from "@/types/types";
import { apiSlice } from "../apiSlice";
import toast from 'react-hot-toast';

export const authApiSlice = apiSlice.injectEndpoints({
    overrideExisting: true,
    endpoints: builder => ({
        signup: builder.mutation<SignupResponseType, SignupPayloadType>({
            query: (payload) => ({
                url: '/account/web',
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                },
                body: payload,
                // responseHandler: (response) => response.json(),
            }),
            transformErrorResponse: (err: any) => {
                if (err.status === "FETCH_ERROR") {
                    toast.error("Network Error");
                }
                else if (err.status === 401) {
                    toast.error(err.data.message);
                    localStorage.removeItem('frontend-interview-token');
                    // window.location.replace("/");
                }
                else if (err.status === 403) {
                    toast.error(err.data.message);
                    localStorage.removeItem('frontend-interview-token');
                    // window.location.replace("/");
                } else toast.error(err.data.message);
                return err;
            }
        }),
        login: builder.mutation<LoginResponseType, LoginPayloadType>({
            query: (credentials) => ({
                url: 'auth',
                method: "POST",
                body: credentials,
            }),
            transformResponse(response: LoginResponseType,) {
                if (response.data) {
                    localStorage.setItem('frontend-interview-user', JSON.stringify(response.data));
                    localStorage.setItem('frontend-interview-token', JSON.stringify(response.token));
                    // dispatch(setCredentials(data));

                }
                return response;
            },
            transformErrorResponse: (err: any) => {
                if (err.status === "FETCH_ERROR") {
                    toast.error("Network Error");
                }
                else if (err.status === 401) {
                    toast.error(err.data.message);
                    localStorage.removeItem('frontend-interview-token');
                    // window.location.replace("/");
                }
                else if (err.status === 403) {
                    toast.error(err.data.message);
                    localStorage.removeItem('frontend-interview-token');
                    // window.location.replace("/");
                } else toast.error(err.data.message);
                return err;
            }
        }),

        protected: builder.mutation<{ message: string }, void>({
            query: () => 'protected',
        }),
    })
})

export const {
    useSignupMutation,
    useLoginMutation,
    useProtectedMutation
} = authApiSlice
