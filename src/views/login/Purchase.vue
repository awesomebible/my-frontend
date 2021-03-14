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
        <div class="py-2 px-4">
          <p class="mt-2 text-center text-xl font-bold text-black">Der Plus-Plan ist aktuell leider noch nicht verfügbar.</p>
        </div>
      </div>
      <div>
    </div>
    </div>
  </div>
</div>
</template>