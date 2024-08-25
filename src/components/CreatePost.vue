<template>
    <div class="background">
        <form class="container d-flex flex-column align-items-start" id="formField">
            <button class="btn btn-outline" id="cross" @click.prevent="toggleDisplay">X</button>
            <h1 class="align-self-center fw-bold mt-4">Create Post</h1>
            <label for="description">Username:</label>
            <input id="description" name="title" type="text" placeholder="Enter Username" v-model="username">
            <label for="title">Title:</label>
            <input id="title" type="text" placeholder="Enter Title" v-model="title">
            <label for="categ">Category:</label>
            <div class="input-group mb-3" id="drop">
                <select class="form-select p-0" id="inputGroupSelect02" v-model="category">
                    <option selected>Choose...</option>
                    <option value="Art">Art</option>
                    <option value="Finance">Finance</option>
                    <option value="Technology">Technology</option>
                </select>
                <label class="input-group-text m-0" for="inputGroupSelect02">Options</label>
            </div>
            <button class="btn btn-outline-dark submit mt-3 w-50 align-self-center" type="submit" @click.prevent="createBlog">Submit</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

    export default {
        props: ['items'],
        data() {
            return {
                username:'',
                category:'',
                title:'',
            }
        },
        methods: {
            toggleDisplay() {
                this.$emit('update-display', false);
            },
            async createBlog() {
                console.log(this.username, this.title, this.category);
                await axios.post('https://vuejs-projects-b7931-default-rtdb.firebaseio.com/posts.json', {
                    title: this.title,
                    username: this.username,
                    category: this.category,
                    disp: true,
                    image:`https://picsum.photos/300/200?random=${Math.floor(Math.random()*100) + 1}`
                }).then(this.getItems);
            },
            async getItems() {
                this.$emit('update-display', false);
                await axios.get('https://vuejs-projects-b7931-default-rtdb.firebaseio.com/posts.json').then(res => {
                    this.$emit('update-items', Object.values(res.data));
                });
            }
        }
    };
</script>

<style scoped>
* {
    box-sizing: border-box;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.background {
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    left:0;
    top: 0;
    height: 100%;
    width:100%;
    display: flex;
    align-items: center;
}
.container {
    position: relative;
    background-color: rgb(235, 224, 224);
    max-width: 350px;
    border-radius: 10px;
    padding: 10px 40px;
    box-shadow: 2px 2px 20px black;
}
label {
    margin : 10px;
}
input {
    padding: 10px;
    border-radius: 10px;
    border: 1px solid gray;
    align-self: center;
}
#drop {
    align-self: center;
    width: 88%;
}
select, #drop label {
    padding: 10px;
}
#cross {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor:pointer;
    border: 1px solid; 
}
</style>