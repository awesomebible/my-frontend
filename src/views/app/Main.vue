<template>
    <header class="w-full px-6 mb-12 antialiased bg-white select-none">
        <div class="mx-auto max-w-7xl">
            <nav class="relative z-50 h-24" x-data="{ showMenu: false }">
                <div class="container relative flex flex-wrap items-center justify-between h-24 mx-auto font-medium border-b border-gray-200 lg:justify-center sm:px-4 md:px-2">
                    <a href="/" class="w-1/4 py-4 pr-4 md:py-0">
                        <span class="text-xl font-black leading-none text-gray-900 select-none logo">my.awesomeBible<span class="text-indigo-600">.</span></span>
                    </a>
                    <div class="top-0 left-0 items-start hidden w-full h-full p-4 text-sm bg-gray-900 bg-opacity-50 md:w-3/4 md:absolute lg:text-base md:h-auto md:bg-transparent md:p-0 md:relative md:flex" :class="{'flex fixed': showMenu, 'hidden': !showMenu }">
                        <div class="flex-col w-full h-auto overflow-hidden bg-white rounded-lg select-none md:bg-transparent md:rounded-none md:relative md:flex md:flex-row md:overflow-auto">
                            <a href="/" class="inline-flex items-center w-auto h-16 px-6 text-xl font-black leading-none text-gray-900 select-none md:hidden">my.awesomeBible<span class="text-indigo-600">.</span></a>
                            <div class="flex flex-col items-start justify-center w-full text-center md:w-2/3 md:mt-0 md:flex-row md:items-center">
                                <a href="/" class="inline-block w-full px-6 py-2 mx-0 font-medium text-left text-gray-600 md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center">Home</a>
                                <a href="/" class="inline-block w-full px-6 py-2 mx-0 font-medium text-left text-indigo-600 md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center">App</a>
                            </div>
                            <div class="flex flex-col items-start justify-end w-full pt-4 md:items-center md:w-1/3 md:flex-row md:py-0">
                                <a href="#" class="w-full px-6 py-2 mr-0 text-gray-700 md:px-0 lg:pl-2 md:mr-4 lg:mr-5 md:w-auto">Sign In</a>
                                <span class="inline-flex w-full shadow-sm md:rounded-full md:w-auto">
                                    <button class="inline-flex items-center w-full px-6 py-3 text-sm font-medium leading-4 text-white transition duration-150 ease-in-out bg-transparent bg-indigo-600 border border-transparent md:px-3 md:w-auto md:rounded-full lg:px-5 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700">Sign Up</button>
                                </span>
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
        </div>
    </header>
    <main class="py-20 bg-white">
        <div class="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8" v-if="step === 1">
            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl xl:text-6xl">
                Wähle ein Buch, dass du lesen willst.
            </h2>
            <div class="flex justify-center mt-8 space-x-3">
                <label class="inline-flex items-center mt-3">
                    <input v-model="bookselect.book" type="radio" class="form-radio h-5 w-5 text-purple-600" checked><span class="ml-2 text-gray-700">1. Mose</span>
                </label>
            </div>
            <div class="flex justify-center mt-8 space-x-3">
                <button @click.prevent="next()" class="inline-flex items-center w-full px-6 py-3 text-sm font-medium leading-4 text-white transition duration-150 ease-in-out bg-transparent bg-green-600 border border-transparent md:px-3 md:w-auto lg:px-5 hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-indigo active:bg-indigo-700">Weiter</button>
            </div>
        </div>
        <div class="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8" v-if="step === 2">
            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl xl:text-6xl">
                Wähle das Kapitel, dass du lesen willst.
            </h2>
            <div class="flex justify-center mt-8 space-x-3">
                <label class="inline-flex items-center mt-3">
                    <input v-model="bookselect.chapter" type="radio" class="form-radio h-5 w-5 text-purple-600" checked><span class="ml-2 text-gray-700">Kapitel 1</span>
                </label>
            </div>
            <div class="flex justify-center mt-8 space-x-3">
                <button @click.prevent="finish()" class="inline-flex items-center w-full px-6 py-3 text-sm font-medium leading-4 text-white transition duration-150 ease-in-out bg-transparent bg-green-600 border border-transparent md:px-3 md:w-auto lg:px-5 hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-indigo active:bg-indigo-700">Weiter</button>
            </div>
        </div>
        <div class="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8" v-if="step === 3">
            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl md:text-5xl xl:text-6xl">
                {{bookselect.readableTitle}}
            </h2>
            <div class="flex justify-center mt-8 space-x-3">
                <p>{{content}}</p>
            </div>
        </div>
    </main>
</template>
<script>
export default {
        data(){
            return {
            step:1,
            bookselect:{
                book: null,
                chapter: null,
                verse: null,
                readableTitle: null,
                content: null
            }
        }
    },
    methods: {
        prev() {
        this.step--;
        },
        next() {
        this.step++;
        },
        finish() {
        this.step++;
        url = "https://raw.githubusercontent.com/awesomebible/my-api/main/v1/"++"/"+null+".json";
        fetch()
        }
    }
}
</script>