<template>
  <a-row :gutter="16">
    <a-col
      v-for="v in veteranos"
      :span="8"
      :xs="{ span: 24 }"
      :lg="{ span: 8 }"
    >
      <a-card :bordered="true">
        <img alt="example" :src="$withBase(v.avatar)" width="200" slot="cover" />
        <!-- <template class="ant-card-actions" slot="actions">
          <a-icon type="github" key="setting" />
          <a-icon type="facebook" key="ellipsis" />
        </template> -->
        <a-card-meta :title="v.name" :description="v.contact">
          <!-- <a-avatar slot="avatar" :src="$withBase(v.avatar)" /> -->
        </a-card-meta>
      </a-card>
      <br />
    </a-col>
  </a-row>
</template>

<script>
export default {
  data () {
    return {
      veteranos: [
        {
          name: 'Juan de Dios Canché Cen (2014-2018)',
          contact: 'juan1910@live.com.mx',
          avatar: '/juandedios-op.jpg'
        },
        {
          name: 'Jose Geovany Chan Cuevas (2014-2018)',
          contact: 'jogeochanc@gmail.com ',
          avatar: '/geo-op.jpg'
        },
        {
          name: 'José Luis González Arias (2014-2018)',
          contact: 'llito_12@hotmail.com',
          avatar: '/Optimized-pepe.jpg'
        },
        {
          name: 'Gerardo Cetzal Balam (2014-2018)',
          contact: 'gerardoc23@outlook.com',
          avatar: '/cetzalt.jpg'
        },
        {
          name: 'Gerardo Medina Cruz (2014-2018))',
          contact: 'gmedina2628@outlook.com',
          avatar: '/gerardo-op.jpg'
        },
        {
          name: 'Mario Humberto Braga Palma (2014-2018)',
          contact: 'mariobrap@gmail.com',
          avatar: '/mario-op2.jpg'
        }
      ]
    }
  }
}
</script>
