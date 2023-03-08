import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_URL = import.meta.env.VITE_API_URL;

export const apiSlice = createApi({
    reducerPath: 'api', // optional
    baseQuery: fetchBaseQuery({
        baseUrl: `${API_URL}`,
        // prepareHeaders: (headers, { getState }) => {
        //     const states = getState() as typeof State;
        //     const { users: { token } } = states;
        //     const isToken = token ? token : '';
        //     headers.set("x-admin-token", isToken);
        // }
    }),
    endpoints: builder => ({})
})