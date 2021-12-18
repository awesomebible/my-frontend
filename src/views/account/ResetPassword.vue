<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-800 py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-md w-full space-y-8">
    <div>
      <img class="mx-auto h-12 w-auto" src="/images/ResetPassword.svg" alt="Schlüssel">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-300">
        Passwort zurücksetzen
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600 dark:text-gray-200">
        oder
        <router-link to="/login" class="font-medium text-indigo-600 hover:text-indigo-500">
          melde dich an.
        </router-link>
      </p>
    </div>
    <section class="mt-8 space-y-6">
      <input type="hidden" name="remember" value="true">
      <div class="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="email-address" class="sr-only">E-Mailadresse</label>
          <input v-model="email" id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="E-Mailadresse">
        </div>
      </div>
      <div>
        <button @click="onSubmit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Neues Passwort anfordern
        </button>
      </div>
    </section>
  </div>
</div>
</template>
<script>
export default {
  data(){
    return {
                email: null,
            }
  },
  methods: {
            onSubmit() {
              this.axios.post("/api/reset-password", {
                email: this.email,
              })    
            }
        }
}
</script>