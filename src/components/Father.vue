<template>
    <div>
        <Child v-on='$attrs'  v-bind='$props'  />
        <span>{{$attrs}}</span>
        <div>{{name}}</div>
    </div>
</template>
<script>
import Child from './Child'
export default {
    data(){
        return {}
    },
    inheritAttrs: false,
    props:["name"],
    components:{Child},
    mounted(){
        this.$emit('def')
    }
    
}
</script>