const listItems = document.querySelectorAll('.lii');
const description = document.querySelector('.description');
const descriptions = [
    {
        mainHeading: 'Python Programming (Includes Game development)',
        content: "This is a four-week interactive training programme that consists of three classes per week. You'll learn Python programming, data structures, advanced libraries, and game development. There is an optional project with mentorship, and based on performance, an internship interview may be offered. At the end of the programme, you will also receive an eCertificate from AI-Shala.",
        subHeading: 'Training program benefits:',
        benefits: ['Python programming live lectures (on the spot doubt clearance)',
            'Basic and advanced python libraries',
            'Game development lectures',
            'Quizzes for Self assessment',
            'Live lectures with coding',
            'Project for performance evaluation (optional)',
            'Opportunity for internship with AI-Shala',
            'Certificate program'],
        btn: 'https://docs.google.com/forms/d/e/1FAIpQLSfmuOv54VQEiBTJxXTPRUoOXh6Y4OuHkcbrDIs2fJ9G1ADNRQ/viewform'
    },
    {
        mainHeading: 'Dive in to Machine Learning Bootcamp',
        content: 'With lectures using the flipped classroom learning paradigm and interview coaching, participants in this three-month machine learning training programme will learn how to approach and solve problems using machine learning. On the basis of their performance, they will finish a project of their choice, present, and have the chance to interview for an internship with one of our hiring partners. Upon programme completion, AI-Shala will provide an eCertificate to each participant.',
        subHeading: 'Training program benefits:',
        benefits: ['Learn how to approach a problem using Machine Learning',
            'Flipped classroom learning model and live doubt clearance',
            'Mentorship for a startup or the research paper post completion',
            '3/6 month internship opportunity with our hiring partners post completion',
            'Learn how to write a research paper',
            'Includes dedicated two months for a project which can extend to either a research paper or a startup',
            'ML interview preparation from industry experts working in top companies',
            'Certificate program'],
        btn: 'https://docs.google.com/forms/d/e/1FAIpQLSfCNNBwkwhxYTiNKb9RqldHIEs0Rr4I7P8SIA3lm0nDnUgpdA/viewform'
    },
    {
        mainHeading: 'Advance Machine Learning',
        content: 'Lectures on machine learning and entrepreneurship are included in this six-week summer training programme, along with advice on how to prepare for interviews, a project that must be completed, and prospective internship and incubator chances. AI-Shala and IIITD-IC will work together to provide participants with an eCertificate, with opportunities based on performance and IIITD-IC policy.',
        subHeading: 'Training program benefits:',
        benefits: ['Machine learning lectures (how to approach and solve problems using ML)',
            'Interview guidance',
            'Quizzes for Self assessment',
            'Lectures on entrepreneurship',
            'Project for performance evaluation',
            'Opportunity for internship with AI-Shala hiring partners',
            'Opportunity for incubation at IIITD-IC',
            'Certificate program jointly from AI-Shala and IIITD-IC'],
        btn: 'https://docs.google.com/forms/d/e/1FAIpQLSfCNNBwkwhxYTiNKb9RqldHIEs0Rr4I7P8SIA3lm0nDnUgpdA/viewform'
    },
    {
        title: 'List Item 4 Description',
        content: 'This is the description for List Item 4.'
    }
];

listItems.forEach((item, index) => {
    item.addEventListener('mouseover', () => {
        listItems.forEach(item => {
            item.classList.remove('active');
        });
        item.classList.add('active');
        description.querySelector('h2').textContent = descriptions[index].mainHeading;
        description.querySelector('p').innerHTML = descriptions[index].content;
        description.querySelector('h3').textContent = descriptions[index].subHeading;
        description.querySelector('.li1').textContent = descriptions[index].benefits[0];
        description.querySelector('.li2').textContent = descriptions[index].benefits[1];
        description.querySelector('.li3').textContent = descriptions[index].benefits[2];
        description.querySelector('.li4').textContent = descriptions[index].benefits[3];
        description.querySelector('.li5').textContent = descriptions[index].benefits[4];
        description.querySelector('.li6').textContent = descriptions[index].benefits[5];
        description.querySelector('.li7').textContent = descriptions[index].benefits[6];
        description.querySelector('.li8').textContent = descriptions[index].benefits[7];

        description.querySelector('a').href = descriptions[index].btn;
    });
});

description.querySelector('h2').textContent = descriptions[0].mainHeading;
description.querySelector('p').innerHTML = descriptions[0].content;
description.querySelector('h3').textContent = descriptions[0].subHeading;
description.querySelector('.li1').textContent = descriptions[index].benefits[0];
description.querySelector('.li2').textContent = descriptions[0].benefits[1];
description.querySelector('.li3').textContent = descriptions[0].benefits[2];
description.querySelector('.li4').textContent = descriptions[0].benefits[3];
description.querySelector('.li5').textContent = descriptions[0].benefits[4];
description.querySelector('.li6').textContent = descriptions[0].benefits[5];
description.querySelector('.li7').textContent = descriptions[0].benefits[6];
description.querySelector('.li8').textContent = descriptions[0].benefits[7];
description.querySelector('a').href = descriptions[0].btn;
listItems[0].classList.add('active');
