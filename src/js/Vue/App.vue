<template lang="pug">
  #app
    Nav(:itemsMenu="itemsMenu")
    input(type="text" value="itemsMenu[0].title" v-model="itemsMenu[0].title")
</template>

<script>
  import Nav from './components/Nav.vue';

  export default {
    data() {
      return {
        itemsMenu: '',
        msg: 1
      }
    },
    components: { Nav },
    created(){
      this.itemsMenu = [
        {
          title: 'Index',
          link: 'index.html'
        },
        {
          title: 'Blog',
          link: 'blog.html'
        },
        {
          title: 'Contact',
          link: 'contact.html'
        }
      ]
    }
  }
</script>