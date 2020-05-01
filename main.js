let userName = document.getElementById("userName")
let userEmail = document.getElementById("userEmail")
let userPassword = document.getElementById("userPassword")
let userMsg = document.getElementById("userMsg")
let sendBtn = document.getElementById("sendBtn")
       

let createData = document.getElementById("createData")
let updatedata = document.getElementById("updatedata")
let no = document.getElementById("no")
let yes = document.getElementById("yes")

var usersInfo =[]

// storage data in object and push it in array 
       sendBtn.addEventListener("click",function(){
            
        var user = {
            userName : userName.value ,
            userEmail : userEmail.value ,
            userPassword : userPassword.value ,
            userMsg : userMsg.value 
        }
        if(createData.value ==="create"){
            usersInfo.push(user)

        }else if (createData.value ==="update"){
            usersInfo[updatedata.value] = user
        }
            showData()
          resetForm()
        })

// show data of user in table 
        function showData(){
            var tableData = ""
            for(var i = 0 ; i<usersInfo.length ; i++){
                tableData+="<tr><td>"+usersInfo[i].userName
                +"</td><td>"+usersInfo[i].userEmail+"</td><td>"+usersInfo[i].userPassword
                +"</td><td>"+usersInfo[i].userMsg+
                "</td><td><button class='btn btn-danger' onClick='deleteUser("+i+")'>Delete</button></td><td><button class='btn btn-primary' onClick='updateUser("+i+")'>Update</button></td></tr>"
            }
            document.getElementById("tableBody").innerHTML=tableData
        }

        
        
        //--------------------- delete function with confirm massage 
            function   checkYes(){
                // deleteUser() = false
                console.log("hello")
              }
              function deleteUser(id){
                let confirmData = confirm("do you want to delete this user")
    
                if(!confirmData){
                    usersInfo[id]
                }else{
                    usersInfo.splice(id,1)
                    showData()
                }
           
            
                
            }

        //update function 

        function updateUser(id){
          userName.value = usersInfo[id].userName
          userEmail.value = usersInfo[id].userEmail
          userPassword.value = usersInfo[id].userPassword
          userMsg.value = usersInfo[id].userMsg
       createData.value = "update" ;
       updatedata.value=id
                
            }
            function resetForm(){
                createData.value ="create" ;
                userName.value = ''
          userEmail.value = ''
          userPassword.value = ''
          userMsg.value = ''
            }


           