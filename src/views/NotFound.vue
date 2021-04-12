<template>
<header class="w-full px-3 antialiased bg-four-oh-four select-none lg:px-6 h-screen">
    <div class="mx-auto max-w-7xl">
        <nav class="flex items-center w-full h-24" x-data="{ showMenu: false }">
            <div class="relative flex flex-wrap items-center justify-between w-full h-24 mx-auto font-medium md:justify-center">
                <router-link to="/" class="w-1/4 py-4 pl-6 pr-4 md:pl-4 md:py-0">
                    <span class="text-xl font-black leading-none text-white select-none logo">my.awesomeBible<span class="text-pink-500">.</span></span>
                </router-link>
                <div class="fixed top-0 left-0 z-40 items-center hidden w-full h-full p-3 text-xl bg-gray-900 bg-opacity-50 md:text-sm lg:text-base md:w-3/4 md:bg-transparent md:p-0 md:relative md:flex" :class="{'flex': showMenu, 'hidden': !showMenu }">
                    <div class="flex-col w-full h-auto overflow-hidden bg-white rounded-lg select-none md:bg-transparent md:rounded-none md:relative md:flex md:flex-row md:overflow-auto">
                        <div class="flex flex-col items-center justify-center w-full h-full mt-12 text-center text-indigo-700 md:text-indigo-200 md:w-2/3 md:mt-0 md:flex-row md:items-center">
                            <router-link to="/" class="inline-block px-4 py-2 mx-2 font-medium text-left text-indigo-700 md:text-white md:px-0 lg:mx-3 md:text-center">Home</router-link>
                            <router-link to="/#features" class="inline-block px-0 py-2 mx-2 font-medium text-left md:px-0 hover:text-indigo-800 md:hover:text-white lg:mx-3 md:text-center">Features</router-link>
                            <a href="https://github.com/awesomebible/my-united/discussions/categories/blog" class="inline-block px-0 py-2 mx-2 font-medium text-left md:px-0 hover:text-indigo-800 md:hover:text-white lg:mx-3 md:text-center">Blog</a>
                            <router-link to="/kontakt" class="inline-block px-0 py-2 mx-2 font-medium text-left md:px-0 hover:text-indigo-800 md:hover:text-white lg:mx-3 md:text-center">Kontakt</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
        <div class="container py-32 mx-auto text-center sm:px-4">

            <h1 class="text-4xl font-extrabold leading-10 tracking-tight text-white sm:text-5xl sm:leading-none md:text-6xl xl:text-7xl"><span class="block">Vielleicht ist es nur</span> <span class="relative inline-block mt-3 text-transparent text-white">eine Fata Morgana...</span></h1>
            <div class="max-w-lg mx-auto mt-6 text-sm text-center text-white md:mt-12 sm:text-base md:max-w-xl md:text-lg xl:text-xl">Wir konnten leider nicht finden, was du suchst...</div>
        </div>
    </div>
</header>
</template>
