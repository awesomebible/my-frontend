<template>
<header class="w-full px-6 mb-12 antialiased bg-white select-none">
    <div class="mx-auto max-w-7xl">
        <HomeNavbar />
        <div class="container max-w-lg px-4 py-32 mx-auto text-left md:max-w-none md:text-center">
            <h1 class="text-5xl font-extrabold tracking-tight text-left text-gray-900 leading-tightest md:leading-10 md:text-center sm:leading-none md:text-6xl lg:text-7xl"><span class="inline md:block">Die Bibel ist ein Buch...</span> <span class="relative mt-2 text-transparent md:inline-block bg-clip-text bg-gradient-to-br from-purple-600 to-blue-500" id="">tu was damit!</span></h1>
            <div class="mx-auto mt-5 text-gray-500 md:mt-12 md:max-w-lg md:text-center lg:text-lg"></div>
        </div>
    </div>
</header>
<main class="relative py-16 bg-white min-w-screen animation-fade animation-delay">
    <div class="container px-0 px-8 mx-auto sm:px-12 xl:px-5">
        <p class="text-xs font-bold text-left text-pink-500 uppercase sm:mx-6 sm:text-center sm:text-normal sm:font-bold">
            Hast du Fragen? Wir haben Antworten!</p>
        <h3 class="mt-1 text-2xl font-bold text-left text-gray-800 sm:mx-6 sm:text-3xl md:text-4xl lg:text-5xl sm:text-center sm:mx-0">
            "Hier einiges, was du dich Fragen könntest"</h3>
        <h4 class="mt-1 text-2xl font-bold text-left text-gray-800 sm:mx-6 sm:text-2xl md:text-4xl lg:text-4xl sm:text-center sm:mx-0">- Extended Edition</h4>

        <div
            class="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
            <h3 class="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl">Wo liegen meine Daten?</h3>
            <p class="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">Deine Daten liegen in Deutschland, das ist uns wichtig, weil Deutschland starke Datenschutz-Gesetze hat.
                Um noch ein Stück genauer zu werden: Deine Daten liegen auf einem Server von <a href="https://aws.amazon.com" class="hover:text-indigo-600">Amazon Web Services</a>, in <a href="https://docs.aws.amazon.com/de_de/general/latest/gr/rande.html" class="hover:text-indigo-600">Frankfurt</a>.
            </p>
            <p class="mt-2 text-base text-gray-600 sm:text-lg md:text-normal inline-flex items-center w-full mb-2 font-semibold text-left border-solid">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5 mr-2 leading-7 sm:h-5 sm:w-5 md:h-6 md:w-6">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg><router-link to="/datenschutz" class="hover:text-indigo-600">Mehr Informationen</router-link>
            </p>
        </div>
        <div
            class="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
            <h3 class="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl">Wie finanziert ihr euch?</h3>
            <p class="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">Wir finanzieren uns aktuell ausschließlich aus eigenem Geld, diese Entscheidung haben wir getroffen, weil wir eine <span class="font-bold">wirklich</span> kostenlose und offene Bibelapp bauen wollen. <br>
            Mehr über Geld, und wie es weiter geht findest du <a class="hover:text-indigo-600" href="https://codeberg.org/awesomebible/my-united/issues/1">hier</a>. </p>
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
                Meine Hobbys sind <a href="https://awesomebible.de" class="hover:text-indigo-600">Texte schreiben</a>, <a href="https://codeberg.org/awesomebible" class="hover:text-indigo-600">programmieren</a> und in der Natur rumlungern. 
                Ich bin 15 Jahre alt. Ich habe my.awesomeBible gebaut, weil ich keine Bibelapp gefunden habe, die die Features hat, die ich brauche - und jetzt bin ich hier. Der Weg mit Gott ist ein richtiges Abenteuer - und ich möchte, dass auch andere davon erfahren.</p>
        </div>
        <div id="contact"
        class="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
        <h3 class="text-lg font-bold text-purple-500 sm:text-xl md:text-2xl">Noch mehr Fragen?</h3>
        <p class="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">Schreib uns! Wir sind per E-Mail erreichbar: 
            <a href="mailto:hi@awesomebible.de" class="hover:text-indigo-600">hi@awesomebible.de</a> oder via <a href="https://codeberg.org/awesomebible/my-united" class="hover:text-indigo-600">Codeberg Issues</a>. 
            Wir antworten dir gerne! 😀
            </p>
    </div>
    </div>
</main>
<FooterComponent />
</template>
<script>
import HomeNavbar from '@/components/HomeNavbar.vue';
import FooterComponent from '@/components/FooterComponent.vue';
export default {
  components: { HomeNavbar, FooterComponent },
}
</script>