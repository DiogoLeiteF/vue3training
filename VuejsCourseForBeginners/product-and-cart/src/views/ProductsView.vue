<template>
  <div>
    <main class="wrapper">
      <h1>Products</h1>

      <div class="card-container">
        <ProductCard v-for="product in inventory" :key="product.id" :product="product" :addToCart="addToCart" />
      </div>
    </main>

  </div>
</template>


<script>

import ProductCard from '../components/ProductCard.vue'


export default {
  props: ["inventory", "addToCart", 'product'],
  components: {
    ProductCard
  }

}

</script>