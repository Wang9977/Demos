
<template>
    <div>
        <h2>Father</h2>
        <Child>
            <div>
              <span>Demo1</span>
              <span>Demo2</span>
            </div>
            <template v-slot:demo1>
                <p>这里是demo1</p>
            </template>
            <template v-slot:demo2="people">
                <p>获取子组件data里的值: {{people.name1}}</p>
                <p>父组件data 年龄为 {{age}}</p>
            </template>
        </Child>
    </div>
</template>
<script>
import Child from './Child'
export default {
    components:{Child},
    data(){
        return {
            age:24
        }
    }
}
</script>