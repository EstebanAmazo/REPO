<template>
    <tr>
        <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-0">
            <p class="font-medium text-gray-900">{{ nombreClienteCompleto }}</p>
            <p class="text-gray-500">{{ cliente.email }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
            <p class="text-gray-900 font-bold">{{ cliente.empresa }}</p>
            <p class="text-gray-600">{{ cliente.puesto }}</p>
        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm">

        </td>
        <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500 ">
            <div class="flex gap-5">
                <RouterLink to="/" class="text-indigo-500">Editar</RouterLink>
                <button class="text-red-600">Eliminar</button>
            </div>

        </td>
    </tr>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink } from 'vue-router';

const props = defineProps({
    cliente: {
        type: Object
    }
})

const nombreClienteCompleto = computed(() => {
    return props.cliente.nombre + ' ' + props.cliente.apellido
})


</script>
