<script setup>
const query = gql`
  query Produits {
    produits(orderBy: id_ASC) {
      createdAt
      description
      id
      nom
      prix
      publishedAt
      slug
      updatedAt
      image {
        url(
          transformation: {
            document: { output: { format: webp } }
            image: { resize: { fit: crop, height: 256, width: 256 } }
          }
        )
      }
    }
  }
`;

const produits = ref();
const { data } = await useAsyncQuery(query);
console.log(data.value);
produits.value = data.value.produits;
</script>
<!--Ce code controle la description d'aperçu de l'image-->
<template>
<body class="bg-gradient-to-r from-violet-500 to-fuchsia-500">

  <div class="container mx-auto p-8">
    <!-- Présentation des produits -->
    <div class="text-center mb-8">
      <h1 class="text-4xl font-bold mb-2">Découvrez les produits de VirtuoPlay</h1>
      <p class="text-lg">Explorez notre gamme de produits innovants qui transforment l'expérience de la réalité virtuelle. Chaque produit est conçu pour vous offrir des aventures captivantes et inoubliables.</p>
    </div>

<!-- Liste des produits -->
<ul v-if="produits" class="flex flex-wrap justify-start">
  <li v-for="produit in produits" :key="produit.id" class="mx-7 my-4 shadow-xl">
    <NuxtLink :to="`/produits/${produit.slug}`" class="text-center bg-white bg-opacity-50 p-8 block">
      <NuxtImg :src="produit.image.url" :alt="produit.nom" class="mx-auto mb-2" />
      <h2 class="text-center text-lg mb-2">{{ produit.nom }}</h2>
      <p class="text-center mb-2">{{ produit.prix }} €</p>
      <!-- Call to Action -->
      <NuxtLink :to="`/produits/${produit.slug}`" class="bg-blue-500 text-white px-4 py-2 rounded-md inline-block">
        En savoir plus
      </NuxtLink>
    </NuxtLink>
  </li>
</ul>
<ul v-else>
  <li>Loading...</li>
</ul>

  </div>
</body>

</template>
