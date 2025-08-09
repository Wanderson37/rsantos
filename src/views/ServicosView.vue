<template>
  <div class="column items-center">
    <h1 class="fs48 q-my-lg text-center text-primary">Nossos Serviços</h1>
    <div class="fs20 q-mx-md text-justify" style="max-width: 800px">
      <p>
        Na RSantos Contabilidade, oferecemos uma ampla gama de serviços contábeis e consultoria
        financeira, especialmente desenvolvidos para atender as necessidades empresariais. Nossa
        equipe de profissionais altamente qualificados está preparada para fornecer soluções
        integradas e estratégicas, garantindo que cada aspecto do seu negócio esteja otimizado para
        o sucesso. Conheça nossos principais serviços:
      </p>

      <div v-for="service in services" :key="service.index" class="q-mt-md q-mb-xl">
        <h2 class="fs36 text-primary">{{ service.title }}</h2>
        <q-list separator class="q-pt-sm">
          <q-item v-for="(it, i) in service.items" :key="i" class="q-py-md">
            <q-item-section v-if="!$q.screen.lt.sm" avatar>
              <q-icon color="primary" name="check_circle" />
            </q-item-section>
            <q-item-section>
              <div>
                <b class="text-primary">{{ it.highlight }}</b
                >:
                <span class="fs20">{{ it.text }}</span>
              </div>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const services = [
  {
    index: 1,
    title: 'Assessoria e Consultoria Contábil',
    items: [
      {
        highlight: 'Análise e Classificação Contábil',
        text: 'Analisamos e classificamos a documentação referente aos atos de gestão econômico-financeira e patrimonial, subsidiando novos planejamentos e estratégias financeiras.',
      },
      {
        highlight: 'Demonstrações Contábeis',
        text: 'Levantamento, elaboração e apresentação de balancetes, balanços e demais demonstrações contábeis mensais, conforme a legislação vigente.',
      },
      {
        highlight: 'Proposta Orçamentária',
        text: 'Elaboração e acompanhamento da proposta orçamentária anual, bem como sua reformulação, se necessário.',
      },
      {
        highlight: 'Prestação de Contas',
        text: 'Elaboração da prestação de contas anual, em conformidade com as exigências legais e normativas vigentes.',
      },
      {
        highlight: 'Assessoria à Diretoria',
        text: 'Orientação em assuntos contábeis, financeiros e administrativos, incluindo apoio em processos decisórios e emissão de pareceres técnicos.',
      },
    ],
  },
  {
    index: 2,
    title: 'Assessoria e Consultoria em Departamento Pessoal',
    items: [
      {
        highlight: 'Gestão de Folha de Pagamento',
        text: 'Confecção de folhas de pagamento, emissão de contracheques, cálculos de férias e rescisões contratuais, encargos sociais e guias de recolhimento.',
      },
      {
        highlight: 'Administração de Contratos',
        text: 'Registro e contrato de trabalho para novos funcionários, além de atualizações nos livros de registro e carteiras profissionais.',
      },
      {
        highlight: 'Conformidade Legal',
        text: 'Garantia de cumprimento de todas as obrigações legais relacionadas ao Departamento Pessoal.',
      },
    ],
  },
  {
    index: 3,
    title: 'Assessoria e Consultoria no Setor Tributário',
    items: [
      {
        highlight: 'Apuração de Tributos',
        text: 'Apuração e apresentação das obrigações acessórias aos órgãos regulamentadores e fiscalizadores, dentro dos prazos legais.',
      },
      {
        highlight: 'Certidões Negativas',
        text: 'Emissão e regularização de certidões negativas de débitos junto à Receita Federal, Secretarias de Fazenda estaduais e municipais, Previdência Social e FGTS.',
      },
    ],
  },
  {
    index: 4,
    title: 'Planejamento Tributário e Estratégias Societárias',
    items: [
      {
        highlight: 'Planejamento Tributário',
        text: 'Desenvolvimento de estratégias para otimização da carga tributária, garantindo a conformidade com a legislação vigente e a maximização dos benefícios fiscais.',
      },
      {
        highlight: 'Estratégias Societárias',
        text: 'Consultoria para estruturação societária, fusões, aquisições e reorganizações empresariais, visando a eficiência e o crescimento sustentável do negócio.',
      },
    ],
  },
  {
    index: 5,
    title: 'Gestão Financeira e Controle Patrimonial',
    items: [
      {
        highlight: 'Gestão Financeira',
        text: 'Implementação de controles financeiros eficazes, elaboração de orçamentos e projeções financeiras, e acompanhamento de fluxo de caixa.',
      },
      {
        highlight: 'Controle Patrimonial',
        text: 'Gestão e controle dos ativos patrimoniais, incluindo a emissão de relatórios detalhados sobre o patrimônio da empresa.',
      },
    ],
  },
  {
    index: 6,
    title: 'Tecnologia e Inovação em Contabilidade',
    items: [
      {
        highlight: 'Soluções Tecnológicas',
        text: 'Utilização de softwares contábeis avançados para automatização de processos, garantindo maior eficiência e precisão nos serviços prestados.',
      },
      {
        highlight: 'Capacitação e Atualização',
        text: 'Investimento contínuo em capacitação profissional para assegurar que nossa equipe esteja sempre atualizada com as últimas tendências e exigências do mercado.',
      },
    ],
  },
  {
    index: 7,
    title: 'Auditorias',
    items: [
      {
        highlight: 'Auditorias Internas e Externas',
        text: 'Realização de auditorias para verificar a conformidade dos processos internos e externos, garantindo a integridade e a transparência das operações financeiras da empresa.',
      },
    ],
  },
  {
    index: 8,
    title: 'Planejamento Orçamentário',
    items: [
      {
        highlight: 'Desenvolvimento de Orçamentos',
        text: 'Criação e acompanhamento de orçamentos anuais, trimestrais e mensais, garantindo que os recursos financeiros sejam utilizados de forma eficiente e estratégica.',
      },
    ],
  },
  {
    index: 9,
    title: 'Plano de Negócios',
    items: [
      {
        highlight: 'Elaboração de Planos de Negócios',
        text: 'Desenvolvimento de planos de negócios personalizados para auxiliar na tomada de decisões estratégicas, captação de recursos e expansão do mercado.',
      },
    ],
  },
  {
    index: 10,
    title: 'Recuperação de Créditos',
    items: [
      {
        highlight: 'Análise e Recuperação de Créditos',
        text: 'Identificação e recuperação de créditos tributários e financeiros, garantindo o retorno de valores devidos à empresa.',
      },
    ],
  },
  {
    index: 11,
    title: 'Regularização Fiscal',
    items: [
      {
        highlight: 'Regularização de Situação Fiscal',
        text: 'Assistência na regularização fiscal da empresa, garantindo a conformidade com as obrigações fiscais e evitando penalidades.',
      },
    ],
  },
  {
    index: 12,
    title: 'Acompanhamento de Contratos',
    items: [
      {
        highlight: 'Gestão de Contratos',
        text: 'Monitoramento e acompanhamento de contratos empresariais para garantir o cumprimento das obrigações contratuais e a maximização dos benefícios.',
      },
    ],
  },
]
</script>
