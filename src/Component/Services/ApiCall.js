import axios from "axios";
import { getToken } from "../LocalStorage/TokenStorage";
const REST_API_END_URL = "http://localhost:8080";

//Public URL (Anyone can accress this URL)
export const SaveUser = (data) => axios.post(REST_API_END_URL + "/User/SignUp", data);
export const GetUser = (data) => axios.post(REST_API_END_URL+ "/User/SignIn", data);

//Private URL (Only Autherized user can access this URL)

//axios.create(): This function creates a new Axios instance with a custom configuration.
export const privateAxios = axios.create({
    baseURL: REST_API_END_URL,
});

//an interceptor is like a checkpoint that lets you stop and change a request before it’s actually sent to the server.
privateAxios.interceptors.request.use((config) =>{
    const token = getToken();
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
},
(error) => Promise.reject(error));

export const GetAllNotes =  () => privateAxios.get("/Notes/allNotes");
export const AddNotes = (data) => privateAxios.post("/Notes/saveNotes",data);
export const DeleteNotes = (id) => privateAxios.delete(`/Notes/deleteNotes/${id}`);
export const NotesById = (id) => privateAxios.get(`/Notes/notesById/${id}`);
export const UpdateNotes = (id,data) => privateAxios.put(`/Notes/updateNotes/${id}`,data)
