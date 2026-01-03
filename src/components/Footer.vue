<template>
  <footer class="bg-nature-brown-800 text-nature-beige-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Brand Section -->
        <div>
          <div class="flex items-center space-x-2 mb-4">
            <div class="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
              <img src="/images/logo.jpeg" alt="Nature's Basket Logo" class="w-full h-full object-cover" />
            </div>
            <span class="text-xl font-bold">Nature's Basket</span>
          </div>
          <p class="text-nature-beige-300 text-sm">
            Premium organic herbs and spices sourced directly from nature's finest gardens.
          </p>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li>
              <router-link to="/" class="text-nature-beige-300 hover:text-white transition-colors text-sm">
                Home
              </router-link>
            </li>
            <li>
              <router-link to="/products" class="text-nature-beige-300 hover:text-white transition-colors text-sm">
                Products
              </router-link>
            </li>
            <li>
              <router-link to="/contact" class="text-nature-beige-300 hover:text-white transition-colors text-sm">
                Contact Us
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Get in Touch</h3>
          <p class="text-nature-beige-300 text-sm mb-4">
            Have questions? We're here to help!
          </p>
          <WhatsAppButton />
        </div>
      </div>

      <!-- Copyright -->
      <div class="mt-8 pt-8 border-t border-nature-brown-700 text-center text-sm text-nature-beige-400">
        <p>&copy; {{ currentYear }} Nature's Basket. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import WhatsAppButton from './WhatsAppButton.vue'

const currentYear = computed(() => new Date().getFullYear())
</script>

