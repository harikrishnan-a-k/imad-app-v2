var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
	   'article1':{
					  heading:'FORK SYSTEM CALL',
					  date:'12-04-2017 thursday',
					  author: 'krish',
					  para1:'In computing, particularly in the context of the Unix operating system and its workalikes, fork is an operation whereby a process creates a copy of itself. It is usually a system call, implemented in the kernel. Fork is the primary (and historically, only) method of process creation on Unix-like operating systems.In multitasking operating systems, processes (running programs) need a way to create new processes, e.g. to run other programs. Fork and its variants are typically the only way of doing so in Unix-like systems. For a process to start the execution of a different program, it first forks to create a copy of itself. Then, the copy, called the "child process", calls the exec system call to overlay itself with the other program: it ceases execution of its former program in favor of the other.',
					  para2:`The fork operation creates a separate address space for the child. The child process has an exact copy of all the memory segments of the parent process. In modern UNIX variants that follow the virtual memory model from SunOS-4.0, copy-on-write semantics are implemented and the physical memory need not be actually copied. Instead, virtual memory pages in both processes may refer to the same pages of physical memory until one of them writes to such a page: then it is copied. This optimization is important in the common case where fork is used in conjunction with exec to execute a new program: typically, the child process performs only a small set of actions before it ceases execution of its program in favour of the program to be started, and it requires very few, if any, of its parents data structures.`,
					  img1:`<img src="/images/1.png" style=" height:300px; width:250px;" alt="my image"/>` ,
					  img2:`<img src="/images/2.png" style=" height:300px; width:250px;" alt="my image"/>`,
					  imgtext1:'child process creation',
					  imgtext2:'sample code'
		   
				   },
				   
	   'article2':{
					  heading:'PROCESS SCHEDULING ALGORITHMS',
					  date:'13-04-2017 friday',
					  author: 'raju',
					  para1:'In computing, scheduling is the method by which work specified by some means is assigned to resources that complete the work. The work may be virtual computation elements such as threads, processes or data flows, which are in turn scheduled onto hardware resources such as processors, network links or expansion cards.A scheduler is what carries out the scheduling activity. Schedulers are often implemented so they keep all computer resources busy (as in load balancing), allow multiple users to share system resources effectively, or to achieve a target quality of service. Scheduling is fundamental to computation itself, and an intrinsic part of the execution model of a computer system; the concept of scheduling makes it possible to have computer multitasking with a single central processing unit (CPU).',
					  para2:`A scheduler may aim at one of many goals, for example, maximizing throughput (the total amount of work completed per time unit), minimizing response time (time from work becoming enabled until the first point it begins execution on resources), or minimizing latency (the time between work becoming enabled and its subsequent completion), maximizing fairness (equal CPU time to each process, or more generally appropriate times according to the priority and workload of each process). In practice, these goals often conflict (e.g. throughput versus latency), thus a scheduler will implement a suitable compromise. Preference is given to any one of the concerns mentioned above, depending upon the users needs and objectives.`,
					  img1:`<img src="/images/3.png" style=" height:300px; width:250px;" alt="my image"/>` ,
					  img2:`<img src="/images/4.jpg" style=" height:300px; width:250px;" alt="my image"/>`,
					  imgtext1:'PROCESS LIFE CYCLE',
					  imgtext2:'SCEDULING ALGORITMS '
		   
				   },
				   
	  'article3':{
					  heading:'PROCESS SYNCHRONIZATION',
					  date:'12-04-2017 thursday',
					  author: 'krish',
					  para1:'In computing, particularly in the context of the Unix operating system and its workalikes, fork is an operation whereby a process creates a copy of itself. It is usually a system call, implemented in the kernel. Fork is the primary (and historically, only) method of process creation on Unix-like operating systems.In multitasking operating systems, processes (running programs) need a way to create new processes, e.g. to run other programs. Fork and its variants are typically the only way of doing so in Unix-like systems. For a process to start the execution of a different program, it first forks to create a copy of itself. Then, the copy, called the "child process", calls the exec system call to overlay itself with the other program: it ceases execution of its former program in favor of the other.',
					  para2:`The fork operation creates a separate address space for the child. The child process has an exact copy of all the memory segments of the parent process. In modern UNIX variants that follow the virtual memory model from SunOS-4.0, copy-on-write semantics are implemented and the physical memory need not be actually copied. Instead, virtual memory pages in both processes may refer to the same pages of physical memory until one of them writes to such a page: then it is copied. This optimization is important in the common case where fork is used in conjunction with exec to execute a new program: typically, the child process performs only a small set of actions before it ceases execution of its program in favour of the program to be started, and it requires very few, if any, of its parents data structures.`,
					  img1:`<img src="/images/17.jpg" style=" height:300px; width:250px;" alt="my image"/>` ,
					  img2:`<img src="/images/18.jpg" style=" height:300px; width:250px;" alt="my image"/>`,
					  imgtext1:'dinig philosepher',
					  imgtext2:'producer consumer'
		   
				   },
				   
	'article4':{
					  heading:'MEMORY MANAGEMENT-PAGING',
					  date:'12-04-2017 thursday',
					  author: 'krish',
					  para1:'In computing, particularly in the context of the Unix operating system and its workalikes, fork is an operation whereby a process creates a copy of itself. It is usually a system call, implemented in the kernel. Fork is the primary (and historically, only) method of process creation on Unix-like operating systems.In multitasking operating systems, processes (running programs) need a way to create new processes, e.g. to run other programs. Fork and its variants are typically the only way of doing so in Unix-like systems. For a process to start the execution of a different program, it first forks to create a copy of itself. Then, the copy, called the "child process", calls the exec system call to overlay itself with the other program: it ceases execution of its former program in favor of the other.',
					  para2:`The fork operation creates a separate address space for the child. The child process has an exact copy of all the memory segments of the parent process. In modern UNIX variants that follow the virtual memory model from SunOS-4.0, copy-on-write semantics are implemented and the physical memory need not be actually copied. Instead, virtual memory pages in both processes may refer to the same pages of physical memory until one of them writes to such a page: then it is copied. This optimization is important in the common case where fork is used in conjunction with exec to execute a new program: typically, the child process performs only a small set of actions before it ceases execution of its program in favour of the program to be started, and it requires very few, if any, of its parents data structures.`,
					  img1:`<img src="/images/15.jpg" style=" height:300px; width:250px;" alt="my image"/>` ,
					  img2:`<img src="/images/16.jpg" style=" height:300px; width:250px;" alt="my image"/>`,
					  imgtext1:'PAGING TRANSLATION',
					  imgtext2:'FRAMES'
		   
				   },
				   
	'article5':{
					  heading:'MEMORY MANAGEMENT-SEGMENTATION',
					  date:'12-04-2017 thursday',
					  author: 'krish',
					  para1:'In computing, particularly in the context of the Unix operating system and its workalikes, fork is an operation whereby a process creates a copy of itself. It is usually a system call, implemented in the kernel. Fork is the primary (and historically, only) method of process creation on Unix-like operating systems.In multitasking operating systems, processes (running programs) need a way to create new processes, e.g. to run other programs. Fork and its variants are typically the only way of doing so in Unix-like systems. For a process to start the execution of a different program, it first forks to create a copy of itself. Then, the copy, called the "child process", calls the exec system call to overlay itself with the other program: it ceases execution of its former program in favor of the other.',
					  para2:`The fork operation creates a separate address space for the child. The child process has an exact copy of all the memory segments of the parent process. In modern UNIX variants that follow the virtual memory model from SunOS-4.0, copy-on-write semantics are implemented and the physical memory need not be actually copied. Instead, virtual memory pages in both processes may refer to the same pages of physical memory until one of them writes to such a page: then it is copied. This optimization is important in the common case where fork is used in conjunction with exec to execute a new program: typically, the child process performs only a small set of actions before it ceases execution of its program in favour of the program to be started, and it requires very few, if any, of its parents data structures.`,
					  img1:`<img src="/images/13.jpg" style=" height:300px; width:250px;" alt="my image"/>` ,
					  img2:`<img src="/images/14.jpg" style=" height:300px; width:250px;" alt="my image"/>`,
					  imgtext1:'logical view',
					  imgtext2:'hardware diagram'
		   
				   },
				   
	'article6':{
					  heading:'VIRTUAL MEMORY',
					  date:'12-04-2017 thursday',
					  author: 'krish',
					  para1:'In computing, particularly in the context of the Unix operating system and its workalikes, fork is an operation whereby a process creates a copy of itself. It is usually a system call, implemented in the kernel. Fork is the primary (and historically, only) method of process creation on Unix-like operating systems.In multitasking operating systems, processes (running programs) need a way to create new processes, e.g. to run other programs. Fork and its variants are typically the only way of doing so in Unix-like systems. For a process to start the execution of a different program, it first forks to create a copy of itself. Then, the copy, called the "child process", calls the exec system call to overlay itself with the other program: it ceases execution of its former program in favor of the other.',
					  para2:`The fork operation creates a separate address space for the child. The child process has an exact copy of all the memory segments of the parent process. In modern UNIX variants that follow the virtual memory model from SunOS-4.0, copy-on-write semantics are implemented and the physical memory need not be actually copied. Instead, virtual memory pages in both processes may refer to the same pages of physical memory until one of them writes to such a page: then it is copied. This optimization is important in the common case where fork is used in conjunction with exec to execute a new program: typically, the child process performs only a small set of actions before it ceases execution of its program in favour of the program to be started, and it requires very few, if any, of its parents data structures.`,
					  img1:`<img src="/images/11.jpg" style=" height:300px; width:250px;" alt="my image"/>` ,
					  img2:`<img src="/images/12.jpg" style=" height:300px; width:250px;" alt="my image"/>`,
					  imgtext1:'vm structure',
					  imgtext2:'vm eg: in win7'
		   
				   },
				   
	'article7':{
					  heading:'UNIX INODE',
					  date:'12-04-2017 thursday',
					  author: 'krish',
					  para1:'In computing, particularly in the context of the Unix operating system and its workalikes, fork is an operation whereby a process creates a copy of itself. It is usually a system call, implemented in the kernel. Fork is the primary (and historically, only) method of process creation on Unix-like operating systems.In multitasking operating systems, processes (running programs) need a way to create new processes, e.g. to run other programs. Fork and its variants are typically the only way of doing so in Unix-like systems. For a process to start the execution of a different program, it first forks to create a copy of itself. Then, the copy, called the "child process", calls the exec system call to overlay itself with the other program: it ceases execution of its former program in favor of the other.',
					  para2:`The fork operation creates a separate address space for the child. The child process has an exact copy of all the memory segments of the parent process. In modern UNIX variants that follow the virtual memory model from SunOS-4.0, copy-on-write semantics are implemented and the physical memory need not be actually copied. Instead, virtual memory pages in both processes may refer to the same pages of physical memory until one of them writes to such a page: then it is copied. This optimization is important in the common case where fork is used in conjunction with exec to execute a new program: typically, the child process performs only a small set of actions before it ceases execution of its program in favour of the program to be started, and it requires very few, if any, of its parents data structures.`,
					  img1:`<img src="/images/9.png" style=" height:300px; width:250px;" alt="my image"/>` ,
					  img2:`<img src="/images/10.png" style=" height:300px; width:250px;" alt="my image"/>`,
					  imgtext1:'unix inode structure',
					  imgtext2:'inode example'
		   
				   },
				   
	'article8':{
					  heading:'FAT FILE SYSTEM',
					  date:'12-04-2017 thursday',
					  author: 'krish',
					  para1:'In computing, particularly in the context of the Unix operating system and its workalikes, fork is an operation whereby a process creates a copy of itself. It is usually a system call, implemented in the kernel. Fork is the primary (and historically, only) method of process creation on Unix-like operating systems.In multitasking operating systems, processes (running programs) need a way to create new processes, e.g. to run other programs. Fork and its variants are typically the only way of doing so in Unix-like systems. For a process to start the execution of a different program, it first forks to create a copy of itself. Then, the copy, called the "child process", calls the exec system call to overlay itself with the other program: it ceases execution of its former program in favor of the other.',
					  para2:`The fork operation creates a separate address space for the child. The child process has an exact copy of all the memory segments of the parent process. In modern UNIX variants that follow the virtual memory model from SunOS-4.0, copy-on-write semantics are implemented and the physical memory need not be actually copied. Instead, virtual memory pages in both processes may refer to the same pages of physical memory until one of them writes to such a page: then it is copied. This optimization is important in the common case where fork is used in conjunction with exec to execute a new program: typically, the child process performs only a small set of actions before it ceases execution of its program in favour of the program to be started, and it requires very few, if any, of its parents data structures.`,
					  img1:`<img src="/images/7.png" style=" height:300px; width:250px;" alt="my image"/>` ,
					  img2:`<img src="/images/8.png" style=" height:300px; width:250px;" alt="my image"/>`,
					  imgtext1:'FAT32 system',
					  imgtext2:'allocation example'
		   
				   },
				   
	'article9':{
					  heading:'DISK SCHEDULING',
					  date:'12-04-2017 thursday',
					  author: 'krish',
					  para1:'In computing, particularly in the context of the Unix operating system and its workalikes, fork is an operation whereby a process creates a copy of itself. It is usually a system call, implemented in the kernel. Fork is the primary (and historically, only) method of process creation on Unix-like operating systems.In multitasking operating systems, processes (running programs) need a way to create new processes, e.g. to run other programs. Fork and its variants are typically the only way of doing so in Unix-like systems. For a process to start the execution of a different program, it first forks to create a copy of itself. Then, the copy, called the "child process", calls the exec system call to overlay itself with the other program: it ceases execution of its former program in favor of the other.',
					  para2:`The fork operation creates a separate address space for the child. The child process has an exact copy of all the memory segments of the parent process. In modern UNIX variants that follow the virtual memory model from SunOS-4.0, copy-on-write semantics are implemented and the physical memory need not be actually copied. Instead, virtual memory pages in both processes may refer to the same pages of physical memory until one of them writes to such a page: then it is copied. This optimization is important in the common case where fork is used in conjunction with exec to execute a new program: typically, the child process performs only a small set of actions before it ceases execution of its program in favour of the program to be started, and it requires very few, if any, of its parents data structures.`,
					  img1:`<img src="/images/5.jpg" style=" height:300px; width:250px;" alt="my image"/>` ,
					  img2:`<img src="/images/6.jpg" style=" height:300px; width:250px;" alt="my image"/>`,
					  imgtext1:'hard disk structure',
					  imgtext2:'fcfs sceduling'
		   
				   },
				   
	'article10':{
					  heading:'FORK SYSTEM CALL',
					  date:'12-04-2017 thursday',
					  author: 'krish',
					  para1:'In computing, particularly in the context of the Unix operating system and its workalikes, fork is an operation whereby a process creates a copy of itself. It is usually a system call, implemented in the kernel. Fork is the primary (and historically, only) method of process creation on Unix-like operating systems.In multitasking operating systems, processes (running programs) need a way to create new processes, e.g. to run other programs. Fork and its variants are typically the only way of doing so in Unix-like systems. For a process to start the execution of a different program, it first forks to create a copy of itself. Then, the copy, called the "child process", calls the exec system call to overlay itself with the other program: it ceases execution of its former program in favor of the other.',
					  para2:`The fork operation creates a separate address space for the child. The child process has an exact copy of all the memory segments of the parent process. In modern UNIX variants that follow the virtual memory model from SunOS-4.0, copy-on-write semantics are implemented and the physical memory need not be actually copied. Instead, virtual memory pages in both processes may refer to the same pages of physical memory until one of them writes to such a page: then it is copied. This optimization is important in the common case where fork is used in conjunction with exec to execute a new program: typically, the child process performs only a small set of actions before it ceases execution of its program in favour of the program to be started, and it requires very few, if any, of its parents data structures.`,
					  img1:`<img src="/images/1.png" style=" height:300px; width:250px;" alt="my image"/>` ,
					  img2:`<img src="/images/2.png" style=" height:300px; width:250px;" alt="my image"/>`,
					  imgtext1:'child process creation',
					  imgtext2:'sample code'
		   
				   }
};
function createTemplate(data)
{
	var heading=data.heading;
	var date=data.date;
	var author=data.author;
	var para1=data.para1;
	var para2=data.para2;
	var img1=data.img1;
	var img2=data.img2;
	var imgtext1=data.imgtext1;
	var imgtext2=data.imgtext2;
	
var template=`
				<!doctype html>
				<html>
				<head>
				<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
				<title>opearing system concepts</title>
				<link rel="stylesheet" href="/ui/styles.css" type="text/css" />
				<!--[if lt IE 9]>
				<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
				<![endif]-->
				<!--
				educate, a free CSS web template by ZyPOP (zypopwebtemplates.com/)
				
				Download: http://zypopwebtemplates.com/
				
				License: Creative Commons Attribution
				//-->
				<script type="text/javascript" src="/ui/main.js"></script>
				<script type="text/javascript" src="/js/jquery.js"></script>
				<script type="text/javascript" src="/js/slider.js"></script>
				<script type="text/javascript" src="/js/superfish.js"></script>
				
				<script type="text/javascript" src="/js/custom.js"></script>
				<script type="text/javascript">
				
				function change_article_view1()
				{
				  var para1= document.getElementById('extrap1');
				  var button1= document.getElementById('viewbutton1');
				   if(para1.style.display=='none')
				   {
					   para1.style.display='block';
					   button1.innerHTML='view less';
				   }
				   else{
					   
						 para1.style.display='none';
					   button1.innerHTML='view more';
				   }
				}
				
				function change_article_view2()
				{
				  var para2= document.getElementById('extrap2');
				  var button2= document.getElementById('viewbutton2');
				   if(para2.style.display=='none')
				   {
					   para2.style.display='block';
					   button2.innerHTML='view less';
				   }
				   else{
					   
						 para2.style.display='none';
					   button2.innerHTML='view more';
				   }
				}
				
				
				console.log('Loaded!');
				//var commentInput=document.getElementById('comment');
				//var comment=commentInput.value;
				//console.log($comment);
				var send= document.getElementById('send');
				
				
				
				</script>
				
				<meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0" />
				</head>
				<body>
				<div id="container">
				
					<header>
					
							
						<nav>
					<div class="width">
								<ul class="sf-menu dropdown">
							<li class="selected"><a href="/">home</a></li>
							<li><a class="has_submenu" href="#">PROCESS MANAGEMENT</a>
								<ul>
									<li><a href="/article1">FORK SYTEM CALL</a></li>
									<li><a href="/article2">PROCESS SCHEDULING ALGORITHMS</a></li>
									<li><a href="/article3">PROCESS SYNCHRONIZATION</a></li>
								</ul>
							</li>
						 <li><a class="has_submenu" href="#">MEMORY MANAGEMENT</a>
								<ul>
									<li><a href="/article4">PAGING</a></li>
									<li><a href="/article5">SEGMENTATION</a></li>
									<li><a href="/article6">VIRTUAL MEMORY</a></li>
								</ul>
							</li>
							<li><a class="has_submenu" href="#">FILE MANAGEMENT</a>
								<ul>
									<li><a href="/article7">UNIX INODE</a></li>
									<li><a href="/article8">FAT TABLE</a></li>
									<li><a href="/article9">DISK SCHEDULING</a></li>
								</ul>
							</li>
							<li><a href="/ui/aboutauthor.html">ABOUT AUTHOR</a></li>
						</ul>
				
					</div>
					
						<div class="clear"></div>
					
					</nav>
				
					<h2 style="margin:auto">  ${heading}</h2>
				
				
				   
				
				
					</header>
				
				
				
				
					<div id="body" class="width">
				
				
				
						<section id="content" class="two-column with-right-sidebar">
				
						<article>
								
							
							<h2>${heading}</h2>
							<div class="article-info">Posted on <time datetime="2017-03-14"> ${date} </time> by <a href="#" rel="author"> ${author}</a></div>
				
						   <p>
						   
						    ${para1}
						  </p>
						   <p id="extrap1" style=" display:none">
						   
						    ${para2}
						   
						   </p>
				
						<a id="viewbutton1" href="#" class="button button-reversed" onClick="change_article_view1(); return false;">view more</a>
						
				
				
						
						</article>
						
						
						<article>
						<h4>ADD COMMENTS</h4>
						
						<p><label for="comment">Your comment:</label></p>
								   <p> <textarea name="com" id="com" rows="11" cols="38">  </textarea>  </p>
									<p><input name="send" id="send" onclick="hi();" style="margin-left: 150px;" class="formbutton" value="POST COMMENT" type="submit" /></p>
						
						
						</article>
						
						 <article>
						<h4>VIEW COMMENTS</h4>
						<ul class="newslist" id="viewcomments" >
							 
								<li>
									<p><span class="newslist-date">Jul 21</span>
											   By the time Windows 3.1 was released in 1991, Windows had gained significantly in market share, and from the mid-1990s on, Microsoft dominated the operating-system market. Microsoft released Windows 95 in August 1995. It was so well marketed and in such high demand that people bought the operating system even if they did not own a home computer. </p>
								   <p style="absolute; right:0px;">-- user_name </p>
								</li>
				
								<li>
									<p><span class="newslist-date">May 09</span>
											  Mac OS was not the first graphical user interface, but it was the First successful one, largely because competitors were so expensive.he Xerox Alto, the first true GUI system, cost $32,000 to build while the Macintosh retailed for $2,500.  </p>
				 
								<p style="absolute; right:0px;">-- user_name </p>
								</li>
								
								<li>
									<p><span class="newslist-date">Feb 05</span>
											  Linux is a UNIX variant that runs on several different hardware platforms. Linus Torvalds, a student at the University of Helsinki in Finland, initially created it as a hobby.  </p>
				 
								<p style="absolute; right:0px;">-- user_name </p>
								</li>
								
							</ul>
						</article>
						</section>
						
						<aside class="sidebar big-sidebar right-sidebar">
					
					
							
								
							   
				
						
							   
								
							<h4>RELATED IMAGES</h4>
							<ul class="newslist" >
							 
								<li>
									<p><span class="newslist-date"> ${imgtext1}</span>
											 ${img1} </p>
								</li>
				
								
								
								<li>
									<p><span class="newslist-date"> ${imgtext2}</span>
											  ${img2}  </p>
				 
								</li>
								
								
							</ul>
								</li>
					
								
							</ul>
						
						</aside>
						<div class="clear"></div>
					</div>
					<footer>
				
						 <p> ALL RIGHTS RESERVEED  by ZyPOP</p>
					  
					</footer>
				</div>
				</body>
				</html> `;
				
				return template;

}

