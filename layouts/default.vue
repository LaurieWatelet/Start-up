<template>

  <!--Container Div générale-->
  <div class="border-2 border-rose-600 bg-[conic-gradient(at_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-600 to-indigo-200">
    <!--Naviguation container-->
    <nav class="container sticky bg-white flex items-center backdrop-filter backdrop-blur-lg bg-opacity-30 justify-center p-2 mx-auto text-black capitalize dark:text-gray-300">

      <img class="h-20" src="../pages/img/logo.png">

      <NuxtLink to="/">
        <h1 class="text-lg border-b-2 dark:hover:text-gray-200 hover:border-green-500 mx-1.5 sm:mx-6">Accueil</h1>
      </NuxtLink>

      <NuxtLink to="../produits/produits">
        <h1 class="text-lg border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-green-500 mx-1.5 sm:mx-6">Produits</h1>
      </NuxtLink>

      <NuxtLink to="/societe">
        <h1 class="text-lg border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-green-500 mx-1.5 sm:mx-6">Société</h1>
      </NuxtLink>

      <NuxtLink to="../equipe/membre">
        <h1 class="text-lg border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-green-500 mx-1.5 sm:mx-6">Équipe</h1>
      </NuxtLink>

      <NuxtLink to="/contact">
        <h1 class="text-lg border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-green-500 mx-1.5 sm:mx-6">Contact</h1>
      </NuxtLink>

      <NuxtLink to="../blog/article">
        <h1 class="text-lg border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-green-500 mx-1.5 sm:mx-6">Blog</h1>
      </NuxtLink>
    </nav>
    <!--Fin de la Nav-->

    <div class="container mx-auto px-3">
      <slot />
    </div>

  </div>
<!--Fin de la div de naviguation-->

</template>