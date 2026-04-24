// Homepage: append load timestamp to footer
function addLoadTimestamp() {
    var footer = document.querySelector('footer');
    var p = document.createElement('p');
    var now = new Date();
    var text = document.createTextNode('Page loaded on: ' + now.toString());
    p.appendChild(text);
    footer.appendChild(p);
}

// Contact: validate name and email before form submission
function validateForm() {
    var name = document.getElementById('name');
    var email = document.getElementById('email');
    if (name.value === '' || email.value === '') {
        alert('Please fill out all required fields.');
        return false;
    } else {
        alert('Your message has been sent successfully!');
        return false;
    }
}

// Projects: toggle visibility of a project description paragraph
function toggleDescription(id) {
    var desc = document.getElementById(id);
    if (desc.style.display === 'none') {
        desc.style.display = 'block';
    } else {
        desc.style.display = 'none';
    }
}

// CV: attach hover effects to blockquote via addEventListener
function setupBlockquote() {
    var blockquote = document.querySelector('blockquote');
    if (blockquote) {
        blockquote.addEventListener('mouseover', function () {
            blockquote.style.backgroundColor = '#d4edda';
            blockquote.style.fontStyle = 'italic';
        });
        blockquote.addEventListener('mouseout', function () {
            blockquote.style.backgroundColor = '';
            blockquote.style.fontStyle = '';
        });
    }
}

setupBlockquote();
