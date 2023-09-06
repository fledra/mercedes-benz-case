<template>
  <MainLayout :loading="loading">
    <form v-if="!loading && car" class="mt-6" @submit.prevent="updateCar">
      <p class="text-overline text-center mb-10">Details of Car {{ car.carid }}</p>

      <v-row class="mb-5">
        <v-col cols="12" sm="3" offset-sm="3">
          <v-text-field v-model="car.id" :error-messages="errors.id" label="ID" readonly />
        </v-col>

        <v-col cols="12" sm="3">
          <v-text-field v-model="car.carid" :error-messages="errors.carid" label="Car ID" readonly />
        </v-col>

        <v-col cols="12" sm="3" offset-sm="3">
          <v-text-field
            v-bind="power"
            type="number"
            inputmode="numeric"
            :error-messages="errors.hp"
            label="Horsepower"
            suffix="HP"
          />
        </v-col>

        <v-col cols="12" sm="3">
          <v-text-field
            v-bind="price"
            type="number"
            inputmode="numeric"
            :error-messages="errors.price"
            label="Price"
            suffix="€"
          />
        </v-col>

        <v-col cols="12" sm="3" offset-sm="3">
          <v-radio-group v-bind="color" label="Car Color">
            <v-radio v-for="carColor in car.colorOptions" :key="carColor.hex" :value="carColor" color="primary">
              <template #label>
                <CarColor :color="carColor" />
              </template>
            </v-radio>
          </v-radio-group>
        </v-col>

        <v-col cols="12" sm="3" align-self="center">
          <v-checkbox v-bind="inStock" label="In Stock" color="primary" hide-details dense />
        </v-col>
      </v-row>

      <div class="d-flex justify-center">
        <v-btn color="error" class="mr-16" :disabled="isSubmitting" @click="router.push('/')">Cancel</v-btn>
        <v-btn color="primary" :disabled="!meta.valid || !meta.dirty" :loading="isSubmitting" @click="updateCar">
          Save
        </v-btn>
      </div>
    </form>
  </MainLayout>
</template>

<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import { carSchema } from '@/schemas';
import type { Car } from '@/types';

const router = useRouter();
const route = useRoute('/car/[id]');
const toast = useToast();

const car = ref<Car>();
const loading = ref(false);

const { meta, defineComponentBinds, errors, handleSubmit, isSubmitting, resetForm } = useForm({
  validateOnMount: false,
  validationSchema: toTypedSchema(carSchema),
});

const inStock = defineComponentBinds('instock');
const power = defineComponentBinds('hp');
const price = defineComponentBinds('price');
const color = defineComponentBinds('color');

const updateCar = handleSubmit(async (values) => {
  const res = await fetch(`https://64f612f42b07270f705e1a0b.mockapi.io/api/cars/${values.id}`, {
    method: 'PUT',
    body: JSON.stringify(values),
    headers: {
      'content-type': 'application/json',
    },
  });

  if (!res.ok) {
    toast.error('Encountered an error while loading car details.');
    return;
  }

  const data = await res.json();
  car.value = data;
  resetForm({ values: data });

  toast.success('Successfully updated the car!');
});

async function fetchCar() {
  loading.value = true;

  const res = await fetch(`https://64f612f42b07270f705e1a0b.mockapi.io/api/cars/${route.params.id}`);

  if (!res.ok) {
    toast.error('Encountered an error while loading car details. Try refreshing the page.');
    return;
  }

  const data: Car = await res.json();

  car.value = data;
  resetForm({ values: data });

  loading.value = false;
}

onMounted(fetchCar);
</script>
