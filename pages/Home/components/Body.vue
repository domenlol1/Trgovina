<template>
    <div class="banner"></div>
    <div class="skupno">
        <div class="left">
            <p style="text-align:center; padding-top: 5%;">FILTRI</p>
            <hr class="podfiltri">
            <form class="form" v-on:submit.prevent="filterItems">
                <label for="firm">Brands:</label>
                <div class="filter-row">
                    <div>
                        <input type="checkbox" class="checkboxes" id="Ray Ban" name="Ray Ban" value="Ray Ban"
                            v-model="Brands">
                        <label for="Ray Ban"></label>
                    </div>
                    <div>
                        <label for="Ray Ban">Ray Ban</label>
                    </div>
                </div>
                <div class="filter-row">
                    <div>
                        <input type="checkbox" class="checkboxes" id="Oakley" name="Oakley" value="Oakley" v-model="Brands">
                        <label for="Oakley"></label>
                    </div>
                    <div>
                        <label for="Oakley">Oakley</label>
                    </div>
                </div>
                <div class="filter-row">
                    <div>
                        <input type="checkbox" class="checkboxes" id="Tom Ford" name="Tom Ford" value="Tom Ford"
                            v-model="Brands">
                        <label for="Tom Ford"></label>
                    </div>
                    <div>
                        <label for="Tom Ford">Tom Ford</label>
                    </div>
                </div>
                <div class="filter-row">
                    <div>
                        <input type="checkbox" class="checkboxes" id="Carrera" name="Carrera" value="Carrera"
                            v-model="Brands">
                        <label for="Carrera"></label>
                    </div>
                    <div>
                        <label for="Carrera">Carrera</label>
                    </div>
                </div>
                <hr class="medfiltri">
                <label for="price">Price:</label>
                <input type="range" min="0" max="500" class="slider" id="priceRange" name="priceRange" v-model="cena">
                <hr class="medfiltri">
                <button type="submit">Filter</button>
            </form>
        </div>
        <div class="right">
            <div class="mid" v-for="izdelek in izdelki" v-bind:key="izdelek.id">
                <div class="product-box">
                    <div>
                        <div class="product-image">
                            <img :src="izdelek.slika" alt="item image">
                        </div>
                        <div class="product-details">
                            <h3 class="product-name">{{ izdelek.ime }}</h3>
                            <p class="product-price">{{ izdelek.cena + " €" }}</p>
                            <p class="product-price">{{ izdelek.brand }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const axios = require("axios");
export default {
    data: () => {
        return {
            izdelki: [[[]]],
            loggedin: false,
            error: "",
            ime: "",
            Brands: [],
            cena: 0,
        };
    },
    methods: {
        getizdelki() {
            axios.post('http://localhost:3000/api/izdelki').then(response => {
                this.izdelki = response.data;
            })
        },
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
        checkLogin() {
            if (this.getCookie("ime") != "") {
                this.loggedin = true;
                window.location.href = ".";
            }
        }
    },
    mounted() {
        this.getizdelki();
    },
};
</script>

<style scoped>
.product-box {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.product-image {
    height: 170px;
    width: 280px;
}

.product-image img {
    max-width: 100%;
    max-height: 100%;
}

.product-details {
    text-align: center;
}

.product-price {
    font-weight: bold;
}

.left {
    background-color: white;
    width: 300px;
    height: 500px;
    border-right: 1px solid rgb(179, 179, 182);
    margin-left: 100px;
}

.right {
    background-color: white;
    width: 1080px;
    height: 1000px;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    gap: 20px;
    padding: 30px;
    padding-left: 100px;
}

.mid {
    display: flex;
    justify-content: center;
    height: 300px;
    width: 300px;
    /*background-color: rgb(212, 212, 212);*/
    margin-bottom: 10px;
    align-items: center;
    border-radius: 1%;
    border: 0;
    transition: 0.1s;
}

.mid:hover {
    box-shadow: 0 0 5px rgb(39, 39, 39);
    -moz-box-shadow: 0 0 5px rgb(39, 39, 39);
    -webkit-box-shadow: 0 0 5px rgb(39, 39, 39);
    border-color: rgb(66, 65, 65);
    border: 1px solid rgb(119, 118, 118);
}

.skupno {
    display: flex;
    margin-top: 80px;
    gap: 30px;
    max-width: 100%;
}

.banner {
    width: 1000px;
    height: 300px;
    background-image: url("../assets/banner.jpg");
    background-size: cover;
    margin: auto;
    margin-top: 90px;
}

.medfiltri {
    opacity: 65%;
    margin-right: 8px;
    margin-top: 20px;
}

.podfiltri {
    opacity: 65%;
    margin-top: 10px;
    margin-bottom: 15px;
}

.form {
    width: 300px;
    padding: 20px;
}

label {
    display: block;
    margin-bottom: 10px;
}

input[type="checkbox"] {
    padding: 0;
}

.slider {
    width: 240px;
}

.checkboxes {
    width: 18px;
    height: 18px;
    vertical-align: middle;
    cursor: pointer;
}

button,
input {
    overflow: visible;
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

.filter-row {
    display: flex;
}

.filter-row input[type="checkbox"] {
    margin-right: 10px;
}

.filter-row label {
    margin-right: 10px;
}
</style>
