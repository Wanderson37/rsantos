<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-grey-3">
        <q-toolbar-title class="text-black text-center">
          <q-avatar>
            <img src="/rsantos_logo.png" alt="Logo" />
          </q-avatar>
          RSantos
        </q-toolbar-title>
      </q-toolbar>
      <q-tabs
        v-model="tab"
        class="bg-grey-3 text-black"
        active-color="primary"
        indicator-color="primary"
      >
        <q-route-tab name="home" label="Home" to="/home" />
        <q-route-tab name="quem_somos" label="Quem Somos" to="/quem-somos" />
        <q-route-tab name="servicos" label="Serviços" to="/servicos" />
        <q-route-tab name="noticias" label="Notícias" to="/noticias" />
        <q-route-tab name="fale_conosco" label="Fale Conosco" to="/fale-conosco" />
        <q-route-tab name="ultimas_noticias" label="Últimas Notícias" to="/ultimas-noticias" />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const tab = ref('home')
</script>
