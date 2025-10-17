<template>
  <v-container class="mt-8">
    <v-row>
      <v-col
        v-for="(photo, i) in photos"
        :key="i"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <v-card @click="viewPhoto(photo)" elevation="3" class="hover-card">
          <v-img :src="photo.download_url" height="200px" cover  ></v-img>
                <template v-slot:placeholder>
                  <div class="d-flex align-center justify-center fill-height">
                    <v-progress-circular 
                      color="grey-lighten-4" 
                      indeterminate
                    ></v-progress-circular>
                  </div>
                </template>
        </v-card>
      </v-col>
    </v-row>

  <v-dialog v-model="dialog"  max-width="90vw">
      <v-card class="d-flex flex-column">
          <v-img :src="selectedPhoto.download_url" class="responsive-img" cover></v-img>

        <v-card-actions class="justify-center">
          <v-btn color="primary" @click="dialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
const CACHE_DURATION = 60 * 60 * 1000 // 1 hour
const photos = ref([])
const dialog = ref(false)
const selectedPhoto = ref({})

onMounted(async () => {
  
  try {
    
    const containerUrl = ' https://photostorage223kuti.blob.core.windows.net/photocontainer223d'

    
    const res = await axios.get(`${containerUrl}?restype=container&comp=list`, {
      responseType: 'text'
    })

    // Parse XML to extract blob names
    const parser = new DOMParser()
    const xml = parser.parseFromString(res.data, 'application/xml')
    const blobNames = xml.getElementsByTagName('Name')

    // Build full image URLs
    const imageUrls = []
    for (let i = 0; i < blobNames.length; i++) {
      const blobName = blobNames[i].textContent
      imageUrls.push(`${containerUrl}/${blobName}`)
    }


    photos.value = imageUrls.map(url => ({ download_url: url }))
    // localStorage.setItem('azure_photos', JSON.stringify(photos.value))
    // localStorage.setItem('azure_photos_time', Date.now().toString())
  } catch (err) {
    console.error('Error fetching blobs:', err)
  }



})

function viewPhoto(photo) {
  selectedPhoto.value = photo
  dialog.value = true
}
</script>

<style>
.hover-card:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}
</style>
