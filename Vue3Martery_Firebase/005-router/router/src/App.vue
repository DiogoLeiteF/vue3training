<template>
  <div>
    <div><router-link :to="{ name: 'home' }">Home Page</router-link></div>
    <div><router-link :to="{ name: 'about' }">About Page</router-link></div>
    <div><router-link :to="{ name: 'articles', params: { id: 1 } }">Article Page</router-link></div>
  </div>
  <router-view></router-view>
</template>

<script>


export default {
  name: 'App',
}

</script>