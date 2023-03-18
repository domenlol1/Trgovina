<template>
  <div class="cart">
    <div class="item">
      <div class="mid">
        
      </div>
      <div>$10</div>
    </div>
    <div class="item">
      <div class="mid">

      </div>
      <div>$20</div>
    </div>
    <div class="total">
      Total: $30
    </div>
  </div>
</template>

<script>
export default {
  
};
</script>

<style>
.cart {
  width: 700px;
  margin: 50px auto;
  margin-top: 100px;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
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
  background-color: rgb(212, 212, 212);
  margin-bottom: 10px;
  align-items: center;
  border-radius: 2%;
}
</style>