
//function for create calculator
createCalculator = () => {
  return {
    //attributes
    display: document.querySelector('.display'),

    // -------------- methods

    //starting calculator
    init() {
      this.clickBtn()
      this.clearDisplay()
    },

    //select values the calculator for display
    btnForDisplat(values) {
      this.display.value += values
    },  

    //clear all values of input
    clearDisplay() {
      this.display.value = ''
    },

    
    result() {
      //perform the calculation
      let results = this.display.value

      try {
        //function eval that execut the code string in javascript
        results = eval(results)
        
        //if the value is empty or wrong for no return NaN
        if (!results) {
          Swal.fire({
            icon: 'error',
            iconColor: '#3f4555',
            title: 'Oops...',
            text: 'THERE WAS SOMETHING WRONG',
            showConfirmButton: true,
            confirmButtonText: 'OK',
            confirmButtonColor: '#3f4555',
          })
          return 
        }
        this.display.value = String(results)
      } catch(e) {
        Swal.fire({
          icon: 'error',
          iconColor: '#3f45558',
          title: 'Oops...',
          text: 'THERE WAS SOMETHING WRONG',
          showConfirmButton: true,
          confirmButtonText: 'OK',
          confirmButtonColor: '#3f4555',
        })
        return 
      }
    },

    clickBtn() {
      //click buttons
      document.addEventListener('click', (e) => {
        //insert value in display
        const el = e.target

        //get method and select elments that contain class btn-num
        if (el.classList.contains('btn-num')) {
          this.btnForDisplat(el.innerText)
        }

        //get method and select class btn-clear
        if (el.classList.contains('btn-clear')) {
          this.clearDisplay()
        }

        //get method for set results
        if (el.classList.contains('btn-eq')) {
          this.result()
        }
      })
    },
  }
}

const calculator = createCalculator()
//execut method for starting calculator
calculator.init()