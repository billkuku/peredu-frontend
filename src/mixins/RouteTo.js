export default {
    methods: {
        clickCreateExperience() {
          if(this.authenticated){
            // this.$router.replace({ path: '/experiences/edit'})
            alert('Use search bar find a project, after find the corresponding project, you will see the star icon of the rating on the project page')
          } else {
            this.$router.replace({path: '/signin'})
          }
        },
        clickCreateProject() {
          if(this.authenticated){
            this.$router.replace({ path: '/projects/edit'})
          } else {
            this.$router.replace({path: '/signin'})
          }
        },
        clickToProjectList(){
          if(this.authenticated){
            this.$router.replace({ path: '/projects/edit'})
          } else {
            this.$router.replace({path: '/signin'})
          }
        }
      }
}