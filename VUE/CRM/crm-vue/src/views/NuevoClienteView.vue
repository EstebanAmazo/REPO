<template>
    <div>

        <div class="flex justify-end">
            <CustomRouterLink to="inicio">Volver</CustomRouterLink>
        </div>

        <Heading>{{ titulo }}</Heading>

        <div class="mx-auto mt-10 bg-white shadow">
            <div class="mx-auto md:w-2/3 py-20 px-6">
                <FormKit type="form" submit-label="Agregar cliente" incomplete-message="Revise los campos obligatorios"
                    @submit="handleSubmit">
                    <FormKit type="text" label="Nombre" name="nombre" placeholder="Nombre del cliente"
                        validation="required" :validation-messages="{ required: 'El nombre es requerido' }" />
                    <FormKit type="text" label="Apellido" name="apellido" placeholder="Apellido del cliente"
                        validation="required" :validation-messages="{ required: 'El apellido es requerido' }" />

                    <FormKit type="email" label="Email" name="email" placeholder="Email del cliente"
                        validation="required|email"
                        :validation-messages="{ required: 'El Email es requerido', email: 'Ingrese un email valido' }" />
                    <FormKit type="tel" label="Teléfono" name="telefono" placeholder="Telefono del cliente"
                        validation="matches:/^[0-9]/"
                        :validation-messages="{ required: 'El Email es requerido', matches: 'Telefono no valido' }" />
                    <FormKit type="text" label="Empresa" name="empresa" placeholder="Empresa del cliente" />

                </FormKit>
            </div>

        </div>
    </div>
</template>

<script setup>
import CustomRouterLink from '../components/UI/CustomRouterLink.vue'
import Heading from '../components/UI/Heading.vue'
import { FormKit } from '@formkit/vue'
import {useRouter} from 'vue-router'
import { reactive } from 'vue'
import axios from '../lib/axios'
import { onMounted, ref, computed } from 'vue'


const router = useRouter()

defineProps({
    titulo: {
        type: String
    }
})


const formData = reactive({
    nombre: 'Bryan',
    apellido: 'Amazo',
    telefono: 3025188226,
    email: 'bymzno@gmail.com',
    empresa: '-----'


})

const handleSubmit = async (data) => {
    try {
        const createdClient = await axios.post('/clientes', data)
        console.log(createdClient)
        router.push({name: 'inicio'})

    } catch (error) {
        console.log(error)
    }

}



</script>

<style>
.formkit-wrapper {
    max-width: 100%;
}
</style>