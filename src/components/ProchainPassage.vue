<template>
    <div>
    <h1>Prochain passage</h1>
     <ul>
         <li>
             <Destination v-for="Destination in Destinations" :key="Destination.tripId"
                          :Destination="Destination"></Destination>
         </li>
     </ul>
    </div>
</template>

<script>
    import Destination from "./Destination"

export default {
    components : {
        Destination
    },
    name: 'prochain-passage',
    data () {
        return{
            Destinations : []
        }

    },
        mounted () {
        this.axios.get('https://data.metromobilite.fr/api/routers/default/index/clusters/SEM:GENCHAVANT/stoptimes?route=SEM:A').then((response) => {
            console.log(response.data)
            this.Destinations = response.data
        })

    }

}
</script>

<style scoped>

</style>