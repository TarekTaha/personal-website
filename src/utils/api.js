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
  // Fetch publications from Google Scholar using a CORS proxy
  fetchFromGoogleScholar: async (authorId = '0qKYbyAAAAAJ') => {
    try {
      const apiKey = "f088d49cb8b0456df4374b5daaadcf116f0418e1fb6a4e4ae3f55dc2de25f4d8";
      
      // Use a CORS proxy
      const corsProxy = 'https://api.allorigins.win/raw?url=';
      
      // We'll collect all publications here
      let allPublications = [];
      let start = 0;
      let hasMoreResults = true;
      
      // Make multiple requests to get all publications (paginated)
      while (hasMoreResults) {
        console.log(`Fetching publications from start=${start}...`);
        
        const targetUrl = `https://serpapi.com/search.json?engine=google_scholar_author&author_id=${authorId}&api_key=${apiKey}&start=${start}`;
        
        const response = await axios.get(corsProxy + encodeURIComponent(targetUrl));
        
        // Check if the response contains articles
        if (!response.data.articles || !Array.isArray(response.data.articles)) {
          console.error('Invalid response format from SerpAPI:', response.data);
          break;
        }
        
        // Transform the data to our format
        const publications = response.data.articles.map(article => ({
          id: article.article_id || Math.random().toString(36).substr(2, 9),
          title: article.title,
          authors: article.authors,
          venue: article.publication,
          year: article.year ? parseInt(article.year, 10) : 0,
          url: article.link,
          citations: article.cited_by?.value || 0,
          type: determinePublicationType(article.publication)
        }));
        
        // Add to our collection
        allPublications = [...allPublications, ...publications];
        
        // Check if we should continue pagination
        if (response.data.articles.length < 20) {
          // Less than 20 results means we've reached the end
          hasMoreResults = false;
        } else {
          // Move to the next page (each page has 20 items)
          start += 20;
          
          // Add a small delay to avoid rate limiting
          await new Promise(resolve => setTimeout(resolve, 500));
        }
      }
      
      // Sort publications by year (newest first)
      allPublications.sort((a, b) => {
        // First by year (descending)
        if (b.year !== a.year) {
          return b.year - a.year;
        }
        // If same year, sort by citations (descending)
        return b.citations - a.citations;
      });
      
      console.log(`Total publications fetched: ${allPublications.length}`);
      return allPublications;
    } catch (error) {
      console.error('Error fetching Google Scholar publications:', error);
      if (error.response) {
        console.error('SerpAPI error response:', error.response.data);
      }
      return [];
    }
  },
  
  // Fetch publications from ORCID
  fetchFromOrcid: async (orcidId = '0000-0001-8267-1681') => {
    try {
      // ORCID provides a public API
      const response = await axios.get(`https://pub.orcid.org/v3.0/${orcidId}/works`, {
        headers: {
          'Accept': 'application/json',
        },
      });
      
      // Transform ORCID data to our format
      const publications = response.data.group.map(group => {
        const work = group['work-summary'][0];
        const title = work.title?.['title']?.value || 'Untitled';
        const year = work['publication-date']?.year?.value || '';
        
        return {
          id: work['put-code'],
          title: title,
          authors: extractAuthorsFromOrcid(work),
          venue: extractJournalFromOrcid(work),
          year: year,
          url: extractUrlFromOrcid(work),
          type: determinePublicationTypeFromOrcid(work.type)
        };
      });
      
      return publications;
    } catch (error) {
      console.error('Error fetching ORCID publications:', error);
      return [];
    }
  },
  
  // Fetch publications from a custom backend
  fetchFromCustomBackend: async () => {
    try {
      const response = await api.get('/publications');
      return response.data;
    } catch (error) {
      console.error('Error fetching publications from backend:', error);
      return [];
    }
  }
};

// Helper functions for ORCID data extraction
function extractAuthorsFromOrcid(work) {
  try {
    if (work.contributors && work.contributors.contributor) {
      return work.contributors.contributor
        .map(c => c['credit-name']?.value || 'Unknown Author')
        .join(', ');
    }
    return 'Unknown Authors';
  } catch (e) {
    return 'Unknown Authors';
  }
}

function extractJournalFromOrcid(work) {
  try {
    return work['journal-title']?.value || 
           work.type || 
           'Unknown Publication';
  } catch (e) {
    return 'Unknown Publication';
  }
}

function extractUrlFromOrcid(work) {
  try {
    if (work['external-ids'] && work['external-ids']['external-id']) {
      const doi = work['external-ids']['external-id'].find(id => id['external-id-type'] === 'doi');
      if (doi) {
        return `https://doi.org/${doi['external-id-value']}`;
      }
      
      const url = work['external-ids']['external-id'].find(id => id['external-id-type'] === 'url');
      if (url) {
        return url['external-id-value'];
      }
    }
    return '#';
  } catch (e) {
    return '#';
  }
}

function determinePublicationType(venue) {
  const venueStr = venue?.toLowerCase() || '';
  if (venueStr.includes('journal') || venueStr.includes('transactions') || venueStr.includes('letters')) {
    return 'journal';
  } else if (venueStr.includes('conference') || venueStr.includes('proceedings') || venueStr.includes('symposium')) {
    return 'conference';
  } else if (venueStr.includes('review') || venueStr.includes('survey')) {
    return 'review';
  }
  return 'other';
}

function determinePublicationTypeFromOrcid(type) {
  const typeStr = type?.toLowerCase() || '';
  if (typeStr.includes('journal-article')) {
    return 'journal';
  } else if (typeStr.includes('conference') || typeStr.includes('proceedings')) {
    return 'conference';
  } else if (typeStr.includes('review') || typeStr.includes('survey')) {
    return 'review';
  }
  return 'other';
}

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