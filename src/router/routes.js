export default [
    {
        path: '/', component: () => import('@/layout/layout-main.vue'),
        children: [
            {
                // Главная
                path: '/',
                name: 'home',
                component: () => import('@/views/home.vue'),
            },
            {
                // Дополнительная главная страница с футером
                path: '/home-footer',
                name: 'home-footer',
                component: () => import('@/views/home-footer.vue'),
            }
        ]
    }
];
