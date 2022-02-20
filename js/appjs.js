Vue.component("coinDetail", {
    props: ["coin"],
    data() {
        return {
            showprices: false,
            value: 0,
        }

    },
    methods: {
        togleshowprices() {
            this.showprices = !this.showprices

            this.$emit("change-color",
                this.showprices ? "FF96C8" : "3D3D3D")

        }
    },
    computed: {
        title() {
            return `${this.coin.Name} - ${this.coin.symbol}`
        },
        convertedvalue() {
            if (!this.value) {
                return 0
            }

            return this.value / this.coin.price
        },
    },

    created() {
        console.log("created.coinDetail...")
    },

    mounted() {
        console.log("mounted.coinDetail...")
    },




    template: `
    <div>
      <img
        v-on:mouseover="togleshowprices"
        v-on:mouseout="togleshowp0rices"
        v-bind:src="logo.jpg"  v-bind:alt="coin.Name" width="100">

      <h1 v-bind:class="coin.changerpercent > 0 ? 'green' : 'red' ">
       {{ title }}

        <span v-if="coin.changerpercent > 0"> tienes billete</span>
        <span v-else-if="coin.changerpercent < 0"> pelando</span>
        <span v-else>nada  te jodiste</span>

        <span v-on:click="togleshowprices"> {{ showprices ? "hola" : "puto" }} </span>
      </h1>

      <input type="number" v-model="value">
        <span> {{ convertedvalue }} </span>

        <slot name="text"></slot>
        <slot name="link"></slot>

      <ul v-show=showprices>
      <li
        class="uppercase"
        v-bind:class="{ red: p.value === coin.price, green: p.value < coin.price, grey: p.value > coin.price }"
        v-for="(p, i ) in coin.pricesWithDays" v-bind:key="p.day" >
        {{ i }} - {{ p.day }} - {{ p.value }}
     </li>
     </ul>

    </div>       
    `

})

let app = new Vue({
    el: "#app",
    data: {
        Btc: {
            Name: "Bitcoin",
            symbol: "BTC",
            img: "logo.jpg",
            changerpercent: -1,
            price: 8400,
            pricesWithDays: [
                { day: "lunes", value: 8400 },
                { day: "martes", value: 7900 },
                { day: "miercoles", value: 9000 },
                { day: "jueves", value: 9400 },
                { day: "viernes", value: 10000 },
                { day: "sabado", value: 10200 },
                { day: "domigo", value: 8100 },
            ],
        },

        color: "f4f4f4"

    },

    created() {
        console.log("created...")
    },

    mounted() {
        console.log("mounted...")
    },

    methods: {
        updatecolor(color) {

            this.color = color || this.color
                .split('')
                .reverse()
                .join('')
        }
    }
})

