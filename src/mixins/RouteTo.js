export default {
    methods: {
        clickCreateExperience() {
          if(this.authenticated){
            // this.$router.replace({ path: '/experiences/edit'})
            alert('Use search bar find a project, after find the corresponding project, you will see the star icon of the rating on the project page')
          } else {
            this.$router.push({path: '/signin'})
          }
        },
        clickCreateProject() {
          if(this.authenticated){
            this.$router.push({ path: '/projects/edit'})
          } else {
            this.$router.push({path: '/signin'})
          }
        },
        clickToProjectList(){
          if(this.authenticated){
            this.$router.replace({ path: '/projects/list'})
          } else {
            this.$router.replace({path: '/signin'})
          }
        },
        clickToExperienceList(){
          if(this.authenticated){
            this.$router.replace({ path: '/experiences/list'})
          } else {
            this.$router.replace({path: '/signin'})
          }
        },
        clickToSetting(){
          if(this.authenticated){
            this.$router.replace({ path: '/account'})
          } else {
            this.$router.replace({path: '/signin'})
          }
        },
        clickToSignin(){
          this.$router.replace({path: '/signin'})
        }
      }
}