app.get('/', function (req, res) {
  res.sendFile('ui/index.html' , { root : __dirname});
});

var comments=[];
app.get('/postcomment',function(req,res){
	
	var commnet=req.query.comment;
	comments.push(comment);
	res.send(JSON.stringify(comments));
});

app.get('/:articleName', function (req, res) {
	var articleindex=req.params.articleName;
  res.send(createTemplate(articles[articleindex]));
});

app.get('/ui/aboutauthor.html', function (req, res) {
  res.sendFile('ui/aboutauthor.html' , { root : __dirname});
});
app.get('/ui/article.html', function (req, res) {
  res.sendFile('/ui/article.html' , { root : __dirname});
});

app.get('/ui/styles.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'styles.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/js/jquery.js', function (req, res) {
  res.sendFile('/js/jquery.js' , { root : __dirname});
});

app.get('/js/slider.js', function (req, res) {
  res.sendFile('/js/slider.js' , { root : __dirname});
});

app.get('/js/superfish.js', function (req, res) {
  res.sendFile('/js/superfish.js' , { root : __dirname});
});

app.get('/js/custom.js', function (req, res) {
  res.sendFile('/js/custom.js' , { root : __dirname});
});

//sending 6 image files

app.get('/images/windows10.jpg', function (req, res) {
  res.sendFile('/images/windows10.jpg' , { root : __dirname});
});

