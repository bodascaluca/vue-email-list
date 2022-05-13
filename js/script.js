
const app = new Vue({
    el:"#root",
    data:{
        userEmail:"",
    },
    methods:{
        generateRandomEmails(){
            console.log('Salve');
            axions.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((resp)=>{ 

            })

        },
    }
});