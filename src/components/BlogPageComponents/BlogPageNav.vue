<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" id="nav-logo" href="">DIY Bazaar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="nav-links">
                        <li class="nav-item">
                            <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link active" to="/about">About</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
</template>


<style scoped>
#nav-logo {
  font-weight: 900;
  font-size: 40px;
}
#nav-links {
  margin-left: 40%;
}
#nav-links > .nav-item {
  margin-right: 50px;
}
</style>