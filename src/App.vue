<template>
    <keep-alive exclude="nowplayinginfo">
      <router-view/>
    </keep-alive>
</template>

<script>
export default {
}
</script>

<style>
  *{ margin: 0; padding: 0;}
  ul li{list-style: none;}
  img{ display: block;}
  html,body{ height: 100%;}
  .clear::after{ content: ""; display: block; clear: both;}
</style>

