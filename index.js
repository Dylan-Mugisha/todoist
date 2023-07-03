const menu = document.getElementById('viewer')
const drop = document.getElementById('optione')
const bod = document.getElementById('bodyy')
const openeR =document.getElementById('opener') 
const closeR = document.getElementById('closer')

function viewIt(){
    drop.classList.toggle('view')
    bod.classList.toggle('stop')
    openeR.classList.toggle('open')
    closeR.classList.toggle('fade')


}