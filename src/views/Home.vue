<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="relative h-screen flex items-center justify-center overflow-hidden">
      <!-- Background Image -->
      <div
        class="absolute inset-0 bg-cover bg-center bg-no-repeat"
        :style="{ backgroundImage: `url('${heroImage}')` }"
      >
        <div class="absolute inset-0 bg-nature-brown-900/50"></div>
      </div>

      <!-- Hero Content -->
      <div class="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto fade-in">
        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Premium Organic
          <span class="text-nature-green-400"> Herbs & Spices</span>
        </h1>
        <p class="text-xl sm:text-2xl md:text-3xl text-nature-beige-100 mb-8 font-light">
          Sourced from nature's finest gardens, delivered to your kitchen
        </p>
        <router-link
          to="/contact"
          class="inline-block bg-nature-green-600 hover:bg-nature-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-soft-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          Contact Us
        </router-link>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>

    <!-- About Us Section -->
    <section class="py-16 md:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <!-- Image -->
          <div class="order-2 md:order-1 fade-in">
            <div class="relative h-96 rounded-2xl overflow-hidden shadow-soft-lg">
              <img
                :src="aboutImage"
                alt="Organic herbs and spices"
                class="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <!-- Content -->
          <div class="order-1 md:order-2 fade-in">
            <h2 class="text-3xl md:text-4xl font-bold text-nature-brown-900 mb-6">
              Our Story
            </h2>
            <div class="space-y-4 text-nature-brown-700 leading-relaxed">
              <p>
                At Nature's Basket, we believe that the finest flavors come from the purest sources. 
                Our journey began with a simple mission: to bring you the most authentic, organic herbs 
                and spices directly from nature's finest gardens.
              </p>
              <p>
                We carefully source each product, ensuring that every herb and spice meets our strict 
                standards for quality, purity, and organic certification. Our commitment to sustainable 
                farming practices means you can trust that what you're adding to your meals is not only 
                delicious but also responsibly grown.
              </p>
              <p>
                From the aromatic basil that elevates your pasta to the warm cinnamon that transforms 
                your morning coffee, we're here to help you create extraordinary culinary experiences 
                with nature's finest ingredients.
              </p>
            </div>
            <router-link
              to="/products"
              class="inline-block mt-8 text-nature-green-600 hover:text-nature-green-700 font-semibold transition-colors"
            >
              Explore Our Products →
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Products Preview -->
    <section class="py-16 md:py-24 bg-nature-beige-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12 fade-in">
          <h2 class="text-3xl md:text-4xl font-bold text-nature-brown-900 mb-4">
            Featured Products
          </h2>
          <p class="text-lg text-nature-brown-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium organic herbs and spices
          </p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <ProductCard
            v-for="product in featuredProducts"
            :key="product.id"
            :product="product"
          />
        </div>

        <div class="text-center mt-12">
          <router-link
            to="/products"
            class="inline-block bg-nature-green-600 hover:bg-nature-green-700 text-white px-8 py-3 rounded-lg font-semibold shadow-soft hover:shadow-soft-lg transition-all duration-300"
          >
            View All Products
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import ProductCard from '../components/ProductCard.vue'
import { products } from '../data/products.js'

// Hero background image from public folder
const heroImage = '/vite.jpeg'

// About section image - using a product image as placeholder
const aboutImage = '/images/Basil.png'

// Featured products (first 6)
const featuredProducts = computed(() => products.slice(0, 6))
</script>

