<template>
    <div>
        <h2>Child</h2>
        
        <div><slot></slot></div>
        <div><slot name= "demo1"/></div>
        <div><slot name= "demo2" :name1="name1" /></div>   
    </div>
</template>
<script>
export default {
    data(){
        return{
            name1:'wy'
        }
    }
}
</script>