import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { FETCH_STATUS } from "../../utils";

const { LOADING, IDLE, SUCCEEDED, FAILED } = FETCH_STATUS;

const initialState = {
  data: [],
  status: IDLE,
  error: null,
};

export const fetchAuthors = createAsyncThunk(
  "authors/fetchAuthors",
  async () => {
    const response = [
      {
        id: 1,
        name: "Jane Smith",
        email: "janesmith@gmail.com",
        experience:
          "Jane Smith es una autora experimentada con más de 20 años de experiencia en la escritura. Ha escrito numerosas novelas exitosas y ha recibido múltiples premios literarios por su trabajo.",
        qualifications:
          "Jane posee una Maestría en Escritura Creativa de una prestigiosa universidad, donde perfeccionó sus habilidades y desarrolló su voz única como escritora.",
        interests:
          "Los intereses de Jane incluyen la ficción histórica, la escritura de viajes y explorar la intersección entre la tecnología y las emociones humanas en su ficción especulativa.",
        key: "Maestría en Escritura Creativa",
        image: "",
      },
      {
        id: 2,
        name: "John Doe",
        email: "johndoe@gmail.com",
        experience:
          "John es un autor en ciernes con una perspectiva fresca. Comenzó su carrera como escritor hace apenas cinco años, pero rápidamente ha ganado reconocimiento por sus ensayos y relatos reflexivos.",
        qualifications:
          "John tiene un título en Filosofía, lo cual ha influido en su estilo de escritura y en sus elecciones temáticas. Él cree en el poder de la indagación filosófica en la narración.",
        interests:
          "John está apasionado por explorar el existencialismo, la ética y la condición humana a través de su escritura. También es defensor de la sostenibilidad ambiental e incorpora estos temas en su trabajo.",
        key: "Ingeniero",
        image: "",
      },
      {
        id: 3,
        name: "Claire Martin",
        email: "clairemartin@gmail.com",
        experience:
          "Claire es una renombrada poeta conocida por sus versos emocionalmente cargados. Ha estado escribiendo poesía durante más de tres décadas y ha publicado varias colecciones.",
        qualifications:
          "Claire tiene una licenciatura en Literatura y ha estudiado diversas formas de poesía de todo el mundo. A menudo fusiona diferentes tradiciones poéticas en su obra.",
        interests:
          "Los intereses de Claire giran en torno a temas como el amor, la pérdida, la identidad y el poder del lenguaje. Se inspira en la naturaleza y la literatura clásica.",
        key: "Literatura",
        image: "",
      },
      {
        id: 4,
        name: "David Smith",
        email: "davidsmith@gmail.com",
        experience:
          "David es un autor de ciencia ficción que ha estado escribiendo durante diez años. Ganó reconocimiento por su novela debut, que exploró conceptos futuristas de IA y transhumanismo.",
        qualifications:
          "David tiene formación en informática y posee un doctorado en Inteligencia Artificial. Su conocimiento técnico informa su ficción especulativa.",
        interests:
          "David está fascinado por las posibles implicaciones éticas y sociales de las tecnologías emergentes. A menudo profundiza en temas de interacción entre humanos y máquinas y las consecuencias del avance tecnológico.",
        key: "Informática, Inteligencia Artificial",
        image: "",
      },
      {
        id: 5,
        name: "Sarah Wilson",
        email: "sarahwilson@gmail.com",
        experience:
          "Sarah es autora e ilustradora de libros para niños. Ha estado creando historias encantadoras e imaginativas para niños durante más de 15 años.",
        qualifications:
          "Sarah estudió Bellas Artes y Diseño Gráfico, lo que le permite no solo escribir historias cautivadoras, sino también dar vida a través de sus ilustraciones.",
        interests:
          "Sarah está apasionada por fomentar la creatividad y la curiosidad en los jóvenes lectores. Sus intereses incluyen mundos de fantasía, criaturas mágicas y fomentar el amor por la lectura en los niños.",
        key: "Bellas Artes, Diseño Gráfico",
        image: "",
      },
      {
        id: 6,
        name: "Alex Wilson",
        email: "alexwildon@gmail.com",
        experience:
          "Alex es autor de no ficción especializado en historia y biografías. Ha escrito varios libros bien recibidos que arrojan luz sobre figuras y eventos históricos menos conocidos.",
        qualifications:
          "Alex tiene un doctorado en Historia y ha realizado una extensa investigación en archivos de todo el mundo. Su formación académica garantiza la precisión y profundidad de su escritura.",
        interests:
          "Los intereses de Alex giran en torno a descubrir historias ocultas del pasado, especialmente aquellas relacionadas con la justicia social, héroes olvidados y el impacto de los eventos históricos en individuos y sociedades.",
        key: "Historia",
        image: "",
      },
    ];
    return response;
  }
);

const authorsSlice = createSlice({
  name: "authors",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchAuthors.pending, (state, action) => {
        state.status = LOADING;
      })
      .addCase(fetchAuthors.fulfilled, (state, action) => {
        state.status = SUCCEEDED;
        state.data = state.data.concat(action.payload);
      });
  },
});

export const selectAllAuthors = (state) => state.authors.data;

export const selectAuthorById = (state, authorId) => {
  return state.authors.data.find((authors) => authors.id === authorId);
};

export const selectedLoginAuthor = (state, authorId) => {
  return state.authors.data.find((authors) => authors.id === authorId);
};

export default authorsSlice.reducer;
