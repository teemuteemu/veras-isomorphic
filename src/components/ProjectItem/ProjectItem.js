import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './ProjectItem.scss';

import Link from '../Link'

function ProjectItem ({project}) {
  const url = `/project/${project.id}`

  const overlayStyle = {
    backgroundImage: `url(${project.thumbnail})`,
    backgroundSize: 'cover'
  }

  return (
    <li key={project.id} className={s.project_item}>
      
      <Link to={url} style={overlayStyle}>
        <h5>{ project.title }</h5>
      </Link>
    </li>
  )
}

ProjectItem.propTypes = {
  project: PropTypes.object.isRequired
}

export default withStyles(ProjectItem, s);
