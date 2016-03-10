import React, { PropTypes } from 'react'

import Link from '../Link'

function ProjectItem ({project}) {
  const url = `/project/${project.id}`
  return (
    <li key={project.id} className='project-item'>
      <Link className='project-item__link' to={url}>
        <img className='project-item__link__image' src={project.thumbnail} />

        <div className='project-item__link__overlay'>
          <h5>{ project.title }</h5>
        </div>
      </Link>
    </li>
  )
}

ProjectItem.propTypes = {
  project: PropTypes.object.isRequired
}

export default ProjectItem
