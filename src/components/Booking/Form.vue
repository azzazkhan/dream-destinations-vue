<template>
  <form
    action="#"
    class="BookingFormComponent booking-form d-lg-flex justify-content-between"
    method="GET"
    @submit.prevent
  >
    <div class="field-wrapper has-selection-box location">
      <span class="icon">
        <svg
          focusable="false"
          data-id="SVG_LOCATION__24"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path
              d="M6.45 13.47a6.75 6.75 0 0 1 .73-8.7l.05-.04a6.75 6.75 0 0 1 9.54 0l.05.05a6.75 6.75 0 0 1 .73 8.7L12 21.24l-5.55-7.78z"
            />
            <path
              d="M14.24 9.55a2.24 2.24 0 1 1-4.48 0 2.24 2.24 0 0 1 4.48 0z"
            />
          </g>
        </svg>
      </span>
      <input
        v-model="location.entry"
        type="text"
        class="trigger-selection"
        name="destination"
        placeholder="Where do you want to go?"
        autocomplete="off"
      />
      <BookingPopup
        :input="{ placeholder: 'Where do you want to go?' }"
        :loading="location.loading"
        @input-updated="update_location($event)"
      >
        <LocationsList :places="location_data" :full-view="true" />
      </BookingPopup>
    </div>
    <div class="field-wrapper date d-flex justify-content-between">
      <div class="input-wrapper arrival">
        <span class="icon">
          <svg
            focusable="false"
            data-id="SVG_CHECK_IN__24"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g fill="none" fill-rule="evenodd">
              <path
                fill="currentColor"
                stroke="none"
                d="M15.6 18.1h2.5v-2.5h-2.5zM11.1 18.1h2.5v-2.5h-2.5zM6.6 18.1h2.5v-2.5H6.6z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.6 13H8V8.6"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.6 8.6L7.8 13m-4.2 2.5V19c0 .8.7 1.5 1.5 1.5h15.3V6.1c0-.8-.6-1.5-1.5-1.5H3.6"
              />
              <path
                fill="currentColor"
                stroke="none"
                d="M15.6 13.1h2.5v-2.5h-2.5z"
              />
              <path
                fill="currentColor"
                stroke="none"
                d="M15.6 13.1h2.5v-2.5h-2.5zM11.1 13.1h2.5v-2.5h-2.5z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7.6 2.6v2m9-2v2m3.6 4h-9.6"
              />
            </g>
          </svg>
        </span>
        <input
          type="date"
          name="arrival"
          :min="`${date.year}-${date.month}-${date.date}`"
          :value="`${date.year}-${date.month}-${date.date}`"
          placeholder="Arrival"
          @keydown.prevent
        />
      </div>
      <div class="input-wrapper departure">
        <span class="icon">
          <svg
            focusable="false"
            data-id="SVG_CHECK_OUT__24"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <g fill="none" fill-rule="evenodd">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16 8.6h4.4v3.8"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16 13l4.4-4.2m0 6.6v5.2H5.1c-.8 0-1.5-.7-1.5-1.5V4.6h16.8"
              />
              <path
                fill="currentColor"
                stroke="none"
                d="M6.6 13.1h2.5v-2.5H6.6zM6.6 18.1h2.5v-2.5H6.6zM11 18.1h2.5v-2.5H11zM15.6 18.1h2.5v-2.5h-2.5z"
              />
              <path
                fill="currentColor"
                stroke="none"
                d="M6.6 13.1h2.5v-2.5H6.6zM11 13.1h2.5v-2.5H11z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.6 2.6v2m-9-2v2m-4 4h8.8"
              />
            </g>
          </svg>
        </span>
        <input
          type="date"
          name="departure"
          :min="`${date.year}-${date.month}-${date.date}`"
          :max="`${date.year}-12-31`"
          :value="`${date.year}-${date.month}-${date.date}`"
          placeholder="Depart"
          @keydown.prevent
        />
      </div>
    </div>
    <div class="field-wrapper has-selection-box guests">
      <span class="icon">
        <svg
          focusable="false"
          data-id="SVG_GROUP__24"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <g fill="none" stroke-linecap="round">
            <path
              d="M2 19.835a18.625 18.625 0 0 0 7.113 1.415 18.613 18.613 0 0 0 7.114-1.415M22.623 16.849c-.943.39-1.917.7-2.91.926M16.227 19.737a7.108 7.108 0 0 0-2.083-5.03 7.15 7.15 0 0 0-2.308-1.542 7.139 7.139 0 0 0-2.722-.54c-.466 0-.931.045-1.388.135a7.162 7.162 0 0 0-2.564 1.062 7.084 7.084 0 0 0-1.963 1.963c-.259.388-.479.8-.658 1.23A7.108 7.108 0 0 0 2 19.737M12.416 9.324a3.3 3.3 0 0 1-3.299 3.3H9.11a3.299 3.299 0 0 1-3.298-3.3V8.5c0-1.822 1.476-3.3 3.299-3.3h.008a3.3 3.3 0 0 1 3.298 3.3v.824zM15.72 9.95c1.995 0 3.974.86 5.338 2.523a6.872 6.872 0 0 1 1.565 4.375M15.72 9.95h.007a3.2 3.2 0 0 0 3.2-3.2v-.8a3.2 3.2 0 0 0-3.2-3.2h-.007c-.949 0-1.8.413-2.388 1.068"
            />
          </g>
        </svg>
      </span>
      <input
        v-model="guests"
        type="text"
        class="trigger-selection"
        name="guests"
        placeholder="Guests"
        readonly
      />
      <BookingPopup title="Select Guests" :dismiss-button="true">
        <GuestsWidget @updated="update_guests($event)" />
      </BookingPopup>
    </div>
    <div class="field-wrapper submit">
      <button type="submit" class="custom-btn blue">
        <span class="icon">
          <svg
            focusable="false"
            data-id="SVG_SEARCH__24"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.7 13.2a6.5 6.5 0 1 0-1.4 2m0 0l4.6 4.6"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </span>
        Search
      </button>
    </div>
  </form>
</template>

<script>
  import BookingPopup from "./Popup.vue";
  import LocationsList from "./LocationsList.vue";
  import GuestsWidget from "./GuestsWidget.vue";

  import Locations from "@/data/locations.json";

  export default {
    name: "BookingForm",
    components: {
      BookingPopup,
      LocationsList,
      GuestsWidget,
    },
    data() {
      return {
        location: {
          entry: "",
          loading: false,
        },
        guests: "",
        location_data: [],
        filtered_locations: [],
        date: {
          year: this.get_year().toString(),
          month: (this.get_month() < 10
            ? "0" + this.get_month()
            : this.get_month()
          ).toString(),
          date: (this.get_date() < 10
            ? "0" + this.get_date()
            : this.get_date()
          ).toString(),
        },
      };
    },
    mounted() {
      this.location_data = Locations;
    },
    methods: {
      filter_locations(limit = 0) {
        let { entry } = this.location,
          data = this.location_data;
        let result = data.filter(location => {
          return location.name.toLowerCase().indexOf(entry.toLowerCase()) != -1;
        });
        return limit > 0 ? result.slice(0, limit) : result;
      },
      update_location(name) {
        this.location.entry = name;
      },
      update_guests(guests) {
        this.guests = guests;
      },
      get_date: () => new Date().getDate(),
      get_month: () => new Date().getMonth() + 1,
      get_year: () => new Date().getFullYear(),
    },
  };
</script>

<style
  scoped
  lang="scss"
  src="@/assets/scss/components/bookingForm.scss"
></style>
