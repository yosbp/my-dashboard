<template>
    <a-card :bordered="false" class="header-solid h-full" :bodyStyle="{ paddingTop: '12px', }">
        <template #title>
            <a-row type="flex" align="middle">
                <a-col :span="24" :md="12">
                    <h5 class="font-semibold m-0">Payments Table</h5>
                </a-col>
                <a-col :span="24" :md="12" style="display: flex; align-items: center; justify-content: flex-end">
                    <a-radio-group size="small">
                        <a-radio-button @click="setPaidSort()" value="">PAID</a-radio-button>
                        <a-radio-button @click="setUnpaidSort()" value="">UNPAID</a-radio-button>
                        <a-radio-button @click="clearAll()" value="">CLEAR</a-radio-button>
                    </a-radio-group>
                </a-col>
            </a-row>
        </template>
        <a-table :columns="columns" :data-source="data" @change="handleChange">

            <template #bodyCell="{ column, record }">
                <template v-if="column.key === 'status'">
                    <a-tag :color="record.status === 'unpaid' ? 'volcano' : 'green'">
                        {{ record.status.toUpperCase() }}
                    </a-tag>
                </template>

                <template v-else-if="column.key === 'action'">
                    <a @click="showDrawer">Check</a>

                    <a-drawer v-model:visible="visible" class="custom-class" style="color: red" title="Basic Drawer"
                        placement="right" @after-visible-change="afterVisibleChange">
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </a-drawer>

                    <a-divider type="vertical" />
                    <a class="ant-dropdown-link">
                        More actions
                        <down-outlined />
                    </a>

                </template>
            </template>
        </a-table>
    </a-card>
</template>
<script setup>
import { computed, ref } from 'vue';
import { DownOutlined } from '@ant-design/icons-vue';

//DRAWER

const visible = ref(false);

const afterVisibleChange = bool => {
    console.log('visible', bool);
};

const showDrawer = () => {
    visible.value = true;
};



//DATA TABLE


const data = [{
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    status: 'paid',
}, {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    status: 'unpaid',
}, {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    status: 'paid',
}, {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
    status: 'unpaid',
}];

const filteredInfo = ref();
const sortedInfo = ref();

const columns = computed(() => {
    const filtered = filteredInfo.value || {};
    const sorted = sortedInfo.value || {};
    return [{
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        filters: [{
            text: 'Joe',
            value: 'Joe',
        }, {
            text: 'Jim',
            value: 'Jim',
        }],
        filteredValue: filtered.name || null,
        onFilter: (value, record) => record.name.includes(value),
        sorter: (a, b) => a.name.length - b.name.length,
        sortOrder: sorted.columnKey === 'name' && sorted.order,
        ellipsis: true,
    }, {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        sorter: (a, b) => a.age - b.age,
        sortOrder: sorted.columnKey === 'age' && sorted.order,
    }, {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        filters: [{
            text: 'London',
            value: 'London',
        }, {
            text: 'New York',
            value: 'New York',
        }],
        filteredValue: filtered.address || null,
        onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.address.length - b.address.length,
        sortOrder: sorted.columnKey === 'address' && sorted.order,
        ellipsis: true,
    },
    {
        title: 'Status',
        key: 'status',
        dataIndex: 'status',
        sorter: (a, b) => a.status.length - b.status.length,
        sortOrder: sorted.columnKey === 'status' && sorted.order,
        ellipsis: true,
    }, {
        title: 'Action',
        key: 'action',
    }];
});

const handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    filteredInfo.value = filters;
    sortedInfo.value = sorter;
};
const clearAll = () => {
    filteredInfo.value = null;
    sortedInfo.value = null;
};
const setPaidSort = () => {
    sortedInfo.value = {
        order: 'ascend',
        columnKey: 'status',
    };
};

const setUnpaidSort = () => {
    sortedInfo.value = {
        order: 'descend',
        columnKey: 'status',
    };
};


</script>