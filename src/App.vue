<script setup>
import { RouterView } from 'vue-router';
import footerVue from "./components/footer.vue";
import menuVue from "./components/menu.vue";
</script>

<template>
        <menuVue />
        <RouterView />
        <footerVue />
</template>

<style></style>
