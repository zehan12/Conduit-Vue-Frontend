<script setup lang="ts">
import { reactive, ref } from "vue";

const user = reactive({
    username: "zehan1222222",
    email: "test111@gmail.com",
    password: "123456789",
});

const error = ref({
    message: ""
})

const register = async () => {
    const { email, username, password } = user;
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ user }),
    };

    try {
        const response = await fetch(
            // "https://conduitapi.onrender.com/api/users",
            "http://localhost:3000/api/users",
            requestOptions
        );

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data, "response");
    } catch (err) {
        console.log("Error during register request:", err);
        error.value.message = err;
        console.log("error",err)
    }
};
</script>

<template>
    <div class="flex flex-col items-center w-full my-10">
        <div class="flex flex-col gap-3">
            <h1 class="text-4xl">Sign up</h1>
            <p class="text-sm text-green-600">Have an account?</p>
        </div>
        <form @submit.prevent="register" class="flex flex-col gap-3 my-6 w-4/12">
            <input v-model="user.username" class="border-[0.4px] p-4 w-full rounded-lg outline-blue-400" type="text"
                placeholder="Username" />
            <input v-model="user.email" class="border-[0.4px] p-4 w-full rounded-lg outline-blue-400" type="text"
                placeholder="Email" />
            <input v-model="user.password" class="border-[0.4px] p-4 w-full rounded-lg outline-blue-400" type="password"
                placeholder="Password" />
            <div class="h-4 text-xs text-red-700">
                {{error.message}}
            </div>
            <div class="flex justify-end">
                <button class="bg-green-500 hover:bg-green-500/90 text-white px-7 py-3 rounded-md text-lg">
                    Sign up
                </button>
            </div>
        </form>
    </div>
</template>
