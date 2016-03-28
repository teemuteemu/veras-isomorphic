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

import ProjectsContent from '../../content/projects.json'

function MenuBarItem ({category, active}) {
  const href=`/${category}`

  return (
    <li key={category} className={active}>
      <Link to={href} >{category}</Link>
    </li>
  )
}

class MenuBar extends React.Component {

  render () {
    const menuBarElements = ProjectsContent.categories.map((cat) => <MenuBarItem key={cat} category={cat} active={false} />)

    return (
      <div className={s.root}>
        <ul className={s.container}>
          {menuBarElements}
        </ul>
      </div>
    )
  }
}

export default withStyles(MenuBar, s);
