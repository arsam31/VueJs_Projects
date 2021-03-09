<template>
<div>
<!-- <div v-if="2*2==4" v-html="title"></div> -->

<!-- <div v-if="2*2==4"></div>

<h2 v-else>I am else part</h2> -->
<!-- <div v-if="isShow" v-html="title"></div>

<div v-else-if="isShow===null">I am else if</div>
<div v-else>I am else</div> -->

<!-- <h1>List</h1>
<ul><li   v-for="num in ['ab','cd','df']" v-bind:key="num">{{num}}</li></ul> -->
<form @submit.prevent="heroes.push({message: newHero})">
<h1>Heroes</h1>
<ul>
  <li v-for="(hero, indexx) in heroes" :key="indexx">{{indexx}}  {{hero.message}}</li>
</ul>
<input v-model.number="newHero">
<button>Add Hero</button>
</form>

</div>


</template>

<script>
export default{
  data(){
    return{
      newHero: "aquaman",
      heroes: [{ message: 'Foo' },
      { message: 'Bar' }]
    }
  }
}

</script>