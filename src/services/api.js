import axios from "axios";

const BASE = "/api";

// ── Speakers ─────────────────────────────────────────
export const getSpeakers = () => axios.get(`${BASE}/speakers`);
export const createSpeaker = (data) => axios.post(`${BASE}/speakers`, data);
export const updateSpeaker = (id, data) =>
  axios.put(`${BASE}/speakers/${id}`, data);
export const deleteSpeaker = (id) => axios.delete(`${BASE}/speakers/${id}`);

// ── Seat Availability ─────────────────────────────────
const GOOGLE_SEAT_URL =
  "https://script.googleusercontent.com/macros/echo?user_content_key=AUkAhnR9PDQDZ2nG3YCyTbsRPb-7DnDSYOlQc4H5S4av3G8ZOjuKkufxL8M9xpCkQI3PGYzS1iHjKZfjc--IS_e3J-0q1cvqD6mKYOVuQGpn7DWAE94gIQHxSc5uo3VdsajuqoJdQjQ9GNJOaRtomYVg44aWcrQnq-qXAzByh1rGMMxUN8Kcqj1J1DLcnrIrPIrW8OTi6MeHeYefXzXtSZwEiP4SijRq8jvX1OjBcVsBzSfaHya2uPDo78BYbWm4qQOSy_XgufCx3w_QmbDXPi4aSCNuNNp0gQ&lib=Mcn8nfxTfqCFmA5h6BaPyNujag8hAtVU_";

export const getSeatAvailability = () => axios.get(GOOGLE_SEAT_URL);

// ── Team ─────────────────────────────────────────────
export const getTeam = () => axios.get(`${BASE}/team`);
export const createTeamMember = (data) => axios.post(`${BASE}/team`, data);
export const updateTeamMember = (id, data) =>
  axios.put(`${BASE}/team/${id}`, data);
export const deleteTeamMember = (id) => axios.delete(`${BASE}/team/${id}`);

// ── Gallery ──────────────────────────────────────────
export const getGallery = () => axios.get(`${BASE}/gallery`);
export const createGalleryItem = (data) =>
  axios.post(`${BASE}/gallery`, data, {
    headers: { "Content-Type": "multipart/form-data" },
  });
export const deleteGalleryItem = (id) => axios.delete(`${BASE}/gallery/${id}`);

// ── Sponsors ─────────────────────────────────────────
export const getSponsors = () => axios.get(`${BASE}/sponsors`);
export const createSponsor = (data) => axios.post(`${BASE}/sponsors`, data);
export const updateSponsor = (id, data) =>
  axios.put(`${BASE}/sponsors/${id}`, data);
export const deleteSponsor = (id) => axios.delete(`${BASE}/sponsors/${id}`);

// ── Contact ──────────────────────────────────────────
export const submitContact = (data) => axios.post(`${BASE}/contact`, data);
export const getMessages = () => axios.get(`${BASE}/contact`);
export const deleteMessage = (id) => axios.delete(`${BASE}/contact/${id}`);
