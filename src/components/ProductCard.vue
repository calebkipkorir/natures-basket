<template>
  <div class="bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-soft-lg transition-all duration-300 transform hover:-translate-y-1 fade-in">
    <div class="relative h-48 md:h-56 overflow-hidden bg-nature-beige-200">
      <img
        :src="product.image"
        :alt="product.name"
        class="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        loading="lazy"
      />
      <div class="absolute top-2 right-2">
        <span
          class="px-2 py-1 text-xs font-semibold rounded-full bg-white/90 text-nature-green-700"
        >
          {{ product.category === 'herbs' ? 'Herb' : 'Spice' }}
        </span>
      </div>
    </div>
    <div class="p-5">
      <h3 class="text-xl font-semibold text-nature-brown-900 mb-2">
        {{ product.name }}
      </h3>
      <p class="text-nature-brown-600 text-sm leading-relaxed">
        {{ product.description }}
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>

