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
    <div class="total">
      Total: ${{ this.skupno }}
    </div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  data: () => {
    return {
      izdelki: [],
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
    }
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

.total {
  background-color: lightgray;
  color: white;
  padding: 20px;
  text-align: center;
  font-size: 1.2em;
  font-weight: bold;
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
</style>
