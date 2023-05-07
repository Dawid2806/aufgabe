<script setup lang="ts">
import FilterComponent from '@/components/FilterComponent/FilterComponent.vue'
import Item from '@/components/Item/Item.vue'
</script>

<template>
  <div class="container_list">
    <FilterComponent />
    <div class="item_container">
      <Item title="nike air force" price="110.00" />
      <Item title="Air Jordan 1 Mid" price="129.00" />
      <Item title="Nike Air Max Plus" price="189.00" />
      <Item title="Nike Air Vapor Plus" price="210.00" />
      <Item title="Nike Dunk High Retro" price="125.00" />
      <Item title="Air Jordan 1 Low G" price="140.00" />
    </div>
  </div>
</template>
<style>
.container_list {
  display: grid;

  grid-template-columns: 20% 80%;

  gap: 2rem;
}
.item_container {
  display: grid;
  margin: 2rem;
  padding: 1rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 2rem;
  grid-row-gap: 4rem;
}
</style>
