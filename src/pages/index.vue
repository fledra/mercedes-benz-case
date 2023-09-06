<template>
  <MainLayout>
    <v-data-table-server
      v-model:items-per-page="itemsPerPage"
      v-model:page="page"
      class="rounded-lg"
      :headers="headers"
      :loading="loading"
      :items="items"
      :items-length="totalItems"
      @update:options="loadItems"
      show-current-page
      rounded
    >
      <template #item.instock="{ item: { columns } }">
        <v-checkbox-btn color="primary" class="justify-center" v-model="columns.instock" readonly />
      </template>

      <template #item.price="{ item: { columns } }">
        {{ formatPrice({ value: columns.price }) }}
      </template>

      <template #item.color="{ item: { columns } }">
        <CarColor :color="columns.color" />
      </template>

      <template #item.actions="{ item: { columns } }">
        <v-tooltip
          location="left center"
          text="This car has one or more invalid fields."
          :disabled="isCarValid(columns as Car)"
        >
          <template #activator="{ props }">
            <span v-bind="props">
              <v-btn
                :color="isCarValid(columns as Car) ? 'primary' : 'error'"
                @click="router.push(`/car/${columns.id}`)"
              >
                Edit
              </v-btn>
            </span>
          </template>
        </v-tooltip>
      </template>
    </v-data-table-server>
  </MainLayout>
</template>

<script setup lang="ts">
import type { Car } from '@/types';
import { carSchema } from '@/schemas';
import { formatPrice } from '@/utils';

const router = useRouter();
const toast = useToast();

type DataTableHeader = {
  key: string;
  title: string;
  align?: 'start' | 'end' | 'center';
  sortable?: boolean;
};

const headers: DataTableHeader[] = [
  { title: 'ID', key: 'id', sortable: false, align: 'center' },
  { title: 'Car ID', key: 'carid', sortable: false },
  { title: 'In Stock', key: 'instock', sortable: false, align: 'center' },
  { title: 'Power (HP)', key: 'hp', sortable: false, align: 'center' },
  { title: 'Price', key: 'price', sortable: false, align: 'center' },
  { title: 'Color', key: 'color', sortable: false },
  { title: 'Actions', key: 'actions', sortable: false, align: 'center' },
];

const page = ref(1);
const itemsPerPage = ref(15);
const items = ref<Array<Car>>([]);
const loading = ref(true);
const totalItems = ref(100);

async function loadItems() {
  loading.value = true;

  const params = new URLSearchParams({
    page: page.value.toString(),
    limit: itemsPerPage.value.toString(),
  });

  const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/cars?${params}`);

  if (!res.ok) {
    toast.error('Encountered an error while loading cars. Try refreshing the page.');
    return;
  }

  const data: Car[] = await res.json();
  items.value = data;

  loading.value = false;
}

function isCarValid(car: Car) {
  const parsed = carSchema.safeParse(car);
  return parsed.success;
}
</script>
