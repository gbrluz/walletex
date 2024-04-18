import {Transactions} from '../pages'
import {Wallet} from '../pages'
import {Settings} from '../pages'

const routes = [
    {
        path: '/transactions',
        name: 'Transactions',
        component: Transactions
    },
    {
        path: '/wallet',
        name: 'Wallet',
        component: Wallet
    },
    {
        path: '/settings',
        name: 'Settings',
        component: Settings
    }
]

export default routes