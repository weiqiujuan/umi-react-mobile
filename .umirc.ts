import { defineConfig } from 'umi';

export default defineConfig({
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/register', component: '@/pages/register' },
    { path: '/login', component: '@/pages/login' },
  ],

  fastRefresh: true,
  tailwindcss: {},
  plugins: ['@umijs/plugins/dist/tailwindcss'],
});
