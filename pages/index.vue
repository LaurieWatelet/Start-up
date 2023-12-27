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



    <div class="flex flex-row">
      <h1 class="text-xl italic">"Innovation Intelligente, Solutions Simples, Votre Quotidien Réinventé..."</h1>
      <img class="h-52" src="../pages/img/slogan.png">
    </div>

    <div class="flex flex-row border-2">
    <!-- Encadré avec un CTA direction la page produits-->
    <div class="bg-purple-400 border-2 border-black p-8 rounded max-w-md">
      <h2 class="text-xl font-bold mb-4">Découvrez nos produits et services !</h2>
      <p class="text-base mb-8">Explorez l'avenir avec TecGiggle, là où l'innovation rencontre la simplicité. Plongez dans notre collection de gadgets et de services conçus pour rendre votre vie technologique plus excitante et sans tracas.</p>
      <NuxtLink to="/produits/produits" class="bg-cyan-700 text-white px-6 py-3 rsounded">
        Voir nos produits
      </NuxtLink>
    </div>
  </div>
</template>
