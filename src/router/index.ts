import { HomePage } from '@pages/HomePage'
import { QuizGame } from '@pages/QuizGame'
import { ErrorPage } from '@pages/ErrorPage'

import { IRoute } from '@utils/types'

export const routesList: Array<IRoute> = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/quiz',
        component: QuizGame,
    },
    {
        path: '*',
        component: ErrorPage,
    },
]
