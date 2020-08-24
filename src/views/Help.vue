<template>
  <div class="HelpView">
    <Hero>
      <h1 class="featured-title text-white text-center text-capitalize">
        Traveler Help
      </h1>
    </Hero>
    <MainContentWraper
      class="mx-auto bg-white h-100 pt-5"
      style="width: 90vw; border-radius: 10px; transform: translateY(-50px)"
    >
      <h2 class="light">Check out our FAQs</h2>

      <div id="accordionExample" class="accordion mt-5">
        <div class="card">
          <div class="card-header">
            <h2 class="mb-0">
              <button
                class="btn btn-block text-left"
                type="button"
                data-toggle="collapse"
                data-target="#collapseOne"
              >
                Who do I contact if I have questions about my reservation or
                need to modify it?
              </button>
            </h2>
          </div>

          <div
            id="collapseOne"
            class="collapse"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              <p>
                You can access your Traveler Account to view the details of your
                booking. Details may include your booking number, cancellation
                policy, property information, and safety information. When
                partners have provided check-in details or information about the
                area, it will be available as well.
              </p>
              <p>
                You will need to contact the owner or manager of the property if
                the answer is not available in your account. If you need to
                modify your confirmed booking, you should contact them as well.
                To cancel your booking, refer to the related article.
              </p>
              <p>
                If you booked through a partner that uses external software or
                if you booked outside of our system, your reservation may not
                appear. In this situation, try contacting the owner or manager
                of the property by replying to the emails you received. You can
                also contact Customer Support for help.
              </p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <h2 class="mb-0">
              <button
                class="btn btn-block text-left collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseTwo"
              >
                How do I book and pay for a rental over the phone?
              </button>
            </h2>
          </div>
          <div
            id="collapseTwo"
            class="collapse"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              <p>
                HomeAway is a vacation rental marketplace that connects property
                owners and managers with travelers. Once you find that perfect
                vacation rental on the site, it’s easy to book and pay securely
                online.
              </p>
              <p>
                If you’d like help booking the property over the phone, you can
                contact us toll-free at 1-888-640-7927. Please be prepared to
                provide the Property # you want to book.
              </p>
              <p>
                Please note, agents are only able to provide details about the
                property if the answer is on the listing. If you have questions
                about a property, you should first contact the owner or manager
                of the property. You can send them a message through our secure
                messaging system by using the
                <span class="bold">Ask Owner a Question</span> option on the
                listing.
              </p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <h2 class="mb-0">
              <button
                class="btn btn-block text-left collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseThree"
              >
                How do I cancel a reservation and receive a refund?
              </button>
            </h2>
          </div>
          <div
            id="collapseThree"
            class="collapse"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              <p>
                If you are canceling for reasons related to COVID-19
                coronavirus, please see the related article below for the most
                up-to-date information.
              </p>
              <span class="bold d-block">How to cancel a reservation:</span>
              <ol>
                <li>Log in to your traveler account.</li>
                <li>
                  Click
                  <span class="bold">My Trips</span>.
                </li>
                <li>Select the reservation you want to cancel.</li>
                <li>
                  From the
                  <span class="bold">Details</span> tab, click
                  <span class="bold">Manage your booking</span>.
                </li>
                <li>Review the owner’s cancellation policy.</li>
                <li>
                  Click
                  <span class="bold">Cancel booking</span>.
                </li>
              </ol>

              <span class="bold d-block mt-3">Request a cancellation</span>
              <p>
                If you follow the steps above and see
                <span class="bold">Request cancellation</span>, the property
                owner or manager will need to process the cancellation after you
                submit. If you don't hear from them within 24 hours of your
                initial request or don't see an option to cancel your booking or
                request a cancellation, please contact the property owner or
                manager directly.
              </p>
              <span class="bold d-block mt-3">How refunds work</span>
              <p>
                Refunds are issued in accordance with the terms and conditions
                of the property’s cancellation policy. If you cancel and receive
                a full refund, the service fee we charge will be refunded to you
                automatically.
              </p>
              <p>
                If a booking was charged in a different currency, the payment
                and refund totals may vary based on currency exchange rates and
                bank-issued exchange fees. Your refund will be sent to the
                original form of payment. If that account is closed, please
                contact your financial institution.
              </p>
              <span class="bold d-block mt-3"
                >Canceling your travel protection products</span
              >
              <p>
                If you have canceled a trip that you purchased damage protection
                or travel insurance for, please contact CSA Travel Protection
                directly regarding a refund of either plan. Contact information
                for CSA is in the email you received from them after purchasing
                one of their plans.
              </p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <h2 class="mb-0">
              <button
                class="btn btn-block text-left collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseFour"
              >
                What Stay Taxes/Lodging Taxes do you collect and remit?
              </button>
            </h2>
          </div>
          <div
            id="collapseFour"
            class="collapse"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              <p>
                We collect lodging taxes from travelers in jurisdictions where
                we are required by law or an agreement. In those areas, taxes
                are remitted by us to the jurisdiction.
              </p>
              <p>
                In some cases, we may also display lodging taxes for a traveler
                to see in connection with the transaction. Those taxes are sent
                to you and it is your obligation to remit the taxes to the
                appropriate jurisdiction.
              </p>

              <p>
                In your account with us, you can view the following information
                about lodging taxes:
              </p>
              <ul>
                <li>The jurisdiction(s) in which we are collecting taxes</li>
                <li>The rate of tax charged to the traveler</li>
                <li>What items are taxable</li>
              </ul>
              <p>
                To determine if we collect and remit Lodging Tax for a specific
                property:
              </p>
              <ul>
                <li>Log into your account.</li>
                <li>
                  Click the
                  <span class="bold">Property</span> icon to expand the left
                  navigation menu.
                </li>
                <li>
                  Click
                  <span class="bold">Rules and policies</span>.
                </li>
                <li>
                  Click
                  <span class="bold">Taxes</span>. You will see here what taxes
                  we are collecting for your listing.
                </li>
              </ul>
              <p>
                <span class="bold">Important:</span> In some areas, tax
                authorities (city, county, state and/or country) may impose
                additional taxes that are not being collected and remitted by
                us. In addition, you remain obligated to collect and remit
                Lodging Taxes where bookings are made offline, and not through
                our platform. Property owners are responsible for understanding
                their tax obligations. Check with your local authorities for
                more information about the requirements in your area.
              </p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <h2 class="mb-0">
              <button
                class="btn btn-block text-left collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseFive"
              >
                Who do I contact if I have questions about my reservation or
                need to modify it?
              </button>
            </h2>
          </div>
          <div
            id="collapseFive"
            class="collapse"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              <p>
                You can access your Traveler Account to view the details of your
                booking. Details may include your booking number, cancellation
                policy, property information, and safety information. When
                partners have provided check-in details or information about the
                area, it will be available as well.
              </p>
              <p>
                You will need to contact the owner or manager of the property if
                the answer is not available in your account. If you need to
                modify your confirmed booking, you should contact them as well.
                To cancel your booking, refer to the related article.
              </p>
              <p>
                If you booked through a partner that uses external software or
                if you booked outside of our system, your reservation may not
                appear. In this situation, try contacting the owner or manager
                of the property by replying to the emails you received. You can
                also contact Customer Support for help.
              </p>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="card-header">
            <h2 class="mb-0">
              <button
                class="btn btn-block text-left collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#collapseSix"
              >
                How do I pay securely for a vacation rental?
              </button>
            </h2>
          </div>
          <div
            id="collapseSix"
            class="collapse"
            data-parent="#accordionExample"
          >
            <div class="card-body">
              <p>
                Paying with a credit card on our site is the most secure way to
                book a vacation rental.
              </p>
              <p>
                Properties with
                <span class="bold">24 Hour Confirmation</span> or
                <span class="bold">Instant Book</span> allow you to book and pay
                right away. With either booking type, you will be entering your
                payment information on our site at checkout. We use encryption
                and advanced patented tokenization services to protect your
                transaction. When you book and pay through our payment system,
                you are eligible for the
                <a href="javascript:void(0)" class="animated-anchor"
                  >Book with Confidence Guarantee</a
                >.
              </p>
              <p>
                Payments made outside of our checkout form or site will not be
                eligible for our Book with Confidence Guarantee.
              </p>
              <p>
                When you are ready to make a payment, carefully review any
                rental agreement provided. Each property has its own
                cancellation policies and house rules.
              </p>
              <h5>Avoid the following practices</h5>
              <ul>
                <li>Sending cash.</li>
                <li>Sending a check.</li>
                <li>
                  Using an instant money transfer (Western Union or MoneyGram.)
                </li>
              </ul>
              <p>
                Criminals prefer these payment methods and using them voids any
                guarantees from us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </MainContentWraper>
  </div>
</template>

<script>
  import Hero from "@/components/Hero.vue";
  import MainContentWraper from "@/components/Main/ContentWrapper.vue";

  export default {
    name: "Help",
    components: {
      Hero,
      MainContentWraper,
    },
  };
</script>

<style scoped lang="scss">
  .accordion .btn[data-toggle="collapse"] {
    box-shadow: none !important;
    outline: none !important;
    font-weight: bold;
  }
</style>
