/*                             IBM                                */
const calculateForm = document.getElementById('calculate_form'),
      calculateCm = document.getElementById('calculate_cm'),
      calculateKg = document.getElementById('calculate_kg'),
      calculateMessage = document.getElementById('calculate_message');

const calculateBMI = (e) =>{
      e.preventDefault()

      if(calculateCm.value ==='' || calculateKg.value ==='' ){
        
        calculateMessage.textContent = 'Insert your height and your Weight👍'

        setTimeout(() => {
            calculateMessage.textContent = ''
        }, 3000)
      }else{
      const cm = calculateCm.value/100,
            kg = calculateKg.value,
            bmi = Math.round(kg / (cm*cm))

            if(bmi < 18.5){
                calculateMessage.textContent = `Your BMI is ${bmi} you are skinny` 
            }else if(bmi <25){
                calculateMessage.textContent = `Your BMI is ${bmi} you are healthy`
            }else{
                calculateMessage.textContent = `Your BMI is ${bmi} you are overweight`
            }
            setTimeout(() => {
                calculateMessage.textContent = ''
            }, 3000)
     }
}     

calculateForm.addEventListener('submit',calculateBMI)

/*                  RESPONSIVE             */
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('nav');

hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
})
/*             Sticky header                  */
const header = document.querySelector('header') ;
function stickyHeader(){
    if(window.scrollY >= 90){
        header.classList.add('sticky');
    }else{
        header.classList.remove('sticky');
    }
}
window.addEventListener('scroll',stickyHeader);

document.addEventListener('DOMContentLoaded', function() {
    const footer = document.querySelector('footer');
    const black_filter = document.querySelector('.black_filter');

    if (footer && black_filter) {
        const updateHeight = () => {
            black_filter.style.height = `${footer.offsetHeight}px`;
        };

        updateHeight(); // Appliquer une première fois

        new ResizeObserver(updateHeight).observe(footer);
    }
});


