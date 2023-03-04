import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query';


const initialState = {

}

const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_DEV_URL,
    }),
    endpoints: (builder) => {

    }
})

export default apiSlice;