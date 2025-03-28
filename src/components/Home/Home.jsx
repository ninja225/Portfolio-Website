import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ninjaProfile from '../../assets/ninja-home.png';

const HeroSection = styled.section`
  height: calc(100vh - 80px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  position: relative;
  z-index: 1;
  background: linear-gradient(135deg, #010606 0%, #001a1a 100%);
  overflow: hidden;
  margin-top: 80px;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 50% 50%, rgba(1, 191, 113, 0.1) 0%, transparent 50%);
  }

  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Y2lyY2xlIGN4PSIyMCIgY3k9IjIwIiByPSIxIiBmaWxsPSJyZ2JhKDEsIDE5MSwgMTEzLCAwLjIpIi8+PC9zdmc+');
    opacity: 0.5;
    z-index: -1;
  }
`;

const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 0;
  backdrop-filter: blur(10px);
`;

const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
  position: relative;
  opacity: 0;
  transform: translateY(30px);
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px);
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  padding: 60px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);

  @media screen and (max-width: 968px) {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 40px;
    gap: 40px;
  }

  &:hover {
    border-color: rgba(1, 191, 113, 0.3);
    box-shadow: 0 25px 45px rgba(1, 191, 113, 0.15);
  }
`;

const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const HeroH1 = styled.h1`
  font-size: 56px;
  line-height: 1.2;
  margin-bottom: 10px;
  background: linear-gradient(120deg, #01bf71, #00f7ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: 1px;
  opacity: 0;
  transform: translateY(20px);
  white-space: nowrap;

  @media screen and (max-width: 768px) {
    font-size: 44px;
  }

  @media screen and (max-width: 480px) {
    font-size: 36px;
  }
`;

const HeroP = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 20px;
  line-height: 1.8;
  max-width: 600px;
  margin-bottom: 15px;
  opacity: 0;
  transform: translateY(20px);

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

const HeroBtnWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 25px;
  opacity: 0;
  transform: translateY(20px);

  @media screen and (max-width: 968px) {
    justify-content: center;
  }
`;

const Button = styled(Link)`
  border-radius: 50px;
  background: ${({ primary }) => (primary ? 'linear-gradient(120deg, #01bf71, #00f7ff)' : 'transparent')};
  white-space: nowrap;
  padding: 16px 48px;
  color: ${({ primary }) => (primary ? '#010606' : '#fff')};
  font-size: 18px;
  font-weight: 500;
  outline: none;
  border: ${({ primary }) => (primary ? 'none' : '2px solid rgba(255, 255, 255, 0.3)')};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(120deg, rgba(255, 255, 255, 0.2), transparent);
    transform: translateX(-100%);
    transition: transform 0.5s ease;
  }

  &:hover {
    transform: translateY(-3px);
    background: ${({ primary }) => (primary ? 'linear-gradient(120deg, #00f7ff, #01bf71)' : 'rgba(1, 191, 113, 0.1)')};
    color: ${({ primary }) => (primary ? '#010606' : '#01bf71')};
    border-color: ${({ primary }) => (primary ? 'none' : '#01bf71')};
    box-shadow: 0 10px 20px rgba(1, 191, 113, 0.2);

    &:before {
      transform: translateX(100%);
    }
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  opacity: 0;
  transform: translateX(30px);

  @media screen and (max-width: 968px) {
    height: 400px;
  }

  &:before {
    content: '';
    position: absolute;
    top: -20px;
    left: -20px;
    right: 20px;
    bottom: 20px;
    border: 2px solid rgba(1, 191, 113, 0.3);
    border-radius: 30px;
    z-index: 1;
    transition: all 0.4s ease;
  }

  &:hover:before {
    transform: translate(-10px, -10px);
    border-color: rgba(1, 191, 113, 0.6);
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px;
  position: relative;
  z-index: 2;
  filter: drop-shadow(0 10px 30px rgba(1, 191, 113, 0.3));
  transition: transform 0.4s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const Home = () => {
  const contentRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const btnWrapperRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    tl.to(contentRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out"
    })
    .to(imageRef.current, {
      opacity: 1,
      x: 0,
      duration: 1,
      ease: "power3.out"
    }, "-=0.5")
    .to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.5")
    .to(descRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.5")
    .to(btnWrapperRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.5");
  }, []);

  return (
    <HeroSection>
      <HeroBg />
      <HeroContent ref={contentRef}>
        <TextContent ref={textRef}>
          <HeroH1 ref={titleRef}>Hi, I'm [DR-NINJA]</HeroH1>
          <HeroP ref={descRef}>
            A passionate Full Stack Developer crafting beautiful and functional web experiences
          </HeroP>
          <HeroBtnWrapper ref={btnWrapperRef}>
            <Button to="/projects" primary={true}>
              View My Work
            </Button>
            <Button to="/contact">
              Get In Touch
            </Button>
          </HeroBtnWrapper>
        </TextContent>
        <ImageContainer ref={imageRef}>
          <ProfileImage src={ninjaProfile} alt="Developer Profile" />
        </ImageContainer>
      </HeroContent>
    </HeroSection>
  );
};

export default Home;