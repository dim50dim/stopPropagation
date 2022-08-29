document.querySelector('.questions').onclick = (event) => {
      event.stopPropagation();
   const li = event.target;

  if(li.nodeName !== 'LI') return;
  if(li.getAttribute('data') === '111'){
    li.classList.toggle('bg-orange');
  }else {
    li.classList.toggle('bg-blue');

  }
    //  console.log(li);

    //   console.log(e.target);
    //   let data = document.querySelectorAll('LI');
    //   if(data.getAttribute('data') === '111'){
    //     data.getAttribute('data').classList.toggle('bg-orange');

    //   } else{
    //     data.getAttribute('data').classList.toggle('bg-blue');
    //   }

}