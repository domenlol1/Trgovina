<template>
    <div>
        <Header />

        <Body />
    </div>
</template>
  
<script>
import Header from "./components/Header.vue";
import Body from "./components/Body.vue";

export default {
    components: { Header, Body },
    data() {
        return {};
    }
}
</script>

<style>
#app {
  margin: 0 auto;
  font-weight: normal;
  font-family: latoregular, Lato, sans-serif;
}
</style>