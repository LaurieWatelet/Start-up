<template>

  <!--Contient toute les modifs sur les pages design-->
  <div class="bg-gradient-to-r from-violet-500 to-fuchsia-500">
    <!--Naviguation container-->
    <nav class="container flex items-center justify-center p-2 mx-auto text-black capitalize dark:text-gray-300">

      <NuxtLink to="/">
        <h1 class="text-base border-b-2 border-transparent text-black hover:border-green-500 mx-4 sm:mx-10">Accueil</h1>
      </NuxtLink>

      <NuxtLink to="../produits/produits">
        <h1 class="text-base border-b-2 border-transparent text-black hover:border-green-500 mx-4 sm:mx-10">Produits</h1>
      </NuxtLink>

      <NuxtLink to="/societe">
        <h1 class="text-base border-b-2 border-transparent text-black hover:border-green-500 mx-4 sm:mx-10">Société</h1>
      </NuxtLink>

      <NuxtLink to="../equipe/membre">
        <h1 class="text-base border-b-2 border-transparent text-black hover:border-green-500 mx-4 sm:mx-10">Équipe</h1>
      </NuxtLink>

      <NuxtLink to="/contact">
        <h1 class="text-base border-b-2 border-transparent text-black hover:border-green-500 mx-4 sm:mx-10">Contact</h1>
      </NuxtLink>

      <NuxtLink to="../blog/article">
        <h1 class="text-base border-b-2 border-transparent text-black hover:border-green-500 mx-4 sm:mx-10">Blog</h1>
      </NuxtLink>
    </nav>
    <!--Fin de la Nav-->

    <div class="container mx-auto px-3 h-14">
      
      <slot />
    </div>

  </div>
<!--Fin de la div de naviguation-->

</template>