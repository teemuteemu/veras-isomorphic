/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react'
import cx from 'classnames'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import s from './Navigation.scss'
import Link from '../Link'

function NavigationItem ({ path, label, currentPath }) {
  const classes = [ s.link ]
  if (path === currentPath) {
    classes.push('active')
  }

  return (
    <Link className={classes.join(' ')} to={path}>{label}</Link>
  )
}

function Navigation ({ className, currentPath }) {
  return (
    <div className={cx(s.root, className)} role='navigation'>
      <NavigationItem path='/projects' label='Projects' currentPath={currentPath} />
      <NavigationItem path='/contact' label='Contact' currentPath={currentPath} />
    </div>
  )
}

Navigation.propTypes = {
  currentPath: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default withStyles(Navigation, s)
