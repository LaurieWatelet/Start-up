<template>

  <!--Début de la div de naviguation-->
  <div class="min-h-screen bg-blue-500">
    <!--Début de la Nav-->
    <nav class="container flex">

      <NuxtLink to="/">
        <h1 class="text-lg">Accueil</h1>
      </NuxtLink>

      <NuxtLink to="../produits/produits">
        <h1 class="text-lg">Produits</h1>
      </NuxtLink>

      <NuxtLink to="/societe">
        <h1 class="text-lg">Société</h1>
      </NuxtLink>

      <NuxtLink to="../equipe/membre">
        <h1 class="text-lg">Équipe</h1>
      </NuxtLink>

      <NuxtLink to="/contact">
        <h1 class="text-lg">Contact</h1>
      </NuxtLink>

      <NuxtLink to="../blog/article">
        <h1 class="text-lg">Blog</h1>
      </NuxtLink>
    </nav>
    <!--Fin de la Nav-->

    <div class="container mx-auto px-3">
      <slot />
    </div>

  </div>
<!--Fin de la div de naviguation-->

</template>