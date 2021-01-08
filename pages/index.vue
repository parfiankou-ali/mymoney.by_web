<template>
  <Page padding-x-y>
    <List :items="shops" v-slot:list="listSlot">
      <NuxtLink to="/shop/add">
        <ListAddButton @click.native="addShop">
          <IconAdd />
        </ListAddButton>
      </NuxtLink>
    </List>
  </Page>
</template>

<script>
import Page from "../components/Standart/Page/Page";
import List from "../components/Standart/List/List";
import ListAddButton from "../components/Standart/List/ListAddButton";
import IconAdd from "../components/Icons/IconAdd";
export default {
  components: {IconAdd, ListAddButton, List, Page},
  layout: 'app',
  middleware: ['auth'],
  data () {
    return {
      shops: [{
        id: 78,
        name: 'Cheap money'
      }, {
        id: 89,
        name: 'Rick\'s flowers'
      }, {
        id: 92,
        name: 'Grocery store'
      }]
    }
  },
  methods: {
    addShop () {
      console.log('add shop')
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
