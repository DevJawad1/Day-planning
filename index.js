const dinpOne=()=>{
    document.querySelector('.inp-div').style.display="block"
    document.querySelector('.inp-div-2').style.display="none"
}
dinpOne()

const dinpTwo=()=>{
    document.querySelector('.inp-div-2').style.display="block"
    document.querySelector('.inp-div').style.display="none"
}

let allTodoUser=[]
if(localStorage.allTodoUsers){
    let getUser=JSON.parse(localStorage.getItem('allTodoUsers'))
    allTodoUser=getUser
}
let getUser=JSON.parse(localStorage.getItem('allTodoUsers'))
console.log(pss);
const signupBtn=()=>{
    if(fn.value==""|| un.value==""|| pnum.value==""|| pss.value==""){
        alert("Fill all the gap")
    }
    else{
        if(getUser){
            let confirm1=false
            for (let index = 0; index < getUser.length; index++) {
                if(getUser[index].phoneNo==pnum.value){
                    confirm1=true
                }
            }
            if(confirm1==true){
                alert("You have sign up before proceed to log in")
            }
        }
        else{
            let eachBankUser={
                firstname:fn.value,
                lastname:un.value,
                phoneNo:pnum.value,
                password:pss.value,
                allNote:[],
                allTodo:[],
                eachNote:[],
                eachTodo:[],
            }
            allTodoUser.push(eachBankUser)
            localStorage.setItem('allTodoUsers', JSON.stringify(allTodoUser))
            document.querySelector('.inp-div').style.display="none"
            document.querySelector('.inp-div-2').style.display="block"
        }
    }
}

// log in code

const loginBtn=()=>{
    let confirm2=false
    if(pnlog.value=="" || pslog.value==""){
        alert("Fill in all details")
    }
    else{
        if(getUser){
            for (let index = 0; index < getUser.length; index++) {
                if(pnlog.value==getUser[index].phoneNo && pslog.value==getUser[index].password){
                    confirm2=true
                    localStorage.setItem('userId', index)
                }
            }
            if(confirm2==true){
                window.location.href="dashboard.html"
            }
            else{
                alert("Wrong user Credential or Information")
            }
        }
    }
}