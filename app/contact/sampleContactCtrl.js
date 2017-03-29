'use strict';

app.controller('sampleContactCtrl', [
    'pocRestangularService',
    '$http', 
    '$scope',
    sampleContactCtrl]);

function sampleContactCtrl(pocRestangularService, $http, $scope) {
    //Initializing variables
    var vm = this;
    vm.firstName = '';
    vm.lastName = '';
    vm.email = '';
    vm.phone = '';
    vm.api_key = 'amogh.ui@gmail.com';
    vm.users = [];
    var user = {};
    var finalObj = {};
        var values = [];
    var a=0; var b=0; var c=0; var d=0; var e=0; var f=0; var g=0; var h=0; var p=0; var j=0; var k=0; var l=0; var m=0; var n=0; var o=0;    
    //Getting data from the server 

    
        $http.get('http://hire.lcdevelopment.com/api/users?api_key='+ vm.api_key).then(function (response){
    
         var arrayNum = [];
        var modArray = [];
        var finalArray = [];       
        vm.users = response.data.users;
        //data for line graph
        for (var i = 0; i < vm.users.length; i++) {
            arrayNum.push(vm.users[i].email.length);//pushing an array of number of chars in the email
        }
        modArray = _.countBy(arrayNum, _.identity);//getting the number of users with same number of chars in the email
        for (var key in modArray) {
            finalArray.push({ x: parseInt(key), y: modArray[key] });//passing x and y values to an array
        }
        $scope.data = sinAndCos(finalArray);
        //data for bar graph
        var arr1 = [];
        var arr2 = [];
         $scope.finalArr =[
    {
      key: "Cumulative Return",
      values:[
            { 
                label:'NJ', 
                value: a   
            },
            {
                label:'AR',
                value: b
            },
            {
                label:'CA',
                value: c
            },
            {
                label:'TX',
                value: d
            },
            {
                label:'DE',
                value: e
            },
            {
                label:'CO',
                value: f
            },
            {
                label:'WY',
                value: g
            },
            {
                label:'KY',
                value: h
            },
            {
                label:'WI',
                value: p
            },
            {
                label:'MT',
                value: j
            },
            {
                label:'OR',
                value: k
            },
            {
                label:'NM',
                value: l
            },
            {
                label:'NY',
                value: m
            },
            {
                label:'NH',
                value: n
            },
            {
                label:'ND',
                value: o
            }
            ]
    }
    ] 

        for (var i = 0; i < vm.users.length; i++) {
            arr1.push(vm.users[i].phone);          //pushing phone numbers to an array
        }
        for (var i = 0; i < vm.users.length; i++) {
            arr2.push(parseInt(arr1[i].substring(0, 3))); // pushing first 3 digits to an array
        }
        
        var areaCode = {
            'NJ': 201,
            'AR': 476,
            'CA': 213,
            'TX': 214,
            'DE': 302,
            'CO': 303,
            'WY': 307,
            'KY': 327,
            'WI': 353,
            'MT': 406,
            'OR': 503,
            'NM': 505,
            'NY': 518,
            'NH': 603,
            'ND': 701
        };                                     //areas with area codes
        
        
        //checking if first 3 digits is equal to area code, according updating a counter
         for (var i = 0; i < arr2.length; i++) {
            for (var key in areaCode) {
               if (arr2[i] === areaCode[key]) {
                   for(var j=0; j<$scope.finalArr[0].values.length; j++){
                        if(key === $scope.finalArr[0].values[j].label)
                        $scope.finalArr[0].values[j].value += 1;
                        // if (finalObj[key] === undefined || finalObj[key] === null) {
                        //     finalObj[key] = 1
                        // } else {
                        //     finalObj[key] = finalObj[key] + 1;
                        // }
                   }  
                }
            }    
        }        

     })       
   


    //options for line graph
    $scope.options = {
        chart: {
            type: 'lineChart',
            height: 450,
            margin: {
                top: 40,
                right: 90,
                bottom: 40,
                left: 90
            },
            x: function (d) { return d.x; },
            y: function (d) { return d.y; },
            useInteractiveGuideline: true,
            dispatch: {
                stateChange: function (e) { console.log("stateChange"); },
                changeState: function (e) { console.log("changeState"); },
                tooltipShow: function (e) { console.log("tooltipShow"); },
                tooltipHide: function (e) { console.log("tooltipHide"); }
            },
            xAxis: {
                axisLabel: 'Number of characters in the email'
            },
            yAxis: {
                axisLabel: 'Number of users',
                tickFormat: function (d) {
                    return d3.format('.02f')(d);
                },
                axisLabelDistance: -10
            },
            callback: function (chart) {
                console.log("!!! lineChart callback !!!");
            }
        },
        title: {
            enable: false,
            text: 'Line Chart for number of users v/s number of characters in their email id'
        },
        subtitle: {
            enable: false,
            text: 'Subtitle for simple line chart. Lorem ipsum dolor sit amet, at eam blandit sadipscing, vim adhuc sanctus disputando ex, cu usu affert alienum urbanitas.',
            css: {
                'text-align': 'center',
                'margin': '10px 13px 0px 7px'
            }
        },
        caption: {
            enable: true,
            html: '<b>Figure 1.</b> Graph showing the number of users with their number of characters of email id.',
            css: {
                'text-align': 'center',
                'margin': '10px 13px 0px 7px'
            }
        }
    };

    //         /*Random Data Generator */
    function sinAndCos(finalArray) {
        var sin = finalArray;

        //             //Line chart data should be sent as an array of series objects.
        return [
            {
                values: sin,      //values - represents the array of {x,y} data points
                key: 'Number of users versus their emial info', //key  - the name of the series.
                color: '#ff7f0e'  //color - optional: choose your own line color.
            }
        ];
    }

    //options for bar graph
    $scope.details = {
        chart: {
            type: 'discreteBarChart',
            height: 450,
            margin: {
                top: 40,
                right: 90,
                bottom: 40,
                left: 90
            },
            x: function (d) { return d.label; },
            y: function (d) { return d.value; },
            showValues: true,
            valueFormat: function (d) {
                return d3.format(',.4f')(d);
            },
            duration: 500,
            xAxis: {
                axisLabel: 'Areas'
            },
            yAxis: {
                axisLabel: 'Number of users',
                axisLabelDistance: -10
            },
        }
    };

    // to post data
    vm.save = function () {
        var user = {};
        
        user.api_key = vm.api_key;
        user.first_name = vm.firstName;
        user.last_name = vm.lastName;
        user.email = vm.email;
        user.phone = vm.phone;
        $http({method: 'POST',url:'http://hire.lcdevelopment.com/api/user/add', data:user}).then( function (response) {
            vm.users.push(response.data.user);
        })
        vm.reset();
    };
    //to delete all the users
    vm.delete = function () {
            // $http({method: 'DELETE',url:'http://hire.lcdevelopment.com/api/reset'}).then(function (response){
            // delete response.data.users;
            delete vm.users;
            
    }
    // to clear the form
    vm.reset = function () {
        vm.firstName = '';
        vm.lastName = '';
        vm.email = '';
        vm.phone = '';
    };
}



