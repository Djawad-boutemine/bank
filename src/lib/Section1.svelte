<script>

</script>

<section class="bg-light-grey full-width grid-system  py-10 max-lg:text-center max-lg:mx-auto">
    <div class="title">
        <h2 class="text-fs-700 max-lg:max-w-[10ch] my-5 mx-auto">Why choose Easybank?</h2>
        <p class="text-fs-400 lg:mb-10 lg:max-w-[60ch]"> We leverage Open Banking to turn your bank account into your financial hub. Control
            your finances like never before.
        </p>
    </div>
    <div class="content grid lg:grid-cols-2 2xl:grid-cols-4 py-10">
        <div>
            <img src="./icon-online.svg" alt="" >
            <h3  class="text-fs-500">Online Banking</h3>
            <p class="text-fs-400">
                Our modern web and mobile applications allow you to keep track of your finances
                wherever you are in the world.
            </p>
        </div>
        <div>
            <img src="./icon-budgeting.svg" alt="">
            <h3 class="text-fs-500">Simple Budgeting</h3>
            <p class="text-fs-400">See exactly where your money goes each month. Receive notifications when you’re
                close to hitting your limits.</p>
        </div>
        <div>
            <img src="./icon-onboarding.svg" alt="">
            <h3 class="text-fs-500">Fast Onboarding</h3>
            <p class="text-fs-400"> We don’t do branches. Open your account in minutes online and start taking control
                of your finances right away.</p>
        </div>
        <div>
            <img src="./icon-api.svg" alt="">
            <h3 class="text-fs-500"> Open API</h3>
            <p class="text-fs-400">
                Manage your savings, investments, pension, and much more from one account. Tracking
                your money has never been easier.</p>
        </div>
    </div>
</section>

<style>
h2,
h3 {
  color: #2d314d;
}

p {
  color: #9698a6;
}

.content h3 {
  padding-block: 1em;
}

.content img {
  margin-top: 2em;
}

@media (max-width : 1023px) {
  .content div {
    max-width: 60ch;
    margin-inline: auto;
  }

  .title p {
    max-width: 60ch;
    margin-inline: auto;
  }

  .content img {
    margin-inline: auto;
  }
}

@media (min-width : 1024px) {
  .content div {
    max-width: 90%;
  }
}
</style>
