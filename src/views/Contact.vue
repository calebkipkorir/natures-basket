<template>
  <div class="min-h-screen bg-nature-beige-50 py-12 md:py-16">
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Page Header -->
      <div class="text-center mb-12 fade-in">
        <h1 class="text-4xl md:text-5xl font-bold text-nature-brown-900 mb-4">
          Get in Touch
        </h1>
        <p class="text-lg md:text-xl text-nature-brown-600 max-w-2xl mx-auto">
          Have questions about our products? Want to place an order? 
          We're here to help you discover the finest organic herbs and spices.
        </p>
      </div>

      <!-- Contact Card -->
      <div class="bg-white rounded-2xl shadow-soft-lg p-8 md:p-12 fade-in">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <!-- Contact Information -->
          <div>
            <h2 class="text-2xl md:text-3xl font-bold text-nature-brown-900 mb-6">
              Contact Information
            </h2>
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0 w-12 h-12 bg-nature-green-100 rounded-lg flex items-center justify-center">
                  <svg class="w-6 h-6 text-nature-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-nature-brown-900 mb-1">Phone</h3>
                  <p class="text-nature-brown-600">Available via WhatsApp</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0 w-12 h-12 bg-nature-green-100 rounded-lg flex items-center justify-center">
                  <svg class="w-6 h-6 text-nature-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-nature-brown-900 mb-1">Response Time</h3>
                  <p class="text-nature-brown-600">We typically respond within 24 hours</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="flex-shrink-0 w-12 h-12 bg-nature-green-100 rounded-lg flex items-center justify-center">
                  <svg class="w-6 h-6 text-nature-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-nature-brown-900 mb-1">Organic Certified</h3>
                  <p class="text-nature-brown-600">All products are certified organic</p>
                </div>
              </div>
            </div>
          </div>

          <!-- WhatsApp Button Section -->
          <div class="text-center md:text-left">
            <div class="mb-6">
              <h3 class="text-xl font-semibold text-nature-brown-900 mb-3">
                Ready to Order?
              </h3>
              <p class="text-nature-brown-600 mb-6">
                Click the button below to start a conversation with us on WhatsApp. 
                We'll help you find the perfect herbs and spices for your needs.
              </p>
            </div>
            <div class="flex justify-center md:justify-start">
              <WhatsAppButton />
            </div>
          </div>
        </div>
      </div>

      <!-- Additional Info -->
      <div class="mt-12 bg-white rounded-2xl shadow-soft p-8 md:p-12 fade-in">
        <h2 class="text-2xl font-bold text-nature-brown-900 mb-6 text-center">
          Why Choose Nature's Basket?
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="text-center">
            <div class="w-16 h-16 bg-nature-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-nature-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 class="font-semibold text-nature-brown-900 mb-2">100% Organic</h3>
            <p class="text-sm text-nature-brown-600">Certified organic products from trusted sources</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-nature-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-nature-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 class="font-semibold text-nature-brown-900 mb-2">Premium Quality</h3>
            <p class="text-sm text-nature-brown-600">Hand-selected for the finest flavor and aroma</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-nature-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-nature-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 class="font-semibold text-nature-brown-900 mb-2">Fast Response</h3>
            <p class="text-sm text-nature-brown-600">Quick and friendly customer service</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import WhatsAppButton from '../components/WhatsAppButton.vue'
</script>

