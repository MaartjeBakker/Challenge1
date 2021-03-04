//javascript challenge 1, SpaceX

function timeDate(){
				var today = new Date();
				// De huidige uren, minuten, seconden en datum worden gebruikt:
				var hours = today.getHours();
			    var minutes = today.getMinutes();
			    var seconds = today.getSeconds();

   		 		// plaatst een nul voor enkel getal als hij onder de 10 is
			    if (minutes < 10){
			        minutes = '0' + minutes;
			    }
			    if (seconds < 10){
			        seconds = '0' + seconds;
			    }

			    var date = today.getDate();
			    // De telling van de maanden begint bij 1 en niet bij 0
			    var month = (today.getMonth()+1);
			    var year = today.getFullYear();

			    // plaatsing van de elementen en hoe het wordt weergegeven:
			    document.getElementById('tijd').innerHTML = hours+":"+minutes+":"+seconds;
			    document.getElementById('datum').innerHTML = date+"-"+month+"-"+year;
			    
			    setTimeout("timeDate()",1000);

			}

			function speedChart() {
				//communiceert met de link in index.html
				var ctx = document.getElementById('speed').getContext('2d'); 
				var chart = new Chart(ctx, {
    			
	    			type: 'line', //type van de chart (in dit geval line)

	    			data: {
	       	 			labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
	        			datasets: [{
	            			label: 'Average speed in km/h',
	            			borderColor: 'rgb(242, 133, 94)', //kleur van de rand
	            			fill: 'false', //geen kleur onder de lijn
	            			borderWidth: '5',
	            			lineTension: 0, //de lijn is niet gebogen
	            			data: [7000, 19000, 24000, 39000, 32000, 34000, 25000, 31000, 28000, 35000] //data die hoort bij de labels, op volgorde
	        			}]
	    			},

	    			options: {
	        			legend: {
	           				display: true,
	            			labels: {
	                			fontColor: 'rgb(255, 255, 255)' //kleur van de labels bovenaan
	            			}
	        			},
	        			scales: {
	        				yAxes: [{
	        					ticks: {
	        						fontColor: 'rgb(255, 255, 255)' //kleur van de gegevens op de y-as
	        					}
	        				}],
	        				xAxes: [{
	        					ticks: {
	        						fontColor: 'rgb(255, 255, 255' //kleur van de gegevens op de x-as
	        					}
	        				}]
	    				}
	    			}
				});
			}

			function waterChart() {
				var ctx = document.getElementById('water').getContext('2d');
				var myDoughnutChart = new Chart(ctx, {
				    type: 'doughnut',
				    data: {
				    	datasets: [{
				    		backgroundColor: ['rgb(242, 133, 94)', 'rgb(33, 83, 121)'],
				    		data: [34, 66]
				    	}],
				    	labels: [
				    		'Used',
				    		'Rest'
				    	]
				    },

				    options: {
				    	legend: {
				    		display: true,
				    		labels: {
				    			fontColor: 'rgb(255, 255, 255)'
				    		}
				    	}
				    }

				});
			}

			function foodChart() {
				var ctx = document.getElementById('food').getContext('2d');
				var myDoughnutChart = new Chart(ctx, {
				    type: 'doughnut',
				    data: {
				    	datasets: [{
				    		backgroundColor: ['rgb(242, 133, 94)', 'rgb(33, 83, 121)'],
				    		data: [46, 54]
				    	}],
				    	labels: [
				    		'Used',
				    		'Rest'
				    	]
				    },

				    options: {
				    	legend: {
				    		display: true,
				    		labels: {
				    			fontColor: 'rgb(255, 255, 255)'
				    		}
				    	}
				    }

				});
			}
	

			window.onload = function(){
				timeDate();
				speedChart();
				waterChart();
				foodChart();
			}