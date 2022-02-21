<template>
    <section>FILTER</section>
    <section>
        <div class="controls">
            <button class="btn btn-dark">Refresh</button>
            <router-link to="/register">Register as Coach</router-link>
            <ul v-if="hasCoaches">
                <li v-for="coach in filteredCoaches" :key="coach.id">
                    {{coach.firstName}}-{{coach.lastName}}
                </li>
            </ul>
            <h3 v-else>There is no Coaches!!</h3>
        </div>
    </section>
</template>

<script>
export default {
    computed:{
        filteredCoaches(){
            return this.$store.getters['coaches/coaches'];
        },
        hasCoaches(){
            return this.$store.getters['coaches/hasCoaches'];
        }
    }
}
</script>