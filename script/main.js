let share_btn = document.getElementById("share-icon");
share_btn.addEventListener('click' , ()=>{
  let option_share = document.getElementById('main-middle');
  option_share.style.transition = '.3s';
  if(option_share.style.opacity === '1'){
    option_share.style.opacity = '0';
    }  else {
        option_share.style.opacity = '1';

  } 
})