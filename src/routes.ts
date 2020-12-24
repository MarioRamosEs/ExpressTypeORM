import { postGetAllAction } from './controller/PostGetAllAction'
import { postDeleteAllAction } from './controller/PostDeleteAllAction'
import { postGetByIdAction } from './controller/PostGetByIdAction'
import { postSaveAction } from './controller/PostSaveAction'

import { categoriesGetAllAction } from './controller/CategoriesGetAllAction'

/**
 * All application routes.
 */
export const AppRoutes = [
  {
    path: '/posts',
    method: 'get',
    action: postGetAllAction
  },
  {
    path: '/posts/:id',
    method: 'get',
    action: postGetByIdAction
  },
  {
    path: '/posts',
    method: 'post',
    action: postSaveAction
  },
  {
    path: '/posts',
    method: 'delete',
    action: postDeleteAllAction
  },

  {
    path: '/categories',
    method: 'get',
    action: categoriesGetAllAction
  },
]
