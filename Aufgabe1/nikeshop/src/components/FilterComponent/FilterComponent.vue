<script setup lang="ts">
import { reactive } from 'vue'

const showOptions: Record<string, boolean> = reactive({
  Sport: false,
  Gender: false,
  Athletic: false
})

type FilterOptionKey = keyof typeof showOptions

const filterCategories: Record<FilterOptionKey, string[]> = {
  Sport: ['Option 1', 'Option 2', 'Option 3'],
  Gender: ['Male', 'Female'],
  Athletic: ['Athletic 1', 'Athletic 2', 'Athletic 3', 'Athletic 4']
}

const checkedOptions: Record<FilterOptionKey, Record<string, boolean>> = reactive(
  Object.fromEntries(
    Object.entries(filterCategories).map(([key, options]) => [
      key,
      Object.fromEntries(options.map((option) => [option, false]))
    ])
  )
)

const toggleOptions = (key: FilterOptionKey) => {
  showOptions[key] = !showOptions[key]
}
</script>

<template>
  <div class="sidebar">
    <div class="filter_container">
      <div class="filter" v-for="(options, categoryName) in filterCategories" :key="categoryName">
        <span class="title" @click="toggleOptions(categoryName)">{{ categoryName }}</span>
        <div v-if="showOptions[categoryName]" class="options">
          <div v-for="option in options" :key="option">
            <input
              type="checkbox"
              :id="option"
              v-model="checkedOptions[categoryName][option]"
              @click.stop
            />
            <label :for="option">{{ option }}</label>
          </div>
        </div>
      </div>
      <button class="filter_button">Apply Filter</button>
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  height: 100vh;
}

.title {
  font-weight: 700;
  text-align: center;
}
.filter_container {
  margin: 3rem 4rem;
}
.filter {
  cursor: pointer;
}
.filter_button {
  background-color: #14a684;
  margin-top: 1rem;
  padding: 0.5rem;
  border-radius: 4px;
  border: none;
  width: 100%;
}
.filter_button:hover {
  background-color: #11886c;
}
.options {
  color: #b5b7ae;
  margin: 10px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}
input[type='checkbox']:checked {
  accent-color: green;
}
</style>
