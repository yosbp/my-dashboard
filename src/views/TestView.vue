<template>
    <a-row>
        <a-col :span="24">
            <a-table :columns="columns" :row-key="record => record.key" :data-source="data">
                <template #bodyCell="{ column, record }">
                    <template v-if="column.key === 'name'">
                        <a>
                            {{ record.name }}
                        </a>
                    </template>
                </template>
            </a-table>
        </a-col>
    </a-row>
</template>
<script>
import { defineComponent } from 'vue';
const columns = [{
    title: 'Name (all screens)',
    dataIndex: 'name',
    key: 'name',
}, {
    title: 'Age (medium screen or bigger)',
    dataIndex: 'age',
    key: 'age',
    responsive: ['md'],
}, {
    title: 'Address (large screen or bigger)',
    dataIndex: 'address',
    key: 'address',
    responsive: ['lg'],
}];
const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
}];
export default defineComponent({
    setup() {
        return {
            data,
            columns,
        };
    },
});
</script>