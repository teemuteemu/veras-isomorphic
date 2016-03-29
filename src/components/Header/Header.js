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
import s from './Header.scss'
import Link from '../Link'

import ProjectsContent from '../../content/projects.json'

function Header () {
  const siteTitle = ProjectsContent.title

  return (
    <div className={s.root}>
      <div className={s.container}>
        <Link className={s.brand} to='/'>
          <span className={s.brandTxt}>{siteTitle}</span>
        </Link>
      </div>
    </div>
  )
}

Header.propTypes = {
}

export default withStyles(Header, s)
