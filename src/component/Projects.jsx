import React, { Component } from 'react'
import CardProject from './CardProject';
import data from '../services/data';
import '../styles/projects.css';

export default class Projects extends Component {
  render() {
    return (
      <section className="projects" id="projects">
          <h2>Projetos Acadêmicos</h2>
        <div className="projetos">
          {data.map((project) => (
            <CardProject
            key={project.name}
            image={project.image}
            name={project.name}
            description={project.description}
            url={project.url}
            />
            ))}
        </div>
      </section>
    )
  }
}
