<template>
  <div class="header">
    <router-link to="/" class="text-decoration-none text-white">
      <div class="d-flex flex-column justify-center align-center py-5 border-bottom-1">
        <v-img src="/favicon-32x32.png" width="32" height="32" />
        <p class="text-overline">Mercedes Benz Frontend Case</p>
      </div>
    </router-link>
  </div>

  <div class="content">
    <slot />
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  border-bottom: 2px solid rgba(255, 255, 255, 0.1);
}

.content {
  width: 1440px;
  margin: 0 auto;
  padding: 0 3rem 3rem;
}

@media screen and (max-width: 1440px) {
  .content {
    width: auto;
  }
}

@media screen and (max-width: 960px) {
  .content {
    padding: 0 1rem;
  }
}
</style>
