import React, { Component, PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Projects.scss'

import ProjectsContent from '../../content/projects.json'

import ProjectItem from '../../components/ProjectItem/ProjectItem.js'

function Projects({category}) {
  const projects = ProjectsContent.projects.filter((proj) => {
    if (category === undefined) {
      return true
    } else {
      return category === proj.category
    }
  }).map((proj) => {
    return <ProjectItem key={proj.id} project={proj} />
  })

  return (
    <div>
      <ul className={s.projects}>
        {projects}
      </ul>
    </div>
  )
}

Projects.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.object
}

export default withStyles(Projects, s)
