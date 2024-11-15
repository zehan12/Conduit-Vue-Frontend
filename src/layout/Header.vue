<script>
import { RouterLink } from 'vue-router';

export default {
    components: {
        RouterLink
    }
};
</script>

<template>
    <div class="px-72 flex justify-between py-4">
        <h4 class="text-green-500/95 text-xl font-semibold">Conduit</h4>
        <nav class="flex gap-7">
            <RouterLink 
                class="text-gray-400 hover:text-black" 
                active-class="text-black"
                to="/">
                Home
            </RouterLink>
            <RouterLink 
                class="text-gray-400 hover:text-black" 
                exact-active-class="text-black" 
                to="/login">
                Sign in
            </RouterLink>
            <RouterLink 
                class="text-gray-400 hover:text-black" 
                active-class="text-black"
                to="/register">
                Sign up
            </RouterLink>
        </nav>
    </div>
</template>

<style scoped>
.text-black {
    color: rgb(18, 17, 17);
}

</style>