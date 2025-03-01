import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Roboto:wght@300;400;500&display=swap');
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: ${theme.fonts.main};
    color: ${theme.colors.text};
    background-color: ${theme.colors.background};
    line-height: 1.6;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.heading};
    font-weight: 600;
    color: ${theme.colors.primary};
    margin-bottom: ${theme.spacing.md};
  }
  
  a {
    color: ${theme.colors.secondary};
    text-decoration: none;
    transition: ${theme.transition};
    
    &:hover {
      color: ${theme.colors.accent};
    }
  }
  
  img {
    max-width: 100%;
  }
  
  section {
    padding: ${theme.spacing.xl} 0;
  }
  
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 ${theme.spacing.md};
  }
`;

export default GlobalStyles; 