<template>
    <div id="header">
        <h1>To-Do List App</h1>
    </div>
</template>

<script>
export default {
    el: '#header',
    name: 'HeaderLayout',
    props: {
        msg: String
    }
}
</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#header {
    background-color: rgb(201, 2, 2);
    color: white;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 20px;
}

#header h1 {
    font-weight: normal !important;
}
</style>
