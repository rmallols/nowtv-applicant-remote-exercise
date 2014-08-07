app.controller('RegisterCtrl', ['$http', function ($http) {

    $http.post('/rest/register', { email: 'foo@bar.com' }).then(
        function (response) {
            console.log('SUCCESS', response);
        },
        function(response) {
            console.log('FAILURE', response);
        });
}]);