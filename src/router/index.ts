import { HomePage } from '@/pages/HomePage'
import { XOXGame } from '@/pages/XOX'
import { MemoGame } from '@/pages/MemoGame'
import { Quiz } from '@/pages/Quiz'
import { RPS } from '@/pages/RPS'

import { ErrorPage } from '@/pages/ErrorPage'

import { IRoute } from '@/utils/types'

export const routesList: Array<IRoute> = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/xox',
        component: XOXGame,
    },
    {
        path: '/memo',
        component: MemoGame,
    },
    {
        path: '/quiz',
        component: Quiz,
    },
    {
        path: '/rps',
        component: RPS,
    },
    {
        path: '*',
        component: ErrorPage,
    },
]
