import toast from "react-hot-toast";

import { apiSlice, } from "../apiSlice";
import { SignupResponseType } from "@/types/types";

export const dashboardSlice = apiSlice.injectEndpoints({
    overrideExisting: true,
    endpoints: (builder) => ({
        getUser: builder.query<SignupResponseType, { user_id: string }>({
            query: ({ user_id }) => ({ url: `/account/${user_id}`, method: "GET" }),
            transformErrorResponse: (err: any) => {
                if (err.status === "FETCH_ERROR") {
                    toast.error("Network Error");
                }
                if (err.status === 404 && !err?.data?.statusMessage) {
                    toast.error(err.data.message);
                } else if (err.status === 500) {
                    toast.error(err.data.message);
                } else if (err.status === 401) {
                    toast.error(err.data.message);
                    localStorage.removeItem("frontend-interview-token");
                    window.location.replace("/");
                } else toast.error(err.data.message);
                return err;
            },
        }),
    }),
});

export const {
    useGetUserQuery,
} = dashboardSlice;