app.get('/images/osx.png', function (req, res) {
  res.sendFile('/images/osx.png' , { root : __dirname});
});


app.get('/images/ubuntu.jpg', function (req, res) {
  res.sendFile('/images/ubuntu.jpg' , { root : __dirname});
});


app.get('/images/semi-transparent.png', function (req, res) {
  res.sendFile('/images/semi-transparent.png' , { root : __dirname});
});


app.get('/images/slide-prev.gif', function (req, res) {
  res.sendFile('/images/slide-prev.gif' , { root : __dirname});
});

app.get('/images/slide-next.gif', function (req, res) {
  res.sendFile('/images/slide-next.gif' , { root : __dirname});
});

// sending 4 images of hari
app.get('/images/b.jpg', function (req, res) {
  res.sendFile('/images/b.jpg' , { root : __dirname});
});
app.get('/images/c.jpg', function (req, res) {
  res.sendFile('/images/c.jpg' , { root : __dirname});
});
app.get('/images/d.jpg', function (req, res) {
  res.sendFile('/images/d.jpg' , { root : __dirname});
});
app.get('/images/e.jpg', function (req, res) {
  res.sendFile('/images/e.jpg' , { root : __dirname});
});

app.get('/images/1.png', function (req, res) {
  res.sendFile('/images/1.png' , { root : __dirname});
});

