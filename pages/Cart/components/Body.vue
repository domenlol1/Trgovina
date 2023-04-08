<template>
  <div class="cart" id="cart">
    <div class="mid" v-for="izdelek in izdelki" v-bind:key="izdelek.id" v-on:click="deleteCartItem(izdelek.ID)">
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
    <div class="skupno">
      Skupaj: {{ this.skupno }} €
      <div class="root">
        <button type="submit" v-on:click="deletecart(), Open()">Nakup</button>
        <teleport to="Body">
          <div class="modal" v-if="isOpen">
            <div>
              <p> Hvala za vaš nakup</p>
              <button v-on:click="Close()"> Close </button>
            </div>
          </div>
        </teleport>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
const axios = require("axios");
const isOpen = ref(false);
export default {
  data: () => {
    return {
      izdelki: [],
      isOpen: false
    }
  },
  computed: {
    skupno: function () {
      let total = 0;
      for (let i = 0; i < this.izdelki.length; i++) {
        total += this.izdelki[i].cena;
      }
      return total;
    }
  },
  methods: {
    // getizdelki() {
    //   axios.post('http://localhost:3000/api/izdelki').then(response => {
    //     this.izdelki = response.data;
    //   })
    // },
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
    getCartItems() {
      const uid = this.getCookie("UID");
      if (!uid) {
        window.location.href = '.';
        return;
      }
      axios.post('http://localhost:3000/api/displaykosarica', { uid: this.getCookie("UID") }).then(response => {
        this.izdelki = response.data;
      })
    },
    deleteCartItem(cid) {
      axios.post('http://localhost:3000/api/deleteizdelek', { iid: cid }).then(response => {
        window.location.href = '';
      })
    },
    deletecart() {
      axios.post('http://localhost:3000/api/deletecart').then(response => {
      })
    },
    addtonarocilo() {
      axios.post('http://localhost:3000/api/addtonarocilo', { uid: this.getCookie("UID") }).then(response => {
        this.izdelki = response.data;
      })
    },
    Open() {
      this.isOpen = true;
    },
    Close() {
      this.isOpen = false;
      window.location.href = '.';
    },
  },
  mounted() {
    this.getCartItems();
  },

};
</script>

<style>
.cart {
  width: 500px;
  margin: 50px auto;
  margin-top: 100px;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  align-items: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid lightgray;
}

.item:last-child {
  border-bottom: none;
}

.item div:first-child {
  width: 60%;
  font-weight: bold;
}

.skupno {
  color: rgb(0, 0, 0);
  padding-right: 10px;
  padding-left: 10px;
  text-align: center;
  font-size: 1.2em;
  font-weight: bold;
  border-radius: 5px;
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

.modal {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.modal>div {
  background: #FFF;
  padding: 32px;
}

.root {
  position: relative;
}
</style>
