<template>
    
    <Father :notprops="notprops" :name="name" @def="fun" />
    
</template>
<script>
import Father from '../components/Father'
export default {
    data(){
        return {
            name:'wy',
            notprops:'not'
        }
    },
    components:{
        Father
    },
    methods:{
        fun(){
            console.log('实现高级组件传递方法')
        }
    }
}
</script>