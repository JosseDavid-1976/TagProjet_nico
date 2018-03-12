<template>
    <div>

        <h1>Déstination</h1>
        <h2>{{Destination.pattern.shortDesc}}</h2>


            <passage v-for ="passage in Destination.times" :key="passage.tripId"
                             :passage="passage"></passage>



    </div>
</template>

<script>
import passage from './passage'

    export default {
        name: 'destination',

        props: ['Destination'],

        components:{
        passage
        }

    }
</script>

<style scoped>

</style>