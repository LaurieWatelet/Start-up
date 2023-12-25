<script setup>
const query = gql`
  query Membres {
    membres(orderBy: id_ASC) {
      createdAt
      description
      id
      nom
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

const membres = ref();
const { data } = await useAsyncQuery(query);
console.log(data.value);
membres.value = data.value.membres;
</script>
<!--Ce code controle la description d'aperçu de l'image-->
<template>
  <ul v-if="membres" class="flex flex-wrap justify-start">
    <li v-for="membre in membres" :key="membre.id" class="mx-7 my-4 shadow-xl">
      <NuxtLink :to="`/equipe/${membre.slug}`" class="text-center block">
        <NuxtImg :src="membre.image.url" :alt="membre.nom" class="mx-auto mb-2" />
        <h2 class="text-center text-lg mb-2">{{ membre.nom }}</h2>
        <p>Fondateur CEO</p>
      </NuxtLink>
    </li>
  </ul>
  <ul v-else>
    <li>Loading...</li>
  </ul>
</template>