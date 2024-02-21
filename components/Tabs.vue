<template>
  <div>
    <div class="flex flex-row gap-2 overflow-x-auto overflow-hidden mt-2">
      <div
        v-for="(tab, index) in tabs"
        :key="tab.id"
        class="cursor-pointer px-4 py-2 flex items-center text-center"
        :class="{
          'text-orange-500 border-b-4 border-b-orange-500 font-bold transition-all':
            activeTab === index,
        }"
        @click="activateTab(index)"
      >
        <p class="text-nowrap">{{ tab.name }}</p>
      </div>
    </div>
    <div class="grid grid-cols-3 gap-2 mt-2">
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
