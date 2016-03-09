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
import s from './Contact.scss'

function Contact({ title }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>...</p>
    </div>
  )
}

Contact.propTypes = { title: PropTypes.string.isRequired }

export default withStyles(Contact, s)
