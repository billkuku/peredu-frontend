export default {
    data() {
        return {
            remaincharactersText:"",
            remainCharacters: 0
        }
    },
    methods: {
        charCount (message, maxlength){
            this.remaincharactersText = maxlength
            this.remainCharacters = message.length
            if(message.length > maxlength){
                this.remaincharactersText = "Exceeded "+maxlength+" characters limit.";
            }else{
                var remainCharacters = maxlength - message.length;
                this.remaincharactersText = remainCharacters + "/"+ maxlength;
            }
        }
    }
}
