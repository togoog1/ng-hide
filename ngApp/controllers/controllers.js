var myapp;
(function (myapp) {
    var Controllers;
    (function (Controllers) {
        var LoginController = (function () {
            function LoginController(userService, $window, $state) {
                this.userService = userService;
                this.$window = $window;
                this.$state = $state;
            }
            LoginController.prototype.login = function () {
                if (this.isAdmin === true) {
                    this.userInfo.role = 'admin';
                    this.createSession();
                }
                else {
                    this.userInfo.role = 'guest';
                    this.createSession();
                }
            };
            LoginController.prototype.createSession = function () {
                var _this = this;
                this.userService.loginUser(this.userInfo).then(function (data) {
                    _this.$window.localStorage.setItem("token", JSON.stringify(data.token));
                    _this.$state.go('home');
                });
            };
            return LoginController;
        }());
        Controllers.LoginController = LoginController;
        var RegisterController = (function () {
            function RegisterController(userService) {
                this.userService = userService;
            }
            RegisterController.prototype.signup = function () {
                this.userService.registerUser(this.user).then(function () {
                    alert('signup successful, please login');
                });
            };
            return RegisterController;
        }());
        Controllers.RegisterController = RegisterController;
        var HomeController = (function () {
            function HomeController() {
                var token = window.localStorage['token'];
                if (token) {
                    this.payload = JSON.parse(window.atob(token.split('.')[1]));
                    console.log(this.payload);
                }
                var test = this.payload.role;
                if (test === 'admin') {
                    this.isAdmin = true;
                    console.log("admin");
                }
                else {
                    this.isAdmin = false;
                    console.log("guest");
                }
            }
            HomeController.prototype.create = function () {
                if (this.payload.role === 'admin') {
                    alert('Success!');
                }
                else {
                    alert('Denied. admins only.');
                }
            };
            HomeController.prototype.read = function () {
                alert('Success!');
            };
            HomeController.prototype.update = function () {
                if (this.payload.role === 'admin') {
                    alert('Success!');
                }
                else {
                    alert('Denied. admins only.');
                }
            };
            HomeController.prototype.delete = function () {
                if (this.payload.role === 'admin') {
                    alert('Success!');
                }
                else {
                    alert('Denied. admins only.');
                }
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
    })(Controllers = myapp.Controllers || (myapp.Controllers = {}));
})(myapp || (myapp = {}));
