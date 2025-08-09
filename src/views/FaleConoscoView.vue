<template>
  <div class="flex items-center justify-center q-pa-md">
    <q-card class="q-pa-lg q-ma-lg shadow-2 radius-16 bg-white" style="max-width: 800px">
      <div class="text-center q-mb-md">
        <q-icon name="mail_outline" size="48px" color="primary" />
        <h2 class="text-h5 q-mt-sm">Fale Conosco</h2>
        <p class="text-grey-7">
          Entre em contato por email ou telefone, será um prazer atender você!
        </p>
      </div>

      <q-separator class="q-mb-md" />

      <div class="q-gutter-md">
        <q-item clickable tag="a" href="mailto:escritorio@rsantoscontabilidade.com">
          <q-item-section avatar>
            <q-icon name="email" color="primary" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Email</q-item-label>
            <q-item-label caption>escritorio@rsantoscontabilidade.com</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable tag="a" href="tel:+5592984183201">
          <q-item-section avatar>
            <q-icon name="phone" color="positive" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Telefone 1</q-item-label>
            <q-item-label caption>(92) 9.8418-3201</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable tag="a" href="https://wa.me/5592982895615">
          <q-item-section avatar>
            <img src="/whatsapp-green.svg" alt="WhatsApp" style="width: 24px; height: 24px" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Telefone 2</q-item-label>
            <q-item-label caption>(92) 9.8289-5615</q-item-label>
          </q-item-section>
        </q-item>
      </div>
    </q-card>
  </div>
</template>
