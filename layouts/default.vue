<template>
    <div class="min-h-screen bg-blue-500">
      <nav class="container mx-auto px-3 h-24 flex items-center mb-10">
        <NuxtLink to="/">
          <h1 class="text-5xl">Bienvenue chez GreenGenius : La Révolution Verte à Portée de Main</h1>
        </NuxtLink>
      </nav>
      <div class="container mx-auto px-3">
        <slot />
      </div>
    </div>
  </template>