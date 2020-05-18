const csvbtn = document.getElementById("csvgenerate")

csvbtn.addEventListener("click", ()=>{
    document.getElementsByClassName("downloadfile")[0].id = "csvdownload" 

    const showdatadiv = document.getElementsByClassName("showdata")[0]
    const no_colums = document.querySelectorAll("#input-info > div")
    const field_names = document.querySelectorAll(".field_name")
    const data_types = document.querySelectorAll(".field_datatype")
    const total_data_rows = document.getElementById("row-number").value
    const csvdiv = document.createElement("div")  
    let headertext = ""

    csvdiv.id = "csvdiv"

    for(let i=0; i<no_colums.length; i++){
               
        headertext  += (i==0)? field_names[i].textContent : "," + field_names[i].textContent;      
    }

    csvdiv.innerHTML += headertext + "<br>"
    

    for(let i=0; i<total_data_rows ; i++){
        let data_string = ""
        let name_email_index = Math.floor(Math.random()*9)
        
        for(let j=0; j<no_colums.length; j++){  

            if(data_types[j].textContent == 'firstname'){                
                data_string += (j==0)? names[name_email_index] : "," + names[name_email_index]
            }
            else if(data_types[j].textContent == 'lastname'){
                data_string += (j==0)? titles[Math.floor(Math.random()*9)] : "," + titles[Math.floor(Math.random()*9)]
            }
            else if(data_types[j].textContent == 'rollno'){
                data_string += (j==0)? Math.floor(Math.random()*20) : "," + Math.floor(Math.random()*20)
            }
            else if(data_types[j].textContent == 'section'){
                data_string += (j==0)? alphabets[Math.floor(Math.random()*4)] : "," + alphabets[Math.floor(Math.random()*4)]
            }
            else if(data_types[j].textContent == 'class'){
                data_string += (j==0)? Math.floor(Math.random()*9 + 1) : "," + Math.floor(Math.random()*9 + 1)
            }
            else if(data_types[j].textContent == 'email'){
                string = names[name_email_index] + "@"
                        + hosts[Math.floor(Math.random()*(hosts.length - 1))] + ".com"
                data_string += (j==0)? string : "," + string
            }
            else{
                console.log("data type not matched")
            }
            
        }
        csvdiv.innerHTML +=  data_string + "<br>"
   }

   showdatadiv.appendChild(csvdiv)
})