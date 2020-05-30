const addbtn = document.getElementById("addfield")
const show_field = document.getElementById("input-info")

const names = [
    'pritom', 'adam', 'peter', 'chris', 'jhon', 
    'dan', 'ben', 'josh', 'dwayne', 'tonny'
]

const titles = [
    'deka', 'griffin', 'balmer', 'evans', 'stark',
    'noah', 'dahnam', 'hanks', 'young'
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


