<template>

    <RouterLink :to="{ name: to }" class="block, md:inline-block rounded bg-blue-500 py-2 px-3 text-white font-bold">
        <slot></slot>
    </RouterLink>

</template>

<script setup>
import { RouterLink } from 'vue-router'

    defineProps({
        to: {
            type: String
        }
    })
</script>

<style></style>