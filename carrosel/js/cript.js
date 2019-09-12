
var myimg = document.querySelector('img');
var next = document.querySelector('#next');
var back = document.querySelector('.icon-circle-left');

next.onclick = function(){
    mysrc = myimg.getAttribute('src');
    if(mysrc === './midia/beach-caribbean-coast-2598683.jpg'){
        myimg.setAttribute('src', './midia/bahamas-beach-caribbean-2344530.jpg');
    }
    else if(mysrc === './midia/bahamas-beach-caribbean-2344530.jpg'){
        myimg.setAttribute('src', './midia/background-backlit-beach-2305005.jpg');
    }
    else if(mysrc === './midia/background-backlit-beach-2305005.jpg'){
        myimg.setAttribute('src', "./midia/beach-blue-blue-sky-2612650.jpg");
    }
    else if(mysrc === './midia/beach-blue-blue-sky-2612650.jpg'){
        myimg.setAttribute('src', './midia/beach-caribbean-dawn-2598675.jpg');
    }
    else if(mysrc === './midia/beach-caribbean-dawn-2598675.jpg'){
        myimg.setAttribute('src', "./midia/balance-balancing-caribbean-sea-2419314.jpg");
    }
    else if(mysrc === "./midia/balance-balancing-caribbean-sea-2419314.jpg"){
        myimg.setAttribute('src', './midia/beach-caribbean-coast-2598683.jpg')
    }
}

back.onclick = function(){
    mysrc = myimg.getAttribute('src');
    if(mysrc === './midia/beach-caribbean-coast-2598683.jpg'){
        myimg.setAttribute('src', './midia/bahamas-beach-caribbean-2344530.jpg');
    }
    else if(mysrc === './midia/bahamas-beach-caribbean-2344530.jpg'){
        myimg.setAttribute('src', './midia/background-backlit-beach-2305005.jpg');
    }
    else if(mysrc === './midia/background-backlit-beach-2305005.jpg'){
        myimg.setAttribute('src', "./midia/beach-blue-blue-sky-2612650.jpg");
    }
    else if(mysrc === './midia/beach-blue-blue-sky-2612650.jpg'){
        myimg.setAttribute('src', './midia/beach-caribbean-dawn-2598675.jpg');
    }
    else if(mysrc === './midia/beach-caribbean-dawn-2598675.jpg'){
        myimg.setAttribute('src', "./midia/balance-balancing-caribbean-sea-2419314.jpg");
    }
    else if(mysrc === "./midia/balance-balancing-caribbean-sea-2419314.jpg"){
        myimg.setAttribute('src', './midia/beach-caribbean-coast-2598683.jpg')
    }
}