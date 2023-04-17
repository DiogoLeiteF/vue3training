app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true,
        }
    },
    template:
    /*html*/
    `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <!-- image goes here -->
        <img :class="{'out-of-stock-img': !inStock}" v-bind:src="image">
        <!-- <img :src="image" alt=""> -->
      </div>
      <div class="product-info">
        <!-- <h1>{{ brand + " " + product }}</h1> -->
        <h1>{{ title }}</h1>
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>
        <!-- <p v-show="inStock">In Stock</p> -->
        <!-- <p v-if="inventory > 10">In Stock</p>
          <p v-else-if="inventory <= 10 && inventory >0">Almost Sold Out</p> -->
        <!-- <p v-else>Out of Stock</p> -->
        
        <p>Shipping: {{ shipping }}</p>

        <!-- solution -->
        <product-details :details="details"></product-details>
        <!-- solution -->

        <!-- <div 
        v-for="variant in variants" 
        :key="variant.id" 
        @mouseover="updateImage(variant.image)"
        class="color-circle"
        :style="{ backgroundColor: variant.color}">
        {{ variant.color}}
        </div> -->
        <div 
        v-for="(variant, index) in variants" 
        :key="variant.id" 
        @mouseover="updateVariant(index)"
        class="color-circle"
        :style="{ backgroundColor: variant.color}">
        <!-- {{ variant.color}} -->
        </div>

        <!-- <button class="button" v-on:click="addToCart">Add to Cart</button> -->
        <button 
        class="button" 
        @click="addToCart" 
        :disabled ="!inStock"
        :class="{ disabledButton: !inStock}">
        Add to Cart</button>
        <!-- <button class="button" @click="remFromCart">Remove from Cart</button> -->
      </div>
    </div>
  </div>`,
  data() {
    return {
        product: "Socks", 
        brand: 'Vue Mastery',
        // image: "./assets/images/socks_green.jpg",
        selectedVariant:0,
        // inStock : true,
        // inventory : 08,
        details: ['50% cotton', '30% wool', '20% polyester'],
        variants: [
            { id: 2234, color: "green", image:"./assets/images/socks_green.jpg", quantity: 50, onSale: true},
            { id: 2235, color: "blue", image: "./assets/images/socks_blue.jpg", quantity: 0, onSale: false}, 
        ],
        onSale: true,

    }
},
methods: {
    addToCart(){
        this.cart +=1
    },
    updateVariant(index){
        this.selectedVariant = index;
        this.onSale = this.variants[index].onSale;
        // console.log(onSale)
    }, 
}, 
computed: {
    title(){
        if(this.onSale){
            return this.brand + ' ' + this.product + ' is on sale'
        }else{
            return this.brand + ' ' + this.product
        }
    },
    image(){
        return this.variants[this.selectedVariant].image
    },
    inStock(){
        return this.variants[this.selectedVariant].quantity
    },
    shipping(){
        if(this.premium){
            return "Free"
        }
        return 2.99
    }
}
})