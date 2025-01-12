<template>

  <div class="home view">
    <h1 class="red">This digital space encapsulates my work as an aspiring art director and visual communicator - I experimented with photography, 3D digital imagery, and creative computing to generate this personal domain.</h1>
    <h2 class="title">TONNAM</h2>
    <img class="card" src="@/assets/card.png" width="800">
    <h3> photography archive
      <a href="https://tonamn.github.io/shuffle.01/" target="_blank" rel="noopener">+++ </a><br><br><br>
      a quick instagram browse ･:*+.\(( °ω° ))/.:+
      <a href="https://www.instagram.com/tonnamvasikanond/" target="_blank" rel="noopener">art direction</a> +
      <a href="https://www.instagram.com/barbarianese/" target="_blank" rel="noopener">photography</a>.
    </h3>
  </div>
</template>

<script>
  export default {
    name: "HomeView",
  }
</script>

<style scoped>

.home {
  background-image: url("@/assets/bgW.png");
  background-size: cover;
  height: 190vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  overflow-y: scroll;
}

h1 {
  font-weight: 300;
  font-family: helvetica;
  font-size: 1.6rem;
  position: relative;
  top: 20px;
  color:black;
}

h2 {
  font-weight: 100;
  font-family: cyrene;
  font-size: 10rem;
  position: relative;
  color: white;
}

.card {
  display:flex;
  margin-top: -22%;
}

h3 {
  font-size: 1rem;
  color:black;
  font-family: helvetica;
  font-weight: 310;
  padding-bottom: 8%;
}

.home h1 {
  padding-left: 25px;
  padding-right: 10%;
  text-align: left ;
}
.title {
  text-align: center;
  position: fixed;
  width: 100%;
  top: 35%;
  margin: auto;
}
.home h3 {
  text-align: center ;
}

</style>
