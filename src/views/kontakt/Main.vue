<template>
    <section class="w-full px-6 mb-12 antialiased bg-white select-none">
    <div class="mx-auto max-w-7xl">
        <nav class="relative z-50 h-24" x-data="{ showMenu: false }">
            <div class="container relative flex flex-wrap items-center justify-between h-24 mx-auto font-medium border-b border-gray-200 lg:justify-center sm:px-4 md:px-2">
                <router-link to="/" class="w-1/4 py-4 pr-4 md:py-0">
                    <span class="text-xl font-black leading-none text-gray-900 select-none logo">my.awesomeBible<span class="text-indigo-600">.</span></span>
                </router-link>
                <div class="top-0 left-0 items-start hidden w-full h-full p-4 text-sm bg-gray-900 bg-opacity-50 md:w-3/4 md:absolute lg:text-base md:h-auto md:bg-transparent md:p-0 md:relative md:flex" :class="{'flex fixed': showMenu, 'hidden': !showMenu }">
                    <div class="flex-col w-full h-auto overflow-hidden bg-white rounded-lg select-none md:bg-transparent md:rounded-none md:relative md:flex md:flex-row md:overflow-auto">
                        <router-link to="/" class="inline-flex items-center w-auto h-16 px-6 text-xl font-black leading-none text-gray-900 select-none md:hidden">my.awesomeBible<span class="text-indigo-600">.</span></router-link>
                        <div class="flex flex-col items-start justify-center w-full text-center md:w-2/3 md:mt-0 md:flex-row md:items-center">
                            <router-link to="/" class="inline-block w-full px-6 py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center">Home</router-link>
                            <router-link to="/#features" class="inline-block w-full px-6 py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center">Features</router-link>
                            <a href="https://codeberg.org/awesomebible/my-united/issues?q=&type=all&state=open&labels=14798&milestone=0&assignee=0" class="inline-block w-full px-6 py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center">Blog</a>
                            <router-link to="/kontakt" class="inline-block w-full px-6 py-2 mx-0 font-medium text-left text-indigo-600 md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center">Kontakt</router-link>
                        </div>
                    </div>
                </div>
                <div @click="showMenu = !showMenu" class="absolute right-0 flex flex-col items-center items-end justify-center w-10 h-10 rounded-full cursor-pointer md:hidden hover:bg-gray-100">
                    <svg class="w-6 h-6 text-gray-700" x-show="!showMenu" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                    <svg class="w-6 h-6 text-gray-700" x-show="showMenu" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style="display: none;">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </div>
            </div>
        </nav>
        <div class="container max-w-lg px-4 py-32 mx-auto text-left md:max-w-none md:text-center" id="">

            <h1 class="text-5xl font-extrabold tracking-tight text-left text-gray-900 leading-tightest md:leading-10 md:text-center sm:leading-none md:text-6xl lg:text-7xl"><span class="inline md:block" id="">Hast du eine Frage?</span> <span class="relative mt-2 text-transparent md:inline-block bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500" id="">Stell sie. Wir haben antworten, die wir dir gerne geben würden!</span></h1>
            <div class="mx-auto mt-5 text-gray-500 md:mt-12 md:max-w-lg md:text-center lg:text-lg" id=""></div>
        </div>
    </div>
</section>
<section class="w-full bg-white">

    <div class="mx-auto max-w-7xl">

        <div class="flex flex-col lg:flex-row">
            <div class="relative w-full bg-cover lg:w-6/12 xl:w-7/12 bg-gradient-to-r from-white via-white to-gray-100">

                <div class="relative flex flex-col items-center justify-center w-full h-full px-10 my-20 lg:px-16 lg:my-0">
                    <div class="flex flex-col items-start space-y-8 tracking-tight lg:max-w-3xl">
                        <div class="relative">
                            <h2 class="text-5xl font-bold text-gray-900 xl:text-6xl">Wir sind hier, um dir zu helfen.</h2>
                        </div>
                        <p class="text-2xl text-gray-700">Keine Frage ist zu dumm, kein Wunsch zu wenig. Auch wenn du nur mal eben Hallo sagen willst - wir sind für dich da!</p>
                    </div>
                </div>
            </div>

            <div class="w-full bg-white lg:w-6/12 xl:w-5/12">

                <div class="flex flex-col items-start justify-start w-full h-full p-10 lg:p-16 xl:p-24">
                    <h4 class="w-full text-3xl font-bold">Schreib uns!</h4>
                    <p class="text-lg text-gray-500"></p>
                    <div class="relative w-full mt-10 space-y-8">
                        <a href="https://codeberg.org/awesomebible/my-united/issues" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>Codeberg Issues
                        </a>
                        <a href="https://awesomebible.de/kontakt/" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700">
                        <svg xmlns="http://www.w3.org/2000/svg"  class="w-5 h-5 mr-2" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                        </svg>Zum Kontaktformular
                        </a>
                        <a href="mailto:hi@awesomebible.de" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mr-2" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>Schreib uns per E-Mail
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
<footer class="bg-gradient-to-br from-purple-200 to-blue-200">
    <div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav class="flex flex-wrap justify-center -mx-5 -my-2">
            <div class="px-5 py-2">
                <a href="https://codeberg.org/awesomebible/my-united/issues?q=&type=all&state=open&labels=14798&milestone=0&assignee=0" class="text-base leading-6 text-black-500 hover:text-black-900">
                    Blog
                </a>
            </div>
            <div class="px-5 py-2">
                <router-link to="/kontakt" class="text-base leading-6 text-black-500 hover:text-black-900">
                    Kontakt
                </router-link>
            </div>
        </nav>
        <p class="mt-8 text-base leading-6 text-center text-black-400" id="">© 2021 awesomeBible</p>
    </div>
</footer>       
</template>