<!--Page d'accueil de la startup-->
<script setup>
const query = gql`
  query PageAccueil {
    page(where: {slug: "accueil"}) {
    id
    slug
    titre
    texte {
      html
    }
  }
}
`;
const contenuAccueil = ref();
const { data } = await useAsyncQuery(query);
console.log(data.value);
contenuAccueil.value = data.value.page;
</script>

<template>



    <div class="flex flex-row items-center">
      <h1 class="text-xl italic shadow p-4 bg-white backdrop-blur-lg bg-opacity-30">"Innovation Intelligente, Solutions Simples, Votre Quotidien Réinventé..."</h1>
      <img class="object-cover w-65 pt-10" src="img/fond.jpg">
    </div>

    <div class="flex flex-row">
    <!-- Encadré avec un CTA direction la page produits-->
    <div class="bg-amber-200  border-2 border-black p-8 rounded max-w-md">
      <h2 class="text-xl font-bold mb-4">Découvrez nos produits et services !</h2>
      <p class="text-base mb-8">Explorez l'avenir avec TecGiggle, là où l'innovation rencontre la simplicité. Plongez dans notre collection de gadgets et de services conçus pour rendre votre vie technologique plus excitante et sans tracas.</p>
      <NuxtLink to="/produits/produits" class="bg-cyan-700 text-white px-6 py-3 rsounded">
        Voir nos produits
      </NuxtLink>
    </div>
  </div>
</template>
