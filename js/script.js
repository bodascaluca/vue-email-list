
// const app = new Vue({
//     el:"#root",
//     data:{
//         userEmail:[],
//     },
//     mounted(){
//         this.generateRandomEmails()
//     },
//     methods:{
//         generateRandomEmails(){
//             console.log('Salve');
//             for(let i = 0; i < 10; i++){
//                 axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
//                 .then((resp)=>{ 
//                     this.userEmail.push(resp.data.response);
//                 });
//             }

//         },  
//     }
// });

const app = new Vue({
    el:"#root",
    data:{
        userEmail:[],
    },
    created(){
            for(let i = 0; i < 10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                .then((resp)=>{ 
                    this.userEmail.push(resp.data.response);
                });
            } 
    },
    
});

