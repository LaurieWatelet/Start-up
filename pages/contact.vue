<template>
  <div class="bg-gradient-to-r from-violet-500 to-fuchsia-500 min-h-screen flex items-center justify-center">
    <div class="bg-white p-8 rounded-md shadow-lg max-w-md space-y-6">
      <h1 class="text-3xl font-bold mb-6 text-center">Contactez-nous</h1>

      <!-- Formulaire de contact -->
      <form action="#" method="post" class="space-y-4">
        <div>
          <label for="fullName" class="block text-gray-600">Nom complet</label>
          <input type="text" id="fullName" name="fullName" class="p-2 border rounded-md w-full">
        </div>

        <div>
          <label for="email" class="block text-gray-600">Adresse e-mail</label>
          <input type="email" id="email" name="email" class="p-2 border rounded-md w-full">
        </div>

        <div>
          <label for="message" class="block text-gray-600">Message</label>
          <textarea id="message" name="message" rows="4" class="p-2 border rounded-md w-full"></textarea>
        </div>

        <div>
          <button type="submit" class="bg-blue-500 text-white px-4 py-2 rounded-md w-full">Envoyer</button>
        </div>
      </form>

      <!-- Coordonnées -->
      <div>
        <h2 class="text-xl font-bold mb-4">Nos coordonnées</h2>
        <p class="text-gray-700">Adresse : 123 Rue de l'Exemple, Ville</p>
        <p class="text-gray-700">Téléphone : +1 234-567-89</p>
        <p class="text-gray-700">E-mail : contact@virtuoplay.com</p>
      </div>
    </div>
  </div>
</template>
