//let y=document.getElementById("song-input").innerText;
let z=document.getElementById("song-search");
function searchsong(){
    document.getElementById("cards").innerHTML="";

    let xhr= new XMLHttpRequest;
//var x='Nirvana'
let y=document.getElementById("song-input").value;
console.log(y)
xhr.addEventListener('load',function(){
    let o=(JSON.parse(this.responseText));

    console.log(o);   

    let songscard=document.getElementById("cards")
    var j=0
    var row=document.createElement("div")
   row.setAttribute("class","row")
 
    for(i in o.name){
            // let li=document.createElement("li")
            // let a=o.name[i]
            // li.innerText=a
            if(j===3){
                var row=document.createElement("div")
                row.setAttribute("class","row")
                j=0
            }
                    
            let div5=document.createElement("div")
            div5.setAttribute("class","column")
            let div7=document.createElement("div")
            div7.setAttribute("class","card")
              // let li=document.createElement("li")
            // let a=o.name[i]
            // li.innerText=a
            let div8=document.createElement("div")
            div8.setAttribute("class","card-body")
            let p=document.createElement("p")
            p.innerText=o.name[i]
            console.log(p)
            p.setAttribute("class","card-text")
            p.setAttribute("id",p.innerText)
            let ru='"'+p.innerText+'"'
            p.setAttribute("onclick","callforalbum("+ru+")");
            
            
            
            div8.appendChild(p)
            div7.appendChild(div8)
            div5.appendChild(div7)
            //div.setAttribute("class","songdiv col-md-3 column")
            //div.setAttribute("style","box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);padding: 16px;text-align: center;background-color: #f1f1f1;float: left;width: 25%;padding: 0 10px;margin:10px;height:20%")
            row.appendChild(div5)
            songscard.appendChild(row)
            // songscard.appendChild(img)
            j++
            // img.setAttribute("style","width:15%;height:15%")
            // let songName=document.createElement('h4')
            // songName.innerText=o.name[i]
            // div.appendChild(songName)
            // songscard.appendChild(div);
            //let ps=document.getElementsByClassName("card-text")
            //console.log(ps)
            //callforyoutube(ps)
        }
})
xhr.open('GET','http://127.0.0.1:5000/album/'+y)
xhr.send();
};
function callforalbum(ru){
    localStorage.setItem('album-name',ru)
    window.location.href="search.html"


}
