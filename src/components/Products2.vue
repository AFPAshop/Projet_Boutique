<template>
  <div class="home-container">
    <h1>Articles</h1>
    <!-- Search Products -->
    <div class="input-group mb-4 shadow-sm">
      <span class="input-group-text bg-white" id="basic-addon1">
        <i class="fas fa-search"></i>
      </span>
      <input
        type="text"
        class="form-control py-2"
        placeholder="Search for a product..."
        aria-label="Username"
        aria-describedby="basic-addon1"
        v-model="searchProduct"
      />
    </div>
  </div>
  <!-- cards display -->
  <div class="card-cart-container">
    <div class="card-container">
      <div
        v-for="product in filterProducts"
        v-bind:key="product.id"
        class="card"
      >
        <div class="img-container">
          <img :src="product.image" alt="" />
        </div>
        <div class="card-text">
          <h3>{{ formatProduct(product.title) }}</h3>
          <span>{{ product.price }}€</span>
        </div>
        <div class="card-icons">
          <div class="like-container">
            <input
              type="checkbox"
              name="checkbox"
              v-bind:id="product.id"
              :value="product.id"
              v-model="liked"
              @click="setLikeCookie()"
            />
            <label v-bind:for="product.id">
              <i class="fas fa-heart"></i>
            </label>
          </div>
          <div class="add-to-cart">
            <button v-on:click="addToCart(product)">
              <i class="fas fa-cart-plus mx-1"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- cart display -->

    <transition name="cart-anim">
      <div
        v-if="this.$store.state.products.length > 0"
        class="shopping-cart"
        id="shopping-cart"
      >
        <h2>Pannier</h2>
        <transition-group name="item-anim" tag="div" class="item-group">
          <div
            v-for="product in filterProducts"
            v-bind:key="product.id"
            class="item"
          >
            <div class="img-container">
              <img v-bind:src="product.image" alt="" />
            </div>
            <div class="item-description">
              <h4>{{ formatProduct(product.title) }}</h4>
              <p>{{ product.price }}€</p>
            </div>
            <div class="item-quantity">
              <h6>quantitée : {{ product.quantity }}</h6>
              <div class="cart-icons">
                <button v-on:click="cartPlusOne(product)">
                  <i class="fa fa-plus"></i>
                </button>
                <button v-on:click="cartMinusOne(product, id)">
                  <i class="fa fa-minus" aria-hidden="true"></i>
                </button>
                <button @click="cartRemoveItem(id)">
                  <i class="fa fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </transition-group>
        <div class="grand-total">
          <div class="total">
            <h2>Total</h2>
            <h2>{{ cartTotalAmount }}€</h2>
          </div>
          <h6>Total Article : {{ itemTotalAmount }}</h6>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Cart",
  data: () => {
    return {
      searchProduct: "",
      filterByCategory: "",
      sortByPrice: "",
      sortByRating: "",
    };
  },
  computed: {
    filterProducts() {
      return this.$store.state.products.filter((product) => {
        return product.title
          .toLowerCase()
          .includes(this.searchProduct.toLowerCase());
      });
    },
    formatProduct(product) {
      if (product) {
        return product.slice(0, 10) + "...";
      } else {
        return "Undefined";
      }
    },
    formatRating(product) {
      return product.toFixed(1);
    },
    formatPrice(product) {
      return product.toFixed(2);
    },
    eliminateDuplicatedCategories(products) {
      let arr = [];
      products.forEach((product) => {
        arr.push(product.category);
      });
      return [...new Set(arr)];
    },
    sortProductsByPrice(products) {
      this.sortByRating = "";
      if (this.sortByPrice == "increasingOrder") {
        return products.sort((a, b) => a.price - b.price);
      } else if (this.sortByPrice == "decreasingOrder") {
        return products.sort((a, b) => b.price - a.price);
      }
    },
    sortProductsByRating(products) {
      this.sortByPrice = "";
      if (this.sortByRating == "increasingOrder") {
        return products.sort((a, b) => a.rating.rate - b.rating.rate);
      } else if (this.sortByRating == "decreasingOrder") {
        return products.sort((a, b) => b.rating.rate - a.rating.rate);
      }
    },
    cartTotalAmount() {
      let total = 0;
      for (let item in this.cart) {
        total = total + this.cart[item].quantity * this.cart[item].price;
      }
      return total;
    },
    itemTotalAmount() {
      let itemTotal = 0;
      for (let item in this.cart) {
        itemTotal = itemTotal + this.cart[item].quantity;
      }
      return itemTotal;
    },
  },

  methods: {
    addToCart(product) {
      // check if already on array
      for (let i = 0; i < this.$store.state.card.length; i++) {
        if (this.$store.state.card[i].id == product.id) {
          return this.$store.state.card[i].quantity++;
        }
      }
      return this.$store.state.card.push(product);
    },

    cartPlusOne(product) {
      this.$store.state.card.quantity = this.$store.state.card.quantity + 1;
    },

    cartMinusOne(product, id) {
      if (this.$store.state.card.quantity == 1) {
        this.$store.state.card.cartRemoveItem(id);
      } else {
        this.$store.state.card.quantity = this.$store.state.card.quantity - 1;
      }
    },
    deleteCart() {
      this.cart = [];
    },
    cartRemoveItem(id) {
      delete (this.cart, id);
    },
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Ubuntu&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  list-style: none;
  font-family: "Ubuntu", sans-serif;
}

