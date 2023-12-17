<script>
import MainButton from "./MainButton.svelte";
</script>
<section class="landing overflow-hidden  relative full-width grid-system">
    <div class="images relative full-width">
    </div>
    <div class="text max-lg:text-center  py-10 lg:py-48">
        <h1 class="text-fs-700 max-lg:mx-auto w-[16ch]">Next generation digital banking</h1>
        <p class="text-fs-400 max-lg:mx-auto max-w-[33rem] py-8 text-dark-grey">Take your financial life online. Your Easybank account will be a one-stop-shop
            for spending, saving, budgeting, investing, and much more.</p>
        <MainButton></MainButton>
    </div>
</section>


<style>
.landing::after {
  content: '';
  position: absolute;
  background-image: url(./image-mockups.png);
  background-repeat: no-repeat;
  width: 50%;
  height: 100%;
  right: -10%;
  /* bottom: 10%; */
}

.landing::before {
  content: '';
  position: absolute;
  background-image: url(./bg-intro-desktop.svg);
  background-repeat: no-repeat;
  width: 50%;
  height: 100%;
  right: 0;
  /* bottom: 10%; */
}

@media (max-width : 1024px) {

  .landing::after,
  .landing::before {
    display: none;
  }

  .images {
    width: 100%;
    height: 40vh;
    display: grid;
    align-items: center;
    position: relative;
  }

  .images::after {
    content: '';
    position: absolute;
    background-image: url(./image-mockups.png);
    background-repeat: no-repeat;
    background-size: cover;
    width: clamp(22rem,60vw,40rem);
    /* max-width: 40rem; */
    height: 100%;
    /* left : calc(100vw - 100%) */
    transform: translateX(50%);
    right : 50% ;
  }

  .images::before {
    content: '';
    position: absolute;
    background-image: url(./bg-intro-mobile.svg);
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0%;
  }

}
</style>
