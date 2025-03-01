import axios from 'axios';

// Base configuration for axios
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://api.example.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Publications API
export const publicationsApi = {
  // Fetch publications from Google Scholar
  fetchFromGoogleScholar: async (authorId) => {
    try {
      // In a real implementation, you would use a proper API or scraper service
      // Google Scholar doesn't provide an official API, so you might need a proxy service
      const response = await api.get(`/google-scholar?author=${authorId}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching Google Scholar publications:', error);
      throw error;
    }
  },
  
  // Fetch publications from ORCID
  fetchFromOrcid: async (orcidId) => {
    try {
      // ORCID provides a public API
      const response = await axios.get(`https://pub.orcid.org/v3.0/${orcidId}/works`, {
        headers: {
          'Accept': 'application/json',
        },
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching ORCID publications:', error);
      throw error;
    }
  },
  
  // Fetch publications from a custom backend
  fetchFromCustomBackend: async () => {
    try {
      const response = await api.get('/publications');
      return response.data;
    } catch (error) {
      console.error('Error fetching publications from backend:', error);
      throw error;
    }
  },
};

// Contact form API
export const contactApi = {
  sendContactForm: async (formData) => {
    try {
      const response = await api.post('/contact', formData);
      return response.data;
    } catch (error) {
      console.error('Error sending contact form:', error);
      throw error;
    }
  },
};

// Projects API
export const projectsApi = {
  fetchProjects: async () => {
    try {
      const response = await api.get('/projects');
      return response.data;
    } catch (error) {
      console.error('Error fetching projects:', error);
      throw error;
    }
  },
  
  fetchProjectById: async (projectId) => {
    try {
      const response = await api.get(`/projects/${projectId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching project with ID ${projectId}:`, error);
      throw error;
    }
  },
};

export default api; 