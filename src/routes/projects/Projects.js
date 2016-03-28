import React, { Component, PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Projects.scss'

import ProjectsContent from '../../content/projects.json'

import ProjectItem from '../../components/ProjectItem/ProjectItem.js'

class Projects extends Component {
  constructor (props) {
    super()

    this.state = {
      selectedFilter: props.category
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
      if (this.props.category === undefined) {
        return true
      } else {
        return this.props.category === proj.category
      }
    }).map((proj) => {
      return <ProjectItem key={proj.id} project={proj} />
    })

    const filters = ProjectsContent.categories.map((cat) => {
      const active = this.props.category === cat
        ? s.active_filter
        : ''

      return (
        <li key={cat} className={active}>
          <a href='#' onClick={this.setFilter.bind(this, cat)}>{cat}</a>
        </li>
      )
    })

    return (
      <div>
        <ul className={s.projects}>
          {projects}
        </ul>
      </div>
    )
  }
}

Projects.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.object
}

export default withStyles(Projects, s)
