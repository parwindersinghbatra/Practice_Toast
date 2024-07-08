const horizontalposition = document.getElementById('horizontal-position');
const verticalposition = document.getElementById('vertical-position');
const type= document.getElementById('type')
const message = document.getElementById('message')
const duration = document.getElementById('duration')
const toast =  document.getElementById('toast-message')
const divValue = document.getElementById('toast_div')

const showToast = () =>{
    clearTimeout()
    const horizontal = horizontalposition.value
    const vertical = verticalposition.value
    toast.innerHTML = message.value
    toast.style.left = '';
    toast.style.right = '';
    toast.style.top = '';
    toast.style.bottom = '';
    if (horizontal === 'left' || horizontal === 'right') {
       toast.style[horizontal] = '20px'
    }
    if (vertical === 'top' || vertical === 'bottom') {
        toast.style[vertical] = '20px';
    }

    // if(type.value == 'Success'){
    //     toast.classList.remove('info', 'warning', 'error');
    //     toast.classList.add('success')
    // } else if(type.value == 'Error'){
    //     toast.classList.remove('success', 'info', 'warning');
    //     toast.classList.add('error')
    // }else if(type.value == 'Warning'){
    //     toast.classList.remove('success', 'info', 'error');
    //     toast.classList.add('warning')
    // } else if(type.value == 'Info'){
    //     toast.classList.remove('success', 'warning', 'error');
    //     toast.classList.add('info')
    // }
    toast.classList = `${type.value.toLowerCase()}`;
    toast.style.display = 'block';
    toast.style.transition='all 0.8s ease'
    setTimeout(() =>{
        toast.style.display = 'none';
        toast.style.transition='0.8s ease'
    }, duration.value*1000)

}
document.getElementById('show-toast').addEventListener('click',showToast)