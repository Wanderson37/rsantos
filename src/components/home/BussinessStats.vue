<template>
  <div class="column q-my-lg items-center">
    <p class="fs48 q-mb-lg text-center" style="width: 40rem">
      + de <b class="text-secondary">{{ clientesAtendidos }}</b> Clientes Atendidos em todo o Brasil
    </p>
    <div class="row q-gutter-xl">
      <div class="q-px-md" style="border-left: 4px #c9a15b solid">
        <b class="fs30 text-bold">{{ colaboradores }}</b>
        <p class="fs18 q-ma-none text-grey-6">Colaboradores</p>
      </div>
      <div class="q-px-md" style="border-left: 4px #c9a15b solid">
        <b class="fs30 text-bold">+{{ anosExperiencia }}</b>
        <p class="fs18 q-ma-none text-grey-6">Anos de experiência</p>
      </div>
      <div class="q-px-md" style="border-left: 4px #c9a15b solid">
        <b class="fs30 text-bold">+{{ aberturasEmpresas }}</b>
        <p class="fs18 q-ma-none text-grey-6">Aberturas de empresas</p>
      </div>
      <div class="q-px-md" style="border-left: 4px #c9a15b solid">
        <b class="fs30 text-bold">{{ clientesSatisfeitos }}%</b>
        <p class="fs18 q-ma-none text-grey-6">Clientes Satisfeitos</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

// Refs reativas para cada contador
const clientesAtendidos = ref(0)
const colaboradores = ref(0)
const anosExperiencia = ref(0)
const aberturasEmpresas = ref(0)
const clientesSatisfeitos = ref(0)

function animateCounter(targetRef: typeof clientesAtendidos, targetNumber: number) {
  const duration = 3000
  const steps = 60
  const increment = targetNumber / steps
  const stepDuration = duration / steps

  let currentStep = 0

  const animate = () => {
    if (currentStep <= steps) {
      targetRef.value = Math.floor(increment * currentStep)
      if (currentStep === steps) {
        targetRef.value = targetNumber
      }
      currentStep++
      setTimeout(animate, stepDuration)
    }
  }

  animate()
}

onMounted(() => {
  animateCounter(clientesAtendidos, 3000)
  animateCounter(colaboradores, 85)
  animateCounter(anosExperiencia, 15)
  animateCounter(aberturasEmpresas, 20000)
  animateCounter(clientesSatisfeitos, 95)
})
</script>
