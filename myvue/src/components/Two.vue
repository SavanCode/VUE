<template>
    <div>
        <h1>'Hi, I am Two Page!'</h1>
        <h1>{{ msg }}</h1>
        <h1>{{ msg }}</h1>
        <h1>{{ msg }}</h1>
        <h1>{{ msg }}</h1>
    </div>
</template>
<script>
export default {
    name: 'Two',
    data () {
        return {
            msg: 'Hi, I am Two Page!'
        }
    }
}
</script>

<style scoped>
</style>