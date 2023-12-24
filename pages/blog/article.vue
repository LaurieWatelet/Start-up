<script setup>
const query = gql`
  query Articles {
    articles(orderBy: id_ASC) {
      createdAt
      description
      id
      nom
      date
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

const articles = ref();
const { data } = await useAsyncQuery(query);
console.log(data.value);
articles.value = data.value.articles;
</script>
<!--Ce code controle la description d'aperçu de l'image-->
<template>
  <ul v-if="articles" class="flex flex-wrap justify-start">
    <li v-for="article in articles" :key="article.id" class="mx-7 my-4 shadow-xl">
      <NuxtLink :to="`/blog/${article.slug}`" class="text-center block">
        <NuxtImg :src="article.image.url" :alt="article.nom" class="mx-auto mb-2" />
        <h2 class="text-center text-lg mb-2">{{ article.nom }}</h2>
        <p class="date">{{ article.date }}</p>
      </NuxtLink>
    </li>
  </ul>
  <ul v-else>
    <li>Loading...</li>
  </ul>
</template>