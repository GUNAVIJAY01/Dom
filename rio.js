var head = document.getElementById("section")
	head.setAttribute("style","background-image:linear-gradient(#ffffffbf,#ffffffbf),url('images/chefs-bg.jpg');background-repeat:no-repeat;background-size:cover;background-attahment:fixed;height:100vh")
	
	var	heading = document.createElement("div")
	heading.setAttribute("style","text-align:center;")
	heading.setAttribute("class","center")
      
	head.append(heading) 
	var	htag =	document.createElement("h4")
	htag.setAttribute("style","color:limegreen")
		htag.innerHTML=("our professional chefs")
		heading.append(htag)
var	para =	document.createElement("p")
		para.innerHTML=("Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem")
		heading.append(para)
	
	
	var	container =	document.createElement("div")
			container.setAttribute("class","container")
		head.append(container)
		

var	row =document.createElement("div")
			row.setAttribute("class","row justify-content-lg-center align-items-lg-center guna")
		container.append(row)


		
		
var b=[

		{img:"images/chefs-1.jpg",Name:"Walter White",content:"Master chef",icon1:"fa fa-twitter",icon2:"fa fa-facebook-official",icon3:"fa fa-instagram",icon4:"fa fa-linkedin"},
		{img:"images/chefs-2.jpg",Name:"Sarah Johnson",content:"patissier",icon1:"fa fa-twitter",icon2:"fa fa-facebook-official",icon3:"fa fa-instagram",icon4:"fa fa-linkedin"},
		{img:"images/chefs-3.jpg",Name:"William Anderson",content:"cook",icon1:"fa fa-twitter",icon2:"fa fa-facebook-official",icon3:"fa fa-instagram",icon4:"fa fa-linkedin"}
]

b.map((e)=>{
	var	col = document.createElement("div")
			col.setAttribute("class","col-lg-4 col-sm-12 col-md-6 res")
		
		var imgsec =document.createElement("div")
			imgsec.setAttribute("class","img-sec")
			imgsec.setAttribute("style","position:relative")
		var image=document.createElement("img")
		

		
		image.setAttribute("src",e.img)
		image.style.width="100%"
		image.setAttribute("class","rounded")
				

		
		var content=document.createElement("div")
		content.setAttribute("style","background-color:white;color:grey;text-align:center;padding:5px;width:75%;height:30%;position:absolute;bottom:-15%;left:12%;")
		content.setAttribute("class","rounded shadow")
		var hd = document.createElement("h4")
		 hd.setAttribute("class","tag")
		 hd.setAttribute("style","position-relative")
		hd.innerHTML=e.Name
		
		
var character = document.createElement("i")
		character.innerHTML=e.content

var icons = document.createElement("div")
	icons.setAttribute("style","icon-content")
	
var icon = document.createElement("i")
		icon.setAttribute("class","fa fa-twitter")		
var icon1 = document.createElement("i")
		icon1.setAttribute("class","fa fa-facebook-official")		
var icon2 = document.createElement("i")
		icon2.setAttribute("class","fa fa-instagram")		
var icon3 = document.createElement("i")
		icon3.setAttribute("class","fa fa-linkedin")		
		
		row.append(col)
		col.append(imgsec)
		imgsec.append(image,content,icons)
		content.append(hd)
		content.append(character)
        content.append(icons) 		
		icons.append(icon)
		icons.append(icon1)
		icons.append(icon2)
		icons.append(icon3)
		

})		
		
		