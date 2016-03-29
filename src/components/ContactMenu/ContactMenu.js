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
import s from './ContactMenu.scss';
import Link from '../Link';

function ContactMenu() {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <h2>Contact</h2>
        <p>Here comes some contact information</p>
      </div>
    </div>
  );
}

export default withStyles(ContactMenu, s);
