import React from "react";
import { Container, Wrapper, Title, Desc, CardContainer } from "./Styles";
import ProjectCard from "../Cards/ProjectCard";
import { projects } from "../../data/constants";

const Projects = ({ openModal, setOpenModal }) => {
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I've collaborated with various brands. Here are some of my Collaborations.
        </Desc>
        <CardContainer>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              openModal={openModal}
              setOpenModal={setOpenModal}
            />
          ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
