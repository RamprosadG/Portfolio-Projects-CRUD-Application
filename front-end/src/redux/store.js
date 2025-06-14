import { configureStore } from '@reduxjs/toolkit';
import projectsReducer from "./features/projects/projectsSlice";

const store = configureStore({
  reducer: {
    projects: projectsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
