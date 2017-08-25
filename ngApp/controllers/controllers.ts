namespace myapp.Controllers {

    export class LoginController {
      public userInfo
      public isAdmin

      public login() {
        if(this.isAdmin === true) {
          this.userInfo.role = 'admin';
          this.createSession();
        } else {
          this.userInfo.role = 'guest';
          this.createSession();
        }
      }

      public createSession() {
        this.userService.loginUser(this.userInfo).then((data) => {
          this.$window.localStorage.setItem("token", JSON.stringify(data.token));
          this.$state.go('home');
        })
      }

      public constructor(
        private userService,
        public $window,
        public $state
      ) {

      }
    }

    export class RegisterController {
      public user

      public signup() {
        this.userService.registerUser(this.user).then(() => {
          alert('signup successful, please login');
        })
      }

      public constructor(
        private userService
      ) {

      }
    }

    export class HomeController {
      public payload
        public isAdmin

      public create() {
        if(this.payload.role === 'admin') {
          alert('Success!');
        } else {
          alert('Denied. admins only.')
        }
      }

      public read() {
        alert('Success!');
      }

      public update() {
        if(this.payload.role === 'admin') {
          alert('Success!');
        } else {
          alert('Denied. admins only.')
        }
      }

      public delete() {
        if(this.payload.role === 'admin') {
          alert('Success!');
        } else {
          alert('Denied. admins only.')
        }
      }

      constructor() {
        let token = window.localStorage['token'];

        if(token) {
          this.payload = JSON.parse(window.atob(token.split('.')[1]));
          console.log(this.payload);
        }
        let test=this.payload.role
  if(test === 'admin'){
    this.isAdmin=true
    console.log("admin")
    }
    else{
      this.isAdmin=false
      console.log("guest")
    }

      }
    }

}
