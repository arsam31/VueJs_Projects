<template>
<div>
<!-- <div v-if="2*2==4" v-html="title"></div> -->

<!-- <div v-if="2*2==4"></div>

<h2 v-else>I am else part</h2> -->
<div v-html="title"></div>
</div>
</template>

<script>
export default{
  data(){
    return{
      title:"<h1>Oth</h1>",
      isShow: false,
    }
  }
}

</script>