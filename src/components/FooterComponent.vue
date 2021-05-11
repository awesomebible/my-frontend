<template>
    <footer class="bg-footer-texture">
    <div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav class="flex flex-wrap justify-center -mx-5 -my-2">
            <div class="px-5 py-2">
                <a href="https://awesomebible.codeberg.page/" class="text-base leading-6 text-black-500 hover:text-black-900">
                    Blog
                </a>
            </div>
            <div class="px-5 py-2">
                <router-link to="/kontakt" class="text-base leading-6 text-black-500 hover:text-black-900">
                    Kontakt
                </router-link>
            </div>
            <div class="px-5 py-2">
                <a href="https://codeberg.org/awesomebible/my" class="text-base leading-6 text-black-500 hover:text-black-900">
                    Codeberg
                </a>
            </div>
        </nav>
        <p class="mt-8 text-base leading-6 text-center text-black-400">© 2021 awesomeBible</p>
    </div>
</footer>
</template>