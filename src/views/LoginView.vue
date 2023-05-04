<template>
    <div class="sign-in">
        <a-row type="flex" :gutter="[24, 24]" justify="space-around">

            <!-- Sign In Form Column -->
            <a-card :bordered="false">
                <a-col  class="login-form">
                    <h1 class="mb-5" style="text-align: center;">Sign In</h1>
                    <hr class="mb-15">
                    <h5 class="font-regular text-muted">Enter your email and password to sign in</h5>

                    <!-- / Sign In Form -->

                    <a-form :model="formState" name="basic" autocomplete="off" @finish="onFinish"
                        @finishFailed="onFinishFailed" :label-col="{ span: 24 }">

                        <a-form-item label="Email" name="email" class="mb-5"
                            :rules="[{ required: true, message: 'Please input your email!' }]">
                            <a-input v-model:value="formState.email" />
                        </a-form-item>

                        <a-form-item class="mb-5" label="Password" name="password"
                            :rules="[{ required: true, message: 'Please input your password!' }]">
                            <a-input-password v-model:value="formState.password" />
                        </a-form-item>

                        <a-form-item class="mb-5" name="remember">
                            <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
                        </a-form-item>

                        <a-form-item>
                            <a-button type="primary" html-type="submit">Submit</a-button>
                        </a-form-item>
                    </a-form>

                    <p class="font-semibold text-muted">Don't have an account? <router-link to="/"
                            class="font-bold text-dark">Sign Up</router-link></p>
                </a-col>
                <!-- / Sign In Form Column -->
            </a-card>


        </a-row>

    </div>
</template>

<script>

import { defineComponent, reactive } from 'vue';
export default defineComponent({
    setup() {
        const formState = reactive({
            email: '',
            password: '',
            remember: true,
        });
        const onFinish = values => {
            console.log('Success:', values);
        };
        const onFinishFailed = errorInfo => {
            console.log('Failed:', errorInfo);
        };
        return {
            formState,
            onFinish,
            onFinishFailed,
        };
    },
});

</script>

<style lang="scss">
body {
    background-color: #ffffff;
}
</style>