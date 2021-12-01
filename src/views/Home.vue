<template>
    <div class="page-container">
        <router-link to="/axios"><Button>Axios</Button></router-link>
        <p class="hello">hello</p>
    </div>
</template>

<script lang="ts" setup>
import { Button } from 'vant';
</script>

<style scoped lang="less">
.hello {
    width: 100px;
    font-size: 15px;
    display: flex;
    justify-content: center;
    color: @red;
}
</style>
