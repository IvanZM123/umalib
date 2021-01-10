<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app>
      <v-list-item class="px-2">
        <v-list-item-avatar>
          <v-img
            :src="`/avatar/${user.avatar}`"
          ></v-img>
        </v-list-item-avatar>
        <v-list-item-title>{{ user.name }}</v-list-item-title>
      </v-list-item>
      
      <v-list shaped>
        <v-list-item-group
        v-for="(item, index) in conditionPanelRight"
        :key="index">
          <v-list-item :to="item.url">
            <v-list-item-icon>
              <v-icon v-text="item.icon" />
            </v-list-item-icon>
            <v-list-item-title v-text="item.text" />
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      app
      fixed
      :clipped-left="clipped"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-btn
      v-if="btns"
        icon
        @click.stop="miniVariant = !miniVariant"
      >
        <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
      </v-btn>
      <v-btn
      v-if="btns"
        icon
        @click.stop="clipped = !clipped"
      >
        <v-icon>mdi-application</v-icon>
      </v-btn>
      <img src="https://img.icons8.com/color/48/000000/book-shelf.png"/>
      <v-toolbar-title
      v-if="btns"
        class="ml-2"
        style="font-family: Oswald; font-size: 25px"
      >UMALIB</v-toolbar-title>
      <v-spacer />
      <v-text-field
      label="Buscar"
      prepend-inner-icon="mdi-magnify"
      hide-details
      solo-inverted
      dense
      @input="searchElement" />
      <v-spacer />
      <v-btn
        icon
        @click.stop="rightDrawer = !rightDrawer"
      >
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    
    <v-main>
      <v-container fluid>
        <nuxt />
      </v-container>
    </v-main>

    <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
     <!-- Item de las opciones del perfil -->
      <ListRightComponent @toggle="toggle" />
    </v-navigation-drawer>

    <NotifyComponent v-bind:notify="notify" />
    <NotifyProgress v-bind:progress="progress" />
  </v-app>
</template>

<script>
import ListRightComponent from '@/components/list/list-right';
import { itemsUser, itemsAdmin } from '@/resources/items.resource';
import NotifyComponent from '@/components/snackbars/notify.snack';
import NotifyProgress from '@/components/snackbars/progress.snack';

export default {
  middleware: 'IsAuthenticate',

  components: { ListRightComponent, NotifyComponent, NotifyProgress },

  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      itemsUser,
      itemsAdmin,
      btns: false,
      mode: 'light'
    }
  },

  created () {
    this.$store.dispatch('file/getAllFiles');
    this.$store.dispatch('book/getAllBooks');
  },

  computed: {
      user () { return this.$store.state.user.fieldsUser },

      conditionPanelRight () {
        if(this.user.type == 'user'){ return this.itemsUser }
        else{ return this.itemsAdmin }
      },

      notify () { return this.$store.state.notification.notify },
      
      progress () {
        const { progress } = this.$store.state.notification;

        if (progress.value < 100) {
          return progress;
        } else if (progress.value === 100) {
          return { status: false, text: '', type: '', value: 0 }
        }
      }
  },

  methods: {
    searchElement (wordKey) { this.$store.dispatch('search/searchElement', wordKey) },

    showButtons () {
      innerWidth > 600 ? this.btns = true : this.btns = false;
    },

    toggle () {
      if(this.mode == 'dark'){
        console.log('light');
        this.mode = 'dark';
      }else{
        console.log('dark');
        this.mode = 'light'
      }
    }
  },

  beforeMount () {
    this.showButtons();
    window.addEventListener('resize', this.showButtons, { passive: true });
  }

}
</script>
