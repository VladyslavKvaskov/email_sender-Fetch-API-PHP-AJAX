# Welcome to the email_sender-Fetch-API repository
Here I've got the project that can be used to send emails using fetch API or XMLHttpRequest. You can see the demo [here](https://marinmover.com/email_sender/).

## A code for sending emails
    fetch('https://marinmover.com/email_sender/php/email_sender.php', {
                 method:   'POST',
                 'Accept': 'application/json',
                 headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                 body:'email_message=' + JSON.stringify({
                      'mail_to':'email to send to',
                      'mail_subject':'some subject',
                      'mail_message': 'some message'
                       })
            }).then(response => response.json()).then(data => {

                if (data.result == 'success') {
                    document.body.innerHTML = `Email was successfully sent to ${data.email_to}`;
                    console.log(data);
                }
                else
                    document.body.innerHTML = 'Error sending an email!';

            })
### Thanks for visiting this repository
In the .htaccess file on the server, I wrote
                                                    
    Header set Access-Control-Allow-Origin "*"
so you can access everything on the https://marinmover.com/ using fetch API. You can access https://marinmover.com/email_sender/php/email_sender.php using fetch API.
