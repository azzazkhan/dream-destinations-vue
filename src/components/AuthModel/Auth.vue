<template>
  <div class="overlay mask black blur">
    <div class="auth-modal bg-white">
      <div class="header overlaped">
        <span class="close-icon">
          <svg
            focusable="false"
            data-id="SVG_CLOSE__16"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.5 12.5l-9-9m9 0l-9 9"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        <h3 class="font-weight-normal text-white" style="line-height: 1.5em">
          Login or sign up on Dream Destinations
        </h3>
      </div>
      <div class="content-wrapper animated-content">
        <div class="animation-wrapper">
          <div class="content">
            <div class="form">
              <div class="form-field">
                <input
                  v-model="email"
                  type="email"
                  placeholder="Email address"
                />
              </div>
            </div>
            <button
              class="custom-btn animation-control forward"
              :disabled="!validate_email()"
            >
              Get Started
            </button>
            <span class="text-muted text-center d-block">or continue with</span>
            <div class="social-login">
              <div class="login apple">
                <span class="icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.6491 16.6738C21.5698 16.5512 21.4408 16.4694 21.2961 16.4498C19.392 16.2011 18.05 14.4559 18.2987 12.5518C18.4744 11.2068 19.4162 10.0868 20.7111 9.68286C20.9741 9.59858 21.119 9.3171 21.0347 9.05413C21.0216 9.01321 21.0033 8.97411 20.9802 8.93783C20.1064 7.36088 18.5527 6.27634 16.7712 5.99988C15.8735 6.04272 14.9887 6.23223 14.1522 6.56087C13.5514 6.80265 12.917 6.95073 12.2712 6.99985C11.6254 6.95073 10.991 6.80265 10.3903 6.56087C9.55373 6.23223 8.66903 6.04272 7.77128 5.99988C5.90432 5.99988 2.27135 8.64684 2.27135 13.4998C2.27135 18.1117 5.63531 23.9997 8.27129 23.9997C9.27708 24.0087 10.2708 23.7798 11.1713 23.3317C11.5104 23.1447 11.8853 23.0315 12.2713 22.9997C12.6573 23.0315 13.0322 23.1447 13.3713 23.3317C14.2718 23.7798 15.2655 24.0087 16.2713 23.9997C18.3613 23.9997 20.7202 20.4117 21.7082 17.0868C21.7496 16.9471 21.728 16.7963 21.6491 16.6738Z"
                      fill="#37474F"
                    />
                    <path
                      d="M11.7712 5.99994C14.8073 5.99661 17.2678 3.53617 17.2711 0.500011C17.2711 0.223873 17.0473 0 16.7712 0C13.735 0.00332809 11.2745 2.46377 11.2712 5.49993C11.2712 5.77607 11.4951 5.99994 11.7712 5.99994Z"
                      fill="#37474F"
                    />
                  </svg>
                </span>
                <span class="label">Apple</span>
              </div>
              <div class="login twitter">
                <span class="icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0)">
                      <path
                        d="M24 4.5585C23.1075 4.95 22.1565 5.2095 21.165 5.3355C22.185 4.7265 22.9635 3.7695 23.3295 2.616C22.3785 3.183 21.3285 3.5835 20.2095 3.807C19.3065 2.8455 18.0195 2.25 16.6155 2.25C13.8915 2.25 11.6985 4.461 11.6985 7.1715C11.6985 7.5615 11.7315 7.9365 11.8125 8.2935C7.722 8.094 4.1025 6.1335 1.671 3.147C1.2465 3.8835 0.9975 4.7265 0.9975 5.634C0.9975 7.338 1.875 8.8485 3.183 9.723C2.3925 9.708 1.617 9.4785 0.96 9.117C0.96 9.132 0.96 9.1515 0.96 9.171C0.96 11.562 2.6655 13.548 4.902 14.0055C4.5015 14.115 4.065 14.1675 3.612 14.1675C3.297 14.1675 2.979 14.1495 2.6805 14.0835C3.318 16.032 5.127 17.4645 7.278 17.511C5.604 18.8205 3.4785 19.6095 1.1775 19.6095C0.774 19.6095 0.387 19.5915 0 19.542C2.1795 20.9475 4.7625 21.75 7.548 21.75C16.602 21.75 21.552 14.25 21.552 7.749C21.552 7.5315 21.5445 7.3215 21.534 7.113C22.5105 6.42 23.331 5.5545 24 4.5585Z"
                        fill="#03A9F4"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span class="label">Twitter</span>
              </div>
              <div class="login facebook">
                <span class="icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0)">
                      <path
                        d="M15.997 3.985H18.188V0.169C17.81 0.117 16.51 0 14.996 0C8.06401 0 9.95001 7.85 9.67401 9H6.18701V13.266H9.67301V24H13.947V13.267H17.292L17.823 9.001H13.946C14.134 6.177 13.185 3.985 15.997 3.985V3.985Z"
                        fill="#3B5999"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </span>
                <span class="label">Facebook</span>
              </div>
              <div class="login google">
                <span class="icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.625 12C5.625 10.8109 5.95261 9.69702 6.52177 8.74326V4.69757H2.47608C0.870375 6.78295 0 9.32446 0 12C0 14.6755 0.870375 17.217 2.47608 19.3024H6.52177V15.2567C5.95261 14.303 5.625 13.1891 5.625 12V12Z"
                      fill="#FBBD00"
                    />
                    <path
                      d="M12 18.375L9.1875 21.1875L12 24C14.6756 24 17.217 23.1296 19.3024 21.5239V17.4825H15.261C14.2989 18.0538 13.1804 18.375 12 18.375V18.375Z"
                      fill="#0F9D58"
                    />
                    <path
                      d="M6.52176 15.2567L2.47607 19.3024C2.79398 19.7153 3.14015 20.1107 3.51473 20.4853C5.78123 22.7517 8.79468 24 12 24V18.375C9.67387 18.375 7.63514 17.1225 6.52176 15.2567Z"
                      fill="#31AA52"
                    />
                    <path
                      d="M24 12C24 11.2699 23.9339 10.5385 23.8035 9.82609L23.698 9.24957H12V14.8746H17.6931C17.1402 15.9743 16.2902 16.8715 15.261 17.4826L19.3024 21.524C19.7152 21.2061 20.1106 20.8599 20.4853 20.4853C22.7518 18.2188 24 15.2053 24 12V12Z"
                      fill="#3C79E6"
                    />
                    <path
                      d="M16.5078 7.49217L17.005 7.98933L20.9825 4.01189L20.4853 3.51473C18.2188 1.24823 15.2054 0 12 0L9.1875 2.8125L12 5.625C13.7028 5.625 15.3037 6.28809 16.5078 7.49217Z"
                      fill="#CF2D48"
                    />
                    <path
                      d="M12 5.625V0C8.79469 0 5.78123 1.24823 3.51468 3.51469C3.14011 3.88927 2.79393 4.28466 2.47603 4.69758L6.52172 8.74327C7.63514 6.8775 9.67387 5.625 12 5.625V5.625Z"
                      fill="#EB4132"
                    />
                  </svg>
                </span>
                <span class="label">Google</span>
              </div>
            </div>
          </div>
          <div class="content">
            <span
              class="text-muted text-center d-block mt-3 mb-1"
              style="font-size: 14px;"
              v-text="email"
            ></span>
            <div class="text-center mb-4">
              <a
                href="javascript:void(0)"
                class="animated-anchor animation-control backward"
                >Edit email</a
              >
            </div>
            <div class="form">
              <div class="form-field">
                <input
                  type="text"
                  v-bind="first_name"
                  placeholder="First Name"
                />
              </div>
              <div class="form-field">
                <input type="text" v-bind="last_name" placeholder="Last Name" />
              </div>
              <div class="form-field password-widget">
                <input
                  type="password"
                  v-bind="password"
                  placeholder="Password"
                />
                <div class="icon">
                  <i class="fa fa-eye show" aria-hidden="true"></i>
                  <i class="fa fa-eye-slash hide" aria-hidden="true"></i>
                </div>
              </div>
            </div>
            <button class="custom-btn animation-control forward">
              Get Started
            </button>
          </div>
        </div>
        <div class="footer text-muted text-center mx-auto px-3">
          <span class="notice">
            Use of this web site constitutes acceptance of the Dream
            Destinations
            <a href="javascript:void(0)">Terms and Conditions</a> and
            <a href="javascript:void(0)">Privacy Policy</a>.
          </span>
          <span class="d-block mt-4"
            >&copy; {{ new Date().getFullYear() }} Dream Destinations &mdash;
            All rights reserved</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import "@/assets/js/authModel.js";

  export default {
    name: "AuthModel",
    data() {
      return {
        email: "",
        first_name: "",
        last_name: "",
        password: "",
      };
    },
    methods: {
      validate_email() {
        // let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        return this.email.match(regex);
      },
    },
  };
</script>

<style scoped lang="scss" src="@/assets/scss/components/authModel.scss"></style>
