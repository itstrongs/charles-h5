import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import Home from '@/components/Home';
import Learn from '@/components/learn/ElementLearn';

Vue.use(Router);

//在路由跳转的时候同一个路由多次添加是不被允许的
//重写路由的push方法
const VueRouterPush = Router.prototype.push
Router.prototype.push = function push(to) {
    return VueRouterPush.call(this, to).catch(err => err)
}

const router = new Router({
    routes: [
        { path: '/', redirect: '/login' },
        { path: '/login', name: 'Login', component: Login },
        { path: '/home', name: 'home', component: Home },
        { path: '/learn', name: 'Learn', component: Learn },
    ]
});

// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
    if (to.path === '/login') {
        next();
    } else {
        let token = localStorage.getItem('Authorization');

        if (token === 'null' || token === '') {
            next('/login');
        } else {
            next();
        }
    }
});

export default router;