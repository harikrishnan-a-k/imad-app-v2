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
					
					var request = new XMLHttpRequest();
					request.onreadystatechange = function(){
						if(request.readyState===XMLHttpRequest.DONE){
						
						
							if(request.status===200)
							{
							
								var comments=request.responseText;
								comments=JSON.parse(comments);
								var list=``;
								for(i=0;i<comments.length;i++)
								{
								  list += 	`<li>
									<p><span class="newslist-date">${mon}  ${date}</span>` + comments[i]+ ` </p> <p style="absolute; right:0px;">-- user_name </p>
								</li>`;
								}
								
								$prv.innerHTML=$list;
								$coment.value=null;	
							}
							
						}
						
						};
						
						//request.open('GET','http://localhost:8080/postcomment?comment='+$c,true);
						request.open('GET','http://harikrishnan-a-k.imad.hasura-app.io/postcomment?comment='+$c,true);
						request.send();
					
					//alert("hello world "+$c);//
					
				    			
					console.log("hello world");

				};
				
