/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './MoreProjects.scss';
import Link from '../Link';
import ProjectItem from '../ProjectItem/ProjectItem.js'

function MoreProjects({category, projects}) {
  const categoryLabel = category[category.length-1] === 's'
    ? category
    : `${category}s`

  const projectItemElements = projects.map((proj) => <ProjectItem key={proj.id} project={proj} />)

  return (
    <div className={s.root}>
      <div className={s.container}>
        <h3>More {categoryLabel}</h3>
        <ul>
          {projectItemElements}
        </ul>
      </div>
    </div>
  );
}

MoreProjects.propTypes = {
  category: PropTypes.string.isRequired,
  projects: PropTypes.array.isRequired
}

export default withStyles(MoreProjects, s);
