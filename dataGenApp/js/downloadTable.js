$(".downloadfile").click(function(){

  let filename = document.querySelector("#filename").value

    if(document.querySelector(".downloadfile").id == "exceldownload"){

      if(document.querySelector(".downloadfile").hasAttribute("href")){
        document.querySelector(".downloadfile").removeAttribute("href")
      }
    
      $("#datatable").table2excel({
    
        // exclude CSS class
    
        // exclude:".noExl",
    
        name:"Worksheet Name",
    
        filename:filename,//do not include extension
    
        fileext:".xls" // file extension
    
      });
    }

    else if(document.querySelector(".downloadfile").id == "txtdownload"){

      if(document.querySelector(".downloadfile").hasAttribute("href")){
        document.querySelector(".downloadfile").removeAttribute("href")
      }

      document.getElementById("txtdownload").download = filename + ".txt"
      var text = document.getElementById("txtdiv").innerText
      var data = new Blob([text], {type: 'text/plain'});
      
      var url = window.URL.createObjectURL(data);
      
      document.querySelector("#txtdownload").href = url;
    }

    else if(document.querySelector(".downloadfile").id == "csvdownload"){

      if(document.querySelector(".downloadfile").hasAttribute("href")){
        document.querySelector(".downloadfile").removeAttribute("href")
      }

      document.getElementById("csvdownload").download = filename + ".txt"
      var text = document.getElementById("csvdiv").innerText
      var data = new Blob([text], {type: 'csv/plain'});
      
      var url = window.URL.createObjectURL(data);
      
      document.querySelector("#csvdownload").href = url;
    }

    else if(document.querySelector(".downloadfile").id == "sqldownload"){

      if(document.querySelector(".downloadfile").hasAttribute("href")){
        document.querySelector(".downloadfile").removeAttribute("href")
      }

      document.getElementById("sqldownload").download = filename + ".txt"
      var text = document.getElementById("sqldiv").innerText
      var data = new Blob([text], {type: 'txt/plain'});
      
      var url = window.URL.createObjectURL(data);
      
      document.querySelector("#sqldownload").href = url;
    }
    
    });
