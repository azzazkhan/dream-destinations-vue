let app = new Vue({
  el: "#app",
  data() {
    return {
      search: {
        input_holder: "",
        loading: false,
        arrival: "",
        departure: "",
        guests: {
          adults: 0,
          children: 0,
          pets: false,
        },
        matched: [],
        records: [],
      },
      auth: {
        email: "",
      },
    };
  },
  computed: {
    total_guests() {
      // Nothing goes on whithout adults.
      if (this.search.guests.adults <= 0) return;

      let _total_guests =
        this.search.guests.adults + this.search.guests.children;
      let _pets = this.search.guests.pets ? ", Pets" : "";

      return `${_total_guests} Guests` + _pets;
    },
  },
  methods: {
    filter_location() {
      this.search.loading = true;
      let typed_location = this.search.input_holder;
      let filtered_places = this.search.records.filter(place => {
        return (
          place.name.toLowerCase().search(typed_location.toLowerCase()) != -1
        );
      });
      this.search.matched = filtered_places.splice(4, filtered_places.length);
      setTimeout(() => {
        this.search.loading = false;
      }, 500);
    },
    add_adult() {
      if (this.search.guests.adults >= 20) return;
      this.search.guests.adults++;
    },
    remove_adult() {
      if (this.search.guests.adults < 1) this.search.guests.adults = 1;
      this.search.guests.adults--;
    },
    add_child() {
      if (this.search.guests.children >= 20) return;
      this.search.guests.children++;
    },
    remove_child() {
      if (this.search.guests.children < 1) this.search.guests.children = 1;
      this.search.guests.children--;
    },
    select_place(place) {
      this.search.input_holder = place;
    },
  },
});
