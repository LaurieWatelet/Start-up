<template>

  <!-- Contient toutes les modifications sur les pages design -->
  <div>
    <!-- Navigation container -->
    <nav class="container p-4 shadow bg-sky-950 flex items-center justify-center p-2 mx-auto text-black capitalize dark:text-gray-300">
      <img class="h-10" src="../pages/img/Logo.png">
      <NuxtLink to="/">
        <h1 class="text-base border-b-2 border-transparent text-white hover:border-green-500 mx-4 sm:mx-10">Accueil</h1>
      </NuxtLink>

      <NuxtLink to="../produits/produits">
        <h1 class="text-base border-b-2 border-transparent text-white hover:border-green-500 mx-4 sm:mx-10">Produits</h1>
      </NuxtLink>

      <NuxtLink to="/societe">
        <h1 class="text-base border-b-2 border-transparent text-white hover:border-green-500 mx-4 sm:mx-10">Société</h1>
      </NuxtLink>

      <NuxtLink to="../equipe/membre">
        <h1 class="text-base border-b-2 border-transparent text-white hover:border-green-500 mx-4 sm:mx-10">Équipe</h1>
      </NuxtLink>

      <NuxtLink to="/contact">
        <h1 class="text-base border-b-2 border-transparent text-white hover:border-green-500 mx-4 sm:mx-10">Contact</h1>
      </NuxtLink>

      <NuxtLink to="../blog/article">
        <h1 class="text-base border-b-2 border-transparent text-white hover:border-green-500 mx-4 sm:mx-10">Blog</h1>
      </NuxtLink>
    </nav>
    <!-- Fin de la Nav -->

    

    <div>
      <slot />
    </div>
      <!-- Footer -->
  <footer class="bg-sky-950 pt-8 pb-6">
  <div class="container mx-auto px-4">
    <div class="flex text-left lg:text-left">
      <div class="w-full lg:w-6/12 px-4">
        <h4 class="text-3xl pt-7 fonat-semibold text-white"> Restons en contact !</h4>
        <h5 class="text-lg mt-0 mb-2 text-white">
        Retrouvez-nous sur les réseaux sociaux : Instagram et Facebook 
        </h5>
      </div>
      <div class="w-full lg:w-6/12 px-4">
        <div class="flex flex-wrap items-top mb-6">
          <div class="w-full lg:w-4/12 px-4 ml-auto">
            <span class="block uppercase text-white text-sm font-semibold mb-2">Liens utiles</span>
            <ul class="list-unstyled">
              <li>
                <a class="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Société</a>
              </li>
              <li>
                <a class="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Blog</a>
              </li>
              <li>
                <a class="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Github</a>
              </li>
            </ul>
          </div>
          <div class="w-full lg:w-4/12 px-4">
            <span class="block uppercase text-white text-sm font-semibold mb-2">Autres ressources</span>
            <ul class="list-unstyled">
              <li>
                <a class="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Termes et Conditions</a>
              </li>
              <li>
                <a class="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Politique de confidentialité</a>
              </li>
              <li>
                <a class="text-white hover:text-blueGray-800 font-semibold block pb-2 text-sm" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <hr class="my-6 border-blueGray-300">
    <div class="flex flex-wrap items-center md:justify-between justify-center">
      <div class="w-full md:w-4/12 px-4 mx-auto text-center">
        <div class="text-sm text-white font-semibold py-1">
          Copyright © <span id="get-current-year">2023</span><a href="#"></a>
          <a href="" class="text-blueGray-500 hover:text-blueGray-800"></a>
        </div>
      </div>
    </div>
  </div>
</footer>
  </div>
</template>
