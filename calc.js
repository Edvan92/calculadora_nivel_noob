function Calculator(){
    this.display = document.querySelector('.view');
    this.click = () => {
        document.addEventListener('click', (event) => {
            const elem = event.target
            if(elem.classList.contains('btn-num'))this.btnView(elem.innerText);
            if(elem.classList.contains('btn-clnAll'))this.cleanDspl();
            if(elem.classList.contains('btn-clean'))this.cleanDigit();
            if(elem.classList.contains('btn-equal'))this.workCalc();
        });

    }
    this.start = () => this.click();
    this.btnView = (valor) => this.display.value += valor;
    this.cleanDspl = () => this.display.value = ' ';
    this.cleanDigit = () => this.display.value = this.display.value.slice(0, -1);

    this.workCalc = () =>{
        let conta = this.display.value;
        try {
            conta = eval(this.display.value);
            if(!conta){
                alert('Conta Inválida');
                return;
            }this.display.value = String(conta);
        } catch (event) {
            alert('Conta Inválida');
            return;
            
        }
    }

}
const call = new Calculator();
call.start();