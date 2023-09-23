<template>
    <IonApp >
      <!-- page content will appear here -->
      <slot />
    </IonApp>
  </template>
  
  <script setup>
  import { IonApp } from "@ionic/vue"
  useHead({
    viewport: 'width=device-width, height=device-height, initial-scale=1, maximum-scale=1, viewport-fit=cover',
  })
  </script>