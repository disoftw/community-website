<template>
  <a-list itemLayout="horizontal" :dataSource="list">
    <a-list-item slot="renderItem" slot-scope="item, index">
      <template slot="actions" v-for="{ type, text } in actions">
        <span :key="type">
          <a-icon :type="type" style="margin-right: 8px" />
          {{ text }}
        </span>
      </template>
      <a-list-item-meta :description="item.charge || item.email">
        <a slot="title" href=""
          >{{ item.name.split(' ')[0] }} {{ item.surname.split('-')[0] }}</a
        >
        <a-avatar
          slot="avatar"
          :src="
            item.thumbnail ||
              'https://estudiantes.udp.cl/cms/wp-content/themes/la_general_theme/images/default_avatar.png'
          "
        />
      </a-list-item-meta>
    </a-list-item>
  </a-list>
</template>

<script>
import { fetchMembers, fetchDivisions } from '../api/aaaimx'
export default {
  data () {
    return {
      members: [],
      actions: [
        { type: 'github' },
        { type: 'mail' },
        { type: 'facebook' }
      ]
    }
  },
  computed: {
    list () {
      return this.members
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      fetchMembers().then(res => {
        console.log(res)
        this.members = res.results
      })
    }
  }
}
</script>
