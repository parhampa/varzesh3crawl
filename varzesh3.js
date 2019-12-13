var currenturl=window.location.href;
var news=0;
if(currenturl.indexOf('news')!=-1)
{
	news=1;
}
if(news==0)
{
	document.getElementById('latest-video').checked=false;
	var param=document.getElementsByTagName('a');
	var links=[];
	var titles=[];
	var ids=[];
	for(i=0;i<param.length;i++)
	{
		var url=param[i].href;
		var txt=param[i].innerText;
		if(url.indexOf('/news/')!=-1 && url.indexOf('/news/live')==-1)
		{
			var fi=0;
			for(j=0;j<links.length;j++)
			{
				if(links[j]==url)
				{
					fi++;
				}
			}
			if(fi==0)
			{
				links[links.length]=url;
				titles[titles.length]=txt;
				var tmpid=url;
				tmpid=url.replace("https://www.varzesh3.com/news/","");
				tmpid=tmpid.substr(0,tmpid.indexOf('/'));
				ids[ids.length]=tmpid;
			}
		}
	}
	for(i=0;i<links.length;i++)
	{
		console.log(links[i]+" : "+titles[i]);
		console.log(ids[i]);
	}
}
////////////////////////////////////////////
else
{
	var img=document.getElementsByClassName('col-xs-12 col-md-5 pull-lef')[0].getElementsByTagName('img')[0].src;
	var minitxt=document.getElementsByClassName('news-page--news-lead text-justify')[0].innerText;
	var fulltxt=document.getElementsByClassName('col-xs-12 news-page--news-text text-justify')[0].innerText;
	var tags=[];
	var tag="";
	for(i=0;i<document.getElementsByTagName('a').length;i++)
	{
		var param=document.getElementsByTagName('a')[i];
		var url=param.href;
		if(url.indexOf('/tag/')!=-1)
		{
			tags[tags.length]=param.innerText;
		}
	}
	for(i=0;i<tags.length;i++)
	{
		tag=tag+tags[i]+",";
	}
	console.log(img);
	console.log(minitxt);
	console.log(fulltxt);
	console.log(tag);
}
