document.addEventListener('DOMContentLoaded', function() {
    
    const text = "Well, here we are.";
    const textCredentials = "/credentials";
    let index = 0;
    let indexCredentials = 0;
    const consoleDiv = document.getElementById("console");
    const credentialsDiv = document.getElementById("credentials");

    function typeWriter() {
        if (index < text.length) {
            consoleDiv.innerHTML = text.substring(0, index + 1) + '<span class="cursor">|</span>';
            index++;
            setTimeout(typeWriter, 100);
        } else {
            blinkCursor();
        }
    }


    function typeWriterCredentials() {
        if (indexCredentials < textCredentials.length) {
            credentialsDiv.innerHTML = textCredentials.substring(0, indexCredentials + 1) + '<span class="cursor">|</span>';
            indexCredentials++;
            setTimeout(typeWriterCredentials, 100);
        } else {
            blinkCursor()
        }
    }
    
    function blinkCursor() {
        setInterval(() => {
            const cursor = document.querySelectorAll('.cursor');
            cursor.forEach(el => {
                el.style.visibility = el.style.visibility === 'hidden' ? 'visible' : 'hidden';
            });
        }, 500);
    }
    
    //typeWriterCredentials();
    typeWriter();

    const repos = [
        { 
            name: 'cloudmonitor-space ->', 
            url: 'https://github.com/faustomontiel/cloudmonitor', 
            desc: 'A cluoud monitor based on AWS Services: Linux, Python, AWS.', 
            image: 'assets/cloudmonitor.gif' 
        },
        { 
            name: 'ecommerce-microservices ->', 
            url: 'https://github.com/faustomontiel/ecommerce-microservices', 
            desc: 'AWS Lambda, API Gateway, RDS, DynamoDB, SQS', 
            image: 'assets/aws-icon.svg' 
        }
    ];
    
    const repoList = document.getElementById('repo-list');
    
    repos.forEach(repo => {
        const li = document.createElement('li');
        li.classList.add('repo-item');
    
        const img = document.createElement('img');
        img.src = repo.image;
        img.alt = repo.name;
        img.classList.add('repo-img');
    
        const a = document.createElement('a');
        a.href = repo.url;
        a.textContent = repo.name;
    
        const desc = document.createElement('p');
        desc.textContent = repo.desc;
        desc.classList.add('repo-desc');
    
        li.appendChild(img);
        li.appendChild(a);
        li.appendChild(desc);
    
        repoList.appendChild(li);
    });
    

});