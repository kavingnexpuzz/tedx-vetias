import axios from 'axios';

const BASE = '/api';

// ── Speakers ─────────────────────────────────────────
export const getSpeakers = () => axios.get(`${BASE}/speakers`);
export const createSpeaker = (data) => axios.post(`${BASE}/speakers`, data);
export const updateSpeaker = (id, data) => axios.put(`${BASE}/speakers/${id}`, data);
export const deleteSpeaker = (id) => axios.delete(`${BASE}/speakers/${id}`);

// ── Team ─────────────────────────────────────────────
export const getTeam = () => axios.get(`${BASE}/team`);
export const createTeamMember = (data) => axios.post(`${BASE}/team`, data);
export const updateTeamMember = (id, data) => axios.put(`${BASE}/team/${id}`, data);
export const deleteTeamMember = (id) => axios.delete(`${BASE}/team/${id}`);

// ── Gallery ──────────────────────────────────────────
export const getGallery = () => axios.get(`${BASE}/gallery`);
export const createGalleryItem = (data) => axios.post(`${BASE}/gallery`, data, {
  headers: { 'Content-Type': 'multipart/form-data' },
});
export const deleteGalleryItem = (id) => axios.delete(`${BASE}/gallery/${id}`);

// ── Sponsors ─────────────────────────────────────────
export const getSponsors = () => axios.get(`${BASE}/sponsors`);
export const createSponsor = (data) => axios.post(`${BASE}/sponsors`, data);
export const updateSponsor = (id, data) => axios.put(`${BASE}/sponsors/${id}`, data);
export const deleteSponsor = (id) => axios.delete(`${BASE}/sponsors/${id}`);

// ── Contact ──────────────────────────────────────────
export const submitContact = (data) => axios.post(`${BASE}/contact`, data);
export const getMessages = () => axios.get(`${BASE}/contact`);
export const deleteMessage = (id) => axios.delete(`${BASE}/contact/${id}`);
