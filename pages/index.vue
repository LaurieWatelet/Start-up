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
<body class="bg-gradient-to-r from-violet-500 to-fuchsia-500">

  <!-- Div Conteneur global flex ou les elements se mettent en row avec un padding haut de 11px et en espacement entre les éléments et avec fond gradient -->
  <div class="flex flex-row pt-11 justify-evenly">
     <!--Div qui contient le h1, le p et le lien call to action-->
     <div class="flex flex-col m-0 pt-6 justify-center max-w-lg">
       <h1 class="text-4xl mb-3 font-bold">ViruoPlay, transformez votre réalité, vivez votre rêve...</h1>
       <p class="text-lg mb-5">Découvrez un monde où la réalité se transforme en aventure, on vous ouvre les portes d'une expérience virtuelle captivante</p>
       <NuxtLink to="/produits/produits" class="bg-cyan-700 w-60 text-white text-center px-6 py-3 rounded-full">
         Découvrir notre histoire
       </NuxtLink>
     </div>
    <!------->
    <!-- l'image est dans la Div conteneur global mais pas dans une div séparée-->
    <img class="h-80 mt-6 rounded-2xl" src="@/pages/img/space.jpg" alt="Image de l'espace"/>
  </div> 
  <!--Fin du Div conteneur global-->
  <!-- Ligne de séparation dans aucun div-->
  <hr class="h-0.5 w-4/5 my-8 mx-auto bg-zinc-300 border-0"/>
  <!---->
  <!-- Div qui contient une image de fleche mis en row avec un padding haut de 4px et au centre de la page-->
  <div class="flex flex-row pt-4 justify-center">
    <img class="h-14 mt-6 rounded-2xl" src="@/pages/img/fleche.png" alt="Image de l'espace"/>
  </div>
  <!---->


  <div class="">
    <h1 class="p-44 text-3xl pt-20 pb-8 font-bold">Explorez notre gamme de produits uniques</h1>
    <p class="pr-44 text-lg pl-44 mb-6">Découvrez un univers d'opportunités et d'émerveillement avec les produits de réalité virtuelle de Virtuoplay. Notre collection redéfinit l'expérience, offrant des voyages virtuels, des apprentissages interactifs et des aventures sensationnelles.</p>
  </div>

  <!-- Div qui contient la section produits-->
  <div class="mt-3 pt-9 flex flex-row justify-center">
    <img class="h-52 pr-5" src="@/pages/img/casque.jpg" alt="Image de l'espace"/>
    <img class="h-64 pb-9" src="@/pages/img/appli.jpg" alt="Image de l'espace"/>
    <img class="h-52 pl-5" src="@/pages/img/equipement.jpg" alt="Image de l'espace"/>
  </div>

  <!-- Div call to action-->
  <div class="flex flex-row justify-center">
    <NuxtLink to="/produits/produits" class="bg-cyan-700 w-60 m-9 text-white text-center px-6 py-3 rounded-full">
      Découvrir nos produits
    </NuxtLink>
  </div>

  <div class="bg-white bg-opacity-50 p-8 mr-32 ml-32 rounded-t-2xl shadow-lg text-center">
  <h1 class="text-3xl font-bold text-black mb-4">Pourquoi choisir VirtuoPlay ?</h1>
  <ul class="list-disc list-inside text-black">
    <li class="mb-3">
      <span class="text-2xl mr-2">✨</span>
      Innovation immersive : Chaque produit repousse les limites de la réalité, créant des expériences qui défient l'imagination.
    </li>
    <li class="mb-3">
      <span class="text-2xl mr-2">🌐</span>
      Éducation réinventée : Transformez votre apprentissage en une aventure captivante qui transcende les manuels traditionnels.
    </li>
  </ul>
</div>


</body>

</template>
