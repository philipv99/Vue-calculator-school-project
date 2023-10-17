Vue.createApp({
   data(){
      return{
         number1: 1,
         number2: 2,
         result: 0,
         operation: 1
      };
   },
   methods: {
      calcNumbers(){
         if (this.operation == 1){
            this.result = this.number1 + this.number2 
         }
         if (this.operation == 2){
            this.result = this.number1 - this.number2 
         }
         if (this.operation == 3){
            this.result = this.number1 * this.number2 
         }
         if (this.operation == 4){
            this.result = this.number1 / this.number2 
         }
         if (this.operation == 5){
            this.result = Math.pow(this.number1, this.number2)
         }
      }
   }
}).mount("#app")