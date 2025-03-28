import styled from 'styled-components';
import { useEffect, useRef } from 'react';

const SkillsSection = styled.section`
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

const SkillsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
`;

const SkillsHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;

  h2 {
    font-size: 2.5rem;
    color: #01bf71;
    margin-bottom: 1rem;
  }

  p {
    color: #fff;
    font-size: 1.1rem;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
`;

const SkillCategory = styled.div`
  background: rgba(255, 255, 255, 0.05);
  padding: 30px;
  border-radius: 15px;
  transition: all 0.4s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-8px);
    border-color: rgba(1, 191, 113, 0.3);
    box-shadow: 0 8px 32px rgba(1, 191, 113, 0.2);
  }

  h3 {
    background: linear-gradient(120deg, #01bf71, #00f7ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 1.5rem;
    margin-bottom: 20px;
    letter-spacing: 0.5px;
  }
`;

const SkillItem = styled.div`
  margin-bottom: 20px;

  .skill-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  .skill-name {
    color: #fff;
    font-size: 1rem;
  }

  .skill-percentage {
    color: #01bf71;
  }
`;

const ProgressBar = styled.div`
  background: rgba(255, 255, 255, 0.1);
  height: 8px;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.2);

  .progress {
    background: linear-gradient(90deg, #01bf71, #00f7ff);
    height: 100%;
    width: ${({ progress }) => progress}%;
    transition: width 1s ease-in-out;
    box-shadow: 0 0 10px rgba(1, 191, 113, 0.5);
  }
`;

const Skills = () => {
  const skillsRef = useRef(null);

  const skillCategories = [
    {
      title: 'Frontend Development',
      skills: [
        { name: 'React.js', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'HTML/CSS', level: 95 },
        { name: 'Vue.js', level: 80 }
      ]
    },
    {
      title: 'Backend Development',
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'MongoDB', level: 75 },
        { name: 'SQL', level: 85 }
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'Agile/Scrum', level: 85 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const progressBars = document.querySelectorAll('.progress');
          progressBars.forEach(bar => {
            bar.style.width = bar.parentElement.dataset.progress + '%';
          });
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <SkillsSection>
      <SkillsContainer ref={skillsRef}>
        <SkillsHeader>
          <h2>My Skills</h2>
          <p>Here's what I bring to the table</p>
        </SkillsHeader>
        <SkillsGrid>
          {skillCategories.map((category, index) => (
            <SkillCategory key={index}>
              <h3>{category.title}</h3>
              {category.skills.map((skill, skillIndex) => (
                <SkillItem key={skillIndex}>
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <ProgressBar data-progress={skill.level}>
                    <div className="progress" style={{ width: '0%' }} />
                  </ProgressBar>
                </SkillItem>
              ))}
            </SkillCategory>
          ))}
        </SkillsGrid>
      </SkillsContainer>
    </SkillsSection>
  );
};

export default Skills;