const baseUrl = "http://localhost:8000";

export const api = "http://localhost:8000/api";
export const generatePublicUrl = (fileName) => {
  return `${baseUrl}/public/${fileName}`;
};
