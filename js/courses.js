const listItems = document.querySelectorAll('.lii');
const description = document.querySelector('.description');

const descriptionContent = [
    
        ` <h2>Python Programming (Includes Game development)</h2>
        <p>This is a four-week interactive training programme that consists of three classes per week. You'll learn Python programming, data structures, advanced libraries, and game development. There is an optional project with mentorship, and based on performance, an internship interview may be offered. At the end of the programme, you will also receive an eCertificate from AI-Shala.
        </p>
        <h3>Training program benefits:</h3>
        <ol class="course_benefits">
            <li class="li1">
                Python programming live lectures (on the spot doubt clearance)

            </li>
            <li class="li2">
                Basic and advanced python libraries

            </li>
            <li class="li3">
                Game development lectures

            </li>
            <li class="li4">
                Quizzes for Self assessment

            </li>
            <li class="li5">
                Live lectures with coding

            </li>
            <li class="li6">
                Project for performance evaluation (optional)

            </li>
            <li class="li7">
                Opportunity for internship with AI-Shala

            </li>
            <li class="li8">
                Certificate program

            </li>
        </ol>

        <a href='https://docs.google.com/forms/d/e/1FAIpQLSfmuOv54VQEiBTJxXTPRUoOXh6Y4OuHkcbrDIs2fJ9G1ADNRQ/viewform' target="_blank">
            <button class="register">
                Register Now!
            </button>
        </a> `,


        ` <h2>Dive in to Machine Learning Bootcamp</h2>
        <p>With lectures using the flipped classroom learning paradigm and interview coaching, participants in this three-month machine learning training programme will learn how to approach and solve problems using machine learning. On the basis of their performance, they will finish a project of their choice, present, and have the chance to interview for an internship with one of our hiring partners. Upon programme completion, AI-Shala will provide an eCertificate to each participant.</p>
        <h3>Training program benefits:</h3>
        <ol class="course_benefits">
            <li class="li1">
            Learn how to approach a problem using Machine Learning

            </li>
            
            <li class="li2">
            Flipped classroom learning model and live doubt clearance

            </li>
            <li class="li3">
            Mentorship for a startup or the research paper post completion

            </li>
            <li class="li4">
            3/6 month internship opportunity with our hiring partners post completion

            </li>
            <li class="li5">
            Learn how to write a research paper

            </li>
            <li class="li6">
            Includes dedicated two months for a project which can extend to either a research paper or a startup

            </li>
            <li class="li7">
            ML interview preparation from industry experts working in top companies

            </li>
            <li class="li8">
            Certificate program

            </li>
        </ol>

        <a href='https://docs.google.com/forms/d/e/1FAIpQLSfCNNBwkwhxYTiNKb9RqldHIEs0Rr4I7P8SIA3lm0nDnUgpdA/viewform' target="_blank">
            <button class="register">
                Register Now!
            </button>
        </a> `,


        ` <h2>Advance Machine Learning</h2>
        <p>Lectures on machine learning and entrepreneurship are included in this six-week summer training programme, along with advice on how to prepare for interviews, a project that must be completed, and prospective internship and incubator chances. AI-Shala and IIITD-IC will work together to provide participants with an eCertificate, with opportunities based on performance and IIITD-IC policy.</p>
        <h3>Training program benefits:</h3>
        <ol class="course_benefits">
            <li class="li1">
            Machine learning lectures (how to approach and solve problems using ML)

            </li>
            
            <li class="li2">
            Interview guidance

            </li>
            <li class="li3">
            Quizzes for Self assessment

            </li>
            <li class="li4">
            Lectures on entrepreneurship

            </li>
            <li class="li5">
            Project for performance evaluation

            </li>
            <li class="li6">
            Opportunity for internship with AI-Shala hiring partners
            </li>
            <li class="li7">
            Opportunity for incubation at IIITD-IC

            </li>
            <li class="li8">
            Certificate program jointly from AI-Shala and IIITD-IC

            </li>
        </ol>

        <a  target="_blank">
            <button class="register">
                Comming Soon
            </button>
        </a> `,

        `
        <div class="course_soon">
        <button>Coming soon</button>
        </div>`,
        `
        <div class="course_soon">
        <button>Coming soon</button>
        </div>`,
        `
        <div class="course_soon">
        <button>Coming soon</button>
        </div>`,
        `
        <div class="course_soon">
        <button>Coming soon</button>
        </div>`,
];

listItems.forEach((item, index) => {
    item.addEventListener('mouseover', () => {
        listItems.forEach(item => {
            item.classList.remove('active');
        });
        item.classList.add('active');
        description.innerHTML = descriptionContent[index];
        
    });
});
description.innerHTML = descriptionContent[0];
listItems[0].classList.add('active');
