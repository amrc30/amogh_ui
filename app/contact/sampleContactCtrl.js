'use strict';

app.controller('sampleContactCtrl', [
    '$stateParams',
    '$http',
    '$scope',
    sampleContactCtrl]);

function sampleContactCtrl($stateParams, $http, $scope) {
    $scope.options = {
        chart: {
            type: 'discreteBarChart',
            height: 450,
            margin : {
                top: 20,
                right: 20,
                bottom: 50,
                left: 55
            },
            x: function(d){return d.label;},
            y: function(d){return d.value;},
            showValues: true,
            valueFormat: function(d){
                return d3.format(',.4f')(d);
            },
            duration: 500,
            xAxis: {
                axisLabel: 'X Axis'
            },
            yAxis: {
                axisLabel: 'Y Axis',
                axisLabelDistance: -10
            }
        }
    };

    $scope.data = [
        {
            key: "Cumulative Return",
            values: [
            ]
        }
    ]

    function getTrim(value){
        var a= value.slice(0,4);
        var b= value.slice(value.indexOf('-')+1, value.indexOf('-')+5)
        var c= a+'-'+b;
        return c;
        }
    $http.get('../response.json').then((response) => {
        $scope.info = response.data;
        $scope.obj = response.data.filter(obj => obj.cid === $stateParams.cid)

      
        if ($scope.obj[0].freqCount) {
            angular.forEach($scope.obj[0].freqCount,function(value,key){
                var obj={};   
                obj.label=key;
                obj.value=value;
                $scope.data[0].values.push(obj);
                obj={};
               });
        }
        else if ($scope.obj[0].graph) {
            angular.forEach($scope.obj[0].graph,function(value,key){
                var obj={};   
                obj.label=getTrim(key);
                obj.value=value;
                $scope.data[0].values.push(obj);
                obj={};
               });
        }
    })


}