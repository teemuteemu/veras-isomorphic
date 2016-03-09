/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Project from './Project';

import ProjectsContent from '../../content/projects.json'

export const path = '/project/:id';

export const action = async (state) => {
  const id = state.params.id
  const project = ProjectsContent.projects.filter((proj) => {
    return proj.id === id
  })[0]

  if (project) {
    state.context.onSetTitle(project.title);
    return <Project project={project} />;
  }
};
