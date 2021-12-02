createCalculator = () => {
  return {
    //attributes
    display: document.querySelector('.display'),

    //methods
    init() {
      this.clickBtn()
      this.clearDisplay()
    },

    btnForDisplat(values) {
      this.display.value += values
    },  

    clearDisplay() {
      this.display.value = ''
    },

    result() {
      let results = this.display.value

      try {
        results = eval(results)

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
      document.addEventListener('click', (e) => {
        const el = e.target

        if (el.classList.contains('btn-num')) {
          this.btnForDisplat(el.innerText)
        }

        if (el.classList.contains('btn-clear')) {
          this.clearDisplay()
        }

        if (el.classList.contains('btn-eq')) {
          this.result()
        }
      })
    },

    


  }
}

const calculator = createCalculator()
calculator.init()