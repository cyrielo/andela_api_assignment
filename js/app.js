var worldBankApiModule = function(){
	return {
		init : function(){
			
			var all_countries_api = 'http://api.worldbank.org/countries/?format=json&&per_page=2000';
			$.get(all_countries_api).success(function( response ){
				console.log(response[1]);
				var countrySelect = $('#countrySelect');
				var actual_data = response[1];
				for( var i = 0 ; i < actual_data.length; i++ ){
					countrySelect.append( "<option value='"+ actual_data[i].id +"'>"+ actual_data[i].name +"</option>" );
					//console.log('Hello world');
				}
			});
		},

		loadData : function(country_code){
			
			var link = 
						'http://api.worldbank.org/countries/'+country_code+'/?format=json',
			image_map;

			$.get(link).success(function( response ){

				console.log(response[1]);

				var countrySelect = $('#countrySelect');
				var country_data = response[1];

				console.log( country_data );

				for( var i = 0 ; i < country_data.length; i++ ){
					
					$('#country').html( country_data[i].name );
					$('#income').html( country_data[i].incomeLevel.value );
					$('#capital').html( country_data[i].capitalCity );

					$('#iso').html( country_data[i].iso2Code );

					$('#lending_type').html( country_data[i].lendingType.value );

					$('#region').html( country_data[i].region.value );

					image_map = 
					'http://maps.googleapis.com/maps/api/staticmap?center='+country_data[i].longitude+','+country_data[i].latitude+'&zoom=3&size=1200x600&sensor=false&markers=size:mid%7Ccolor:0xff0000&scale=1';
					console.log( image_map );
					$('#imageContainer').html("<img src='"+image_map+"'>");
					$('#countryMap').html("<h3 align='center'>Country flag</h3><img src='http://www.geonames.org/flags/x/"+ country_data[i].iso2Code.toLowerCase()+".gif'>");
				}

			});
		}
	}
};

var worldBankApp = new worldBankApiModule();
worldBankApp.init();

$(function(){
	$('#getCountryButton').click(function(){
		var country_id = $('#countrySelect').val();
		worldBankApp.loadData( country_id )
		console.log(country_id);
	});
});