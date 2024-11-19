<script>
import { RouterLink } from 'vue-router';

export default {
    components: {
        RouterLink
    }
};
</script>

<template>
    <div class="px-4 sm:px-8 md:px-16 lg:px-20 xl:px-36 2xl:px-72 flex flex-col md:flex-row justify-between py-3">
        <h4 class="text-[#5CB85C] text-xl font-semibold text-center md:text-left">conduit</h4>
        <nav class="flex flex-col md:flex-row gap-4 md:gap-7 mt-4 md:mt-0">
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
