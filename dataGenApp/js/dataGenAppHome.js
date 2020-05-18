const btn = document.getElementById("excelgenerate")
const addbtn = document.getElementById("addfield")
const show_field = document.getElementById("input-info")

const names = [
    'pritom', 'rishi', 'swapnil', 'chinmoy', 'jibon', 
    'rituraj', 'nimesh', 'gautam', 'anish', 'suvashish'
]

const titles = [
    'deka', 'gogoi', 'gautam', 'kashyap', 'bhattacharya',
    'garg', 'parashar', 'chamuah', 'bhaduri'
]

const alphabets = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
    'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
]

const hosts = [
    'gmail', 'yahoo', 'hotmail', 'microsoft', 'facebook', 'rediffmail'
]


addbtn.addEventListener("click", ()=>{
    let new_div = document.createElement("div")
    let field_name_span = document.createElement("span")
    let datatype_span = document.createElement("span")
    let del_btn = document.createElement("button")

    new_div.className = "field_content"
    field_name_span.className = "field_name"
    datatype_span.className = "field_datatype"
    del_btn.className = "del_span_btn"

    field_name_span.textContent = document.getElementById("generate-field-name").value
    datatype_span.textContent = document.getElementById("generate-datatype").value
    del_btn.textContent = "Delete"

    new_div.appendChild(field_name_span)
    new_div.appendChild(datatype_span)
    new_div.appendChild(del_btn)

    show_field.appendChild(new_div)

    del_btn.addEventListener("click", (event)=>{
        event.target.parentElement.remove()
    })

    document.getElementById("generate-field-name").value = ""
    document.getElementById("generate-datatype").value = ""
})


btn.addEventListener("click", ()=>{
    document.getElementsByClassName("downloadfile")[0].id = "exceldownload"    
    
    const showdatadiv = document.getElementsByClassName("showdata")[0]
    const no_colums = document.querySelectorAll("#input-info > div")
    const field_names = document.querySelectorAll(".field_name")
    const data_types = document.querySelectorAll(".field_datatype")
    const row = document.createElement("tr")
    const total_data_rows = document.getElementById("row-number").value
    const table = document.createElement("table")

    table.id = "datatable"

    table.appendChild(row)

    //create the table header
    for(let i=0; i<no_colums.length; i++){
        
        const column = document.createElement("th")
        column.textContent = field_names[i].textContent
        row.appendChild(column)
    }

    for(let i=0; i<total_data_rows ; i++){
        const data_row = document.createElement("tr")        

        let name_email_index = Math.floor(Math.random()*9)  
        for(let j=0; j<no_colums.length; j++){

            if(data_types[j].textContent == 'firstname'){
                const data_column = document.createElement("td")
                data_column.textContent = names[name_email_index]
                data_row.appendChild(data_column)
            }
            else if(data_types[j].textContent == 'lastname'){
                const data_column = document.createElement("td")
                data_column.textContent = titles[Math.floor(Math.random()*9)]
                data_row.appendChild(data_column)
            }
            else if(data_types[j].textContent == 'rollno'){
                const data_column = document.createElement("td")
                data_column.textContent = Math.floor(Math.random()*20)
                data_row.appendChild(data_column)
            }
            else if(data_types[j].textContent == 'section'){
                const data_column = document.createElement("td")
                data_column.textContent = alphabets[Math.floor(Math.random()*4)]
                data_row.appendChild(data_column)
            }
            else if(data_types[j].textContent == 'class'){
                const data_column = document.createElement("td")
                data_column.textContent = Math.floor(Math.random()*9 + 1)
                data_row.appendChild(data_column)
            }
            else if(data_types[j].textContent == 'email'){
                const data_column = document.createElement("td")
                string = names[name_email_index] + "@"
                        + hosts[Math.floor(Math.random()*(hosts.length - 1))] + ".com"
                data_column.textContent = string
                data_row.appendChild(data_column)
            }
            else{
                console.log("data type not matched")
            }
        }
        table.appendChild(data_row)
   }

   showdatadiv.appendChild(table)

}

)
