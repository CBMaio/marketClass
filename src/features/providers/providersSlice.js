import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const fetchProviders = createAsyncThunk(
  "providers/fetchProviders",
  async () => {
    const response = [
      {
        id: 1,
        name: "Jane Smith",
        email: "janesmith@gmail.com",
        experience:
          "Jane Smith is a seasoned author with over 20 years of writing experience. She has written numerous best-selling novels and has received multiple literary awards for her work.",
        qualifications:
          "Jane holds a Master's degree in Creative Writing from a prestigious university, where she honed her skills and developed her unique voice as a writer.",
        interests:
          "Jane's interests include historical fiction, travel writing, and exploring the intersection of technology and human emotions in her speculative fiction.",
        key: "Master's degree in Creative Writing",
        image: "",
      },
      {
        id: 2,
        name: "John Doe",
        email: "johndoe@gmail.com",
        experience:
          "John is a budding author with a fresh perspective. He started his writing career just five years ago but has quickly gained recognition for his thought-provoking essays and short stories.",
        qualifications:
          "John has a degree in Philosophy, which has influenced his writing style and thematic choices. He believes in the power of philosophical inquiry in storytelling.",
        interests:
          "John is passionate about exploring existentialism, ethics, and the human condition through his writing. He's also an advocate for environmental sustainability and incorporates these themes into his work.",
        key: "Philosophy",
        image: "",
      },
      {
        id: 3,
        name: "Claire Martin",
        email: "clairemartin@gmail.com",
        experience:
          "Claire is a renowned poet known for her emotionally charged verses. She has been writing poetry for more than three decades and has published several collections.",
        qualifications:
          "Claire has a Bachelor's degree in Literature and has studied various forms of poetry from around the world. She often blends different poetic traditions in her work.",
        interests:
          "Claire's interests revolve around themes of love, loss, identity, and the power of language. She draws inspiration from nature and classical literature.",
        key: "Literature",
        image: "",
      },
      {
        id: 4,
        name: "David Smith",
        email: "davidsmith@gmail.com",
        experience:
          "David is a science fiction author who has been writing for ten years. He gained recognition for his debut novel, which explored futuristic concepts of AI and transhumanism.",
        qualifications:
          "David has a background in computer science and holds a Ph.D. in Artificial Intelligence. His technical knowledge informs his speculative fiction.",
        interests:
          "David is fascinated by the potential ethical and societal implications of emerging technologies. He often delves into themes of human-machine interaction and the consequences of technological advancement.",
        key: "Computer Science, Artificial Intelligence",
        image: "",
      },
      {
        id: 5,
        name: "Sarah Wilson",
        email: "sarahwilson@gmail.com",
        experience:
          "Sarah is a children's book author and illustrator. She has been creating delightful and imaginative stories for kids for over 15 years.",
        qualifications:
          "Sarah studied Fine Arts and Graphic Design, which allows her to not only write captivating stories but also bring them to life through her illustrations.",
        interests:
          "Sarah is passionate about fostering creativity and curiosity in young readers. Her interests include fantasy worlds, magical creatures, and encouraging a love of reading in children.",
        key: "Fine Arts, Graphic Design",
        image: "",
      },
      {
        id: 6,
        name: "Alex Wilson",
        email: "alexwildon@gmail.com",
        experience:
          "Alex is a non-fiction author specializing in history and biographies. He has authored several well-received books that shed light on lesser-known historical figures and events.",
        qualifications:
          "Alex holds a Ph.D. in History and has conducted extensive research in archives around the world. His academic background ensures the accuracy and depth of his writing.",
        interests:
          "Alex's interests revolve around uncovering hidden stories from the past, especially those related to social justice, forgotten heroes, and the impact of historical events on individuals and societies.",
        key: "History",
        image: "",
      },
    ];
    return response;
  }
);

const providersSlice = createSlice({
  name: "providers",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProviders.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchProviders.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = state.data.concat(action.payload);
      });
  },
});

export const selectAllProviders = (state) => state.providers.data;

export const selectProviderById = (state, providerId) => {
  return state.providers.data.find((provider) => provider.id === providerId);
};

export default providersSlice.reducer;