app.get('/images/2.png', function (req, res) {
  res.sendFile('/images/2.png' , { root : __dirname});
});

app.get('/images/3.png', function (req, res) {
  res.sendFile('/images/3.png' , { root : __dirname});
});

app.get('/images/4.jpg', function (req, res) {
  res.sendFile('/images/4.jpg' , { root : __dirname});
});

app.get('/images/5.jpg', function (req, res) {
  res.sendFile('/images/5.jpg' , { root : __dirname});
});
app.get('/images/6.jpg', function (req, res) {
  res.sendFile('/images/6.jpg' , { root : __dirname});
});

app.get('/images/7.png', function (req, res) {
  res.sendFile('/images/7.png' , { root : __dirname});
});

app.get('/images/8.png', function (req, res) {
  res.sendFile('/images/8.png' , { root : __dirname});
});

app.get('/images/9.png', function (req, res) {
  res.sendFile('/images/9.png' , { root : __dirname});
});
app.get('/images/10.png', function (req, res) {
  res.sendFile('/images/10.png' , { root : __dirname});
});

app.get('/images/11.jpg', function (req, res) {
  res.sendFile('/images/11.jpg' , { root : __dirname});
});
app.get('/images/12.jpg', function (req, res) {
  res.sendFile('/images/12.jpg' , { root : __dirname});
});
app.get('/images/13.jpg', function (req, res) {
  res.sendFile('/images/13.jpg' , { root : __dirname});
});
app.get('/images/14.jpg', function (req, res) {
  res.sendFile('/images/14.jpg' , { root : __dirname});
});

app.get('/images/15.jpg', function (req, res) {
  res.sendFile('/images/15.jpg' , { root : __dirname});
});

app.get('/images/16.jpg', function (req, res) {
  res.sendFile('/images/16.jpg' , { root : __dirname});
});

app.get('/images/17.jpg', function (req, res) {
  res.sendFile('/images/17.jpg' , { root : __dirname});
});
app.get('/images/18.jpg', function (req, res) {
  res.sendFile('/images/18.jpg' , { root : __dirname});
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
