import styled from 'styled-components';
import { FaGithub, FaLinkedin, FaDiscord, FaInstagram, FaEnvelope } from 'react-icons/fa';

const ContactSection = styled.section`
  min-height: 100vh;
  padding: 100px 0 50px;
  background: linear-gradient(135deg, #010606 0%, #001a1a 100%);
  color: #fff;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(1, 191, 113, 0.1) 0%, transparent 50%);
  }
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
`;

const ContactHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;

  h2 {
    font-size: 2.5rem;
    background: linear-gradient(120deg, #01bf71, #00f7ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 1rem;
    letter-spacing: 1px;
  }

  p {
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.1rem;
    text-shadow: 0 0 20px rgba(1, 191, 113, 0.1);
  }
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 25px;
  background: rgba(255, 255, 255, 0.03);
  padding: 35px;
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(1, 191, 113, 0.2);
    box-shadow: 0 8px 32px rgba(1, 191, 113, 0.1);
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    color: rgba(255, 255, 255, 0.9);
    font-size: 1rem;
    letter-spacing: 0.5px;
  }

  input, textarea {
    padding: 15px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(255, 255, 255, 0.03);
    color: #fff;
    font-size: 1rem;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
    letter-spacing: 0.5px;

    &:focus {
      outline: none;
      border-color: rgba(1, 191, 113, 0.5);
      box-shadow: 0 0 20px rgba(1, 191, 113, 0.15);
      transform: translateY(-2px);
      background: rgba(255, 255, 255, 0.05);
    }

    &::placeholder {
      color: rgba(255, 255, 255, 0.5);
    }
  }

  textarea {
    min-height: 150px;
    resize: vertical;
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(120deg, #01bf71, #00f7ff);
  background-size: 200% 100%;
  background-position: 100%;
  color: #010606;
  padding: 15px 30px;
  border: none;
  border-radius: 50px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(1, 191, 113, 0.2);

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(120deg, rgba(255, 255, 255, 0.2), transparent);
    transform: translateX(-100%);
    transition: transform 0.4s ease;
  }

  &:hover {
    transform: translateY(-3px);
    background-position: 0;
    box-shadow: 0 8px 25px rgba(1, 191, 113, 0.3);

    &:before {
      transform: translateX(100%);
    }
  }

  &:active {
    transform: translateY(-1px);
    box-shadow: 0 3px 10px rgba(1, 191, 113, 0.2);
  }
`

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  color: #fff;
  font-size: 1.1rem;

  svg {
    color: #01bf71;
    font-size: 1.5rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;

  a {
    color: #fff;
    font-size: 1.8rem;
    transition: all 0.3s ease;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);

    &:hover {
      color: #01bf71;
      transform: translateY(-5px);
      border-color: rgba(1, 191, 113, 0.3);
      box-shadow: 0 5px 15px rgba(1, 191, 113, 0.2);
      background: rgba(1, 191, 113, 0.1);
    }
  }
`

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <ContactSection>
      <ContactContainer>
        <ContactHeader>
          <h2>Get In Touch</h2>
          <p>Let's discuss your project and bring your ideas to life</p>
        </ContactHeader>

        <ContactGrid>
          <ContactForm onSubmit={handleSubmit}>
            <FormGroup>
              <label>Name</label>
              <input type="text" placeholder="Enter your name" required />
            </FormGroup>
            <FormGroup>
              <label>Email</label>
              <input type="email" placeholder="Enter your email" required />
            </FormGroup>
            <FormGroup>
              <label>Subject</label>
              <input type="text" placeholder="Enter subject" required />
            </FormGroup>
            <FormGroup>
              <label>Message</label>
              <textarea placeholder="Enter your message" required></textarea>
            </FormGroup>
            <SubmitButton type="submit">Send Message</SubmitButton>
          </ContactForm>

          <ContactInfo>
            <InfoItem>
              <FaEnvelope />
              <span>marketkoo@mail.ru</span>
            </InfoItem>
            <div>
              <h3 style={{ color: '#01bf71', marginBottom: '20px' }}>Follow Me</h3>
              <SocialLinks>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" title="GitHub">
                  <FaGithub />
                </a>
                <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                  <FaLinkedin />
                </a>
                <a href="https://discord.com/users/yourusername" target="_blank" rel="noopener noreferrer" title="Discord">
                  <FaDiscord />
                </a>
                <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer" title="Instagram">
                  <FaInstagram />
                </a>
              </SocialLinks>
            </div>
          </ContactInfo>
        </ContactGrid>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;