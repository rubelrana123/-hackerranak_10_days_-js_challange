let button = document.getElementById("btn");

  button.addEventListener('click', function () {
     let current = parseInt(button.innerHTML);
      current += 1 ;
      button.innerHTML = current;
      
      
  });