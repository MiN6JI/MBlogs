import { ref, computed } from 'vue';

export function useAuth() {
    const user = ref(process.client ? JSON.parse(localStorage.getItem('user')) : null);

    function setUser(name) {
        const data = { name }
        user.value = data
        localStorage.setItem('user', JSON.stringify(data))
    }

    function getUser() {
        return user.value
    }

    function removeUser() {
        user.value = null
        localStorage.removeItem('user')
    }

    const isLoggedIn = computed(() => {
        if (process.client) {
            return !!localStorage.getItem('user')
        }
        return false
    })

    return { setUser, getUser, removeUser, isLoggedIn }
}