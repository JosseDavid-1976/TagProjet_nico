import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ProchainPassage from '@/components/ProchainPassage'
import Destination from '@/components/Destination'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: HelloWorld
        },
        {
            path: '/passage',
            name: 'ProchainPassage',
            component: ProchainPassage
        },
        {
            path: '/destination',
            name: 'Destination',
            component: ProchainPassage
        }
    ]
})