body {
  margin: 0 auto;
  background: rgba(254, 254, 254, 0.8);
  padding-bottom: 4rem;
  color: #333;
  overflow-x: hidden;
}

h1 {
  padding: 6rem 0 0 2.4rem;
}

a,
a:visited {
  color: #333;
}

button {
  border: none;
  background: none;
  outline: none;
  cursor: pointer;
}

nav {
  padding: 0.8rem 2.4rem;
  background: rgba(255, 255, 255, 0.97);
  position: fixed;
  width: 100%;
  z-index: 2;
  box-shadow: 0 2px 4px -3px rgba(51, 51, 51, 0.2);
}
nav .nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1050px;
  margin: 0 auto;
}
nav .nav-container #logo {
  height: 32px;
  width: 66%;
}
nav .nav-container #logo img {
  height: 100%;
}
nav .nav-container #icons {
  display: flex;
  font-size: 24px;
  width: 34%;
  justify-content: flex-end;
}
nav .nav-container #icons li {
  margin-left: calc(35% + 8px);
}
nav .nav-container #icons li a {
  position: relative;
}
nav .nav-container #icons #nav-not {
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background: #ff2929;
  position: absolute;
  visibility: hidden;
  opacity: 0;
  transition: 0.6s;
  transform: translate(-4px, -1px);
}
nav .nav-container #icons i {
  transition: 0.25s;
  cursor: pointer;
}
nav .nav-container #icons i:hover {
  color: rgba(34, 34, 34, 0.65);
}

