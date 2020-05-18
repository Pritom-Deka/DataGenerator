const sqlbtn = document.getElementById("sqlgenerate")

sqlbtn.addEventListener("click", ()=>{
    document.getElementsByClassName("downloadfile")[0].id = "sqldownload" 

    const table_name = document.getElementById("tablename").value

    const showdatadiv = document.getElementsByClassName("showdata")[0]
    const no_colums = document.querySelectorAll("#input-info > div")
    const field_names = document.querySelectorAll(".field_name")
    const data_types = document.querySelectorAll(".field_datatype")
    const total_data_rows = document.getElementById("row-number").value
    const sqldiv = document.createElement("div") 
    let sqlstart = ""

    sqldiv.id = "sqldiv"

    for(let i=0; i<no_colums.length; i++){

        sqlstart  += (i==0)? "insert into " + table_name + " (" + field_names[i].textContent : ", " + field_names[i].textContent;      
    }
    
    sqlstart += ") values ("
    sqlend = ");"

    for(let i=0; i<total_data_rows ; i++){
        let data_sql=""
        let name_email_index = Math.floor(Math.random()*9)
        for(let j=0; j<no_colums.length; j++){ 

            if(data_types[j].textContent == 'firstname'){                
                data_sql += (j==0)? names[name_email_index] : ", " + names[name_email_index]
            }
            else if(data_types[j].textContent == 'lastname'){
                data_sql += (j==0)? titles[Math.floor(Math.random()*9)] : ", " + titles[Math.floor(Math.random()*9)]
            }
            else if(data_types[j].textContent == 'rollno'){
                data_sql += (j==0)? Math.floor(Math.random()*20) : ", " + Math.floor(Math.random()*20)
            }
            else if(data_types[j].textContent == 'section'){
                data_sql += (j==0)? alphabets[Math.floor(Math.random()*4)] : ", " + alphabets[Math.floor(Math.random()*4)]
            }
            else if(data_types[j].textContent == 'class'){
                data_sql += (j==0)? Math.floor(Math.random()*9 + 1) : ", " + Math.floor(Math.random()*9 + 1)
            }
            else if(data_types[j].textContent == 'email'){
                sql = names[name_email_index] + "@"
                        + hosts[name_email_index] + ".com"
                data_sql += (j==0)? sql : ", " + sql
            }
            else{
                console.log("data type not matched")
            }
            
        }
        sqldiv.innerHTML +=  sqlstart + data_sql + sqlend + "<br>"
   }
   showdatadiv.appendChild(sqldiv)
})