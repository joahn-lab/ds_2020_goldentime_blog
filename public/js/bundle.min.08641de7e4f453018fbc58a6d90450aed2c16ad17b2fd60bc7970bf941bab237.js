var $=document.querySelector.bind(document),$$=document.querySelectorAll.bind(document)
function setVisibility(e,visible){e.classList.add(visible?'show':'hide')
e.classList.remove(visible?'hide':'show')
if(visible){e.style.visibility="visible"
e.removeAttribute("hidden")}else{e.style.visibility="hidden"
e.setAttribute("hidden",true)}}
function onLogoClick(){}
document.addEventListener('DOMContentLoaded',function(){const ITEMS=[...$$(".nav-item")]
const SECTIONS=[...$$("main > section")].reverse()
const THRESHOLD=340
var oldIdx=-1
window.addEventListener("scroll",()=>{const idx=SECTIONS.length-SECTIONS.findIndex((sec)=>window.scrollY>sec.offsetTop-THRESHOLD)-1
if(idx!=oldIdx){ITEMS.forEach((itm)=>itm.classList.remove("nav-item-active"))
ITEMS[idx].classList.add("nav-item-active")
oldIdx=idx}});},false);;(function(){menuActive=false
var nav=$('nav')
window.onscroll=function(){var scrollPosition=window.pageYOffset||document.documentElement.scrollTop,windowHeight=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight,navHeight=nav.clientHeight
if(scrollPosition>windowHeight-navHeight){nav.classList.add('nav-fixed')
nav.classList.add('nav-shadow')
$$('nav > .logo, nav > .nav-toggle').forEach(function(el){el.style.visibility='visible'
el.classList.add('show')
el.classList.remove('hide')})}else{nav.classList.remove('nav-fixed')
nav.classList.remove('nav-shadow')
$$('nav > .logo, nav > .nav-toggle').forEach(function(el){el.style.visibility='hidden'
el.classList.add('hide')
el.classList.remove('show')})}}
function toggle(){if(menuActive){$('#open').classList.remove('icon-active')
menuActive=false}else{$('#open').classList.add('icon-active')
menuActive=true}}
$('.nav-icon').addEventListener('click',function(){toggle()
$$('.nav-full, main').forEach(function(el){el.classList.toggle('active')})})
$$('.nav-full a').forEach(function(links){links.addEventListener('click',function(){toggle()
$$('.nav-full, main').forEach(function(el){el.classList.toggle('active')})})})
$('.logo').addEventListener('click',function(){toggle()
if($('.nav-full').classList.contains('active')){$$('.nav-full, main').forEach(function(el){el.classList.toggle('active')})}})
$('body').addEventListener('click',function(){if($('.nav-full').classList.contains('active')){$('html').style.overflowY='hidden'}else{$('html').style.overflowY='scroll'}})
function fullMobileViewport(){var element=this,viewportHeight=window.innerHeight,heightChangeTolerance=100
$(window).resize(function(){if(Math.abs(viewportHeight-window.innerHeight)>heightChangeTolerance){viewportHeight=window.innerHeight
update()}})
function update(){element.style.height=(viewportHeight+'px')}
update()}
$$('header').forEach(function(){fullMobileViewport})})()