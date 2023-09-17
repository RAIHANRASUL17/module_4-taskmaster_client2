import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const baseApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:7000" }),
    tagTypes: ["Tasks"],
    endpoints: () =>({

    }),
});

// export const { useGetTasksQuery, useUpdateTaskMutation, useAddTaskMutation } = baseApi; has been moved in tasksApi component
export default baseApi;

