<template>
  <v-app>
    <v-app-bar
      color="red darken-3"
      elevate-on-scroll
      dark
      app
    >
      <img src="https://img.icons8.com/color/48/000000/book-shelf.png" alt="Umalib logo"/>
      <v-toolbar-title class="ml-2" style="font-family: Oswald">UMALIB</v-toolbar-title>
      <v-spacer />
      <v-btn
        v-for="(item, index) in items"
        :key="index"
        :to="item.url"
        :tile="item.tile"
        :text="item.text"
        :outlined="item.outlined"
      >
      <v-icon :class="showText ? 'mr-2' : null">{{ item.icon }}</v-icon>
      {{ showText ? item.title : null }}
      </v-btn>
    </v-app-bar>

    <v-main>
      <nuxt />
    </v-main>

    <v-footer color="black" dark>
      <v-layout wrap>
        <v-flex xs12 md4 class="pa-10 px-1">
          <h1 class="text-center pb-3">Informacion de la Universidad</h1>
          <p class="text-justify">
            Somos una universidad formadora de profesionales competentes para que puedan
            insertarse en los ámbitos de la sociedad donde les corresponde actuar, con
            responsabilidad ciudadana, respetuosos, de los derechos de los demás, orientados
            a los sectores con dificultad de acceso a la educación Superior.
          </p>
        </v-flex>
        <v-flex xs12 md4 class="pa-10 px-1">
          <h1 class="text-center pb-3">Siguenos en las redes</h1>
            <v-list-item :class="showText ? 'mx-10 px-10' : ''"
            v-for="(item, index) in social_networks"
            :key="index">
              <v-list-item-avatar size="45" :color="item.color">
                <v-icon large v-text="item.icon" />
              </v-list-item-avatar>
              <v-list-item-title>Siguenos en {{ item.text }}</v-list-item-title>
            </v-list-item>
        </v-flex>
        <v-flex xs12 md4 class="pa-10 px-1">
          <h1 class="text-center pb-3">Contactanos</h1>
            <v-list-item :class="showText ? 'mx-10 px-10' : ''"
            dense
            two-line
            v-for="(item, index) in contact"
            :key="index">
              <v-list-item-avatar :color="item.color">
                <v-icon v-text="item.icon" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-text="item.title" />
                <v-list-item-subtitle v-text="item.subtitle" />
              </v-list-item-content>
            </v-list-item>
        </v-flex>
        <v-flex xs12 class="text-center pa-4">
          Todos los derechos reservados | © Universidad Modular Abierta UMA 2020
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  data: () => ({
    showText: false,
    items: [
      {title: 'Iniciar sesion', icon: 'mdi-login', tile: false, text: true, outlined: false, url: '/auth/signin.local'},
      {title: 'Crear una cuenta', icon: 'mdi-account', tile: true, text: false, outlined: true, url: '/auth/signup.local'}
    ],

    social_networks: [
      { text: 'Facebook', icon: 'mdi-facebook', color: 'primary', url: '' },
      { text: 'WhatsApp', icon: 'mdi-whatsapp', color: 'green darken-3', url: '' },
      { text: 'Instagram', icon: 'mdi-instagram', color: 'pink darken-3', url: '' },
      { text: 'YouTube', icon: 'mdi-youtube', color: 'red darken-2', url: '' }
    ],

    contact: [
      {title: '+503-2260-5320', subtitle: 'Telefono', icon: 'mdi-phone', color: 'green darken-3'},
      {title: '1a Calle Pte, San Salvador', subtitle: 'Direccion', icon: 'mdi-home', color: 'orange darken-4'}
    ]
  }),

  methods: {
    conditionText () {
      innerWidth > 630 ? this.showText = true : this.showText = false;
    }
  },

  created () { this.$store.dispatch('user/getDataUser') },

  beforeMount () {
    this.conditionText();
    window.addEventListener('resize', this.conditionText, { passive: true });
  }
}
</script>

<style>
  body {
    font-family: Josefin Sans;
    font-size: 18px;
  }

  div h1 {
    font-family: Oswald;
  }
</style>
