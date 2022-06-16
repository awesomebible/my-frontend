<template>
    <header class="w-full px-6 mb-12 antialiased bg-white dark:bg-slate-800 select-none">
    <div class="mx-auto max-w-7xl">
        <nav class="relative z-50 h-24">
            <div class="container relative flex flex-wrap items-center justify-between h-24 mx-auto font-medium border-b border-gray-200 lg:justify-center sm:px-4 md:px-2">
                <div class="w-1/4 py-4 pr-4 md:py-0">
                    <span class="text-xl font-black leading-none text-gray-900 dark:text-gray-100 select-none logo">my.awesomeBible<span class="text-indigo-600">.</span></span>
                </div>
                <div class="top-0 left-0 items-start hidden w-full h-full p-4 text-sm bg-gray-900 bg-opacity-50 md:w-3/4 md:absolute lg:text-base md:h-auto md:bg-transparent md:p-0 md:relative md:flex" :class="{'flex fixed': showMenu, 'hidden': !showMenu }">
                    <div class="flex-col w-full h-auto overflow-hidden bg-white rounded-lg select-none md:bg-transparent md:rounded-none md:relative md:flex md:flex-row md:overflow-auto">
                        <a href="#" class="inline-flex items-center w-auto h-16 px-6 text-xl font-black leading-none text-gray-900 select-none md:hidden">my.awesomeBible<span class="text-indigo-600">.</span></a>
                        <div class="flex flex-col items-start justify-center w-full text-center md:w-2/3 md:mt-0 md:flex-row md:items-center">
                            <a class="inline-block w-full px-6 py-2 mx-0 font-medium text-left text-indigo-600 dark:text-indigo-300 md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center">Home</a>
                            <a href="#features" class="inline-block w-full px-6 py-2 mx-0 font-medium text-left text-gray-700 dark:text-indigo-300 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center">Lesen</a>
                            <a href="https://awesomebible.codeberg.page/" class="inline-block w-full px-6 py-2 mx-0 font-medium text-left text-gray-700 dark:text-indigo-300 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center">Merken</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</header>
<main class="text-center mx-60 lg:gap-10 grid grid-cols-5 gap-3">
    <div id="compose-form">
        <h2 class="font-bold text-2xl">Verfasse einen Post</h2>
        <textarea v-model="postContent" class="inline-flex items-center justify-center resize-none appearance-none relative px-3 py-2 mt-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" rows="3" placeholder="Was gibt's neues?"></textarea>
        
        <button @click="Submit" class="inline-flex text-white
                mr-4 mt-4 py-2 px-4 rounded-md file:border-0 text-sm font-semibold bg-indigo-600 hover:bg-indigo-700
            ">
            Post senden
        </button>
    </div>
    <div id="feed" class="col-span-4">
        hallo
    </div>
</main>
</template>
<script>
export default {
      data() {
        return {
        postContent:"Hallo",
        }
      },
    methods: {
        Submit() {
        alert(this.postContent)
        this.axios.post('http://localhost:5000/post/new', {
            content: this.postContent
        }).then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
        }
    },
}
</script>