import React, { Component, PropTypes } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Projects.scss'

import ProjectsContent from '../../content/projects.json'

import ProjectItem from '../../components/ProjectItem/ProjectItem.js'

class Projects extends Component {
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
      return <ProjectItem key={proj.id} project={proj} />
    })

    const filters = ProjectsContent.categories.map((cat) => {
      const active = this.state.selectedFilter === cat
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
        <h1>{this.props.title}</h1>
        <ul className={s.filters}>
          <li>Filter:</li>
          { filters }
        </ul>

        <ul className={s.projects}>
          {projects}
        </ul>
      </div>
    )
  }
}

Projects.propTypes = {
  title: PropTypes.string.isRequired
}

export default withStyles(Projects, s)
