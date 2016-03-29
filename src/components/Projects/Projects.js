import React, { Component, PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Projects.scss'

import ProjectsContent from '../../content/projects.json'

import ProjectItem from '../../components/ProjectItem/ProjectItem.js'
import NotFoundPage from '../../components/NotFoundPage'

function ProjectsList({projectsData}) {
  const projectElements = projectsData.map((proj) => {
    return <ProjectItem key={proj.id} project={proj} />
  })

  return (
    <div>
      <ul className={s.projects}>
        {projectElements}
      </ul>
    </div>
  )
}

function Projects({category}) {
  const allCategories = ProjectsContent.categories

  if (category === undefined || allCategories.indexOf(category) >= 0) {
    const projectsData = ProjectsContent.projects.filter((proj) => {
      if (category === undefined) {
        return true
      } else {
        return category === proj.category
      }
    })
    
    return (<ProjectsList projectsData={projectsData} />)
  } else {
    return (<NotFoundPage />)
  }
}

Projects.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string
}

export default withStyles(Projects, s)
