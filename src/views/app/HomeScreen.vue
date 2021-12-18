<template>
    <header class="w-full px-6 mb-12 antialiased bg-white select-none">
    <div class="mx-auto max-w-7xl">
        <nav class="relative z-50 h-24">
            <div class="container relative flex flex-wrap items-center justify-between h-24 mx-auto font-medium border-b border-gray-200 lg:justify-center sm:px-4 md:px-2">
                <div class="w-1/4 py-4 pr-4 md:py-0">
                    <span class="text-xl font-black leading-none text-gray-900 select-none logo">my.awesomeBible<span class="text-indigo-600">.</span></span>
                </div>
                <div class="top-0 left-0 items-start hidden w-full h-full p-4 text-sm bg-gray-900 bg-opacity-50 md:w-3/4 md:absolute lg:text-base md:h-auto md:bg-transparent md:p-0 md:relative md:flex" :class="{'flex fixed': showMenu, 'hidden': !showMenu }">
                    <div class="flex-col w-full h-auto overflow-hidden bg-white rounded-lg select-none md:bg-transparent md:rounded-none md:relative md:flex md:flex-row md:overflow-auto">
                        <a href="#" class="inline-flex items-center w-auto h-16 px-6 text-xl font-black leading-none text-gray-900 select-none md:hidden">my.awesomeBible<span class="text-indigo-600">.</span></a>
                        <div class="flex flex-col items-start justify-center w-full text-center md:w-2/3 md:mt-0 md:flex-row md:items-center">
                            <a class="inline-block w-full px-6 py-2 mx-0 font-medium text-left text-indigo-600 md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center">Home</a>
                            <a href="#features" class="inline-block w-full px-6 py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center">Lesen</a>
                            <a href="https://awesomebible.codeberg.page/" class="inline-block w-full px-6 py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center">Merken</a>
                        </div>
                    </div>
                </div>
                <div @click="showMenu = !showMenu" class="absolute right-0 flex flex-col items-center justify-center w-10 h-10 rounded-full cursor-pointer md:hidden hover:bg-gray-100">
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
<main class="text-center mx-60 gab-5 lg:gap-10">
    <div id="compose-form">
        <h2 class="font-bold text-2xl">Verfasse einen Post</h2>
        <textarea v-model="postContent" class="inline-flex items-center justify-center resize-none appearance-none relative px-3 py-2 mt-4 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" rows="3" placeholder="Was gibt's neues?"></textarea>
        <br>
        <div class="inline-flex items-center justify-center px-5 py-5 my-5 mr-5">
            <label class="block">
            <span class="sr-only">Lade Bilder hoch</span>
            <input type="file" class="block w-full text-sm text-gray-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-md file:border-0
                file:text-sm file:font-semibold
                file:bg-indigo-600 file:text-white
                hover:file:bg-indigo-700
            "/>
            </label>
        </div>
        <button @click="onSubmit" class="inline-flex items-center justify-center text-white
                mr-4 mt-4 py-2 px-4 rounded-md file:border-0 text-sm font-semibold bg-indigo-600 hover:bg-indigo-700
            ">
            Post senden
        </button>
    </div>
    <div id="feed" class="">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam labore rem, maiores saepe voluptatum fugit sequi recusandae, a debitis natus corrupti neque quibusdam! Eligendi odit cupiditate id numquam accusantium minima?
    </div>
</main>
</template>
<script>
import { v4 as uuidv4 } from 'uuid';

export default {
    data() {
        return {
            AttatchedFilename: "Noch keine Datei angehängt.",
            postTitle: null,
            postContent: null
        }
    },
    methods: {
        onPickFile () {
            this.$refs.fileInput.click()
        },
        onFilePicked (event) {
            const files = event.target.files
            let filename = files[0].name
            this.AttatchedFilename = filename
            const fileReader = new FileReader()
            fileReader.addEventListener('load', () => {
                this.imageUrl = fileReader.result
            })
            fileReader.readAsDataURL(files[0])
            this.image = files[0]
        },
        onSubmit() {
            if (!this.filename){
                    const formData = new FormData();
                    formData.append('file', this.image);
                    const headers = { 'Content-Type': 'multipart/form-data' };
                    this.axios.post('/api/create-file', formData, { headers }).then((res) => {
                    res.data.files; // binary representation of the file
                    res.status; // HTTP status
                })
                .then(function (response) {
                    console.log(response.data);
                    console.log(response.status);
                    console.log(response.statusText);
                    console.log(response.headers);
                    console.log(response.config);
                });
            }
            this.axios.post('/api/create-post', {
                postTitle: this.postTitle,
                postContent: this.postContent,
            })
        .then(function (response) {
                console.log(response);
            })
        .catch(function (error) {
                console.log(error);
            });
        }
    }
}
</script>