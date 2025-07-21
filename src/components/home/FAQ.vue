<template>
  <div
    class="row items-center justify-center q-gutter-x-md q-my-xl"
    :class="{ column: $q.screen.lt.sm }"
    :style="$q.screen.lt.sm ? { width: '26rem' } : {}"
  >
    <div>
      <img
        class=""
        src="/questions.jpg"
        style="border-radius: 16px 16px 80px 16px"
        :style="$q.screen.lt.sm ? { width: '26rem' } : { width: '40rem' }"
      />
    </div>
    <div :style="$q.screen.lt.sm ? { width: '26rem' } : { width: '40rem' }">
      <h3 class="q-mb-md text-bold">Perguntas Frenquentes</h3>
      <p class="q-mb-md text-grey-6">
        Aqui estão algumas perguntas frequentes que podem ajudar você a entender melhor nossos
        serviços e como podemos ajudar sua empresa.
      </p>
      <q-expansion-item label="Quais serviços vocês oferecem?" icon="help" expand-separator>
        <div class="q-px-md">
          <p class="text-grey-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et vel provident consequuntur
            unde, fugiat nesciunt similique quasi? Fuga, cupiditate nesciunt sequi possimus, a
            blanditiis voluptate neque pariatur repellendus, minus asperiores.
          </p>
        </div>
      </q-expansion-item>
      <q-expansion-item label="Lorem ipsum dolor sit amet?" icon="help" expand-separator>
        <div class="q-px-md">
          <p class="text-grey-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et vel provident consequuntur
            unde, fugiat nesciunt similique quasi? Fuga, cupiditate nesciunt sequi possimus, a
            blanditiis voluptate neque pariatur repellendus, minus asperiores.
          </p>
        </div>
      </q-expansion-item>
      <q-expansion-item label="Lorem ipsum dolor sit amet?" icon="help" expand-separator>
        <div class="q-px-md">
          <p class="text-grey-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et vel provident consequuntur
            unde, fugiat nesciunt similique quasi? Fuga, cupiditate nesciunt sequi possimus, a
            blanditiis voluptate neque pariatur repellendus, minus asperiores.
          </p>
        </div>
      </q-expansion-item>
      <q-expansion-item label="Lorem ipsum dolor sit amet?" icon="help" expand-separator>
        <div class="q-px-md">
          <p class="text-grey-8">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et vel provident consequuntur
            unde, fugiat nesciunt similique quasi? Fuga, cupiditate nesciunt sequi possimus, a
            blanditiis voluptate neque pariatur repellendus, minus asperiores.
          </p>
        </div>
      </q-expansion-item>
    </div>
  </div>
</template>
