import React, { useState } from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaPaperPlane } from 'react-icons/fa';
import SocialLinks from '../components/SocialLinks';

const ContactContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.xl} 0;
`;

const ContactHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const ContactTitle = styled.h1`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const ContactSubtitle = styled.p`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.secondary};
  max-width: 800px;
  margin: 0 auto ${({ theme }) => theme.spacing.lg};
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr 2fr;
  }
`;

const ContactInfo = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

const ContactInfoTitle = styled.h2`
  color: white;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 40px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

const ContactInfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const ContactInfoIcon = styled.div`
  margin-right: ${({ theme }) => theme.spacing.md};
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.accent};
`;

const ContactInfoText = styled.div``;

const ContactInfoLabel = styled.h3`
  font-size: 1.1rem;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  color: white;
`;

const ContactInfoValue = styled.p`
  opacity: 0.8;
`;

const ContactForm = styled.form`
  background-color: white;
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: ${({ theme }) => theme.boxShadow};
`;

const FormTitle = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.primary};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 40px;
    height: 3px;
    background-color: ${({ theme }) => theme.colors.accent};
  }
`;

const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.primary};
`;

const FormInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme, error }) => error ? 'red' : theme.colors.light};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme, error }) => error ? 'red' : theme.colors.light};
  border-radius: ${({ theme }) => theme.borderRadius};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
  }
`;

const FormError = styled.p`
  color: red;
  font-size: 0.9rem;
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

const SubmitButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  border: none;
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.lg};
  font-size: 1rem;
  font-weight: 600;
  border-radius: ${({ theme }) => theme.borderRadius};
  cursor: pointer;
  transition: ${({ theme }) => theme.transition};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    transform: translateY(-3px);
  }
  
  &:disabled {
    background-color: ${({ theme }) => theme.colors.light};
    color: ${({ theme }) => theme.colors.text};
    cursor: not-allowed;
    transform: none;
  }
`;

const SuccessMessage = styled.div`
  background-color: #d4edda;
  color: #155724;
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        // Hide success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1500);
    }
  };
  
  return (
    <ContactContainer>
      <div className="container">
        <ContactHeader>
          <ContactTitle>Contact Me</ContactTitle>
          <ContactSubtitle>
            Have a question or want to collaborate? Feel free to reach out using the contact form or through any of the channels below.
          </ContactSubtitle>
          <SocialLinks />
        </ContactHeader>
        
        <ContactGrid>
          <ContactInfo>
            <ContactInfoTitle>Contact Information</ContactInfoTitle>
            
            <ContactInfoItem>
              <ContactInfoIcon>
                <FaEnvelope />
              </ContactInfoIcon>
              <ContactInfoText>
                <ContactInfoLabel>Email</ContactInfoLabel>
                <ContactInfoValue>your.email@example.com</ContactInfoValue>
              </ContactInfoText>
            </ContactInfoItem>
            
            <ContactInfoItem>
              <ContactInfoIcon>
                <FaPhone />
              </ContactInfoIcon>
              <ContactInfoText>
                <ContactInfoLabel>Phone</ContactInfoLabel>
                <ContactInfoValue>+1 (123) 456-7890</ContactInfoValue>
              </ContactInfoText>
            </ContactInfoItem>
            
            <ContactInfoItem>
              <ContactInfoIcon>
                <FaMapMarkerAlt />
              </ContactInfoIcon>
              <ContactInfoText>
                <ContactInfoLabel>Office</ContactInfoLabel>
                <ContactInfoValue>
                  Department of Robotics<br />
                  Your University<br />
                  City, Country
                </ContactInfoValue>
              </ContactInfoText>
            </ContactInfoItem>
          </ContactInfo>
          
          <ContactForm onSubmit={handleSubmit}>
            <FormTitle>Send Me a Message</FormTitle>
            
            {submitSuccess && (
              <SuccessMessage>
                Thank you for your message! I'll get back to you as soon as possible.
              </SuccessMessage>
            )}
            
            <FormGroup>
              <FormLabel htmlFor="name">Name</FormLabel>
              <FormInput 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
              />
              {errors.name && <FormError>{errors.name}</FormError>}
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="email">Email</FormLabel>
              <FormInput 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />
              {errors.email && <FormError>{errors.email}</FormError>}
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="subject">Subject</FormLabel>
              <FormInput 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
                error={errors.subject}
              />
              {errors.subject && <FormError>{errors.subject}</FormError>}
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="message">Message</FormLabel>
              <FormTextarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                error={errors.message}
              />
              {errors.message && <FormError>{errors.message}</FormError>}
            </FormGroup>
            
            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'} <FaPaperPlane />
            </SubmitButton>
          </ContactForm>
        </ContactGrid>
      </div>
    </ContactContainer>
  );
};

export default Contact; 