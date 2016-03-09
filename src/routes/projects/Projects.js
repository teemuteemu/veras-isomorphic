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
import s from './Projects.scss'

import ProjectsContent from '../../content/projects.json'

import ProjectItem from './ProjectItem'

class Projects extends React.Component {
  constructor () {
    super()

    this.state = {
      selectedFilter: ProjectsContent.categories[0]
    }
  }

  setFilter (filter, e) {
    e.preventDefault()

    this.setState({
      selectedFilter: filter
    })
  }

  render () {
    const projects = ProjectsContent.projects.filter((proj) => {
      if (this.state.selectedFilter === 'all') {
        return true
      } else {
        return this.state.selectedFilter === proj.category
      }
    }).map((proj) => {
      return <ProjectItem project={proj} />
    })

    const filters = ProjectsContent.categories.map((cat) => {
      return (
        <dd key={cat} className='filter'>
          <a href='#' onClick={this.setFilter.bind(this, cat)}>{cat}</a>
        </dd>
      )
    })

    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <dl className="sub-nav">
            <dt>Filter:</dt>
            { filters }
          </dl>
          <ul>
            {projects}
          </ul>
        </div>
      </div>
    )
  }
}

Projects.propTypes = {
  title: PropTypes.string.isRequired
}

export default withStyles(Projects, s)
