<template >
    <table>
        <tab-tit v-bind:title="title"></tab-tit>
       
            <tab-tbody v-bind:coll="college">></tab-tbody>
       
    </table>
</template>
<script>
    export default{
     props:["title","college"],
    components:{
        "tab-tit":{
           template:'<thead><td v-for="key in title">{{key}}</td></thead> ',
           props:["title"]
         },
        "tab-tbody":{
            template:`
                <tbody>
                    <tr v-for="key in coll">
                        <td><span class="bg">+</span>{{key[0]}}</td>
                        <td>{{key[1]}}</td>
                        <td>{{key[2]}}</td>
                        <td>{{key[3]}}</td>
                        <td>{{key[4]}}</td>
                        <td>{{key[5]}}</td>
                        <td>{{key[6]}}</td>
                        <td>{{key[7]}}</td>
                         <td>{{key[8]}}</td>
                    </tr>
                </tbody>`,
            props:["coll"]
        }
   }
 }
</script>
<style scoped>
    table{
        width:100%;
        height:auto;
        margin-top: 20px;
    }
    table thead{
        width:100%;
        display:flex;
        height:40px;
    }
    table thead td{
        flex:1;
        text-align: center;
        align-items: center;
        color:#fff;
    }
    table tbody{
        width:100%;
        height:auto;
    }
    table tbody tr{
        width:100%;
        display:flex;
    }
    table tbody tr td{
        flex:1;
    }
    tbody tr td span{
        width: 20px;
        height: 20px;
        background:#0f9941;
        /* display: inline-block; */
    }
</style>

