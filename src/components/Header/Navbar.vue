<template>
  <header
    class="HeaderNavbarComponent position-absolute d-flex justify-content-between align-items-stretch"
  >
    <!-- This container will hold the logo image. Note that use of <img> tag is must even for SVGs -->
    <div class="logo-wrapper">
      <a
        href="/"
        class="d-flex h-100 w-100 justify-content-center align-items-center"
      >
        <img
          src="@/assets/img/logo.png"
          style="transform: scale(3) translate(25%, 14%)"
          class="logo"
          alt="Image not available"
        />
      </a>
    </div>
    <!-- Animated menu icon -->
    <div class="hamburger icon-menu animated-icon d-flex d-lg-none">
      <div class="line"></div>
    </div>
    <!-- This overlay will cover the page content and act as a black mask over the content -->
    <div class="navigation-wrapper">
      <nav>
        <div class="header d-lg-none"></div>
        <ul class="navigation d-lg-block">
          <li class="menu-item">
            <a href="/">Home</a>
          </li>
          <li class="menu-item">
            <router-link to="/about">About Us</router-link>
          </li>
          <li class="menu-item">
            <a
              href="javascript:void(0)"
              class="has-icon modal-trigger"
              data-modal="AuthModel_01"
            >
              <svg
                focusable="false"
                data-id="SVG_PERSON__24"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g fill="none" stroke-linecap="round">
                  <path
                    d="M4.13 19.68a20.56 20.56 0 0 0 15.74 0M11.9 11.9a7.75 7.75 0 0 0-7.77 7.78M12.1 11.9a7.76 7.76 0 0 1 7.77 7.78"
                  />
                  <path
                    d="M15.98 7.84a4.07 4.07 0 0 1-8.15 0V6.82a4.07 4.07 0 0 1 4.07-4.07h.01a4.07 4.07 0 0 1 4.07 4.07v1.02z"
                  />
                </g>
              </svg>
              Login
            </a>
          </li>
          <li class="menu-item">
            <a
              href="javascript:void(0)"
              class="has-icon modal-trigger"
              data-modal="AuthModel_01"
            >
              <svg
                focusable="false"
                data-id="SVG_INVITE__24"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g fill="none" stroke-linecap="round">
                  <path
                    d="M17.17 14.34v5.33M14.51 17h5.32M4.17 19.68a20.54 20.54 0 0 0 7.87 1.57M11.94 11.9a7.78 7.78 0 0 0-7.78 7.78"
                  />
                  <path
                    d="M16.02 7.84a4.07 4.07 0 0 1-4.07 4.07h-.01a4.07 4.07 0 0 1-4.07-4.07V6.82a4.07 4.07 0 0 1 8.15 0v1.02z"
                  />
                </g>
              </svg>
              Sign up
            </a>
          </li>
          <li class="menu-item">
            <router-link to="/help" class="has-icon">
              <svg
                focusable="false"
                data-id="SVG_QUESTION__24"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <g fill="none" fill-rule="evenodd">
                  <path
                    fill="currentColor"
                    stroke="none"
                    d="M13 16.7a1 1 0 1 1-2 0 1 1 0 0 1 2 0"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.7 12a9.3 9.3 0 1 1 18.6 0 9.3 9.3 0 0 1-18.6 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9.4 9.5a2.6 2.6 0 1 1 3.6 2.4c-.6.2-1 .8-1 1.4v.3"
                  />
                </g>
              </svg>
              Help
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
  import "@/assets/js/navbarItemCollapse.js";
  import "@/assets/js/navbarSidenav.js";

  export default {
    name: "HeaderNavbar",
  };
</script>

<style
  scoped
  lang="scss"
  src="@/assets/scss/components/headerNavbar.scss"
></style>