.home-container {
  max-width: 1250px;
  margin: 0 auto;
  padding-left: 2.4rem;
}
@media screen and (max-width: 600px) {
  .home-container {
    padding-left: 0.2rem;
  }
}
.home-container h1 {
  padding-left: 0;
}
.home-container #search {
  margin: 1rem 1rem 2rem 0;
  height: 2.4rem;
  padding: 0 0.5rem;
  border-radius: 5px;
  transition: 0.4s ease;
  border: 2px solid rgba(51, 51, 51, 0.835);
}
.home-container #search:focus {
  outline: none;
  border: 2px solid #2eb7eb;
}
.home-container .card-cart-container {
  display: flex;
}
.home-container .card-cart-container .card-container {
  display: flex;
  flex-wrap: wrap;
}
.home-container .card-cart-container .card-container .card {
  margin: 0.4rem 1rem 0.4rem 0;
  background: white;
  border-radius: 4px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 0px 6px rgba(51, 51, 51, 0.15);
  transition: 0.2s ease;
  width: 202px;
}
@media screen and (max-width: 600px) {
  .home-container .card-cart-container .card-container .card {
    margin-right: 0.2rem;
  }
}
.home-container .card-cart-container .card-container .card:hover {
  transform: scale(1.04);
}
.home-container .card-cart-container .card-container .card:hover img {
  transform: scale(1.08);
}
.home-container .card-cart-container .card-container .card:hover .card-text {
  opacity: 1;
  bottom: 2.3rem;
}
.home-container .card-cart-container .card-container .card .img-container {
  overflow: hidden;
}
.home-container .card-cart-container .card-container .card .img-container img {
  height: 210px;
  transition: 0.4s ease;
}
.home-container .card-cart-container .card-container .card .card-text {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.3rem 0.8rem;
  position: absolute;
  bottom: 1rem;
  opacity: 0;
  transition: 0.6s;
  width: 100%;
  height: 75px;
  background: linear-gradient(0deg, white 40%, transparent 100%);
}
.home-container .card-cart-container .card-container .card .card-text h3 {
  font-size: 1.2rem;
  padding-right: 4px;
}
.home-container .card-cart-container .card-container .card .card-text span {
  background: #2eb7eb;
  font-weight: bold;
  padding: 4px 6px;
  color: white;
  border-radius: 4px;
}
.home-container .card-cart-container .card-container .card .card-icons {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 40px;
}
.home-container .card-cart-container .card-container .card .card-icons i {
  padding: 3px 5px;
  transition: 0.2s;
  cursor: pointer;
}
.home-container .card-cart-container .card-container .card .card-icons i:hover {
  animation: scaler 0.8s infinite linear;
}
.home-container
  .card-cart-container
  .card-container
  .card
  .card-icons
  .fa-heart:hover {
  color: rgba(251, 38, 38, 0.5);
}
.home-container
  .card-cart-container
  .card-container
  .card
  .card-icons
  .fa-shopping-cart {
  font-size: 16px;
  color: #2eb7eb;
}
.home-container
  .card-cart-container
  .card-container
  .card
  .card-icons
  .fa-shopping-cart:hover {
  filter: brightness(125%);
}
.home-container
  .card-cart-container
  .card-container
  .card
  .card-icons
  .like-container
  input {
  display: none;
}
.home-container
  .card-cart-container
  .card-container
  .card
  .card-icons
  .like-container
  input:checked
  + label
  i {
  color: #fb2626;
  animation: heart 1.3s forwards ease;
}
@keyframes heart {
  0% {
    filter: hue-rotate(0deg);
    transform: scale(1);
  }
  50% {
    filter: hue-rotate(-270deg);
    transform: scale(1.3);
  }
  100% {
    filter: hue-rotate(0deg);
    transform: scale(1);
  }
}
.home-container .card-cart-container .card-container .no-result {
  margin: 0 4rem 0 0.4rem;
}
.home-container .shopping-cart {
  transition: 0.4s ease;
  background: #2eb7eb;
  color: white;
  padding: 1.4rem;
  border-radius: 4px;
  min-width: 290px;
  box-shadow: 0 1px 6px rgba(51, 51, 51, 0.25);
  height: 100%;
  margin: -8rem 2.4rem 0 0;
}
.home-container .shopping-cart h2 {
  margin-bottom: 1rem;
  color: #333;
  text-align: center;
  text-overflow: ellipsis;
}
.home-container .shopping-cart .item-group {
  max-height: 400px;
  overflow-y: scroll;
  overflow-x: hidden;
  padding-right: 6px;
}
.home-container .shopping-cart .item-group::-webkit-scrollbar {
  display: none;
}
.home-container .shopping-cart .item-group .item {
  margin-bottom: 2.4rem;
  position: relative;
  display: grid;
  grid-template-columns: 50px 1fr;
  grid-template-rows: 60% 40%;
  grid-template-areas: "a b" "a c";
}
.home-container .shopping-cart .item-group .item:after {
  content: "";
  position: absolute;
  height: 1px;
  width: 100%;
  background: rgba(85, 85, 85, 0.2);
  left: 50%;
  bottom: -22px;
  transform: translateX(-50%);
}
.home-container .shopping-cart .item-group .item .img-container {
  grid-area: a;
  display: flex;
  align-items: center;
}
.home-container .shopping-cart .item-group .item .img-container img {
  height: 50px;
  width: 50px;
  border-radius: 50%;
  transform: scale(0);
  animation: img-scale 1s forwards;
}
@keyframes img-scale {
  to {
    transform: scale(1);
  }
}
.home-container .shopping-cart .item-group .item .item-description {
  grid-area: b;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-left: 10px;
}
.home-container .shopping-cart .item-group .item .item-description h4 {
  margin: 0 0.9rem 0.9rem 0;
  background: rgba(51, 51, 51, 0.1);
  padding: 3px 5px;
  border-radius: 4px;
  box-shadow: 0 1px 1px rgba(51, 51, 51, 0.15);
  transform: scaleX(0);
  transform-origin: left;
  animation: img-scale 1s forwards;
}
@keyframes img-scale {
  to {
    transform: scaleX(1);
  }
}
.home-container .shopping-cart .item-group .item .item-description p {
  transform: translateY(3px);
}
.home-container .shopping-cart .item-group .item .item-quantity {
  grid-area: c;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 10px;
}
.home-container .shopping-cart .item-group .item .item-quantity h6 {
  color: #333;
}
.home-container .shopping-cart .item-group .item .item-quantity .cart-icons {
  display: flex;
  justify-content: space-between;
  width: 30%;
  margin-left: 10px;
}
.home-container
  .shopping-cart
  .item-group
  .item
  .item-quantity
  .cart-icons
  button {
  transform: scaleY(0);
}
.home-container
  .shopping-cart
  .item-group
  .item
  .item-quantity
  .cart-icons
  button:nth-child(1) {
  animation: icon 0.5s ease forwards;
  animation-delay: 0.2s;
}
@keyframes icon {
  to {
    transform: scaleY(1);
  }
}
.home-container
  .shopping-cart
  .item-group
  .item
  .item-quantity
  .cart-icons
  button:nth-child(2) {
  animation: icon 0.5s ease forwards;
  animation-delay: 0.4s;
}
@keyframes icon {
  to {
    transform: scaleY(1);
  }
}
.home-container
  .shopping-cart
  .item-group
  .item
  .item-quantity
  .cart-icons
  button:nth-child(3) {
  animation: icon 0.5s ease forwards;
  animation-delay: 0.6s;
}
@keyframes icon {
  to {
    transform: scaleY(1);
  }
}
.home-container .shopping-cart .item-group .item .item-quantity .cart-icons i {
  font-size: 0.55rem;
  padding: 5px;
  margin: 0 2px;
  background: white;
  border-radius: 50%;
  color: #2eb7eb;
  transition: 0.3s ease;
}
.home-container
  .shopping-cart
  .item-group
  .item
  .item-quantity
  .cart-icons
  i:hover {
  background: #222;
  color: #2eb7eb;
}
.home-container .shopping-cart .grand-total h6 {
  color: #333;
}
.home-container .shopping-cart .grand-total .total {
  display: flex;
  justify-content: space-between;
  margin: 1.4rem 0 0.4rem;
}
.home-container .shopping-cart .grand-total .total h2 {
  color: white;
  margin-bottom: 0;
}
.home-container .shopping-cart .order-button {
  margin: 1rem auto 0;
  width: 100%;
  text-align: center;
  text-overflow: ellipsis;
}
.home-container .shopping-cart .order-button button {
  background: white;
  padding: 0.8rem;
  border-radius: 4px;
  box-shadow: 0 1px 6px rgba(51, 51, 51, 0.2);
  transition: all 0.2s ease;
  letter-spacing: 1px;
}
.home-container .shopping-cart .order-button button:hover {
  background: black;
  color: #2eb7eb;
  font-weight: bold;
  letter-spacing: 6px;
  animation: scaler 1.5s infinite linear;
}
.home-container .shopping-cart .order-button button:active {
  transform: scale(0.92);
}
.home-container .cart-anim-enter-active,
.home-container .cart-anim-leave-active {
  transition: 1.3s cubic-bezier(0.23, 0.66, 0.08, 0.93);
  transform: translateX(0px);
}
.home-container .cart-anim-enter,
.home-container .cart-anim-leave-to {
  opacity: 0;
  transform: translateX(400px);
}
.home-container .item-anim-enter-active,
.home-container .item-anim-leave-active {
  transform: scale(1);
  transition: 0.8s;
}
.home-container .item-anim-enter,
.home-container .item-anim-leave-to {
  transform: scale(0);
  transition: 0.6s;
}

@keyframes scaler {
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
</style>