export default defineNuxtRouteMiddleware((to, from) => {
    const isLoggedIn = true;

    if (!isLoggedIn) {
        return navigateTo('/auth/login');
    }
})
