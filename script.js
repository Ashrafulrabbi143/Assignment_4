let interviewList = [];
let rejectedList = [];
let currentStatus = 'all'

let total = document.getElementById('total');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');

const allFilterBtn = document.getElementById('All_filter_btn');
const interviewFilterBtn = document.getElementById('interview_filter_btn');
const rejectedFilterBtn=document.getElementById('rejected_filter_btn')

const allCardsection = document.getElementById('allCards');
//console.log(allCardsection.children.length);
const mainContainer = document.querySelector('main');
//console.log(mainContainer);
const filteredSection=document.getElementById('filtered_section')

function CalculateCount() {
  total.innerText = allCardsection.children.length//3
  interviewCount.innerText = interviewList.length
  rejectedCount.innerText=rejectedList.length
}
CalculateCount()

function toggleStyle(id) {
  //console.log("click",id);
  allFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white')
  interviewFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white')
  rejectedFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white')

  allFilterBtn.classList.add('bg-[#F1F2F4]', 'text-black')
  interviewFilterBtn.classList.add('bg-[#F1F2F4]', 'text-black')
  rejectedFilterBtn.classList.add('bg-[#F1F2F4]', 'text-black')

  const selected = document.getElementById(id)
  currentStatus=id
  //console.log(selected);

  selected.classList.remove('bg-[#F1F2F4]', 'text-black')
  selected.classList.add('bg-[#3B82F6]', 'text-white')
  
  if (id == 'interview_filter_btn') {
    allCardsection.classList.add('hidden');
    filteredSection.classList.remove('hidden');
    renderinterview()
     
  }
  else if (id == 'All_filter_btn') {
    allCardsection.classList.remove('hidden');
    filteredSection.classList.add('hidden');
    
  }
  else if (id == 'rejected_filter_btn') {
    allCardsection.classList.add('hidden');
    filteredSection.classList.remove('hidden');
    renderRejected()
  }

}

mainContainer.addEventListener('click', function (event) {
  // console.log(event.target.classList.contains('interview_btn'));
  
  console.log(event.target.classList.contains('interview_btn'));

  if (event.target.classList.contains('interview_btn')) {
    
const parentNode = event.target.parentNode.parentNode;
  const mobileName = parentNode.querySelector('.mobileName').innerText
  const reactNative = parentNode.querySelector('.reactNative').innerText
  const status = parentNode.querySelector('.status').innerText
  const notes = parentNode.querySelector('.notes').innerText
    //console.log(mobileName,reactNative,status,notes);
      parentNode.querySelector('.status').innerText='Interview'
  const cardInfo = {
    mobileName,
    reactNative,
    status:'Interview',
    notes
  }
  //console.log(cardInfo);
    const mobileExist = interviewList.find(item => item.mobileName == cardInfo.mobileName)
   

  if (!mobileExist) {
    interviewList.push(cardInfo)
    }
    rejectedList=rejectedList.filter(item=> item.mobileName != cardInfo.mobileName)

    CalculateCount()
    // renderinterview()
    if (currentStatus == 'rejected_filter_btn') {
      renderRejected()
    }
    

  }
  else if (event.target.classList.contains('rejected_btn')) {
    
const parentNode = event.target.parentNode.parentNode;
  const mobileName = parentNode.querySelector('.mobileName').innerText
  const reactNative = parentNode.querySelector('.reactNative').innerText
  const status = parentNode.querySelector('.status').innerText
  const notes = parentNode.querySelector('.notes').innerText
    //console.log(mobileName,reactNative,status,notes);
      parentNode.querySelector('.status').innerText='Rejected'
  const cardInfo = {
    mobileName,
    reactNative,
    status:'Rejected',
    notes
  }
  //console.log(cardInfo);
    const mobileExist = rejectedList.find(item => item.mobileName == cardInfo.mobileName)
   

  if (!mobileExist) {
    rejectedList.push(cardInfo)
    }
    interviewList = interviewList.filter(item => item.mobileName != cardInfo.mobileName)
    if (currentStatus == "interview_filter_btn") {
      renderinterview()
    }
    
    CalculateCount()
  //renderRejected()

  }
  
})

function renderinterview() {
  filteredSection.innerHTML = ''
  for (let interview of interviewList) {
    console.log(interview);
    let div = document.createElement('div');
    div.className='card flex justify-between border p-8'
    div.innerHTML = `
       <div class="space-y-5">
          <!--part 1 -->
          <div>
            <p class="mobileName text-1xl font-bold">${interview.mobileName}</p>
            <p class="reactNative">React Native Developer</p>
          </div>
          <!--part 2-->
          <div>
            <p>Remote • Full-time • $130,000 - $175,000</p>
          </div>
          <!--part 3-->
          <p class="status"> ${interview.status}</p>
          <p class="notes">Build cross-platform mobile applications using React Native. Work on products used by
            millions of users
            worldwide.</p>
          <div class="flex gap-5">
            <button class="interview_btn bg-green-200 px-4 py-2">interview</button>
            <button class="rejected_btn bg-red-200 px-4 py-2">Rejected</button>
          </div>
        </div>
        <!--main part 2-->
        <div>
          <button id="btn_delete"><i class="fa-solid fa-calendar-xmark"></i></button>
        </div>
    `
    filteredSection.appendChild(div)

  }
}

function renderRejected() {
  filteredSection.innerHTML = ''
  for (let Rejected of  rejectedList) {
    //console.log(Rejected);
    let div = document.createElement('div');
    div.className='card flex justify-between border p-8'
    div.innerHTML = `
       <div class="space-y-5">
          <!--part 1 -->
          <div>
            <p class="mobileName text-1xl font-bold">${Rejected.mobileName}</p>
            <p class="reactNative">React Native Developer</p>
          </div>
          <!--part 2-->
          <div>
            <p>Remote • Full-time • $130,000 - $175,000</p>
          </div>
          <!--part 3-->
          <p class="status"> ${Rejected.status}</p>
          <p class="notes">Build cross-platform mobile applications using React Native. Work on products used by
            millions of users
            worldwide.</p>
          <div class="flex gap-5">
            <button class="interview_btn bg-green-200 px-4 py-2">interview</button>
            <button class="rejected_btn bg-red-200 px-4 py-2">Rejected</button>
          </div>
        </div>
        <!--main part 2-->
        <div>
          <button id="btn_delete"><i class="fa-solid fa-calendar-xmark"></i></button>
        </div>
    `
    CalculateCount()
    filteredSection.appendChild(div)

  }
}