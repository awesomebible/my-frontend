<template>
<section class="w-full px-6 mb-12 antialiased bg-white select-none">
    <div class="mx-auto max-w-7xl">
        <nav class="relative z-50 h-24" x-data="{ showMenu: false }">
            <div class="container relative flex flex-wrap items-center justify-between h-24 mx-auto font-medium border-b border-gray-200 lg:justify-center sm:px-4 md:px-2">
                <a href="/" class="w-1/4 py-4 pr-4 md:py-0">
                    <span class="text-xl font-black leading-none text-gray-900 select-none logo">my.awesomeBible<span class="text-indigo-600">.</span></span>
                </a>
                <div class="top-0 left-0 items-start hidden w-full h-full p-4 text-sm bg-gray-900 bg-opacity-50 md:w-3/4 md:absolute lg:text-base md:h-auto md:bg-transparent md:p-0 md:relative md:flex" :class="{'flex fixed': showMenu, 'hidden': !showMenu }">
                    <div class="flex-col w-full h-auto overflow-hidden bg-white rounded-lg select-none md:bg-transparent md:rounded-none md:relative md:flex md:flex-row md:overflow-auto">
                        <a href="/" class="inline-flex items-center block w-auto h-16 px-6 text-xl font-black leading-none text-gray-900 select-none md:hidden">my.awesomeBible<span class="text-indigo-600">.</span></a>
                        <div class="flex flex-col items-start justify-center w-full text-center md:w-2/3 md:mt-0 md:flex-row md:items-center">
                            <a href="#" class="inline-block w-full px-6 py-2 mx-0 font-medium text-left text-indigo-600 md:w-auto md:px-0 md:mx-2 lg:mx-3 md:text-center">Home</a>
                            <a href="#features" class="inline-block w-full px-6 py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center">Features</a>
                            <a href="https://awesomebible.de" class="inline-block w-full px-6 py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center">Blog</a>
                            <a href="/kontakt" class="inline-block w-full px-6 py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3 md:text-center">Kontakt</a>
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
        <div class="container max-w-lg px-4 py-32 mx-auto text-left md:max-w-none md:text-center" id="">

            <h1 class="text-5xl font-extrabold tracking-tight text-left text-gray-900 leading-tightest md:leading-10 md:text-center sm:leading-none md:text-6xl lg:text-7xl"><span class="inline md:block" id="">Die Bibel ist ein Buch...</span> <span class="relative mt-2 text-transparent md:inline-block bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500" id="">tu was damit!</span></h1>
            <div class="mx-auto mt-5 text-gray-500 md:mt-12 md:max-w-lg md:text-center lg:text-lg" id="">Wir haben my.awesomeBible gebaut, damit du die Bibel auf deinem Level erleben kannst.</div>
            <div class="flex flex-col items-center mt-12 text-center">
                <span class="relative inline-flex w-full rounded-full shadow-sm md:w-auto">
                    <a type="button" href="/#pricing" class="inline-flex items-center justify-center w-full px-8 py-4 text-base font-bold leading-6 text-white transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-full md:w-auto hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700" id="">Worauf wartest du?</a>
                </span>
            </div>
        </div>
    </div>
