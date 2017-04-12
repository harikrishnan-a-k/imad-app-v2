console.log('Loaded!');

//var comment=commentInput.value;

var send= document.getElementById('send');

 function hi(){
					
					var coment=0,c,prv=0,prvcontent=0;
					$coment=document.getElementById('com');
					$c=$coment.value;
					$prv=document.getElementById('viewcomments');
					$prvcontent=$prv.innerHTML;
					var a= new Date();
					var month = new Array();
					month[0] = "January";
					month[1] = "February";
					month[2] = "March";
					month[3] = "April";
					month[4] = "May";
					month[5] = "June";
					month[6] = "July";
					month[7] = "August";
					month[8] = "September";
					month[9] = "October";
					month[10] = "November";
					month[11] = "December";
					var mon = month[a.getMonth()];
					var date=a.getDate();
					
					
					$prvcontent=`<li>
									<p><span class="newslist-date">${mon}  ${date}</span>` + $c+ ` </p> <p style="absolute; right:0px;">-- user_name </p>
								</li>`+$prvcontent;
								
				    $prv.innerHTML=$prvcontent;
					$coment.value=null;				
					console.log("hello world");

				};
				
