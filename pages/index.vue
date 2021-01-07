<template>
  <Page>
    <List>
      <ListAddButton>
        <IconAdd />
      </ListAddButton>
    </List>
  </Page>
</template>

<script>
import Page from "../components/Page";
import List from "../components/Standart/List/List";
import ListAddButton from "../components/Standart/List/ListAddButton";
import IconAdd from "../components/Icons/IconAdd";
export default {
  components: {IconAdd, ListAddButton, List, Page},
  layout: 'app',
  middleware: ['auth']
}
</script>

<style lang="stylus" scoped>
</style>