</section>
<section class="py-20 bg-white" id="">
    <div class="container max-w-6xl mx-auto">
        <h2 class="text-4xl font-bold tracking-tight text-center" id="features">Was wir drauf haben...</h2>
        <p class="mt-2 text-lg text-center text-gray-600" id="">Eine Zusammenfassung von den wichtigsten Funktionen die my.awesomeBible bietet:</p>
        <div class="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0" id="">

            <div class="relative flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 overflow-hidden bg-gray-100 sm:rounded-xl bg-gradient-to-br from-purple-200 to-blue-200" id="">
                <div class="p-3 text-white bg-blue-500 rounded-full" id="">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" id="">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                        <path d="M5 8v-3a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2h-5" class=""></path>
                        <circle cx="6" cy="14" r="3" class=""></circle>
                        <path d="M4.5 17l-1.5 5l3 -1.5l3 1.5l-1.5 -5" class=""></path>
                    </svg>
                </div>
                <h4 class="text-xl font-medium text-gray-700" id="">Lies!</h4>
                <p class="text-base text-center text-gray-500" id="">Lies die Bibel so wie <b>du</b> möchtest: Lightmode, Darkmode, Comic Sans - alles ist dir überlassen.</p>
            </div>

            <div class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl bg-gradient-to-br from-red-200 to-orange-200">
                <div class="p-3 text-white bg-blue-500 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3" class=""></polyline>
                        <line x1="12" y1="12" x2="20" y2="7.5"></line>
                        <line x1="12" y1="12" x2="12" y2="21"></line>
                        <line x1="12" y1="12" x2="4" y2="7.5"></line>
                        <line x1="16" y1="5.25" x2="8" y2="9.75"></line>
                    </svg>
                </div>
                <h4 class="text-xl font-medium text-gray-700" id="">Merke!</h4>
                <p class="text-base text-center text-gray-500" id="">Merke dir Verse, damit du nie wieder Gottes Botschaft an dich vergisst.</p>
            </div>

            <div class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl bg-gradient-to-br from-green-200 to-blue-200">
                <div class="p-3 text-white bg-blue-500 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M18 8a3 3 0 0 1 0 6" class=""></path>
                        <path d="M10 8v11a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1v-5" class=""></path>
                        <path d="M12 8h0l4.524 -3.77a0.9 .9 0 0 1 1.476 .692v12.156a0.9 .9 0 0 1 -1.476 .692l-4.524 -3.77h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h8" class=""></path>
                    </svg>
                </div>
                <h4 class="text-xl font-medium text-gray-700" id="">Teile</h4>
                <p class="text-base text-center text-gray-500" id="">Wir haben es dir einfach gemacht, deine Gedanken mit anderen zu teilen.</p>
            </div>

            <div class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl bg-gradient-to-br from-pink-200 to-purple-200" id="">
                <div class="p-3 text-white bg-blue-500 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <line x1="9.5" y1="11" x2="9.51" y2="11"></line>
                        <line x1="14.5" y1="11" x2="14.51" y2="11"></line>
                        <path d="M9.5 15a3.5 3.5 0 0 0 5 0"></path>
                        <path d="M7 5h1v-2h8v2h1a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3v1h-10v-1a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3" class=""></path>
                    </svg>
                </div>
                <h4 class="text-xl font-medium text-gray-700" id="">Unabhängig</h4>
                <p class="text-base text-center text-gray-500" id="">
                    my.awesomeBible gehört keiner großen Firma, und finanziert sich komplett von selbst.
                    Wir müssen nicht deine Daten verkaufen um zu überleben, wir müssen uns nicht anpassen.
                    Wir können unsere Vision ausleben.
                </p>
            </div>

            <div class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl bg-gradient-to-br from-green-200 to-green-500">
                <div class="p-3 text-white bg-blue-500 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M8 9l3 3l-3 3"></path>
                        <line x1="13" y1="15" x2="16" y2="15"></line>
                        <rect x="3" y="4" width="18" height="16" rx="2"></rect>
                    </svg>
                </div>
                <h4 class="text-xl font-medium text-gray-700" id="">Datenschutz ist uns wichtig.</h4>
                <p class="text-base text-center text-gray-500">Unsere Server stehen in Deutschland. 
                    Wir werden deine Daten nie an irgendeine große Firma verkaufen, und du kannst sie jederzeit exportieren.</p>
            </div>

            <div class="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl bg-gradient-to-br from-yellow-200 to-yellow-500">
                <div class="p-3 text-white bg-blue-500 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 " viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <line x1="15" y1="5" x2="15" y2="7"></line>
                        <line x1="15" y1="11" x2="15" y2="13"></line>
                        <line x1="15" y1="17" x2="15" y2="19"></line>
                        <path d="M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-3a2 2 0 0 0 0 -4v-3a2 2 0 0 1 2 -2"></path>
                    </svg>
                </div>
                <h4 class="text-xl font-medium text-gray-700" id="">Open Source</h4>
                <p class="text-base text-center text-gray-500" id="">my.awesomeBible ist komplett open-source. Das bedeutet, jeder kann Sicherheitslücken im Code finden und neue Features hinzufügen.</p>
            </div>

        </div>
    </div>
