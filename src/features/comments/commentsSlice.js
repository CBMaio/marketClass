import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const fetchComments = createAsyncThunk(
  "comments/fetchNotifications",
  async () => {
    const response = [
      {
        id: 1,
        course: {
          id: 101,
          title: "Introduction to Programming",
        },
        user: {
          name: "user123",
          email: "user123@gmail.com",
        },
        status: "PENDING",
        content: "Please enroll me in the course.",
      },
      {
        id: 2,
        course: {
          id: 102,
          title: "Web Development Fundamentals",
        },
        user: {
          name: "user456",
          email: "user123@gmail.com",
        },
        status: "RECEIVED",
        content: "I have completed the assignment.",
      },
      {
        id: 3,
        course: {
          id: 103,
          title: "Data Science Essentials",
        },
        user: {
          name: "user789",
          email: "user789@gmail.com",
        },
        status: "CANCELLED",
        content: "I need to withdraw from the course.",
      },
      {
        id: 4,
        course: {
          id: 104,
          title: "Advanced JavaScript",
        },
        user: {
          name: "user101",
          email: "user101@gmail.com",
        },
        status: "PENDING",
        content: "When does the course start?",
      },
      {
        id: 5,
        course: {
          id: 105,
          title: "Machine Learning Basics",
        },
        user: {
          name: "user202",
          email: "user202@gmail.com",
        },
        status: "RECEIVED",
        content: "I have a question about the lecture.",
      },
      {
        id: 6,
        course: {
          id: 106,
          title: "Database Design",
        },
        user: {
          name: "user303",
          email: "user303@gmail.com",
        },
        status: "PENDING",
        content: "I can't access the course materials.",
      },
      {
        id: 7,
        course: {
          id: 107,
          title: "Graphic Design Fundamentals",
        },
        user: {
          name: "user404",
          email: "user404@gmail.com",
        },
        status: "CANCELLED",
        content: "I've changed my mind about this course.",
      },
      {
        id: 8,
        course: {
          id: 108,
          title: "Cybersecurity Basics",
        },
        user: {
          name: "user505",
          email: "user505@gmail.com",
        },
        status: "RECEIVED",
        content: "I need an extension for the assignment.",
      },
      {
        id: 9,
        course: {
          id: 109,
          title: "Mobile App Development",
        },
        user: {
          name: "user606",
          email: "user606@gmail.com",
        },
        status: "PENDING",
        content: "Can I switch to the evening class?",
      },
      {
        id: 10,
        course: {
          id: 110,
          title: "Artificial Intelligence",
        },
        user: {
          name: "user707",
          email: "user707@gmail.com",
        },
        status: "RECEIVED",
        content: "I'm having trouble with the course materials.",
      },
      {
        id: 11,
        course: {
          id: 111,
          title: "Project Management",
        },
        user: {
          name: "user808",
          email: "user808@gmail.com",
        },
        status: "CANCELLED",
        content: "I've been assigned to a different project.",
      },
      {
        id: 12,
        course: {
          id: 112,
          title: "Digital Marketing Strategies",
        },
        user: {
          name: "user909",
          email: "user909@gmail.com",
        },
        status: "PENDING",
        content: "When is the next lecture?",
      },
      {
        id: 13,
        course: {
          id: 113,
          title: "Ethical Hacking",
        },
        user: {
          name: "user010",
          email: "user010@gmail.com",
        },
        status: "RECEIVED",
        content: "I've completed the certification exam.",
      },
      {
        id: 14,
        course: {
          id: 114,
          title: "UI/UX Design",
        },
        user: {
          name: "user111",
          email: "user111@gmail.com",
        },
        status: "PENDING",
        content: "I need assistance with my project.",
      },
      {
        id: 15,
        course: {
          id: 115,
          title: "Data Analytics",
        },
        user: {
          name: "user212",
          email: "user212@gmail.com",
        },
        status: "CANCELLED",
        content: "I have a scheduling conflict.",
      },
    ];
    return response;
  }
);

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchComments.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = state.data.concat(action.payload);
      });
  },
});

export default commentsSlice.reducer;

export const selectAllComments = (state) => state.comments.data;
