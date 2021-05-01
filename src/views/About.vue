<template>
    <header class="w-full px-6 mb-12 antialiased bg-white select-none">
    <div class="mx-auto max-w-7xl">
        <HomeNavbar />
        <div class="container max-w-lg px-4 py-32 mx-auto text-left md:max-w-none md:text-center" id="">
            <h1 class="text-5xl font-extrabold tracking-tight text-left text-gray-900 leading-tightest md:leading-10 md:text-center sm:leading-none md:text-6xl lg:text-7xl"><span class="inline md:block" id="">Wir</span> <span class="relative mt-2 text-transparent md:inline-block bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500" id="">über uns</span></h1>
            <div class="mx-auto mt-5 text-gray-500 md:mt-12 md:max-w-lg md:text-center lg:text-lg" id="">Unsere Werte, </div>
        </div>
    </div>
</header>
<main>
    <h2 class="black text-3xl font-bold tracking-tight text-center">Gemeinschaft</h2>
    <p class="text-base text-center text-gray-500 pb-10">Hier könnte deine Werbung stehen</p>

    <h2 class="black text-3xl font-bold tracking-tight text-center">Gemeinschaft</h2>
    <p class="text-base text-center text-gray-500 pb-10">Hier könnte deine Werbung stehen</p>

    <h2 class="black text-3xl font-bold tracking-tight text-center">Gemeinschaft</h2>
    <p class="text-base text-center text-gray-500 pb-10">Hier könnte deine Werbung stehen</p>
</main>
<footer>
    <FooterComponent />
</footer>
</template>
<script>
import HomeNavbar from '@/components/HomeNavbar.vue';
import FooterComponent from '@/components/FooterComponent.vue';
export default {
  components: { HomeNavbar, FooterComponent },
}
</script>