let menu =<HTMLScriptElement> document.querySelector('.menu-icon');
let navbar = <HTMLScriptElement> document.querySelector('.navbar');


menu.onclick = () => {
    navbar.classList.toggle('open-menu')
    menu.classList.toggle("move");
};
menu.onscroll = () => {
    navbar.classList.remove('open-menu')
    menu.classList.remove("move");
};


// Email Js
function validate() {
    let name = <HTMLInputElement> document.querySelector('.name')
    let email =<HTMLInputElement> document.querySelector('.email')
    let msg =<HTMLInputElement> document.querySelector('.message')
    let sendBtn =<HTMLInputElement> document.querySelector('.send-btn')

    // name = {
    //     value: string
    // }
    sendBtn.addEventListener('click', (e) => {
        e.preventDefault()
        if (name.value == "" || email.value == "" || msg.value == "") {
            emptyerror();
        } else {
            sendmail(name.value,email.value,msg.value);
            success();
        }
    })
}

validate();

function swal(arg0: { title: string; text: string; icon: string; }):void {
    throw new Error("Function not implemented.");
}

function emptyerror():void {
    swal({
        title: "Oh No......",
        text: "Fields cannot be empty!",
        icon: "error",
      });
}

function sendmail(name:string,email:string,msg:string) {
    emailjs.send("service_v50tiwg","template_xn5klag",{
        to_name: name,
        from_name: email,
        message: msg,
        });
}
function success() {
    swal({
        title: "Email sent successfully",
        text: "If required, you will get a response within 48hrs",
        icon: "success",
        
      });
}

let header =<HTMLScriptElement> document.querySelector('header')

window.addEventListener('scroll', () => {
    header.classList.toggle('header-active',window.scrollY>0);
});

