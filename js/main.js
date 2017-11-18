const Jazeera_URL = "https://newsapi.org/v2/top-headlines?sources=al-jazeera-english&apiKey=795ae83b89f4453998cb40f103effabd"

const AFTENPOST_URL = "https://newsapi.org/v2/top-headlines?sources=aftenposten&apiKey=795ae83b89f4453998cb40f103effabd"

//selecting all elements in the html by using querySelector and putting them in variable

const leftContainer = document.querySelector('.leftContainer')
const rightContainer = document.querySelector('.rightContainer')
const leftOutput = document.querySelector('.leftoutput')
const rightOutput = document.querySelector('.rightoutput')
const leftButton = document.querySelector('#left')
const rightButton = document.querySelector('#right')

//declare

i=0;

let cycleNext = function(){
$(function (){
    
    $.ajax({
        type:'GET',
        url:Jazeera_URL,
        async:true,
        dataType:'json',
        success: function (data){
            console.log(data);
            if(i==data.articles.length-1){
                return;
            }
            leftOutput.innerHTML =`
            <li class = 'titles'><img src ="${data.articles[i].urlToImage}"> ${data.articles[i].title}</li>
            ` ;
            //increase index by 1
            ++i;
        /*for(let i in data.articles){
            if(i == data.articles.length -1){
                i=0    
            }else{
                i++
            }
            leftOutput.innerHTML =`
            <li class = 'titles'> ${data.articles[i].title}</li>
            `   
        }*/

        },
        error: function(err){
            console.log("error")
        }
    });

    $.ajax({
        type:"GET",
        dataType:'json',
        async: true,        
        url:AFTENPOST_URL,
        success:function(data){
            if(i==data.articles.length-1){
                return;
            }
            //console.log(data);
            rightOutput.innerHTML =`
            <li class = 'titles'><img src ="${data.articles[i].urlToImage}"> ${data.articles[i].title}</li>
            `;
        /*for(let i in data.articles){
            rightOutput.innerHTML =`
            <li class = 'titles'> ${data.articles[i].title}</li>
            `
            }*/
        }
    });

});

}

let cyclePrevious = function(){
    $(function (){
    $.ajax({
        type:'GET',
        url:Jazeera_URL,
        async:true,
        dataType:'json',
        success: function (data){
            //console.log(data);
            if(i==0){
                return;
            }
            leftOutput.innerHTML =`
            <li class = 'titles'><img src ="${data.articles[i].urlToImage}"> ${data.articles[i].title}</li>
            ` ;
            --i;
        },
        error: function(err){
            console.log("error")
        }
    });

    $.ajax({
        type:"GET",
        dataType:'json',
        async: true,        
        url:AFTENPOST_URL,
        success:function(data){
            if(i==0){
                return;
            }
            console.log(data);
            rightOutput.innerHTML =`<li class = 'titles'><img src ="${data.articles[i].urlToImage}"> ${data.articles[i].title}</li>`;
        }
    });

});

}

leftButton.addEventListener('click', cyclePrevious)
rightButton.addEventListener('click', cycleNext)
