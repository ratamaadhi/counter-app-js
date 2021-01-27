// set initial count
let count = 0;

// select value and button
const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    // get class on current target
    const styles = e.currentTarget.classList;
    if(styles.contains('decrease')){
      count = count - 1;
    }else if(styles.contains('increase')){
      count = count + 1;
    }else {
      count = 0;
    }

    if(count > 0){
      value.style.color = "green";
    }else if(count < 0){
      value.style.color = "red";
    }else{
      value.style.color = "#222";
    }

    value.textContent = count;
  });
});
