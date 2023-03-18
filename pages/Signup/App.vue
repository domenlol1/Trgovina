<template>
    <h1>
        Sign up
    </h1>
    <form @submit.prevent="submitsignup">
        <label for="name">Name:</label>
        <input type="name" id="name" name="name" v-model="name" required>

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" v-model="email" required>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" v-model="password" required>

        <label for="password">Confirm password:</label>
        <input type="password" id="confirmpassword" name="confirmpassword" v-model="confirmpassword" required>

        <button type="submit">Continue</button>
        <p v-if="error" class="error">{{ error }}</p>
    </form>
    <div class="text">
        <p>Already have an account? <a href="login">Log in</a></p>
    </div>
</template>

<script>
const axios = require("axios");
export default {
    data() {
        return {
            name: "",
            email: "",
            password: "",
            confirmpassword: "",
            error: ""
        };
    },
    methods: {
        submitsignup() {
            if (this.password !== this.confirmpassword) {
                this.error = 'The password and confirm password fields do not match';
                return;
            }
            axios
                .post('http://localhost:3000/api/signup', {
                    ime: this.name,
                    mail: this.email,
                    geslo: this.password,
                })
                .then(response => {
                    window.location.href = ".";
                })
                .catch(error => {
                    if (error.response && error.response.data && error.response.data.message) {
                        this.error = error.response.data.message;
                    } else {
                        this.error = 'An unknown error occurred';
                    }
                }
            );
        }
    }
}
</script>

<style>
#app {
    margin: 0 auto;
    font-weight: normal;
    font-family: latoregular, Lato, sans-serif;
}

form {
    width: 300px;
    margin: 0 auto;
    margin-top: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

label {
    display: block;
    margin-bottom: 10px;
}

input[type="email"],
input[type="password"],
input[type="name"] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button[type="submit"] {
    width: 100%;
    background-color: #1aaaaf;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button[type="submit"]:hover {
    background-color: #0a56bb;
}

.text {
    margin-top: 10px;
    text-align: center;
}

a {
    text-decoration: none;
    --link-color: #1aaaaf;
    color: var(--link-color);
    margin-left: 5px;
}

h1 {
    text-align: center;
    margin-top: 80px;
}
</style>