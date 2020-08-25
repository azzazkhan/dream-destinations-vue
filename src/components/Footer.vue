<template>
  <footer id="footer" class="FooterComponent">
    <div class="email-response">
      <span class="description"
        >Get special offers, travel inspirations, and much more!</span
      >
      <form id="newsletter_form" action="#" method="POST">
        <input
          id="user_email_response"
          type="email"
          name="user_email"
          required
          placeholder="Enter your email address"
          autocomplete="off"
        />
        <button type="submit" class="custom-btn">Submit</button>
      </form>
    </div>
    <div class="logo-wrapper">
      <a href="javascript:void(0)" class="no-decoration">
        <img
          src="@/assets/img/logo.png"
          style="height: 48px; transform: scale(2.5) translateX(25%)"
          alt="Image not available"
        />
      </a>
    </div>
    <div class="widgets-wrapper">
      <div class="widget text">
        <div class="content">
          <p class="description">
            You have question regarding our services?
            <br />Contact us we will be happy to help you out!
          </p>
          <p class="description">
            <a
              href="mailto:contact@dreamdestinations.com"
              target="_blank"
              class="email"
              title="Open the email app."
              >contact@dreamdestinations.com</a
            >
            <br />
            <span>123 Lipsum St.South Concetur, CT 1234</span>
            <br />
            <a
              href="tel:00910000000000"
              class="phone"
              title="Open the phone app."
              >+91 000-000-0000</a
            >
          </p>
        </div>
      </div>
      <div class="widget links">
        <h4 class="title">Useful links</h4>
        <div class="content">
          <ul class="links-list">
            <li class="item">
              <router-link to="/">Home</router-link>
            </li>
            <li class="item">
              <a href="javascript:void(0)">Tours</a>
            </li>
            <li class="item">
              <a href="javascript:void(0)">Umrah</a>
            </li>
            <li class="item">
              <router-link to="/about">About Us</router-link>
            </li>
          </ul>
          <ul class="links-list">
            <li class="item">
              <a href="javascript:void(0)">Contact Us</a>
            </li>
            <li class="item">
              <router-link to="/help">FAQs</router-link>
            </li>
            <li class="item">
              <a href="javascript:void(0)">Terms & Conditions</a>
            </li>
            <li class="item">
              <a href="javascript:void(0)">Privacy Policy</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="widget social">
        <h4 class="title">Connect with us</h4>
        <div class="links-wrapper">
          <i class="fa fa-facebook" aria-hidden="true"></i>
          <i class="fa fa-instagram" aria-hidden="true"></i>
          <i class="fa fa-youtube-play" aria-hidden="true"></i>
          <i class="fa fa-twitter" aria-hidden="true"></i>
          <i class="fa fa-github" aria-hidden="true"></i>
          <i class="fa fa-google-plus" aria-hidden="true"></i>
        </div>
        <h4 class="title mt-4">
          <label for="user_language_response">Languages</label>
        </h4>
        <select id="user_language_response" name="user_language">
          <option value="english" selected>ENG</option>
          <option value="urdu">URD</option>
          <option value="pushto">PUS</option>
          <option value="philippines">PIL</option>
          <option value="persian">PER</option>
        </select>
      </div>
    </div>
    <div class="copyrights">
      &copy;
      <router-link class="no-active" to="/">Dream Destinations</router-link>
      {{ new Date().getFullYear() }} &mdash; All rights reserved
    </div>
  </footer>
</template>

<script>
  import "@/assets/js/footer.js";

  export default {
    name: "Footer",
  };
</script>

<style scoped lang="scss" src="@/assets/scss/components/footer.scss"></style>
