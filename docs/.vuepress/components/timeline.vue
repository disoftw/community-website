<template>
  <a-timeline>
    <a-timeline-item v-for="h in history" :color="h.color">
      <a-icon
        v-if="h.icon"
        slot="dot"
        :type="h.icon"
        style="font-size: 16px;"
      />
      <p v-html="h.content"></p>
    </a-timeline-item>
  </a-timeline>
</template>

<script>
export default {
  data () {
    return {
      history: [
        {
          color: 'green',
          content: '<b>Fernando Gallardo</b> crea <b>WolfCode Programming Squad</b> (Enero, 2020)',
          icon: ''
        },
        {
          color: '',
          content: '<b>Raul Novelo</b> crea la división y es nombrado líder (Abril, 2019)',
          icon: 'star'
        },
        {
          color: 'green',
          content: 'Se funda el <b>Capitulo Estudiantil AAAIMX</b> (Diciembre, 2018)',
          icon: ''
        },
        {
          color: 'gray',
          content: 'Se crea el <b>Club de Programación</b> - (Agosto, 2014)',
          icon: ''
        }
      ]
    }
  }
}
</script>
