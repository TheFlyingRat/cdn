function init(){const d=new Date;let year=d.getFullYear();async function getText(e,r){const t=await fetch(e),o=await t.text();document.getElementById(r).innerHTML=o}document.getElementById("year").innerHTML=year,getText("https://cdn.theflyingrat.com/motd.txt","motd"),getText("https://cdn.theflyingrat.com/revision.txt","revision");}