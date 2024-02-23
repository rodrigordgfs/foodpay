<template>
  <div>
    <div
      class="flex flex-row gap-2 overflow-x-auto mt-2 px-1 bg-orange-500 rounded-lg"
    >
      <div
        v-for="(tab, index) in tabs"
        :key="tab.id"
        class="cursor-pointer px-4 py-1 flex items-center text-center"
        :class="{
          ' bg-white rounded-lg my-1 font-bold': activeTab === index,
        }"
        @click="activateTab(index)"
      >
        <p
          class="text-nowrap"
          :class="{
            'text-orange-500': activeTab === index,
            'text-white': activeTab !== index,
          }"
        >
          {{ tab.name }}
        </p>
      </div>
    </div>
    <div class="mt-2">
      <slot :name="activeTab"></slot>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  tabs: {
    type: Array,
    required: true,
  },
});

const activeTab = ref(0);

const activateTab = (index) => {
  activeTab.value = index;
};
</script>

<style></style>
