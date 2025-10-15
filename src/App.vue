
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Montserrat:wght@300;400;600&display=swap');


<template>
  <v-app>
    <v-app-bar app color="#fffd" >
         
      <v-toolbar-title>
       <img src="./assets/logo.png" alt="Dominic Panthiruvelil" :width="150" height="70"/>
        
      </v-toolbar-title>
 
      <v-spacer />

      <div class="nav-links-wrapper">
        <!-- <router-link to="/" class="nav-link">
          <v-btn text>Home</v-btn>
        </router-link> -->
        <router-link to="/gallery" class="nav-link">
          <v-btn text>Gallery</v-btn>
        </router-link>
        <router-link to="/about" class="nav-link">
          <v-btn text>About</v-btn>
        </router-link>
        <!-- <router-link to="/contact" class="nav-link">
          <v-btn text>Contact</v-btn>
        </router-link> -->
      </div>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style>
/* html, body, #app {
  height: 100%;
  margin: 0;
}
.v-application {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.v-main {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: black;
} */

.nav-links-wrapper {
  display: flex;
  align-items: center;
  /* Distribute space between links, or use margins (see below) */
  /* Option 1: spread them */
  /* justify-content: space-between; */
  
  /* Option 2: group them with gaps */
  gap: 24px;            /* <-- modern CSS: gap between each link */
}

.nav-link {
  text-decoration: none;
}

/* Style the active link (adjust as needed) */
.router-link-exact-active .v-btn {
  background-color: rgba(255, 255, 255, 0.2);
}


/* .logo {
  font-family: 'Great Vibes', cursive;
  font-size: 36px;
  font-weight: 400;
  letter-spacing: 1px;
} */

/* body {
  font-family: 'Montserrat', sans-serif;
}

h1, h2, h3, .logo, .v-toolbar-title {
  font-family: 'Playfair Display', serif;
}

.v-app-bar .v-btn {
  font-family: 'Montserrat', sans-serif;
} */
</style>
