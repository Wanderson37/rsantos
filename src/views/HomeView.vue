<template>
  <div class="q-pa-md">
    <q-carousel v-model="slide" animated arrows class="radius-8" height="80vh" infinite navigation>
      <q-carousel-slide :name="1" img-src="https://cdn.quasar.dev/img/mountains.jpg" />
      <q-carousel-slide :name="2" img-src="https://cdn.quasar.dev/img/parallax1.jpg" />
      <q-carousel-slide :name="3" img-src="https://cdn.quasar.dev/img/parallax2.jpg" />
      <q-carousel-slide :name="4" img-src="https://cdn.quasar.dev/img/quasar.jpg" />
    </q-carousel>
  </div>
  <BaseButton
    class="justify-end radius-30 whatsapp-button"
    color="positive"
    text-color="white"
    target="_blank"
    href="https://wa.me/5592982895615"
  >
    <template #default>
      <img
        src="/whatsapp.svg"
        alt="WhatsApp"
        class="text-white"
        style="width: 24px; height: 24px"
      />
      Como podemos te ajudar?
    </template>
  </BaseButton>
  <StartOrMigrateCTA />
</template>

<script setup lang="ts">
import StartOrMigrateCTA from '@/components/home/StartOrMigrateCTA.vue'
import BaseButton from '@/wrappers/BaseButton.vue'
import { ref } from 'vue'

const slide = ref(1)
</script>

<style scoped>
.whatsapp-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}
</style>
