
const app = new Vue({
    el:"#root",
    data:{
        userEmail:null,
    },
    methods:{
        generateRandomEmails(){
            console.log('Salve');
            axions.get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then((resp)=>{ 
                this.userEmail = resp.data.response;
            })

        },  
    }
});