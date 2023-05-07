
<template>
  <header class="top-bar spread">
    <nav class="top-bar-nav">
      <RouterLink to="/" class="top-bar-link">
        <i class="icofont-spoon-and-fork"></i>
        <span>Home</span>
      </RouterLink>
      <RouterLink to="/products" class="top-bar-link">
        <span>Products</span>
      </RouterLink>
      <RouterLink to="/past-orders" class="top-bar-link">
        <span>Past Orders</span>
      </RouterLink>
    </nav>
    <div @click="toggleViewCart" class="top-bar-cart-link">
      <i class="icofont-cart-alt icofont-1x"></i>
      <span>Cart ({{ cartItems }})</span>
    </div>
  </header>

  <RouterView :inventory="inventory" :addToCart="addToCart" />

  <Sidebar v-if="viewCart" :toggle="toggleViewCart" :cart="cart" :inventory="inventory" :remove="removeItem" />
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import food from './food.json'

export default {
  components: {
    Sidebar
  },
  data() {
    return {
      viewCart: false,
      inventory: food,
      cart: {}

    }
  },
  methods: {
    addToCart(name, quantity) {
      if (!this.cart[name]) this.cart[name] = 0
      this.cart[name] += quantity
      console.log(this.cart)
    },
    toggleViewCart() {
      this.viewCart = !this.viewCart
    },
    removeItem(name) {

      delete this.cart[name]
    }
  },
  computed: {
    cartItems() {
      let sum_ = Object.values(this.cart).reduce((acc, curr) => {
        return acc + curr
      }, 0)
      return sum_
    },
  }
}

</script>
