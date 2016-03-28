/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Project.scss'

import MoreProjects from '../../components/MoreProjects'

function Project ({project, relatedProjects}) {

  return (
    <div>
      <h1>{project.title}</h1>
      <img src={project.thumbnail} />
      <p>{project.about}</p>
      {relatedProjects.length > 0
        ? <MoreProjects category={project.category} projects={relatedProjects}/>
        : undefined}
    </div>
  )
}

Project.propTypes = {
  project: PropTypes.object.isRequired,
  relatedProjects: PropTypes.array.isRequired
}

export default withStyles(Project, s)
