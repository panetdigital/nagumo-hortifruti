<template>
  <v-app dark>
    <!-- <v-system-bar>
  <v-icon icon="mdi-wifi-strength-4">wifi</v-icon>
  <v-icon icon="mdi-signal" class="ms-2">signal</v-icon>
  <v-icon icon="di-cloud-upload" class="ms-2">cloud</v-icon>
   <span class="ms-2">3:13PM</span>
</v-system-bar> -->



  
    <v-app-bar flat class="border-b">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-app-bar-title></v-app-bar-title>
      <template #append>
        teste
      </template>
    </v-app-bar>

    <v-navigation-drawer>
      <v-list>
        <v-list-item title="Navigation drawer"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main >
      <v-container class="d-flex align-center justify-center">
          Main Content
          icone
          <v-icon icon="mdi-home" />
          <v-icon icon="mdi-wifi-strength-4">wifi</v-icon>
          <v-icon>mdi-home</v-icon>
          <v-icon icon="mdi-cloud-upload">cloud</v-icon>
          <v-icon>mdi-alarm</v-icon> 
          <VuetifyLogo />
      </v-container>
    </v-main>
 




       
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>cherifbeko &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'DefaultLayout',
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Meu app'
    }
  }
}
</script>
