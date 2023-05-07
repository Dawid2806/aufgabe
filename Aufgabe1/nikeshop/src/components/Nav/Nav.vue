<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { MagnifyingGlassIcon, ShoppingBagIcon } from '@heroicons/vue/24/outline'
</script>

<style scoped src="./Nav.css"></style>

<template>
  <div class="container">
    <nav class="nav_container">
      <div>
        <img src="../icons/Vector.svg" alt="Nike_logo" />
      </div>
      <div class="links">
        <RouterLink to="/men">men</RouterLink>
        <RouterLink to="/women">women</RouterLink>
        <RouterLink to="/customise">customise</RouterLink>
        <RouterLink to="/sale">sale</RouterLink>
        <RouterLink to="/sneaker">sneaker</RouterLink>
      </div>
      <div class="user_content">
        <MagnifyingGlassIcon />
        <ShoppingBagIcon />
      </div>
    </nav>
    <div class="avatar_container">
      <div class="avatar"></div>
    </div>
  </div>
</template>
