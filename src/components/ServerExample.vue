<script setup lang="ts">
import { getCollection } from 'astro:content'

const troubleshoots = await getCollection('troubleshoots')
</script>

<template>
  <div class="text-sm">
    <pre>{{ troubleshoots }}</pre>
  </div>
</template>
