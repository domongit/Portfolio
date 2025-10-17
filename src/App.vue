
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Montserrat:wght@300;400;600&display=swap');


<template>
  <v-app>
    <v-app-bar app   >
         
      <v-toolbar-title  class="justify-center ">
       <img src="./assets/logo.png" alt="Dominic Panthiruvelil"  class="logo-img"/>
      </v-toolbar-title>
 
      <v-spacer />
        <router-link to="/gallery" >
          <v-btn text>Gallery</v-btn>
        </router-link>
        <router-link to="/about">
          <v-btn text>Bio</v-btn>
        </router-link>
      <!-- <div class="nav-links-wrapper justify-center "> -->

       
      <!-- </div> -->
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

 