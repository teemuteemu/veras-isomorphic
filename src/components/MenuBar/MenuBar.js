/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './MenuBar.scss';
import Link from '../Link';

import ContactMenu from '../ContactMenu'

import ProjectsContent from '../../content/projects.json'

function MenuBarItem ({category, active}) {
  const href=`/${category}`

  const activeClass = active === true
    ? s.active_menu_item
    : ''

  const classNames = [
    s.menu_item,
    activeClass
  ].join(' ')

  return (
    <li key={category} className={classNames}>
      <Link to={href} >{category}</Link>
    </li>
  )
}

class MenuBar extends React.Component {
  constructor () {
    super()

    this.state = {
      contactMenuOpen: false
    }
  }

  toggleContact (e) {
    e.preventDefault()

    this.setState({
      contactMenuOpen: !this.state.contactMenuOpen
    })
  }

  render () {
    const currentPath = this.props.currentPath
    const menuBarElements = ProjectsContent.categories.map((cat) => {
      const active = currentPath === `/${cat}`
      return (
        <MenuBarItem key={cat} category={cat} active={active} />
      )
    })
   
    const contactMenu = this.state.contactMenuOpen === true
      ? (<ContactMenu />)
      : undefined

    const contactMenuActive = this.state.contactMenuOpen === true
      ? s.active_menu_item
      : undefined

    const contactMenuClassNames = [
      s.menu_item,
      contactMenuActive
    ].join(' ')

    return (
      <div className={s.root}>
        <ul className={s.menu_container}>
          {menuBarElements}

          <li className={contactMenuClassNames}>
            <a href='#' onClick={this.toggleContact.bind(this)}>contact</a>
          </li>
        </ul>

        <div className={s.content_container}>
          <div className={s.page_container}>
            {this.props.children}
          </div>
          <div className={s.right_menu_container}>
            {contactMenu}
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(MenuBar, s);
