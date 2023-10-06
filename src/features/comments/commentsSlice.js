import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  async () => {
    const response = [
      {
        id: 1,
        course: {
          id: 101,
          title: "Introducción a la programación",
        },
        user: {
          name: "user123",
          email: "user123@gmail.com",
        },
        status: "PENDIENTE",
        content: "Por favor, inscríbeme en el curso.",
      },
      {
        id: 2,
        course: {
          id: 102,
          title: "Fundamentos de desarrollo web",
        },
        user: {
          name: "user456",
          email: "user123@gmail.com",
        },
        status: "RECIBIDO",
        content: "Completé el curso!",
      },
      {
        id: 3,
        course: {
          id: 103,
          title: "Fundamentos de Data Science",
        },
        user: {
          name: "user789",
          email: "user789@gmail.com",
        },
        status: "CANCELADO",
        content: "Necesito darme de baja",
      },
      {
        id: 4,
        course: {
          id: 104,
          title: "JavaScript avanzado",
        },
        user: {
          name: "user101",
          email: "user101@gmail.com",
        },
        status: "PENDIENTE",
        content: "Cuándo comienza el curso?",
      },
      {
        id: 5,
        course: {
          id: 105,
          title: "Introducción a Machine Learning",
        },
        user: {
          name: "user202",
          email: "user202@gmail.com",
        },
        status: "RECIBIDO",
        content: "Tengo algunas dudas sobre lo aprendido...",
      },
      {
        id: 6,
        course: {
          id: 106,
          title: "Diseño de Bases de Datos",
        },
        user: {
          name: "user303",
          email: "user303@gmail.com",
        },
        status: "PENDIENTE",
        content: "Necesito ayuda, no puedo acceder.",
      },
      {
        id: 7,
        course: {
          id: 107,
          title: "Fundamentos del Diseño Gráfico",
        },
        user: {
          name: "user404",
          email: "user404@gmail.com",
        },
        status: "CANCELADO",
        content: "Me arrepentí, ya no deseo realizar este curso.",
      },
      {
        id: 8,
        course: {
          id: 108,
          title: "Introducción a la Ciberseguridad",
        },
        user: {
          name: "user505",
          email: "user505@gmail.com",
        },
        status: "RECIBIDO",
        content: "Hay una segunda parte?",
      },
      {
        id: 9,
        course: {
          id: 109,
          title: "Desarrollo Mobile",
        },
        user: {
          name: "user606",
          email: "user606@gmail.com",
        },
        status: "PENDIENTE",
        content: "Puedo cambiarme de turno?",
      },
      {
        id: 10,
        course: {
          id: 110,
          title: "Inteligencia Artificial",
        },
        user: {
          name: "user707",
          email: "user707@gmail.com",
        },
        status: "RECIBIDO",
        content: "Tengo problemas para ver el material del curso",
      },
      {
        id: 11,
        course: {
          id: 111,
          title: "Project Management 101",
        },
        user: {
          name: "user808",
          email: "user808@gmail.com",
        },
        status: "CANCELADO",
        content: "Me asignaron otro curso",
      },
      {
        id: 12,
        course: {
          id: 112,
          title: "Estrategias de Digital Marketing",
        },
        user: {
          name: "user909",
          email: "user909@gmail.com",
        },
        status: "PENDIENTE",
        content: "Cuándo es la próxima clase?",
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
        status: "RECIBIDO",
        content: "Completé la certificación!",
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
        status: "PENDIENTE",
        content: "Necesito ayuda!",
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
        status: "CANCELADO",
        content: "Tengo un problema con los horarios",
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
