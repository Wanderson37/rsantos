<template>
  <div class="pricing-wrapper">
    <div class="row items-center justify-between q-mb-md">
      <div class="text-h5">Planos</div>
      <BaseButton
        v-if="compareEnabled"
        class="text-grey-1"
        no-caps
        color="primary"
        icon="table_chart"
        label="Comparar planos"
        @click="showCompare = true"
      />
    </div>

    <div class="row q-col-gutter-lg">
      <div v-for="plan in plans" :key="plan.id" class="col-12 col-sm-6 col-md-3">
        <q-card flat bordered class="pricing-card" :class="{ 'is-popular': !!plan.popular }">
          <div v-if="plan.popular" class="popular-ribbon">
            <q-badge color="primary" text-color="white" label="Mais popular" />
          </div>

          <!-- Header Section - Fixed Height -->
          <q-card-section class="card-header">
            <div class="row items-center justify-between">
              <div class="text-h6">{{ plan.name }}</div>
              <q-icon v-if="plan.icon" :name="plan.icon" />
            </div>
            <div class="text-subtitle2 text-grey-7 q-mt-xs">{{ plan.tagline }}</div>
          </q-card-section>

          <q-card-section class="card-price">
            <div class="price-line">
              <span class="text-h5">
                {{ plan.priceRange.min ? formatBRL(plan.priceRange.min) : 'Sob consulta' }}
                <template v-if="plan.priceRange.max && plan.priceRange.min"
                  >–{{ formatBRL(plan.priceRange.max) }}</template
                >
              </span>
              <span class="text-caption text-grey-7">&nbsp;{{ plan.priceRange.periodicity }}</span>
            </div>
          </q-card-section>

          <q-separator />

          <q-card-section class="card-features full-height">
            <div class="text-weight-medium q-mb-sm">Serviços incluídos</div>

            <div v-for="group in plan.features" :key="group.group" class="q-mb-md">
              <div class="text-caption text-grey-7 q-mb-xs">{{ group.group }}</div>
              <q-list dense bordered class="radius-8">
                <q-item v-for="item in group.items" :key="item" dense>
                  <q-item-section class="items-center q-px-none" avatar width=" 12px "
                    ><q-icon name="check_circle"
                  /></q-item-section>
                  <q-item-section
                    ><q-item-label>{{ item }}</q-item-label></q-item-section
                  >
                </q-item>
              </q-list>
            </div>

            <div v-if="plan.extras?.length">
              <div class="text-caption text-grey-7 q-mb-xs">Extras</div>
              <q-list dense class="radius-8">
                <q-item v-for="ex in plan.extras" :key="ex" dense>
                  <q-item-section avatar><q-icon name="o_add" /></q-item-section>
                  <q-item-section
                    ><q-item-label>{{ ex }}</q-item-label></q-item-section
                  >
                </q-item>
              </q-list>
            </div>
          </q-card-section>

          <q-separator />

          <q-card-actions align="between" class="card-actions">
            <div class="text-caption text-grey-7">{{ plan.note }}</div>
            <BaseButton
              :label="plan.cta?.label || 'Falar no WhatsApp'"
              color="primary"
              no-caps
              class="q-ml-sm"
              @click="openWhatsApp(plan)"
            />
          </q-card-actions>
        </q-card>
      </div>
    </div>

    <q-dialog class="radius-16" v-model="showCompare" maximized>
      <q-card style="max-width: 1200px; width: 100%; max-height: 95vh">
        <q-card-section class="row items-center justify-between">
          <div class="text-h6">Comparar planos</div>
          <BaseButton flat round dense icon="close" v-close-popup />
        </q-card-section>
        <q-separator />
        <q-card-section>
          <q-table
            flat
            bordered
            :rows="comparisonRows"
            :columns="comparisonColumns"
            row-key="feature"
            :rows-per-page-options="[0]"
          >
            <template #body-cell="props">
              <q-td :props="props">
                <template v-if="props.col.name === 'feature'">
                  {{ props.row.feature }}
                </template>
                <template v-else>
                  <q-icon
                    size="md"
                    :name="props.row[props.col.name] ? 'check' : '-'"
                    :color="props.row[props.col.name] ? 'green' : 'black'"
                  />
                </template>
              </q-td>
            </template>
          </q-table>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '@/wrappers/BaseButton.vue'
