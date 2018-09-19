<template>
    <div class="container">
        <h1 v-if="error.statusCode === 404">页面不存在</h1>
        <h1 v-else>内部错误</h1>
    </div>
</template>

<script>
  export default {
    props: ['error'],
  }
</script>