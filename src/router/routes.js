export default [
    {
        path: '/', component: () => import('@/layout/layout-main.vue'),
        children: [
            {
                /* Главная */
                path: '/',
                name: 'home',
                component: () => import('@/views/home.vue'),
            },
        ]
    }
];
