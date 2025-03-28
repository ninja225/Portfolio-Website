import { useState } from 'react';
import styled from 'styled-components';

const ProjectsSection = styled.section`
  padding: 100px 0;
  background: linear-gradient(135deg, #010606 0%, #001a1a 100%);
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

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 30px;
`;

const ProjectsHeader = styled.div`
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

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  gap: 15px;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  padding: 8px 20px;
  border: 2px solid ${({ active }) => (active ? '#01bf71' : 'rgba(255, 255, 255, 0.3)')};
  background: ${({ active }) => (active ? '#01bf71' : 'transparent')};
  color: #fff;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(120deg, #01bf71, #00f7ff);
    opacity: 0;
    z-index: -1;
    transition: opacity 0.3s ease;
  }

  &:hover {
    border-color: #01bf71;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(1, 191, 113, 0.2);

    &:before {
      opacity: 1;
    }
  }
`

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
`;

// Delete: Duplicate styled components removed

const ProjectImage = styled.div`
  width: 100%;
  height: 200px;
  background-image: url(${({ image }) => image});
  background-size: cover;
  background-position: center;
  transition: transform 0.4s ease;
`;

const ProjectInfo = styled.div`
  padding: 25px;
  color: #fff;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    background: linear-gradient(120deg, #01bf71, #00f7ff);
    background-size: 200% 100%;
    background-position: 100%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    letter-spacing: 0.5px;
    transition: background-position 0.4s ease;
  }

  p {
    font-size: 1rem;
    margin-bottom: 15px;
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.6;
  }
`;

const ProjectCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 15px;
  overflow: hidden;
  transition: all 0.4s ease;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    border-color: rgba(1, 191, 113, 0.3);
    box-shadow: 0 8px 32px rgba(1, 191, 113, 0.2);

    ${ProjectImage} {
      transform: scale(1.05);
    }

    ${ProjectInfo} h3 {
      background-position: 0;
    }
  }
`


// Delete: Duplicate styled components removed

const TechStack = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-bottom: 15px;
`;

const TechTag = styled.span`
  padding: 5px 10px;
  background: rgba(1, 191, 113, 0.1);
  border-radius: 15px;
  font-size: 0.9rem;
  color: #01bf71;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 15px;

  a {
    color: #fff;
    text-decoration: none;
    padding: 8px 15px;
    border: 1px solid #01bf71;
    border-radius: 5px;
    transition: all 0.3s ease;

    &:hover {
      background: #01bf71;
    }
  }
`;

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const categories = ['all', 'frontend', 'backend', 'fullstack'];

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with user authentication, product management, and payment integration.',
      image: '/src/assets/projects/ecommerce.svg',
      category: 'fullstack',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveLink: 'https://ecommerce-demo.com',
      githubLink: 'https://github.com/username/ecommerce'
    },
    {
      id: 2,
      title: 'Social Media Dashboard',
      description: 'Real-time social media analytics dashboard with data visualization.',
      image: '/src/assets/projects/dashboard.svg',
      category: 'frontend',
      tech: ['React', 'D3.js', 'Firebase'],
      liveLink: 'https://dashboard-demo.com',
      githubLink: 'https://github.com/username/dashboard'
    },
    {
      id: 3,
      title: 'Task Management API',
      description: 'RESTful API for task management with authentication and real-time updates.',
      image: '/src/assets/projects/api.svg',
      category: 'backend',
      tech: ['Node.js', 'Express', 'MongoDB', 'Socket.io'],
      liveLink: 'https://api-docs-demo.com',
      githubLink: 'https://github.com/username/task-api'
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const handleFilterClick = (category) => {
    setFilter(category);
  };

  return (
    <ProjectsSection>
      <ProjectsContainer>
        <ProjectsHeader>
          <h2>My Projects</h2>
          <p>Check out some of my recent work</p>
        </ProjectsHeader>
        <FilterContainer>
          {categories.map((category) => (
            <FilterButton
              key={category}
              active={filter === category}
              onClick={() => handleFilterClick(category)}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </FilterButton>
          ))}
        </FilterContainer>
        <ProjectsGrid>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id}>
              <ProjectImage image={project.image} />
              <ProjectInfo>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <TechStack>
                  {project.tech.map((tech, index) => (
                    <TechTag key={index}>{tech}</TechTag>
                  ))}
                </TechStack>
                <ProjectLinks>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </ProjectLinks>
              </ProjectInfo>
            </ProjectCard>
          ))}
        </ProjectsGrid>
      </ProjectsContainer>
    </ProjectsSection>
  );
};

export default Projects;