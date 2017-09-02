angular.
	module('phonecatApp').
	component('phoneList',{
		template:
			'<ul>'+
				'<li ng=repeat="phone in $ctrl.phones">'+
					'<span>{{phone.account}}</span>'+
					'<p>{{phone.name}}</p>'+
				'</li>'+
			'</ul>',
		controller: function PhoneListController(){
			this.phones=[
			{
				account:'TuNQ1',
				name:'Nguyen Quang Tu'
			},
			{
				account:'HieuNP1',
				name:'Nguyen Phuong Hieu'
			},
			{
				account:'AnNV13'
				name:'Nguyen Van An'
			},
			{
				account:'MinhNH20',
				name:'Nguyen Hong Minh'
			}
			];
		}
	});