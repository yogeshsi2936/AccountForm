<template>
    <div id="container" style="color: #ff0000;"></div>
</template>
<script >
export default {
    name: 'Raphael',
    mounted() {
        var paper = Raphael("container", 500, 300); 
        for(var i = 0; i < 4; i+=1) {
            var multiplier = i*5;
            paper.circle(250 + (2*multiplier), 150 + multiplier, 50 - multiplier)
        }
    }

};
</script>


<style scoped></style>