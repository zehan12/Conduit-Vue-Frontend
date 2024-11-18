<script setup lang="ts">
import { reactive } from "vue";

const user = reactive({
    username: "zehan1222222",
    email: "test111@gmail.com",
    password: "123456789",
});

const login = async () => {
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
            "https://conduitapi.onrender.com/api/users/login",
            // "http://localhost:3000/api/users/login",
            requestOptions
        );

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const responseJson = await response.json();
        console.log(responseJson.user)
        localStorage.setItem('token', responseJson.user.token)
        console.log(responseJson, "response");
    } catch (error) {
        console.log("Error during login request:", error);
    }
};
</script>

<template>
    <div class="flex flex-col items-center w-full my-10">
        <div class="flex flex-col gap-3">
            <h1 class="text-4xl">Sign in</h1>
            <p class="text-sm text-green-600">Need a account?</p>
        </div>
        <form @submit.prevent="login" class="flex flex-col gap-3 my-6 w-4/12">
            <input
                v-model="user.username"
                class="border-[0.4px] p-4 w-full rounded-lg outline-blue-400"
                type="text"
                placeholder="Username"
            />
            <input
                v-model="user.email"
                class="border-[0.4px] p-4 w-full rounded-lg outline-blue-400"
                type="text"
                placeholder="Email"
            />
            <input
                v-model="user.password"
                class="border-[0.4px] p-4 w-full rounded-lg outline-blue-400"
                type="password"
                placeholder="Password"
            />
            <div class="flex justify-end">
                <button
                    class="bg-green-500 hover:bg-green-500/90 text-white px-7 py-3 rounded-md text-lg"
                >
                    Sign up
                </button>
            </div>
        </form>
    </div>
</template>
