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
        <q-tab name="home" label="Home" />
        <q-tab name="quem_somos" label="Quem Somos" />
        <q-tab name="servicos" label="Serviços" />
        <q-tab name="noticias" label="Notícias" />
        <q-tab name="fale_conosco" label="Fale Conosco" />
        <q-tab name="ultimas_noticias" label="Últimas Notícias" />
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
