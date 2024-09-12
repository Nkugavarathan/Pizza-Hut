  // Function to update the progress bar width based on percentage
  function updateProgress(barId, percentage) {
    var progressBar = document.getElementById(barId);
    progressBar.style.width = percentage + '%';
    progressBar.innerHTML = percentage + '%';
  }

  // Example usage: Update progress for each bar
  updateProgress('progress1', 98);
  updateProgress('progress2', 90);
  updateProgress('progress3', 85);
  updateProgress('progress4', 80);

 let header=document.querySelector('.head');
 let button=document.querySelector('.buttonmenuclose');

 button.addEventListener('click',()=>{
header.classList.toggle('nav-open'); //toggle s
 });

//animation scrool
 document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
          if (entry.isIntersecting) {
              entry.target.classList.add('show');
          } else {
              entry.target.classList.remove('show');
          }
      });
  });

  const hiddenElements = document.querySelectorAll('.hidden,.hiddenoffer,.hiddeveg,.hiddechicken');
  hiddenElements.forEach((el) => observer.observe(el));
});

let btninfo = document.getElementsByClassName('.btninfo');

btninfo.addEventListener('click',(e)=>{
  e.preventDefault();
})