const listItems = document.querySelectorAll('.lii');
const description = document.querySelector('.description');

const descriptionContent = [
    
    ` <h2>Python for Data Science</h2>
        <p>
            
    This program imparts machine learning knowledge, covering model learning, evaluation, and algorithms. Over 4 weeks with 3 lectures/week, participants learn problem-solving, receive interview guidance, and earn an eCertificate. Top performers can extend the program for an AI project.
        </p>
        <h3>Training program benefits:</h3>
        <ol class="course_benefits">
            <li>
            Knowledge in machine learning
    
            </li>
            <li>
            Interactive and engaging training
    
            </li>
            <li>
            Practical problem-solving skills
    
            </li>
            <li>
            Interview guidance for job readiness
    
            </li>
            <li>
            Opportunity for project extension
    
            </li>
            <li>
            eCertificate upon program completion
    
            </li>
            
        </ol>
    
        <div class="sec_link">
            <a href="./Python-for-data-science/index.html">Read more...</a>
        </div>
    
        <a href='blank' target="_blank">
            <button class="register">
                Register Now!
            </button>
        </a> `,

    ` <h2>Python Programming (Includes Game development)</h2>
        <p>
            The 4-week training program includes 3 classes/week for Python, data structures, advanced libraries, and game development. Participants may opt for a mentorship project and could be offered an internship interview based on performance. An eCertificate will be awarded upon completion.
        </p>
        <h3>Training program benefits:</h3>
        <ol class="course_benefits">
            <li>
                Python programming live lectures (on the spot doubt clearance)

            </li>
            <li>
                Basic and advanced python libraries

            </li>
            <li>
                Game development lectures

            </li>
            <li>
                Quizzes for Self assessment

            </li>
            <li>
                Live lectures with coding

            </li>
            <li>
                Project for performance evaluation (optional)

            </li>
            <li>
                Opportunity for internship with AI-Shala

            </li>
            <li>
                Certificate program

            </li>
        </ol>

        <a href='https://docs.google.com/forms/d/e/1FAIpQLSfmuOv54VQEiBTJxXTPRUoOXh6Y4OuHkcbrDIs2fJ9G1ADNRQ/viewform' target="_blank">
            <button class="register">
                Register Now!
            </button>
        </a> `,




    ` <h2>Dive in to Machine Learning Bootcamp</h2>
        <p>The 3-month machine learning training program uses flipped classroom learning and interview coaching. Participants will learn problem-solving using machine learning and finish a project, with the possibility of interviewing for an internship with a hiring partner. An eCertificate will be provided by AI-Shala upon completion.</p>
        <h3>Training program benefits:</h3>
        <ol class="course_benefits">
            <li>
            Learn how to approach a problem using Machine Learning

            </li>
            
            <li>
            Flipped classroom learning model and live doubt clearance

            </li>
            <li>
            Mentorship for a startup or the research paper post completion

            </li>
            <li>
            3/6 month internship opportunity with our hiring partners post completion

            </li>
            <li>
            Learn how to write a research paper

            </li>
            <li>
            Includes dedicated two months for a project which can extend to either a research paper or a startup

            </li>
            <li>
            ML interview preparation from industry experts working in top companies

            </li>
            <li>
            Certificate program

            </li>
        </ol>

        <a href='https://docs.google.com/forms/d/e/1FAIpQLSfCNNBwkwhxYTiNKb9RqldHIEs0Rr4I7P8SIA3lm0nDnUgpdA/viewform' target="_blank">
            <button class="register">
                Register Now!
            </button>
        </a> `,


    ` <h2>Advance Machine Learning</h2>
        <p>The 6-week summer program offers machine learning and entrepreneurship lectures, interview preparation, a project requirement, internships and incubators opportunities, and an eCertificate from AI-Shala and IIITD-IC. Performance determines eligibility.</p>
        <h3>Training program benefits:</h3>
        <ol class="course_benefits">
            <li>
            Machine learning lectures (how to approach and solve problems using ML)

            </li>
            
            <li>
            Interview guidance

            </li>
            <li>
            Quizzes for Self assessment

            </li>
            <li>
            Lectures on entrepreneurship

            </li>
            <li>
            Project for performance evaluation

            </li>
            <li>
            Opportunity for internship with AI-Shala hiring partners
            </li>
            <li>
            Opportunity for incubation at IIITD-IC

            </li>
            <li>
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
        </div>`

];


listItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        listItems.forEach(item => {
            item.classList.remove('active');
        });
        item.classList.add('active');
        description.innerHTML = descriptionContent[index];
        // description.querySelector('h2').textContent = descriptions[index].mainHeading;
        // description.querySelector('p').innerHTML = descriptions[index].content;
        // description.querySelector('h3').textContent = descriptions[index].subHeading;
        // description.querySelector('.li1').textContent = descriptions[index].benefits[0];
        // description.querySelector('.li2').textContent = descriptions[index].benefits[1];
        // description.querySelector('.li3').textContent = descriptions[index].benefits[2];
        // description.querySelector('.li4').textContent = descriptions[index].benefits[3];
        // description.querySelector('.li5').textContent = descriptions[index].benefits[4];
        // description.querySelector('.li6').textContent = descriptions[index].benefits[5];
        // description.querySelector('.li7').textContent = descriptions[index].benefits[6];
        // description.querySelector('.li8').textContent = descriptions[index].benefits[7];
        // description.querySelector('a').href = descriptions[index].btn;
    });
});

description.innerHTML = descriptionContent[0];
// description.querySelector('h2').textContent = descriptions[0].mainHeading;
// description.querySelector('p').innerHTML = descriptions[0].content;
// description.querySelector('h3').textContent = descriptions[0].subHeading;
// description.querySelector('.li1').textContent = descriptions[index].benefits[0];
// description.querySelector('.li2').textContent = descriptions[0].benefits[1];
// description.querySelector('.li3').textContent = descriptions[0].benefits[2];
// description.querySelector('.li4').textContent = descriptions[0].benefits[3];
// description.querySelector('.li5').textContent = descriptions[0].benefits[4];
// description.querySelector('.li6').textContent = descriptions[0].benefits[5];
// description.querySelector('.li7').textContent = descriptions[0].benefits[6];
// description.querySelector('.li8').textContent = descriptions[0].benefits[7];
// description.querySelector('a').href = descriptions[0].btn;
listItems[0].classList.add('active');
