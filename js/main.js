
const email_to = document.getElementsByClassName('email')[0];
const subject = document.getElementsByClassName('subject')[0];
const message = document.getElementsByClassName('message')[0];
const submit = document.getElementsByClassName('submit')[0];
const mail_data = document.getElementsByClassName('mail-data')[0];
mail_data.innerHTML = '';

submit.onclick = () => {

    if (email_to.value.length == 0 || subject.value.length == 0 || message.value.length == 0)
        submit.type = 'submit';
    else {
        submit.type = 'button';

        fetch('php/email_sender.php', {
             method:   'POST',
             'Accept': 'application/json',
             headers: {'Content-Type': 'application/x-www-form-urlencoded'},
             body:     'email_message=' + JSON.stringify({
                       'mail_to': email_to.value,
                       'mail_subject': subject.value,
                       'mail_message': message.value
                      })
        }).then(response => response.json()).then(data => {
            
            if (data.result == 'success') {
                mail_data.innerHTML = `Email was successfully sent to ${data.email_to}<br>` + mail_data.innerHTML;
                console.log(data);
            }
            else
                mail_data.innerHTML = 'Error sending an email!<br>' + mail_data.innerHTML;

        })
    }
}

