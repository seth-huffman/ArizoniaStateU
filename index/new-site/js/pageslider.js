
	       $(document).ready(function() {
	           /*
	           * Plugin intialization
	           */
	           $('#pagepiling').pagepiling({
	               direction: 'vertical',
	               menu: '#menu',
	               anchors: ['page1', 'page2', 'page3', 'page4'],
	               sectionsColor: ['#292929', '#292929', '#292929', '#39C'],
	               navigation: {
	                   'position': 'left',
	                   'tooltips': ['Home', 'Work', 'Resumé', 'Contact']
	               },
	               afterRender: function(){
	                   $('#pp-nav').addClass('custom');
	               },
	               afterLoad: function(anchorLink, index){
	                   if(index>1){
	                       $('#pp-nav').removeClass('custom');
	                   }else{
	                       $('#pp-nav').addClass('custom');
	                   }
	               }
	           });
	       });