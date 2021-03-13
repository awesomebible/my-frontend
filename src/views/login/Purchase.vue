<template>
<div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-md w-full space-y-8">
    <div>
      <img class="mx-auto h-12 w-auto" src="/images/purchase.svg" alt="Stern">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Kaufe den Plus-Plan
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600">
        oder
        <router-link to="/login" class="font-medium text-indigo-600 hover:text-indigo-500">
         fahre mit dem Free-Plan fort.
        </router-link>
      </p>
    </div>
    <div class="mt-8 space-y-6">
      <input type="hidden" name="remember" value="true">
      <div class="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="invite-code" class="sr-only">Einladungscode</label>
          <input id="invite-code" name="invite-code" type="text" autocomplete="text" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Einladungscode">
        </div>
        <div class="py-2 px-4">
          <p class="mt-2 text-center text-sm text-gray-600">Mit fortfahren stimmst du der my.awesomeBible AGB und Datenschutzerkärung zu.</p>
          <p class="mt-2 text-center text-sm text-gray-600">Wir benutzen zum verarbeiten der Zahlung den Online-Dienst <a href="https://stripe.com" class="font-medium text-indigo-600 hover:text-indigo-500">Stripe</a>.
          Mit fortfahren, stimmst du auch dessen <a href="https://stripe.com/de/privacy">Datenschutzerkärung</a> zu.</p>
        </div>
      </div>
        <button class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Weiter mit Stripe
        </button>
      <div>
      </div>
    </div>
  </div>
</div>
</template>