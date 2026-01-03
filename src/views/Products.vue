<template>
  <div class="min-h-screen bg-nature-beige-50 py-12 md:py-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Page Header -->
      <div class="text-center mb-12 fade-in">
        <h1 class="text-4xl md:text-5xl font-bold text-nature-brown-900 mb-4">
          Our Products
        </h1>
        <p class="text-lg md:text-xl text-nature-brown-600 max-w-3xl mx-auto">
          Explore our complete collection of premium organic herbs and spices, 
          carefully sourced for the finest quality and flavor.
        </p>
      </div>

      <!-- Filter Buttons -->
      <div class="flex flex-nowrap justify-center gap-2 sm:gap-4 mb-12 fade-in overflow-x-auto pb-2">
        <button
          @click="selectedCategory = 'all'"
          :class="[
            'px-4 sm:px-6 py-2 rounded-lg font-medium transition-all duration-300 whitespace-nowrap',
            selectedCategory === 'all'
              ? 'bg-nature-green-600 text-white shadow-soft'
              : 'bg-white text-nature-brown-700 hover:bg-nature-beige-100 shadow-soft'
          ]"
        >
          All Products
        </button>
        <button
          @click="selectedCategory = 'herbs'"
          :class="[
            'px-4 sm:px-6 py-2 rounded-lg font-medium transition-all duration-300 whitespace-nowrap',
            selectedCategory === 'herbs'
              ? 'bg-nature-green-600 text-white shadow-soft'
              : 'bg-white text-nature-brown-700 hover:bg-nature-beige-100 shadow-soft'
          ]"
        >
          Herbs
        </button>
        <button
          @click="selectedCategory = 'spices'"
          :class="[
            'px-4 sm:px-6 py-2 rounded-lg font-medium transition-all duration-300 whitespace-nowrap',
            selectedCategory === 'spices'
              ? 'bg-nature-green-600 text-white shadow-soft'
              : 'bg-white text-nature-brown-700 hover:bg-nature-beige-100 shadow-soft'
          ]"
        >
          Spices
        </button>
      </div>

      <!-- Products Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
        <ProductCard
          v-for="product in filteredProducts"
          :key="product.id"
          :product="product"
        />
      </div>

      <!-- Empty State -->
      <div v-if="filteredProducts.length === 0" class="text-center py-12">
        <p class="text-nature-brown-600 text-lg">No products found in this category.</p>
      </div>

      <!-- Contact CTA -->
      <div class="mt-16 text-center bg-white rounded-2xl p-8 md:p-12 shadow-soft-lg fade-in">
        <h2 class="text-2xl md:text-3xl font-bold text-nature-brown-900 mb-4">
          Interested in Our Products?
        </h2>
        <p class="text-nature-brown-600 mb-6 max-w-2xl mx-auto">
          Get in touch with us to learn more about our organic herbs and spices, 
          or place an order directly through WhatsApp.
        </p>
        <WhatsAppButton />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ProductCard from '../components/ProductCard.vue'
import WhatsAppButton from '../components/WhatsAppButton.vue'
import { products } from '../data/products.js'

const selectedCategory = ref('all')

const filteredProducts = computed(() => {
  if (selectedCategory.value === 'all') {
    return products
  }
  return products.filter(product => product.category === selectedCategory.value)
})
</script>

