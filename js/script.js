const {
    createApp
} = Vue

createApp({
    data(){
        return{
            mailArray : []
        }
    },
    methods: {
        generateMail (){
            if(this.mailArray.length == 10){
                this.mailArray = []
            }

            for(let i = 0; i<10; i++){
                
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
                    console.log(result)
                    this.mailArray.push(result.data.response)
                })

            }
        }
    },
}).mount('#app')