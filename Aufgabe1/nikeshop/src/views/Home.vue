<template>
  <div class="home_container">
    <section class="home-section">
      <div>
        <h1 class="home-heading">
          Check out the
          <span class="home-heading-modificaty">new nike air</span>
        </h1>
      </div>
      <div class="description">
        <p>Experience unparalleled comfort and support with every step.</p>
      </div>
      <div><button class="home-button">Shop Now</button></div>
    </section>
  </div>
</template>

<style>
.home_container {
  width: 80%;
  margin: auto;
}
.home-section {
  margin-top: 4rem;
  width: 50%;
}
.home-heading {
  font-weight: 300;
  font-size: 5rem;
}
.home-heading-modificaty {
  display: block;
  font-weight: 700;
}
.home-heading-modificaty::first-letter {
  text-transform: capitalize;
}
.description {
  width: 50%;
}
.home-button {
  padding: 1rem 1.8rem;
  margin-top: 1rem;
  background-color: #14a684;
  border: none;
  border-radius: 0.2rem;
}
</style>
