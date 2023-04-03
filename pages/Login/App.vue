<template>
    <h1>
        Log in
    </h1>
    <form @submit.prevent="submitlogin">
        <label for="ime">Name:</label>
        <input type="name" id="ime" name="ime" v-model="ime" required>
        <!--<label for="email">Email:</label>
        <input type="email" id="email" name="email" required>-->

        <label for="geslo">Password:</label>
        <input type="password" id="geslo" name="geslo" v-model="geslo" required>

        <button type="submit" v-on:click="setCookie('uporabnik', '2', '7');">Continue</button>
        <p v-if="error" class="error">{{ error }}</p>
    </form>
    <div class="text">
        <p>Don't have an account? <a href="signup" class="a2">Sign up</a></p>
    </div>
</template>

<script>
const axios = require("axios");
export default {
    data() {
        return {
            email: "",
            geslo: "",
            loggedin: false,
            ime: "",
            error: "",
        };
    },
    methods: {
        getCookie(cname) {
            let name = cname + "=";
            let ca = document.cookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        },
        setCookie(cname, cvalue, exdays) {
            const d = new Date();
            d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
            let expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        },
        submitlogin() {
            axios
                .post("http://localhost:3000/api/login", {
                    ime: this.ime,
                    geslo: this.geslo,
                })
                .then((response) => {
                    console.log(response.data);
                    this.setCookie("ime", response.data[0]['ime'], 7);
                    this.setCookie("UID", response.data[0]['ID'], 7);
                    window.location.href = ".";
                })
                .catch((error) => {
                    if (
                        error.response &&
                        error.response.data &&
                        error.response.data.message
                    ) {
                        this.error = error.response.data.message;
                    } else {
                        this.error = "Name and password do not match";
                    }
                }
            );
        },
        checkLogin() {
            if (this.getCookie("ime") != "") {
                this.loggedin = true;
                window.location.href = ".";
            }
        },
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
input[type="name"],
input[type="password"] {
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

.a2 {
    text-decoration: none;
    --link-color: #1aaaaf;
    color: var(--link-color);
    margin-left: 5px;
}

h1 {
    text-align: center;
    margin-top: 80px;
}

.a1 {
    text-decoration: none;
    color: white;
}
</style>
