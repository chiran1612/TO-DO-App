let inputTag=document.querySelector("input");
let ulTag=document.querySelector("ul");
inputTag.addEventListener("keydown",function(e){
    let key= e.key;
    // console.log(e);
    if(key=="Enter"){
        let value=inputTag.value;
        // console.log(value);
        if(value.length==0){
             return ;
        }
        inputTag.value="";//input update
         let liTag=document.createElement("li");
        liTag.innerHTML= `<div>${value}</div><div class="delete">
        <img src="https://img.icons8.com/color/48/000000/delete-forever.png"/>
    </div>`
  
        //other way
        // liTag.innerHTML = "<div>"+value+"</div><div><i class='fa fa-trash'></i></div>"
        handleRemoval(liTag);// calling for handle removal that attaches the event listner
        ulTag.appendChild(liTag);
    }
})
function handleRemoval(liTag){
    let deleteDiv = liTag.querySelector(".delete"); 
    deleteDiv.addEventListener("click",function(){
        liTag.remove();
    })
}