</section>

        <section class="relative py-16 bg-white min-w-screen animation-fade animation-delay">
    <div class="container px-0 px-8 mx-auto sm:px-12 xl:px-5">
        <p class="text-xs font-bold text-left text-pink-500 uppercase sm:mx-6 sm:text-center sm:text-normal sm:font-bold">
            Hast du Fragen? Wir haben Antworten!</p>
        <h3 class="mt-1 text-2xl font-bold text-left text-gray-800 sm:mx-6 sm:text-3xl md:text-4xl lg:text-5xl sm:text-center sm:mx-0">
            Hier einiges, was du dich Fragen könntest:</h3>

        <div
            class="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
            <h3 class="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl">Wo liegen meine Daten?</h3>
            <p class="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">Deine Daten liegen in Deutschland, dass ist uns wichtig, weil Deutschland starke Datenschutz-Gesetze hat.
                Um noch ein Stück genauer zu werden: Deine Daten liegen auf einem Server der <a href="https://manitu.de" class="hover:text-indigo-600">manitu GmbH</a>, in <a href="https://goo.gl/maps/jxvMtGvnDMCmb3a78" class="hover:text-indigo-600">St. Wendel</a>.
            </p>
        </div>
        <div
            class="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
            <h3 class="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl">Wie finanziert ihr euch?</h3>
            <p class="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">Wir finanzieren uns primär durch eigenes Geld. 
                Wenn du dich dazu entscheiden hast den Plus Plan zu kaufen bist du daran Schuld, dass wir länger überleben. 😉 Danke! ♥ 🥰</p>
        </div>
        <div
            class="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
            <h3 class="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl">Ist my.awesomeBible unsicher weil der Quellcode offen liegt?</h3>
            <p class="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">Nein. Das ist ein Mythos - sogar das Gegenteil ist der Fall. Wäre der Quellcode nicht offen, dann wäre allein ich für die Sicherheit verantwortlich. 
                Da er aber open-source ist, kann jeder Fehler finden und ausnutzen - aber genau so gut können sie gemeldet und gefixt werden.</p>
        </div>
        <div
            class="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
            <h3 class="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl">Wer steht hinter my.awesomeBible und awesomeBible?</h3>
            <p class="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">Hi. 👋 Ich bin Benjamin Hartmann!
                Meine Hobbys sind <a href="https://awesomebible.de" class="hover:text-indigo-600">Texte schreiben</a>, <a href="https://github.com/awesomebible" class="hover:text-indigo-600">programmieren</a> und in der Natur rumlungern. 
                Ich bin 15 Jahre alt. Ich habe my.awesomeBible gebaut, weil ich keine Bibelapp gefunden habe, die die Features hat, die ich brauche - und jetzt bin ich hier. Der Weg mit Gott ist ein richtiges Abenteuer - und ich möchte, dass auch andere davon erfahren.</p>
        </div>
        <div id="contact"
        class="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
        <h3 class="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl">Noch mehr Fragen?</h3>
        <p class="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">Schreib uns! Wir sind per E-Mail erreichbar: 
            <a href="mailto:hi@awesomebible.de" class="hover:text-indigo-600">hi@awesomebible.de</a> oder via <a href="https://discord.awesomebible.de" class="hover:text-indigo-600">Discord</a>, 
            wenn du einer von den Cool-Kids bist. 😉</p>
    </div>
    </div>
</section>  
<section class="py-8 leading-7 text-gray-900 bg-white sm:py-12 md:py-16 lg:py-24" id="pricing">
    <div class="box-border px-4 mx-auto border-solid sm:px-6 md:px-6 lg:px-8 max-w-7xl">
        <div class="flex flex-col items-center leading-7 text-center text-gray-900 border-0 border-gray-200">
            <h2 class="box-border m-0 text-3xl font-semibold leading-tight tracking-tight text-black border-solid sm:text-4xl md:text-5xl" id="">Wir geben nicht viel auf komplizierte Preise.</h2>
            <p class="box-border mt-2 text-xl text-gray-900 border-solid sm:text-2xl" id="">my.awesomeBible ist kostenlos und wird es auch immer bleiben.</p>
        </div>
        <div class="grid grid-cols-1 gap-4 mt-4 leading-7 text-gray-900 border-0 border-gray-200 sm:mt-6 sm:gap-6 md:mt-8 md:gap-0 lg:grid-cols-2">
            
            <!-- Price 1 -->
            <div class="box-border flex flex-col items-center max-w-md p-4 mx-auto my-0 border-4 border-blue-600 border-solid rounded-md sm:p-6 md:px-8 md:py-16">
                <h3 class="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl" id="">Free</h3>
                <div class="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                    <p class="box-border m-0 text-6xl font-semibold leading-none border-solid" id="">€0</p>
                    <p class="box-border m-0 border-solid" style="border-image: initial;">
                        / Monat
                    </p>
                </div>
                <p class="mt-6 mb-5 text-base leading-normal text-left text-gray-900 border-0 border-gray-200" id="">Für alle, die my.awesomeBible ausprobieren wollen, oder die jenigen mit Käse im Geldbeutel und Ratten im Haus.</p>
                <ul class="flex-1 p-0 mt-4 leading-7 text-gray-900 border-0 border-gray-200">
                    <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid" id="">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        alle Features
                    </li>
                    <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid" id="">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        ∞ viele Notizen
                    </li>
                    <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        ∞ viele Markierungen
                    </li>
                    <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        alle Bibelübersetzungen
                    </li>
                </ul>
                <button class="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-white no-underline bg-blue-600 border rounded cursor-pointer hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700 focus-within:text-white sm:text-base md:text-lg">
                    Los geht's!
                </button>
            </div>
            <!-- Price 3 -->
            <div class="box-border flex flex-col items-center max-w-md p-4 mx-auto my-0 border border-solid rounded-md sm:my-0 sm:p-6 md:my-8 md:p-8">
                <h3 class="m-0 text-2xl font-semibold leading-tight tracking-tight text-black border-0 border-gray-200 sm:text-3xl md:text-4xl" id="">Plus</h3>
                <div class="flex items-end mt-6 leading-7 text-gray-900 border-0 border-gray-200">
                    <p class="box-border m-0 text-6xl font-semibold leading-none border-solid" id="">€3</p>
                    <p class="box-border m-0 border-solid" style="border-image: initial;">
                        / Monat
                    </p>
                </div>
                <p class="mt-6 mb-5 text-base leading-normal text-left text-gray-900 border-0 border-gray-200" id="">Für alle, die ihr Kleingeld nicht mehr brauchen.</p>
                <ul class="flex-1 p-0 mt-4 leading-7 text-gray-900 border-0 border-gray-200">
                    <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" class=""></path>
                        </svg>
                        Alles aus Free
                    </li>
                    <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Ein Supporter-Badge neben deinem Namen
                    </li>
                    <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Du kriegst neue Features früher
                    </li>
                    <li class="inline-flex items-center block w-full mb-2 ml-5 font-semibold text-left border-solid">
                        <svg class="w-5 h-5 mr-2 font-semibold leading-7 text-blue-600 sm:h-5 sm:w-5 md:h-6 md:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Du hilfst uns, my.awesomeBible zu finanzieren! 🥰
                    </li>
                </ul>
                <button class="inline-flex justify-center w-full px-4 py-3 mt-8 font-sans text-sm leading-none text-center text-blue-600 no-underline bg-transparent border border-blue-600 rounded cursor-pointer hover:bg-blue-700 hover:border-blue-700 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700 focus-within:text-white sm:text-base md:text-lg">
                    Plus kaufen
                </button>
            </div>
        </div>
    </div>
