const { createApp } = Vue;

const app = createApp({
    data() {
        return {
            listaUtenti: []
        };
    },
    methods: {
        fetchData() {
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
                .then((response) => {
                    console.log(response);
                    console.log(response.data);
                    this.listaUtenti.push(response.data);
                });
        },

        stampaEmail() {
            for (let i = 0; i < 10; i++) {
                this.fetchData()
            }
            console.log(this.listaUtenti)

        }
    },
    mounted() {
        this.stampaEmail()
    }
}).mount('#app');