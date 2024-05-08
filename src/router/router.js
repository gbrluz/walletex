import {Transactions} from '../pages'
import {Wallet} from '../pages'
import {Settings} from '../pages'

const routes = [
    {
        path: '/Transações',
        name: 'Transações',
        component: Transactions
    },
    {
        path: '/carteira',
        name: 'Carteira',
        component: Wallet
    },
    {
        path: '/Configurações',
        name: 'Configurações',
        component: Settings
    },
    {
        path: '/',
        redirect:"/carteira"
    }
]

export default routes