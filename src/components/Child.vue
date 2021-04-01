<template>
<div>
    <div v-bind="$attrs">{{name}}</div>
    
    </div>
</template>
<script>
export default {
    props:['name'],
    mounted(){
        this.$emit('def')
        console.log(this.$attrs)
    }
}
</script>