<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-grey-3">
        <q-btn
          v-if="$q.screen.lt.sm"
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          class="text-black"
        />
        <q-toolbar-title class="text-black">
          <div class="row items-center q-gutter-sm">
            <q-avatar>
              <img src="/rsantos_logo.png" alt="Logo" />
            </q-avatar>
            <span>RSantos</span>
          </div>
        </q-toolbar-title>

        <q-tabs
          v-if="!$q.screen.lt.sm"
          v-model="tab"
          class="text-black"
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
      </q-toolbar>
    </q-header>

    <q-drawer
      v-if="$q.screen.lt.sm"
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-1"
    >
      <q-list>
        <q-item-label header>Menu</q-item-label>

        <q-item clickable v-ripple to="/home" @click="leftDrawerOpen = false">
          <q-item-section avatar>
            <q-icon name="home" />
          </q-item-section>
          <q-item-section>Home</q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/quem-somos" @click="leftDrawerOpen = false">
          <q-item-section avatar>
            <q-icon name="info" />
          </q-item-section>
          <q-item-section>Quem Somos</q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/servicos" @click="leftDrawerOpen = false">
          <q-item-section avatar>
            <q-icon name="business" />
          </q-item-section>
          <q-item-section>Serviços</q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/noticias" @click="leftDrawerOpen = false">
          <q-item-section avatar>
            <q-icon name="article" />
          </q-item-section>
          <q-item-section>Notícias</q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/fale-conosco" @click="leftDrawerOpen = false">
          <q-item-section avatar>
            <q-icon name="contact_mail" />
          </q-item-section>
          <q-item-section>Fale Conosco</q-item-section>
        </q-item>

        <q-item clickable v-ripple to="/ultimas-noticias" @click="leftDrawerOpen = false">
          <q-item-section avatar>
            <q-icon name="newspaper" />
          </q-item-section>
          <q-item-section>Últimas Notícias</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view v-slot="{ Component }">
        <Transition name="slideX">
          <component :is="Component" />
        </Transition>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const tab = ref('home')
const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
