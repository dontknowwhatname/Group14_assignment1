// Display information for the selected job
function showJob(job) {
    const jobInfos = document.querySelectorAll('.job-info');
    jobInfos.forEach(info => {
        info.style.display = 'none'; // Hide all job information
    });
    document.getElementById(job).style.display = 'block'; // Show selected job information
}

// Smoothly scroll to the specified section
function scrollToSection(id) {
    const section = document.getElementById(id);
    section.scrollIntoView({ behavior: 'smooth' });
}

// Initially load and display the first job
document.addEventListener("DOMContentLoaded", () => {
    showJob('groomer'); // Default display for pet groomer information
});
