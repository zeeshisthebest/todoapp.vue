<template>
    <div id="item">
        <input type="checkbox" class='checkbox' name="done" id="">
        <span class="sep"></span>
        <p>TODO ITEM</p>

    </div>
</template>

<script>
export default {
    el: '#item',
    name: 'TodoItem',
    props: {
        msg: String
    }
}
</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#item {
    /* background-color: ; */
    border: #fff;
    border-style: Solid;
    border-width: 2px;
    border-radius: 10px;
    text-align: left;
    background-color: gainsboro;
    display: flex;
}

#item p {
    display: inline-block;
    padding: 10px 0;
}

#item .checkbox {
    margin: auto 0 auto 15px;
    padding: 10px 0;
    width: 20px;
    display: inline-block;
    height: 20px;
}

#item .sep {
    border-left: 5px solid rgb(202, 201, 201);
    margin: 0 10px;
    /* height: max; */
}
</style>
