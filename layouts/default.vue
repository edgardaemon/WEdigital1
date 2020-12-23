<template>
  <div>
    <Header/>
    <transition name="home" mode="out-in">
      <nuxt/>
    </transition>
    <Footer/>
  </div>
</template>

<script>
import Header from "../components/header";
import Footer from "../components/footer";

export default {
  Header,
  Footer,
};
</script>

<style scoped>
.home-enter-active,
.home-leave-active {
  transition:  2s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
}
</style>