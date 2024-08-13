<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" id="nav-logo" href="#">DIY Bazaar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="nav-links">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#" @click.prevent="reloadPage">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">About</a>
                        </li>
                        <li class="nav-item">
                          <a class="nav-link active p-0" href="#">
                            <button class="btn btn-outline-light" @click="dispForm">Create&nbsp;Post</button>
                          </a>
                        </li>
                        <li class="nav-item">
                          <ul class="navbar-nav">
                            <li class="nav-item dropdown">
                              <a class="nav-link dropdown-toggle" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Filter
                              </a>
                              <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li>
                                  <div class="form-check ms-4">
                                    <input class="form-check-input" type="checkbox" @change="categoryClicked('Art')" id="flexCheckChecked">
                                    <label class="form-check-label text-light" for="flexCheckChecked">
                                      Art
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div class="form-check ms-4">
                                    <input class="form-check-input" type="checkbox" @change="categoryClicked('Finance')" id="flexCheckChecked">
                                    <label class="form-check-label text-light" for="flexCheckChecked">
                                      Finance
                                    </label>
                                  </div>
                                </li>
                                <li>
                                  <div class="form-check ms-4">
                                    <input class="form-check-input" type="checkbox" @change="categoryClicked('Tech')" id="flexCheckDefault">
                                    <label class="form-check-label text-light" for="flexCheckDefault">
                                      Technology
                                    </label>
                                  </div>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </li>

                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"
                            v-model="searchOption">
                        <button class="btn btn-outline-light" id="search" type="submit"
                            @click.prevent="searched">Search</button>
                    </form>
                </div>
            </div>
        </nav>
</template>
<script>
    export default {
        props: ['items', 'displayCreatePost'],
        data() {
            return {
                searchOption: '',
                categories: [],
            }
        },
        methods: {
            dispForm() {
              this.$emit('update-display', true);
            },
            categoryClicked(categ) {
                let index = this.categories.indexOf(categ);
                
                if (index === -1) {
                    this.categories.push(categ);
                } else {
                    this.categories.splice(index, 1);
                }
                
                this.items.forEach((item) => {
                    item.disp = this.categories.length === 0 || this.categories.includes(item.category);
                })
                this.$emit('update-items', this.items);
            },
            searched() {
                this.items.forEach(item => {
                    item.disp = (this.categories.length === 0 || this.categories.includes(item.category)) && item.title.toLowerCase().startsWith(this.searchOption.toLowerCase());
                });
                this.$emit('update-items', this.items);
            },
        }
    };
</script>

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