<template>
  <div>
    <a-row>
      <a-col v-for="video in videos" :xs="{ span: 24 }" :lg="{ span: 12 }"
        ><iframe width="400" height="315" frameborder="0" :src="video.url">
        </iframe>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      videos: [
        {
          title: 'La ruta de aprendizaje de un desarrollador web profesional',
          url: 'https://www.youtube.com/embed/ExsGyZDBlJQ'
        },
        {
          title: 'Tendencias de Javascript para el 2019',
          url: 'https://www.youtube.com/embed/xHQ1tupbNv8'
        },
        {
          title: 'Lenguajes y tecnologías más rentables para 2019',
          url: 'https://www.youtube.com/embed/wNug81vId6Y'
        },
        {
          title: '10 errores comunes de programadores junior',
          url: 'https://www.youtube.com/embed/YJ0u-MpYpM4'
        },
        {
          title: '',
          url: 'https://www.youtube.com/embed/FlOLc2DaSTo'
        },
        {
          title: 'Cómo dar y recibir Feedback Efectivo',
          url: 'https://www.youtube.com/embed/X0xS5VNM2x0'
        },
        {
          title: 'Portafolio vs Titulo Universitario',
          url: 'https://www.youtube.com/embed/YZ7Ml5wc52I'
        },
        {
          title: 'Cómo ser MÁS LÍDER y menos follower',
          url: 'https://www.youtube.com/embed/uIVFEpenReI'
        },
        {
          title: 'La ruta de aprendizaje de un desarrollador web profesional',
          url: 'https://www.youtube.com/embed/ExsGyZDBlJQ'
        },
        {
          title: 'Ser o no ser: Backend o Frontend',
          url: 'https://www.youtube.com/embed/WViNjzoDonU'
        },
        {
          title: 'Los momentos mágicos al escribir código',
          url: 'https://www.youtube.com/embed/0WgKOHMntyo'
        },
        {
          title: '',
          url: 'https://www.youtube.com/embed/Xk1OPWT_6yw'
        }
      ]
    }
  }
}
</script>
