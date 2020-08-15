let app = new Vue({
	el: '#app',
	data() {
		return {
			search: {
				input_holder: '',
				loading: false,
				arrival: '',
				departure: '',
				guests: {
					adults: 0,
					children: 0,
					pets: false,
				},
				matched: [],
				records: [
					{
						name: 'Amparo Hotel',
						location: 'San Miquel De Allende, Mexico',
						type: 'Landmark',
					},
					{
						name: 'Baron Resort',
						location: 'South Sinai, Egypt',
						type: 'Landmark',
					},
					{
						name: 'Capella Ubud',
						location: 'Bali, Indonesia',
						type: 'Landmark',
					},
					{ name: 'Dusit Thani', location: 'Abu Dhabi, UAE', type: 'Landmark' },
					{
						name: 'Equarius Hotel',
						location: 'Sentosa Island, Singapore',
						type: 'Landmark',
					},
					{
						name: 'Fogo Island Inn',
						location: 'NewFoundLand, Canada',
						type: 'Landmark',
					},
					{
						name: 'Grand-Hotel Du Cap-Ferrat',
						location: 'Saint-Jean-Cap-Ferrat, France',
						type: 'Landmark',
					},
					{
						name: 'Hilton Auckland',
						location: 'Auckland CBD, New Zealand ',
						type: 'Landmark',
					},
					{
						name: 'Intercontinental Paris',
						location: 'Paris, France',
						type: 'Landmark',
					},
					{
						name: 'Jatiuca Resort ',
						location: 'Maceio, Brazil ',
						type: 'Landmark',
					},
					{
						name: 'Kimpton Fitzroy Hotel',
						location: 'London, UK',
						type: 'Landmark',
					},
					{
						name: 'Lake Hawea Hotel',
						location: 'Lake Hawea, New Zealand',
						type: 'Landmark',
					},
					{
						name: 'Mayfair Hotel',
						location: 'Adelaide, Australia',
						type: 'Landmark',
					},
					{
						name: 'Novosibirsk Marriott Hotel',
						location: 'Novosibirsk, Russia',
						type: 'Landmark',
					},
					{
						name: 'Ouro Minas Palace Hotel',
						location: 'Belo Horizonte, Brazil',
						type: 'Landmark',
					},
					{
						name: 'Primus Hotel ',
						location: 'Sydney, Australia',
						type: 'Landmark',
					},
					{
						name: 'Quest Moorabbin Serviced Apartment',
						location: 'Heatherton, Australia',
						type: 'Landmark',
					},
					{
						name: 'Sheraton Pretoria Hotel',
						location: 'Pretoria, South Africa',
						type: 'Landmark',
					},
					{ name: 'Twin Farms', location: 'Barnard, USA', type: 'Landmark' },
					{ name: 'UNA Hotel', location: 'Brighton, UK', type: 'Landmark' },
					{
						name: 'Vysotskiy Hotel',
						location: 'Yekaterinburg, Russia',
						type: 'Landmark',
					},
					{
						name: 'Wentworth Mansion ',
						location: 'Mendoza, Argentina ',
						type: 'Landmark',
					},
					{
						name: "Xender's Resort",
						location: 'Amsterdam, Netherlands',
						type: 'Landmark',
					},
					{
						name: 'Yotel Alcudia',
						location: 'Alcudia, Spain',
						type: 'Landmark',
					},
					{
						name: 'Zafiro Palace',
						location: 'Charleston, USA',
						type: 'Landmark',
					},
				],
			},
			auth: {
				email: '',
			},
		}
	},
	computed: {
		total_guests() {
			// Nothing goes on whithout adults.
			if (this.search.guests.adults <= 0) return

			let _total_guests =
				this.search.guests.adults + this.search.guests.children
			let _pets = this.search.guests.pets ? ', Pets' : ''

			return `${_total_guests} Guests` + _pets
		},
	},
	methods: {
		filter_location() {
			this.search.loading = true
			let typed_location = this.search.input_holder
			let filtered_places = this.search.records.filter((place) => {
				return (
					place.name.toLowerCase().search(typed_location.toLowerCase()) != -1
				)
			})
			this.search.matched = filtered_places.splice(4, filtered_places.length)
			setTimeout(() => {
				this.search.loading = false
			}, 500)
		},
		add_adult() {
			if (this.search.guests.adults >= 20) return
			this.search.guests.adults++
		},
		remove_adult() {
			if (this.search.guests.adults < 1) this.search.guests.adults = 1
			this.search.guests.adults--
		},
		add_child() {
			if (this.search.guests.children >= 20) return
			this.search.guests.children++
		},
		remove_child() {
			if (this.search.guests.children < 1) this.search.guests.children = 1
			this.search.guests.children--
		},
		select_place(place) {
			this.search.input_holder = place
		},
	},
})
