const menuToggler = document.querySelector('.toggler')
const body = document.querySelector('body')

menuToggler.addEventListener('click', ()=>{
    body.classList.toggle('active')
})

const date = new Date()
const copyright = document.querySelector('.copy')
copyright.textContent = date.getFullYear()




//REVIEWS DATA
const reviews = [
    {
    id : 1,
    name: 'Albert Kudaya',
    job: 'Web Designer', 
    img: './Assets/jonas.jpg',
    text: "How can a proud and brave people like the Asante sit back and look while whitemen took away their king and chiefs, and humiliated them with a demand for the Golden Stool."
   },
   {
    id: 2,
    name: 'David Larweh',
    job: 'Software Developer', 
    img: './Assets/don1.jpg',
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aut explicabo earum sunt quaerat molestiae, itaque eum obcaecati maiores iste aspernatur quibusdam labore"
   },
   {
    id: 3,
    name: 'King Kode',
    job: 'Graphic Designer', 
    img: './Assets/kode.jpeg',
    text: "During her brother's reign, Yaa Asantewaa saw the Ashanti Confederacy go through a series of events that threatened its future, including civil war from 1883 to 1888."
   },
   {
    id: 4,
    name: 'Gene Assiome',
    job: 'UI/UX Designer', 
    img: './Assets/fem.png',
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aut explicabo earum sunt quaerat molestiae, itaque eum obcaecati maiores iste aspernatur quibusdam labore"
   },
   {
    id: 5,
    name: 'Ernest Antwi',
    job: 'Video Animator', 
    img: './Assets/team.png',
    text: "During her brother's reign, Yaa Asantewaa saw the Ashanti Confederacy go through a series of events that threatened its future, including civil war from 1883 to 1888."
   }
]

const img = document.getElementById('person-img')
const author = document.getElementById('author')
const job = document.getElementById('job')
const info = document.getElementById('info')

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const randomBtn = document.querySelector('.random-btn')

let currentItem = 0

window.addEventListener('DOMContentLoaded', ()=>{
   showperson()
})

prevBtn.addEventListener('click', ()=>{
    currentItem--
    if(currentItem < 0){
        currentItem = reviews.length-1
    }
    showperson()
})
nextBtn.addEventListener('click', ()=>{
    currentItem++
    if(currentItem > reviews.length-1){
        currentItem = 0
    }
   
    showperson()
})

randomBtn.addEventListener('click', ()=>{
    currentItem = Math.floor(Math.random()*reviews.length)
    showperson()
})

const showperson = () =>{
  let  item = reviews[currentItem]
    img.src = item.img
    author.textContent = item.name
    job.textContent = item.job
    info.textContent = item.text
}