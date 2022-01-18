<template>
  <section class="vh-100 gradient-custom">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card bg-dark text-white" style="border-radius: 1rem">
            <div class="card-body p-5 text-center">
              <div class="mb-md-0 mt-md-4 pb-1">
                <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                <p class="text-white-50 mb-5">
                  Entrer votre login et votre mot de passe !
                </p>

                <div class="form-outline form-white mb-4">
                  <input
                    type="email"
                    id="typeEmailX"
                    class="form-control form-control-lg"
                  />
                  <label class="form-label" for="typeEmailX">Email</label>
                </div>
                <div class="form-outline form-white mb-4">
                  <input
                    type="password"
                    id="typePasswordX"
                    class="form-control form-control-lg"
                  />

                  <label class="form-label" for="typePasswordX"
                    >Mot de passe
                  </label>
                </div>
                <span
                    ><div class="password-icon">
                      <i
                        class="bi bi-eye-fill"
                        id="eye"
                        v-on:click="changer()"
                      ></i></div
                  ></span>

                <p class="small mb-5 pb-lg-2">
                  <a class="text-white-50" href="#!">Mot de passe oublié ?</a>
                </p>
                <button class="btn btn-outline-light btn-lg px-5" type="submit">
                  Login
                </button>
                <div
                  class="d-flex justify-content-center text-center mt-4 pt-1"
                >
                  <a href="#!" class="text-white">
                    <i class="fab fa-facebook-f fa-lg"></i>
                  </a>
                  <a href="#!" class="text-white"
                    ><i class="fab fa-twitter fa-lg mx-4 px-2"></i
                  ></a>
                  <a href="#!" class="text-white"
                    ><i class="fab fa-google fa-lg"></i
                  ></a>
                </div>
              </div>

              <div>
                <p class="mb-0">
                  Pas encore de compte ?
                  <router-link class="link-signup" to="/signup"
                    >Enregistrez-vous</router-link
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      e: true,
    };
  },
  mounted() {},
  methods: {
    changer() {
      if (this.e == true) {
        document.getElementById("typePasswordX").setAttribute("type", "text");
        document
          .getElementById("eye")
          .setAttribute("class", "bi bi-eye-slash-fill");
        this.e = false;
      } else {
        document
          .getElementById("typePasswordX")
          .setAttribute("type", "password");
        document.getElementById("eye").setAttribute("class", "bi bi-eye-fill");
        this.e = true;
      }
    },
  },
};
</script>

<style scoped>
.container{
  margin-top: 50px;  
}
.gradient-custom {
  background: #d1d0e1;
}
.password-icon{
  width:50px;
  margin: auto;
}
.password-icon:hover {
  cursor: pointer;
  color: #ff4754;
  transform: scale(1.5);
}
label {
  background: #212529;
}
input {
  outline: 1px white solid;
}
input:focus {
  background: transparent;
  outline: 1px white solid;  
}
.password-icon {
  margin-top: 25px;
}
</style>