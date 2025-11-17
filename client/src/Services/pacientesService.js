import axios from "axios";
const API = "http://localhost:3000/api/pacientes";

export const getPacientes = async () => {
  const res = await axios.get(API);
  return res.data;
};

export const registrarPaciente = async (data) => {
  const res = await axios.post(API, data);
  return res.data;
};
