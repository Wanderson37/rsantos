<template>
  <div class="q-pa-md">
    <CardPlanos
      :plans="plans"
      :whats-number="WHATS"
      :compare-enabled="true"
      :whats-template="whatsTemplate"
    />
  </div>
</template>

<script setup lang="ts">
import CardPlanos from './CardPlanos.vue'

const plans = [
  {
    id: 'prestadores',
    name: 'Prestadores de Serviços',
    tagline: 'Gestão Contábil Essencial',
    icon: 'work',
    priceRange: { min: 250, max: 350, periodicity: 'mensal estimado' },
    features: [
      {
        group: 'Assessoria e Consultoria Contábil',
        items: [
          'Análise e Classificação Contábil',
          'Demonstrações Contábeis Anual',
          'Prestação de Contas Anual',
        ],
      },
      {
        group: 'Setor Tributário',
        items: [
          'Apuração de Tributos',
          'Emissão de Certidões Negativas',
          'Emissão de Notas Fiscais',
          'Orientações Tributárias e Contábeis',
        ],
      },
    ],
    note: '',
  },
  {
    id: 'starter',
    name: 'Starter',
    tagline: 'Gestão Contábil Essencial',
    icon: 'rocket_launch',
    popular: true,
    priceRange: { min: 650, max: 850, periodicity: 'mensal estimado' },
    features: [
      {
        group: 'Assessoria e Consultoria Contábil',
        items: [
          'Análise e Classificação Contábil',
          'Demonstrações Contábeis Mensais',
          'Proposta Orçamentária Anual',
          'Prestação de Contas Anual',
        ],
      },
      {
        group: 'Setor Tributário',
        items: ['Apuração de Tributos', 'Emissão de Certidões Negativas'],
      },
    ],
    note: '',
  },
  {
    id: 'intermediario',
    name: 'Intermediário',
    tagline: 'Gestão Financeira e Tributária',
    icon: 'trending_up',
    priceRange: { min: 2000, max: 3500, periodicity: 'mensal estimado' },
    features: [
      {
        group: 'Inclui o Básico +',
        items: [
          'Planejamento Tributário',
          'Estratégias Societárias',
          'Gestão Financeira',
          'Controle Patrimonial',
          'Soluções Tecnológicas',
          'Capacitação e Atualização Contínua',
        ],
      },
    ],
    note: '',
  },
  {
    id: 'avancado',
    name: 'Avançado',
    tagline: 'Gestão Estratégica e Auditoria',
    icon: 'verified',
    priceRange: { min: 4500, max: 7000, periodicity: 'mensal estimado' },
    features: [
      {
        group: 'Inclui Básico + Intermediário +',
        items: [
          'Auditorias Internas e Externas',
          'Planejamento Orçamentário (anual / trimestral / mensal)',
          'Plano de Negócios Personalizado',
          'Recuperação de Créditos',
          'Regularização Fiscal',
          'Acompanhamento de Contratos',
        ],
      },
    ],
    note: '',
  },
  {
    id: 'custom',
    name: 'Customizado',
    tagline: 'Soluções Sob Medida',
    icon: 'tune',
    priceRange: { min: 0, max: 0, periodicity: 'sob consulta' },
    features: [
      {
        group: 'Personalize',
        items: ['Monte o pacote ideal para sua operação', 'Análise individual para um valor justo'],
      },
    ],
    note: 'Fale com a gente para montar o seu.',
  },
]

const WHATS = '5592982895615'

const whatsTemplate =
  'Olá! Vim pelo site da RSantos Contabilidade e gostaria de saber mais sobre o plano selecionado.'
</script>
