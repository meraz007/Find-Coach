<template>
    <header>
        <nav class="navbar p-4 navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
            <router-link to="/" class="navbar-brand">Find Coach</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <router-link to="/coaches" class="nav-link" aria-current="page">Coaches</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/requests">Requests</router-link>
                </li>
            </ul>
            </div>
        </div>  
        </nav>
    </header>
</template>

<style scoped>
nav li:hover,
 nav li.router-link-active,
 nav li.router-link-exact-active {
   border: 1px solid black;
   cursor: pointer;
   display: block;
 }
</style>