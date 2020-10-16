new Vue({
  el: '#app',
  data() {
    return {

      isFullPage: true,
      isLoading: true,
      location_price: 0,
      menu_price: 0,
      drink_price: 0,
      drink_qty: 0,
      other_item_price: 0,
      cake_price: 0,
      people_size: 1,
      booking: {
        date: "",
        location: "",

        visit: {
          quantity: 0,

          location_budget: [
            {
              id: 0,
              name: "Sunday park",
              price: 5000
            },
            {
              id: 1,
              name: "Ahera Forest Farm",
              price: 5000
            },
            {
              id: 2,
              name: "Other",
              price: 3000
            }
          ],

          food: [
            {
              id: 0,
              name: "Brunch",
              price: 5000
            },
            {
              id: 1,
              name: "Barbecue",
              price: 5000
            },
            {
              id: 2,
              name: "Own Food",
              price: 0
            }
          ],
          drinks:
          {
            item: "",
            price: 0,
            quantity: 0
          },

          other_informations:
            [
              {
                id: 0,
                name: "Photobooth",
                price: 25000,
              },
              {
                id: 1,
                name: "Cookies",
                price: 4000
              },],
          cake:
            [
              {
                id: 0,
                size: "Small",
                price: 10000
              },
              {
                id: 1,
                size: "Medium",
                price: 15000
              },
              {
                id: 2,
                size: "Large",
                price: 25000
              }
            ],


        },
      },
      name: '',
      showWeekNumber: false,
      locale: undefined
    }
  }
  ,
  created() {
    this.isLoading = true,
      setTimeout(() => {
        this.isLoading = false
      }, 1000);
  },
  methods: {
    calculate() {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
      }, 500);
    },
  },
  computed: {
    getTotal() {
      return (this.location_price * this.people_size) + this.menu_price + (this.drink_price * this.drink_qty) + this.other_item_price + this.cake_price
    },

  }

})