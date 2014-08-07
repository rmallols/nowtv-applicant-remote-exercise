describe('hello world service', function () {

    var helloWorldService;

    beforeEach(module('app'));
    beforeEach(inject(['$controller', '$rootScope', '$compile', 'helloWorld',
        function ($controller, $rootScope, $compile, helloWorld_) {

            helloWorldService = helloWorld_;
        }]));

    iit('should attach a list of awesomeThings to the scope', function () {
        expect(helloWorldService.getMessage()).toBe('Hello World!');
    });
});