<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  title: String,
  price: String
})
</script>

<template>
  <div class="item">
    <div class="hero"></div>
    <div class="container_item">
      <div>
        <p>{{ props.title }}</p>
        <p class="price">${{ props.price }}</p>
      </div>
      <div class="variants">
        <div class="variant"></div>
        <div class="variant"></div>
      </div>
    </div>
  </div>
</template>

<style>
.item {
  cursor: pointer;
}
.hero {
  background-color: #a4a4a4;
  width: 100%;
  height: 100%;
}
.price {
  font-weight: 700;
}
</style>
