<template>
    <a-row>
        <a-input-search v-model:value="value" placeholder="input search text" style="width: 200px" @search="onSearch" />

        <a-col :span="24">

            <CardPaymentsTable />

        </a-col>
    </a-row>
</template>
<script setup>

import CardPaymentsTable from '../components/Cards/CardPaymentsTable.vue';




</script>
