import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 120px 0;
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

const AboutContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const AboutContent = styled.div`
  h2 {
    font-size: 2.8rem;
    margin-bottom: 2rem;
    background: linear-gradient(120deg, #01bf71, #00f7ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: 1px;
  }

  p {
    font-size: 1.2rem;
    line-height: 1.8;
    margin-bottom: 2rem;
    color: rgba(255, 255, 255, 0.9);
    text-shadow: 0 0 20px rgba(1, 191, 113, 0.1);
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  margin-top: 40px;
`;

const StatBox = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 25px;
  border-radius: 15px;
  text-align: center;
  transition: all 0.4s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-8px);
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(1, 191, 113, 0.3);
    box-shadow: 0 8px 32px rgba(1, 191, 113, 0.2);
  }

  h3 {
    font-size: 2.8rem;
    background: linear-gradient(120deg, #01bf71, #00f7ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 15px;
  }

  p {
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 0.9);
    letter-spacing: 0.5px;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: -25px;
    left: -25px;
    right: 25px;
    bottom: 25px;
    border: 2px solid rgba(1, 191, 113, 0.5);
    border-radius: 20px;
    z-index: 1;
    transition: all 0.4s ease;
  }

  &:after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(120deg, rgba(1, 191, 113, 0.2), rgba(0, 247, 255, 0.2));
    border-radius: 20px;
    z-index: 3;
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover {
    &:before {
      transform: translate(-5px, -5px);
      border-color: rgba(1, 191, 113, 0.8);
    }
    &:after {
      opacity: 1;
    }
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 20px;
    position: relative;
    z-index: 2;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    transition: transform 0.4s ease;
  }
`;

const About = () => {
  return (
    <AboutSection>
      <AboutContainer>
        <AboutGrid>
          <AboutContent>
            <h2>About Me</h2>
            <p>
              I'm a passionate Full Stack Developer with expertise in building modern web applications.
              With a strong foundation in both front-end and back-end development, I create seamless
              digital experiences that solve real-world problems.
            </p>
            <p>
              My journey in web development started 5 years ago, and since then,
              I've worked on various projects ranging from small business websites to complex
              enterprise applications.
            </p>
            <StatsGrid>
              <StatBox>
                <h3>3+</h3>
                <p>Years Experience</p>
              </StatBox>
              <StatBox>
                <h3>50+</h3>
                <p>Projects Completed</p>
              </StatBox>
              <StatBox>
                <h3>30+</h3>
                <p>Happy Clients</p>
              </StatBox>
              <StatBox>
                <h3>15+</h3>
                <p>Technologies</p>
              </StatBox>
            </StatsGrid>
          </AboutContent>
          <ImageWrapper>
            <img src="/src/assets/ninja-profile.png" alt="Professional headshot" />
          </ImageWrapper>
        </AboutGrid>
      </AboutContainer>
    </AboutSection>
  );
};

export default About;