</section>
<section class="w-full px-8 py-16 bg-gray-100 xl:px-8">
    <div class="max-w-5xl mx-auto">
        <div class="flex flex-col items-center md:flex-row">

            <div class="w-full space-y-5 md:w-3/5 md:pr-16">
                <p class="font-medium text-blue-500 uppercase" id=""></p>
                <h2 class="text-2xl font-extrabold leading-none text-black sm:text-3xl md:text-5xl" id="">Fang jetzt dein Abenteuer mit der Bibel an!</h2>
                <p class="text-xl text-gray-600 md:pr-16" id="">Wir wünschen dir einen schönen Aufenthalt! 🥰</p>
            </div>
        <form class="w-full mt-16 md:mt-0 md:w-2/5" method="post" action="https://api.awesomebible.de/api/registerUser.php">
            <div>
                <div class="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 rounded-lg shadow-2xl px-7" id="">
                    <h3 class="mb-6 text-2xl font-medium text-center" id="">Öffne das Buch...</h3>
                    <div class="block mb-4 border border-gray-200 rounded-lg">
                        <input disabled type="text" name="email" id="" class="block w-full px-4 py-3 border-2 border-transparent rounded-lg focus:border-blue-500 focus:outline-none" placeholder="Email address">
                    </div>
                    <div class="block mb-4 border border-gray-200 rounded-lg">
                        <input disabled type="password" name="password" id="" class="block w-full px-4 py-3 border-2 border-transparent rounded-lg focus:border-blue-500 focus:outline-none" placeholder="Password">
                    </div>
                    <div class="block">
                        <button disabled class="w-full px-3 py-4 font-medium text-white bg-blue-600 rounded-lg">Wir nehmen im Moment leider noch keine Registrierungen an.</button>
                    </div>
                </div>
            </div>
        </form>
        </div>
    </div>
</section>
<footer class="bg-gradient-to-br from-purple-200 to-blue-200">
    <div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav class="flex flex-wrap justify-center -mx-5 -my-2">
            <div class="px-5 py-2">
                <a href="https://awesomebible.de" class="text-base leading-6 text-black-500 hover:text-black-900">
                    Blog
                </a>
            </div>
            <div class="px-5 py-2">
                <a href="/kontakt" class="text-base leading-6 text-black-500 hover:text-black-900">
                    Kontakt
                </a>
            </div>
            <div class="px-5 py-2">
                <a href="https://github.com/awesomebible/my-frontend" class="text-base leading-6 text-black-500 hover:text-black-900">
                    Github
                </a>
            </div>
        </nav>
        <p class="mt-8 text-base leading-6 text-center text-black-400" id="">© 2021 awesomeBible</p>
    </div>
</footer>
</template>

<script>
// see the syntax-sugared version in About.vue
import ButtonRepo from '@/components/ButtonRepo.vue'
export default {
  components: { ButtonRepo },
}
</script>