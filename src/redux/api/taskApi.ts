import { baseApi } from './baseApi';

const taskApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createTask: build.mutation({
      query: (data) => ({
        url: `/tasks`,
        method: 'POST',
        data: data,
      }),
      invalidatesTags: ['task'],
    }),

    getAllTasks: build.query({
      query: () => ({
        url: '/tasks',
        method: 'GET',
      }),
      providesTags: ['task'],
    }),

    getTaskById: build.query({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: 'GET',
      }),
      providesTags: ['task'],
    }),

    updateTask: build.mutation({
      query: (data) => ({
        url: `/tasks/${data.id}`,
        method: 'PATCH',
        data: data.body,
      }),
      invalidatesTags: ['task'],
    }),
    deleteTask: build.mutation({
      query: (id) => ({
        url: `tasks/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['task'],
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreateTaskMutation,
  useGetAllTasksQuery,
  useGetTaskByIdQuery,
  useDeleteTaskMutation,
  useUpdateTaskMutation,
} = taskApi;
