<template>

    <div>
        <div class="flex justify-end">
            <CustomRouterLink to="agregar-cliente">Agregar cliente</CustomRouterLink>
        </div>

        <Heading>{{ titulo }}</Heading>
        <div v-if="existenClientes">

            <div v-if="existenClientes" class="flow-root mx-auto  mt-10 p-5 bg-white shadow">
                <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table class="min-w-full divide-y divide-gray-300">
                            <thead>
                                <tr>
                                    <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Nombre
                                    </th>
                                    <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Empresa
                                    </th>
                                    <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Estado
                                    </th>
                                    <th scope="col" class="p-2 text-left text-sm font-extrabold text-gray-600">Acciones
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200 bg-white">
                                <ClienteTableRow v-for="cliente in clientes" :key="cliente.id" :cliente="cliente"/>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
        <p v-else>
            No hay clientes
        </p>

    </div>

    <button @click="signIn()">Iniciar sesion google</button>

</template>

<script setup>
import { RouterLink } from 'vue-router'
import CustomRouterLink from '../components/UI/CustomRouterLink.vue'
import ClienteTableRow from '../components/UI/ClienteTableRow.vue'
import {useRouter} from 'vue-router'

import Heading from '../components/UI/Heading.vue'
import { onMounted, ref, computed } from 'vue'
import axios from '../lib/axios'
import axios2 from 'axios'

defineProps({
    titulo: {
        type: String
    }
})



const clientes = ref([])
const router = useRouter()


onMounted(async () => {
    // await getClients()
})


const existenClientes = computed(() => {
    return clientes.value.length > 0
})

const getClients = async () => {
    try {
        const { data } = await axios.get('/clientes')
        clientes.value = data
    } catch (error) {
        console.log(error)
    }
}

async function signIn () {
    const {data} = await axios2.post('http://127.0.0.1:3000/request')
    console.log(data)
    window.open(data.url)

}

</script>

<style></style>