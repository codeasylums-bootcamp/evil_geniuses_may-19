//let y=document.getElementById("song-input").innerText;
let z=document.getElementById("song-search");
function searchsong(){
    document.getElementById("cards").innerHTML="";
    document.getElementById("album_img").innerHTML="";
    document.getElementById("soy").innerHTML=""
    let xhr= new XMLHttpRequest;
//var x='Nirvana'
let y=document.getElementById("song-input").value;
if(y==="")
    y=localStorage.getItem("album-name")
console.log(y)
xhr.addEventListener('load',function(){
    let o=(JSON.parse(this.responseText));

    console.log(o);   

    let songscard=document.getElementById("cards")
    let album_img=document.getElementById("album_img")
    var j=0
    var row=document.createElement("div")
    row.setAttribute("class","row")
    let img=document.createElement("img");
    img.src=o.img_url;
    img.setAttribute("class","card-img-top")
    let div2=document.createElement("div")
    div2.setAttribute("class","card")
    let div3=document.createElement("div")
    div3.setAttribute("class","card")
    let div4=document.createElement("div")
    div4.setAttribute("class","card-body")
    let p=document.createElement("p")
    p.innerText=o.artist_name
    let h3=document.createElement("h3");
    h3.innerText=y.toUpperCase();
    img.style="height:300px;width:200px;"
    div4.appendChild(h3)
    div4.appendChild(p)
    div3.appendChild(img)
    div3.appendChild(div4)
    div2.appendChild(div3)
    
    album_img.appendChild(div2)
    album_img.style="width:250px;"
    let br=document.createElement("br")
    songscard.appendChild(br)
    for(i in o.data){
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
            p.innerText=o.data[i].name
            console.log(p)
            p.setAttribute("class","card-text")
            p.setAttribute("id",p.innerText)
            let ru='"'+p.innerText+'"'
            p.setAttribute("onclick","callforyoutube("+ru+")");
            
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

xhr.open('GET','http://127.0.0.1:5000/'+y)
xhr.send();
};

function callforyoutube(ps){
    var xhttp = new XMLHttpRequest;
    xhttp.addEventListener('load',function(){
       let soy=(JSON.parse(this.responseText));
       soy.search=soy.search.replace("watch?v=","embed/")
        console.log(ps)
       document.getElementById("soy").innerHTML='<object width="480" height="385"><param name="movie" value='+soy.search+'></param><param name="allowFullScreen" value="true"></param><param name="allowscriptaccess" value="always"></param><iframe src='+soy.search+' type="application/x-shockwave-flash" allowscriptaccess="always" allowfullscreen="false" width="480" height="385"></iframe></object>'


       

    })
    xhttp.open('GET','http://192.168.43.206:5000/search/'+ps)
    xhttp.send()
   
}
