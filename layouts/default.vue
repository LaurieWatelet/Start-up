<template>

  <!--Début de la div de naviguation-->
  <div class="min-h-screen bg-blue-500">
    <!--Début de la Nav-->
    <nav class="container mx-auto px-3 h-24 flex items-center mb-10">

      <NuxtLink to="/">
        <h1 class="text-5xl">Accueil</h1>
      </NuxtLink>

      <NuxtLink to="../produits/produits">
        <h1 class="text-5xl">Produits</h1>
      </NuxtLink>

      <NuxtLink to="/societe">
        <h1 class="text-5xl">Société</h1>
      </NuxtLink>

      <NuxtLink to="../equipe/membre">
        <h1 class="text-5xl">Equipe</h1>
      </NuxtLink>

      <NuxtLink to="/contact">
        <h1 class="text-5xl">Contact</h1>
      </NuxtLink>

      <NuxtLink to="../blog/article">
        <h1 class="text-5xl">Blog</h1>
      </NuxtLink>
    </nav>
    <!--Fin de la Nav-->

    <div class="container mx-auto px-3">
      <slot />
    </div>

  </div>
<!--Fin de la div de naviguation-->

</template>