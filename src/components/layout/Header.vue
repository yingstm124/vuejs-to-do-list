<template>
    <header class="header">
        
        <h1>To do List.. 📝</h1>

        <div id="nav">
            <nav>
                <router-link to="/home">Home</router-link> | 
                <router-link to="/">About</router-link>
            </nav>
        </div>

    </header>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>
    nav a:hover {
        color: blue;
    }
</style>