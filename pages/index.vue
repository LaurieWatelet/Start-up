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
  <!-- Div Conteneur global avec fond gradient -->
  <div class="flex flex-row pt-11 justify-evenly">
     <!-- Div qui contient la nav -->
     <div class="flex flex-col m-0 pt-6 justify-center max-w-lg">
       <h1 class="text-4xl mb-3 font-bold">ViruoPlay, transformez votre réalité, vivez votre rêve...</h1>
       <p class="text-lg mb-5">Découvrez un monde où la réalité se transforme en aventure, on vous ouvre les portes d'une expérience virtuelle captivante</p>
       <NuxtLink to="/produits/produits" class="bg-cyan-700 w-60 text-white text-center px-6 py-3 rounded-full">
         Découvrir notre histoire
       </NuxtLink>
     </div>
    <!------->
<!-- l'image est dans la Div conteneur global-->
    <img class="h-80 mt-6 rounded-2xl" src="@/pages/img/space.jpg" alt="Image de l'espace"/>
  </div>
  <!-- Fin du conteneur global -->


<hr class="h-0.5 w-4/5 my-8 mx-auto bg-zinc-300 border-0">

<div class="flex flex-row pt-4 justify-center">
  <img class="h-14 mt-6 rounded-2xl" src="@/pages/img/fleche.png" alt="Image de l'espace"/>
</div>


</template>
