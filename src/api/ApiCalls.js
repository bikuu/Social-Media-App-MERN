import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const signUp = async (formData) =>
  await API.post("/auth/register", formData);
export const logIn = async (formData) =>
  await API.post("/auth/login", formData);

export const uploadImage = async (data) => await API.post("/upload", data);

export const uploadPost = async (data) => await API.post("/post", data);
export const getTimelinePosts =  (id) =>
   API.get(`/post/${id}/timeline`);
