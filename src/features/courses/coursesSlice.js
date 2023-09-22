import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    name: "Introduction to Web Development",
    category: "Web Development",
    duration: 8,
    frequency: "Weekly",
    author: "John Doe",
    price: 99.99,
    image: "course1.jpg",
    description:
      "Learn the basics of web development and create your first website.",
    requirements:
      "No prior knowledge required. A computer and internet access are needed.",
  },
  {
    id: 2,
    name: "Python Programming for Beginners",
    category: "Programming",
    duration: 10,
    frequency: "Weekly",
    author: "Jane Smith",
    price: 149.99,
    image: "course2.jpg",
    description:
      "Start your programming journey with Python and build simple applications.",
    requirements: "No prior programming experience needed.",
  },
  {
    id: 3,
    name: "Digital Marketing Fundamentals",
    category: "Marketing",
    duration: 6,
    frequency: "Monthly",
    author: "Emily Johnson",
    price: 79.99,
    image: "course3.jpg",
    description:
      "Explore the world of digital marketing and grow your online presence.",
    requirements: "Basic computer skills are required.",
  },
];

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    courseAdded(state, action) {
      state.push(action.payload);
    },
    courseUpdated(state, action) {
      const { id, name, description } = action.payload;
      const existingCourse = state.find((course) => course.id === id);
      if (existingCourse) {
        existingCourse.name = name;
        existingCourse.description = description;
      }
    },
  },
});

export const { courseAdded, courseUpdated } = coursesSlice.actions;
export default coursesSlice.reducer;
