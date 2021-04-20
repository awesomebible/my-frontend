<template>
    <header class="flex justify-center">
        <h1 class="text-3xl font-extrabold tracking-tight text-left text-gray-900 leading-tightest md:leading-10 md:text-center sm:leading-none md:text-6xl lg:text-3xl">Hallo  <span class="relative mt-2 text-transparent md:inline-block bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500" id="">{{username}}</span>!</h1>
    </header>
</template>
<script>
export default {
    data(){
        return {
            username: "Benjamin"
        }
    }
}
</script>
