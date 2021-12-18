<template>
<div class="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-800 py-12 px-4 sm:px-6 lg:px-8">
  <div class="max-w-md w-full space-y-8">
    <div>
      <img class="mx-auto h-12 w-auto" src="/images/login.svg" alt="Schlüssel">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900 dark:text-gray-300">
        Melde dich an
      </h2>
    </div>
    <section class="mt-8 space-y-6">
      <input type="hidden" name="remember" value="true">
      <div class="rounded-md shadow-sm -space-y-px">
        <div>
          <label for="invite-code" class="sr-only">Einladungscode</label>
          <input v-model="InviteCode" id="invite-code" name="invite-code" type="text" autocomplete="text" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Einladungscode">
        </div>
        <div>
          <label for="email-address" class="sr-only">E-Mailadresse</label>
          <input v-model="email" id="email-address" name="email" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="E-Mailadresse">
        </div>
        <div>
          <label for="password" class="sr-only">Passwort</label>
          <input v-model="password" id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Passwort">
        </div>
      </div>

      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <input id="remember_me" name="remember_me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded">
          <label for="remember_me" class="ml-2 block text-sm text-gray-900 dark:text-white">
            Merk dich mir
          </label>
        </div>
        <div class="text-sm">
          <router-link to="/account/reset-password" class="font-medium text-indigo-600 hover:text-indigo-500">
            Hast du dein Passwort vergessen?
          </router-link>
        </div>
      </div>
      <div>
        <button @click="onSubmit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Anmelden
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
                InviteCode: null,
                email: null,
                password: null
            }
  },
  methods: {
            onSubmit() {
              this.axios.post("/api/auth", {
                invitecode: this.InviteCode,
                email: this.email,
                password: this.password
              })    
            }
        }
}
</script>