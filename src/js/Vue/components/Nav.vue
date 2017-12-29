<template lang="pug">

ul.nav
  li.nav-item(v-for="item in itemsMenu")
    a(:href="item.link") {{ item.title }}

</template>

<script>
  export default {
    props: ['itemsMenu']
  }
</script>

<style>
  @import './../../../css/blocks/nav.sss';
</style>