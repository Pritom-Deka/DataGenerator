const txtbtn = document.getElementById("txtgenerate")

txtbtn.addEventListener("click", ()=>{
    document.getElementsByClassName("downloadfile")[0].id = "txtdownload" 

    const separator = document.getElementById("separator").value

    const showdatadiv = document.getElementsByClassName("showdata")[0]
    const no_colums = document.querySelectorAll("#input-info > div")
    const field_names = document.querySelectorAll(".field_name")
    const data_types = document.querySelectorAll(".field_datatype")
    const total_data_rows = document.getElementById("row-number").value
    const txtdiv = document.createElement("div") 
    let headertext = ""

    txtdiv.id = "txtdiv"    

    for(let i=0; i<no_colums.length; i++){
        
        headertext  += (i==0)? field_names[i].textContent : separator + field_names[i].textContent;      
    }

    txtdiv.innerHTML += headertext + "<br>"
    

    for(let i=0; i<total_data_rows ; i++){
        let data_string = ""
        let name_email_index = Math.floor(Math.random()*9)
        
        for(let j=0; j<no_colums.length; j++){  

            if(data_types[j].textContent == 'firstname'){                
                data_string += (j==0)? names[name_email_index] : separator + names[name_email_index]
            }
            else if(data_types[j].textContent == 'lastname'){
                data_string += (j==0)? titles[Math.floor(Math.random()*9)] : separator + titles[Math.floor(Math.random()*9)]
            }
            else if(data_types[j].textContent == 'rollno'){
                data_string += (j==0)? Math.floor(Math.random()*20) : separator + Math.floor(Math.random()*20)
            }
            else if(data_types[j].textContent == 'section'){
                data_string += (j==0)? alphabets[Math.floor(Math.random()*4)] : separator + alphabets[Math.floor(Math.random()*4)]
            }
            else if(data_types[j].textContent == 'class'){
                data_string += (j==0)? Math.floor(Math.random()*9 + 1) : separator + Math.floor(Math.random()*9 + 1)
            }
            else if(data_types[j].textContent == 'email'){
                string = names[name_email_index] + "@"
                        + hosts[Math.floor(Math.random()*(hosts.length - 1))] + ".com"
                data_string += (j==0)? string : separator + string
            }
            else{
                console.log("data type not matched")
            }
            
        }
        txtdiv.innerHTML +=  data_string + "<br>"
   }

   showdatadiv.appendChild(txtdiv)
})