<template>
  <div class="column items-center justify-center q-mb-lg">
    <div style="width: 60vw">
      <h3 class="q-mb-md text-bold text-center" :class="{ fs30: $q.screen.lt.sm }">
        Quer ter uma contabilidade completa para sua empresa?
      </h3>
      <p class="fs18 text-center">
        Escolha a opção desejada abaixo e deixe que nós cuidamos do resto para você!
      </p>
    </div>
    <div class="row" :class="{ 'column justify-center text-center': $q.screen.lt.sm }">
      <a target="_blank" href="https://wa.me/5592982895615" class="no-decoration">
        <q-card class="card q-mx-md q-mb-sm" clickable hover style="width: 30vw">
          <q-img src="/empresa-1.jpg"></q-img>
        </q-card>
        <p class="fs20 text-bold text-center text-primary">Quero abrir minha empresa</p>
      </a>
      <a target="_blank" href="https://wa.me/5592982895615" class="no-decoration">
        <q-card class="card q-mx-md q-mb-sm" style="width: 30vw">
          <q-img src="/empresa-2.jpg">
            <template #loading>
              <div class="row items-center justify-center" style="height: 100%">
                <q-spinner color="primary" size="40px" />
              </div>
            </template>
          </q-img>
        </q-card>
        <p class="fs20 text-bold text-center text-primary">Quero migrar de contabilidade</p>
      </a>
    </div>
  </div>
</template>

<style scoped lang="sass">
.card
  cursor: pointer
  min-width: 12rem
  transition: all 0.3s

.card:hover
  scale: 1.05

.no-decoration
  text-decoration: none
  color: inherit
</style>
