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
  <!-- Conteneur global avec fond gradient -->
  <div class="">
         <!--div du bloc au dessus-->
         <div class="flex flex-row pt-9">
      <div class="flex flex-col">
        <h1 class="font-bold">ViruoPlay, transformez votre réalité, vivez votre rêve...</h1>
        <p>Découvrez un monde où la réalité se transforme en aventure, on vous ouvre les portes d'une expérience virtuelle captivante</p>
      </div>
      <img class="h-48 rounded-2xl" src="@/pages/img/space.jpg" alt="Image de l'espace"/>
    </div>
</div>
  <!---->

</template>
