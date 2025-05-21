import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../../libs/axiosInstance";

const initialState = {
  data: [],
  isLoading: false,
};

export const fetchProjects = createAsyncThunk(
  "projects/fetchProjects",
  async (search = "") => {
    const response = await axiosInstance.get(`/project/get?search=${search}`);
    return response.data.data;
  }
);

export const createProject = createAsyncThunk(
  "projects/createProject",
  async (data) => {
    const response = await axiosInstance.post(`/project/create`, data);
    return response.data.data;
  }
);

export const updateProject = createAsyncThunk(
  "projects/updateProject",
  async ({ id, data }) => {
    const response = await axiosInstance.put(`/project/update/${id}`, data);
    return response.data.data;
  }
);

export const deleteProject = createAsyncThunk(
  "projects/deleteProject",
  async (id) => {
    const response = await axiosInstance.delete(`/project/delete/${id}`);
    return response.data.data;
  }
);

// Slice
const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch
      .addCase(fetchProjects.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProjects.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchProjects.rejected, (state) => {
        state.isLoading = false;
      })

      // Create
      .addCase(createProject.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createProject.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data.push(action.payload);
      })
      .addCase(createProject.rejected, (state) => {
        state.isLoading = false;
      })

      // Update
      .addCase(updateProject.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateProject.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.data.findIndex((p) => p.id === action.payload.id);
        if (index !== -1) {
          state.data[index] = action.payload;
        }
      })
      .addCase(updateProject.rejected, (state) => {
        state.isLoading = false;
      })

      // Delete
      .addCase(deleteProject.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteProject.fulfilled, (state, action) => {
        state.isLoading = false;
        state.data = state.data.filter((p) => p.id !== action.payload.id);
      })
      .addCase(deleteProject.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export default projectsSlice.reducer;
