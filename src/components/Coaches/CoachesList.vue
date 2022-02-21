<template>
    <section>FILTER</section>
    <section>
        <div class="container" >
            <div class="row justify-content-md-center">
                <div class="col-md-8" id="style_layout">
                    <button class="btn btn-dark">Refresh</button>
                    <router-link to="/register">Register as Coach</router-link>
                    <ul v-if="hasCoaches">
                        <base-card v-for="coach in filteredCoaches" :key="coach.id">
                            <h5 class="card-title">Special title treatment</h5>
                            <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </base-card >
                    </ul>
                    <h3 v-else>There is no Coaches!!</h3>
                </div>
            </div>
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
<style scoped>
#style_layout{
    border-radius: 10px;
    box-shadow: 5px 5px 10px 10px #aaaaaa;
    padding: 20px;
}
</style>