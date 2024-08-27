// script.js

let enrolledCourses = [];
let users = [];

function showPage(pageId) {
    document.querySelectorAll('.page').forEach(function(page) {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
}

function enrollCourse(courseName) {
    if (!enrolledCourses.includes(courseName)) {
        enrolledCourses.push(courseName);
        alert(`You have successfully enrolled in ${courseName}`);
        updateProfile();
    } else {
        alert(`You are already enrolled in ${courseName}`);
    }
}

function updateProfile() {
    document.getElementById('profile-courses').textContent = enrolledCourses.length;
}

function editProfile() {
    const newName = prompt("Enter your new name:", "John Doe");
    const newEmail = prompt("Enter your new email:", "john.doe@example.com");

    if (newName && newEmail) {
        document.getElementById('profile-name').textContent = newName;
        document.getElementById('profile-email').textContent = newEmail;
    }
}

function viewCourses() {
    document.getElementById('admin-heading').textContent = "Courses List";
    const courseList = [
        "Introduction to HTML",
        "CSS Basics",
        "JavaScript Fundamentals",
        "Responsive Design",
        "Backend Development with Node.js"
    ];
    const listElement = document.getElementById('admin-list');
    listElement.innerHTML = "";
    courseList.forEach(course => {
        const li = document.createElement('li');
        li.textContent = course;
        listElement.appendChild(li);
    });
    document.getElementById('admin-content').style.display = 'block';
}

function viewUsers() {
    document.getElementById('admin-heading').textContent = "Users List";
    const listElement = document.getElementById('admin-list');
    listElement.innerHTML = "";
    users.forEach(user => {
        const li = document.createElement('li');
        li.textContent = `${user.name} (${user.email}) - Enrolled Courses: ${user.courses.length}`;
        listElement.appendChild(li);
    });
    document.getElementById('admin-content').style.display = 'block';
}

// Handle Registration Form Submission
document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (name && email && password) {
        users.push({ name, email, password, courses: [] });
        alert('Registration successful!');
        showPage('profile');
        document.getElementById('profile-name').textContent = name;
        document.getElementById('profile-email').textContent = email;
    }
});

// Load the courses dynamically into the Courses page
function loadCourses() {
    const courses = [
        "Introduction to HTML",
        "CSS Basics",
        "JavaScript Fundamentals",
        "Responsive Design",
        "Backend Development with Node.js"
    ];
    
    const courseListElement = document.querySelector('.course-list');
    courses.forEach(course => {
        const courseElement = document.createElement('div');
        courseElement.classList.add('course');
        courseElement.innerHTML = `
            <h3>${course}</h3>
            <p>Learn more about ${course}.</p>
            <a href="#" class="btn" onclick="enrollCourse('${course}')">Enroll Now</a>
        `;
        courseListElement.appendChild(courseElement);
    });
}

// Initialize the platform by loading the courses
loadCourses();

// Show the home page by default
showPage('home');
