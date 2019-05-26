//let y=document.getElementById("song-input").innerText;
let z=document.getElementById("song-search");
function searchsong(){
let xhr= new XMLHttpRequest;
//var x='Nirvana'
let y=document.getElementById("song-input").value;
console.log(y)
xhr.addEventListener('load',function(){
    let o=(JSON.parse(this.responseText));
    console.log(o);   
    let songscard=document.getElementById("row")
    for(i in o.name){
        // let li=document.createElement("li")
        // let a=o.name[i]
        // li.innerText=a
        let div1=document.createElement("div")
        div1.setAttribute("class","column")
        let div2=document.createElement("div")
        div2.setAttribute("class","card")
      
        let img=document.createElement("img");
        img.src="download.jpeg";
        img.setAttribute("class","card-img-top")
        let div4=document.createElement("div")
        div4.setAttribute("class","card-body")
        let p=document.createElement("p")
        p.innerHTML=o.name[i]
        p.setAttribute("class","card-text")
        div4.appendChild(p)
        div2.appendChild(img)
        div2.appendChild(div4)
    
        div1.appendChild(div2)
        //div.setAttribute("class","songdiv col-md-3 column")
        //div.setAttribute("style","box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);padding: 16px;text-align: center;background-color: #f1f1f1;float: left;width: 25%;padding: 0 10px;margin:10px;height:20%")
        songscard.appendChild(div1)
        // songscard.appendChild(img)

        // img.setAttribute("style","width:15%;height:15%")
        // let songName=document.createElement('h4')
        // songName.innerText=o.name[i]
        // div.appendChild(songName)
        // songscard.appendChild(div);
    }
})

xhr.open('GET','http://192.168.43.206:5000/album/'+y)
xhr.send();
};

