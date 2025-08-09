<template>
  <div class="column items-center">
    <h1 class="fs48 q-my-lg text-center">Quem somos</h1>
    <div class="fs20 q-mx-md text-justify" style="max-width: 800px">
      <p>
        Bem-vindo à RSantos Contabilidade, onde a excelência em contabilidade e consultoria
        financeira se encontra com um compromisso inabalável com nossos clientes. Fundado em
        13/01/2015, passamos por diversos desafios e reformulações que nos proporcionaram um
        desenvolvimento sólido, sem perder a essência de nossa missão inicial de oferecer soluções
        contábeis inovadoras e personalizadas. Nosso escritório é composto por uma equipe de
        profissionais altamente qualificados e dedicados a proporcionar um serviço de qualidade
        superior.
      </p>

      <p>
        Com anos de experiência no mercado, nos destacamos pela nossa abordagem integrada e
        estratégica, que abrange todas as áreas da contabilidade, desde a gestão financeira até o
        planejamento tributário e estratégias societárias, entre outras expertises. Garantimos que
        cada aspecto do seu negócio esteja otimizado para o sucesso, fornecendo uma visão clara e
        precisa das finanças da sua empresa, permitindo que você tome decisões informadas e
        estratégicas.
      </p>

      <p>
        Acreditamos na importância da transparência, da confiança e do relacionamento próximo com
        nossos clientes. Por isso, investimos continuamente em tecnologia e em capacitação
        profissional, assegurando que estamos sempre à frente das mudanças e exigências do mercado.
      </p>

      <p>
        Na RSantos Contabilidade, sua empresa encontra um parceiro confiável e comprometido com a
        sua prosperidade. Junte-se a nós e descubra como podemos ajudar a transformar os desafios
        contábeis em oportunidades de crescimento.
      </p>
    </div>
    <div
      v-for="missao in missao"
      :key="missao.index"
      class="q-mt-md q-mb-xl"
      style="max-width: 800px"
    >
      <h2 class="fs36 text-primary">{{ missao.title }}</h2>
      <q-list separator class="q-pt-sm">
        <q-item v-for="(it, i) in missao.items" :key="i" class="q-py-md">
          <q-item-section v-if="!$q.screen.lt.sm" avatar>
            <q-icon color="primary" name="check_circle" />
          </q-item-section>
          <q-item-section>
            <div>
              <div v-if="it.highlight">
                <b class="fs20 text-primary">{{ it.highlight }}</b
                >:

                <span class="fs20">{{ it.text }}</span>
              </div>
              <div v-else>
                <span class="fs20">{{ it.text }}</span>
              </div>
            </div>
          </q-item-section>
        </q-item>
      </q-list>
    </div>
  </div>
</template>
<script setup lang="ts">
const missao = [
  {
    index: 1,
    title: 'Missão',
    items: [
      {
        highlight: '',
        text: 'Nossa missão é oferecer soluções contábeis inovadoras e personalizadas, proporcionando serviços de qualidade superior que agreguem valor aos negócios de nossos clientes. Estamos comprometidos em fornecer orientação estratégica e suporte contínuo para otimizar a gestão financeira e tributária, contribuindo para o sucesso e crescimento sustentável das empresas que atendemos.',
      },
    ],
  },
  {
    index: 2,
    title: 'Valores',
    items: [
      {
        highlight: 'Excelência',
        text: 'Buscamos a excelência em tudo o que fazemos, garantindo a qualidade e precisão dos nossos serviços.',
      },
      {
        highlight: 'Transparência',
        text: 'Mantemos uma comunicação clara e aberta com nossos clientes, construindo relações de confiança mútua.',
      },
      {
        highlight: 'Inovação',
        text: 'Investimos continuamente em tecnologia e capacitação para oferecer soluções contábeis modernas e eficazes.',
      },
      {
        highlight: 'Comprometimento',
        text: 'Estamos dedicados ao sucesso de nossos clientes, atuando como parceiros estratégicos em todas as fases do negócio.',
      },
      {
        highlight: 'Ética',
        text: 'Agimos com integridade e responsabilidade, respeitando as normas e regulamentos profissionais.',
      },
    ],
  },
  {
    index: 3,
    title: 'Principios',
    items: [
      {
        highlight: 'Foco no Cliente',
        text: 'Nossos clientes estão no centro de tudo o que fazemos. Esforçamo-nos para entender suas necessidades e exceder suas expectativas.',
      },
      {
        highlight: 'Qualidade e Precisão',
        text: 'Garantimos a precisão dos nossos serviços e a qualidade das informações fornecidas, essencial para a tomada de decisões estratégicas.',
      },
      {
        highlight: 'Desenvolvimento Contínuo',
        text: 'Valorizamos o aprendizado contínuo e o aprimoramento profissional para nos mantermos atualizados e competitivos.',
      },
      {
        highlight: 'Responsabilidade Social',
        text: 'Contribuímos para o desenvolvimento sustentável das comunidades em que atuamos, promovendo práticas empresariais responsáveis.',
      },
      {
        highlight: 'Trabalho em Equipe',
        text: 'Acreditamos que a colaboração e o respeito mútuo entre nossa equipe e nossos clientes são fundamentais para alcançar resultados excepcionais.',
      },
    ],
  },
]
</script>
