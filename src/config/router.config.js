module.exports = [{
    path: '/user',
    component: '../components/Layout/UserLayout',
    routes: [{
        path: '/login', redirect: '../pages/login'
    },{
        path: '/register', redirect: '../pages/register'
    }]
},{
    path: '/',
    component: '../components/Layout/BaseicLayout',
    routes: [{
        path: '/', redirect: '../pages/home'
    }]
}]