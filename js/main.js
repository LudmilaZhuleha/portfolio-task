const sendData = async(data) => {
    try {
        const response = await fetch("telegram.php", {
            method: 'POST',
            body: data,
        });
        const result = await response.json();
        console.log(`Thank you! Your request has been received`);
        return result;
    } catch (error){
        console.log(error);
    }
}

const forms = document.querySelectorAll('form');
forms.forEach((form)=>{
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        const formData = new FormData(this);
        console.log(formData);
        sendData(formData);
        form.reset();
    })
});
