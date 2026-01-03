<template>
  <nav class="bg-white shadow-soft sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16 md:h-20">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-2 group">
          <div class="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden flex items-center justify-center group-hover:opacity-90 transition-opacity">
            <img src="/images/logo.jpeg" alt="Nature's Basket Logo" class="w-full h-full object-cover" />
          </div>
          <span class="text-xl md:text-2xl font-bold text-nature-green-700">Nature's Basket</span>
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link
            to="/"
            class="text-nature-brown-700 hover:text-nature-green-600 font-medium transition-colors"
            active-class="text-nature-green-600"
          >
            Home
          </router-link>
          <router-link
            to="/products"
            class="text-nature-brown-700 hover:text-nature-green-600 font-medium transition-colors"
            active-class="text-nature-green-600"
          >
            Products
          </router-link>
          <router-link
            to="/contact"
            class="text-nature-brown-700 hover:text-nature-green-600 font-medium transition-colors"
            active-class="text-nature-green-600"
          >
            Contact
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden p-2 rounded-md text-nature-brown-700 hover:text-nature-green-600 hover:bg-nature-beige-100 transition-colors"
          aria-label="Toggle menu"
        >
          <svg v-if="!mobileMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        v-if="mobileMenuOpen"
        class="md:hidden pb-4 space-y-2 fade-in"
      >
        <router-link
          to="/"
          @click="closeMobileMenu"
          class="block px-3 py-2 rounded-md text-nature-brown-700 hover:text-nature-green-600 hover:bg-nature-beige-100 font-medium transition-colors"
          active-class="text-nature-green-600 bg-nature-beige-100"
        >
          Home
        </router-link>
        <router-link
          to="/products"
          @click="closeMobileMenu"
          class="block px-3 py-2 rounded-md text-nature-brown-700 hover:text-nature-green-600 hover:bg-nature-beige-100 font-medium transition-colors"
          active-class="text-nature-green-600 bg-nature-beige-100"
        >
          Products
        </router-link>
        <router-link
          to="/contact"
          @click="closeMobileMenu"
          class="block px-3 py-2 rounded-md text-nature-brown-700 hover:text-nature-green-600 hover:bg-nature-beige-100 font-medium transition-colors"
          active-class="text-nature-green-600 bg-nature-beige-100"
        >
          Contact
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const mobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value
}

const closeMobileMenu = () => {
  mobileMenuOpen.value = false
}
</script>