import { computed, ref } from 'vue'

type FeatureGroup = { group: string; items: string[] }
type Plan = {
  id: string | number
  name: string
  tagline: string
  icon?: string
  popular?: boolean
  priceRange: { min: number; max: number; periodicity: string }
  features: FeatureGroup[]
  extras?: string[]
  note?: string
  cta?: { label?: string }
}

const props = defineProps<{
  plans: Plan[]
  whatsNumber: string
  compareEnabled?: boolean
  whatsTemplate?: string
}>()

const showCompare = ref(false)

const formatBRL = (v: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    maximumFractionDigits: 2,
  }).format(v)

function openWhatsApp(plan: Plan) {
  const base = 'https://wa.me/'
  const defaultMsg =
    `Olá, tenho interesse no plano ${plan.name} - ${plan.tagline}.` +
    (plan.priceRange.min
      ? ` Faixa de preço: ${formatBRL(plan.priceRange.min)}${plan.priceRange.max ? ' a ' + formatBRL(plan.priceRange.max) : ''} (${plan.priceRange.periodicity}).`
      : '') +
    ' Poderiam me atender?'
  const text = encodeURIComponent(props.whatsTemplate || defaultMsg)
  window.open(`${base}${props.whatsNumber}?text=${text}`, '_blank')
}

const allFeatures = computed<string[]>(() => {
  const set = new Set<string>()
  for (const p of props.plans) {
    p.features?.forEach((g) => g.items.forEach((i) => set.add(i)))
    p.extras?.forEach((e) => set.add(e))
  }
  return Array.from(set)
})

const comparisonColumns = computed(() => {
  const cols: Array<{
    name: string
    label: string
    field: string
    align: 'left' | 'center' | 'right'
  }> = [{ name: 'feature', label: 'Serviço', field: 'feature', align: 'left' as const }]
  props.plans.forEach((p) =>
    cols.push({ name: String(p.id), label: p.name, field: String(p.id), align: 'center' as const }),
  )
  return cols
})

const comparisonRows = computed(() => {
  return allFeatures.value.map((f) => {
    const row: Record<string, string | boolean> = { feature: f }
    for (const p of props.plans) {
      const has = p.features.some((g) => g.items.includes(f)) || (p.extras?.includes(f) ?? false)
      row[String(p.id)] = has
    }
    return row
  })
})
</script>

<style scoped>
.pricing-wrapper {
  max-width: 1200px;
  margin: 0 auto;
}

.pricing-card {
  position: relative;
  border-radius: 16px;
  overflow: hidden;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
  height: 100%;
  display: grid;
  grid-template-rows: auto auto 1fr auto;
}

.pricing-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.08);
}

.popular-ribbon {
  position: absolute;
  top: 12px;
  left: 100px;
  z-index: 1;
}

.price-line {
  display: flex;
  align-items: baseline;
  gap: 0.25rem;
}

.is-popular {
  border: 2px solid var(--q-primary);
  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.06);
}

.card-header {
  min-height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card-price {
  display: flex;
  align-items: center;
  padding-top: 16px;
  padding-bottom: 16px;
}

.card-features {
  flex: 1;
  padding-top: 16px;
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  min-height: 400px;
}

.card-features .text-weight-medium {
  margin-bottom: 12px;
}

.card-features .q-mb-md:last-child {
  margin-bottom: 0;
}

.card-actions {
  min-height: 64px;
  padding: 16px;
  align-items: center;
}

/* Garantir que todos os cards na mesma linha tenham a mesma altura */
.row .col-12,
.row .col-sm-6,
.row .col-md-3 {
  display: flex;
}

@media (max-width: 599px) {
  .card-header {
    min-height: auto;
  }

  .card-price {
    min-height: auto;
  }

  .card-features {
    min-height: 200px;
  }

  .pricing-card {
    grid-template-rows: auto auto auto auto;
  }
}
</style>
