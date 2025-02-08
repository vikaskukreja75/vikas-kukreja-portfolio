$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }

        // scroll spy
        $('section').each(function () {
            let height = $(this).height();
            let offset = $(this).offset().top - $('header').outerHeight() - 10;
            let top = $(window).scrollTop();
            let id = $(this).attr('id');

            if (top > offset && top < offset + height) {
                $('.navbar ul li a').removeClass('active');
                $('.navbar').find(`[href="#${id}"]`).addClass('active');
            }
        });
    });

    // smooth scrolling
    $('a[href*="#"]').on('click', function (e) {
        e.preventDefault();
        const headerHeight = $('header').outerHeight();
        const targetSection = $($(this).attr('href'));
        
        $('html, body').animate({
            scrollTop: targetSection.offset().top - headerHeight
        }, 200, 'linear');
    });

    // <!-- emailjs to mail contact form data -->
    $("#contact-form").submit(function (event) {
        emailjs.init("user_iLwvqcOmTVd55k20p");

        emailjs.sendForm('contact_service', 'template_contact', '#contact-form')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                document.getElementById("contact-form").reset();
                alert("Form Submitted Successfully");
            }, function (error) {
                console.log('FAILED...', error);
                alert("Form Submission Failed! Try Again");
            });
        event.preventDefault();
    });
    // <!-- emailjs to mail contact form data -->

});

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Welcome To My Portfolio";
            $("#favicon").attr("href", "./resources/images/favicon.png");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "./resources/images/favicon.png");
        }
    });

// <!-- typed js effect starts -->
var typed = new Typed(".typing-text", {
    strings: ["Java Development" ,"Backend Development", "Python Development", "Web Application Development", "PowerBi Reports Development"],
    loop: true,
    typeSpeed: 50,
    backSpeed: 25,
    backDelay: 500,
});
// <!-- typed js effect ends -->

// Skills data directly in JavaScript
const skillsData = [
    {
        "name": "Java",
        "icon": "resources/images/skills/java.png"
    },
    {
        "name": "Python",
        "icon": "resources/images/skills/python.png"
    },
    {
        "name": "MySQL",
        "icon": "resources/images/skills/mysql.png"
    },
    {
        "name": "MSSQL",
        "icon": "resources/images/skills/mssql.png"
    },
    {
        "name": "Aerospike",
        "icon": "resources/images/skills/aerospike.png"
    },
    {
        "name": "Apache Kafka",
        "icon": "resources/images/skills/kafka.png"
    },
    {
        "name": "Redis",
        "icon": "resources/images/skills/redis.png"
    },
    {
        "name": "Linux",
        "icon": "resources/images/skills/linux.png"
    },
    {
        "name": "WSL",
        "icon": "resources/images/skills/ubuntu.png"
    },
    {
        "name": "Intellij",
        "icon": "resources/images/skills/intellij.png"
    },
    {
        "name": "Git",
        "icon": "resources/images/skills/git.png"
    },
    {
        "name": "PowerBI",
        "icon": "resources/images/skills/powerbi.png"
    }
];

function showSkills(skills) {
    let skillsContainer = document.getElementById("skillsContainer");
    if (!skillsContainer) {
        console.error("Skills container not found!");
        return;
    }
    
    let skillHTML = "";
    skills.forEach((skill, index) => {
        skillHTML += `
        <div class="bar">
              <div class="info">
                <img src="${skill.icon}" alt="${skill.name}" 
                    loading="lazy"
                    onload="this.classList.add('loaded')"
                    onerror="this.src='resources/images/skills/default.png'; this.onerror=null;" />
                <span>${skill.name}</span>
              </div>
            </div>`;
    });
    skillsContainer.innerHTML = skillHTML;
}

// Call showSkills directly with the data
document.addEventListener('DOMContentLoaded', function() {
    showSkills(skillsData);
});

// function showProjects(projects) {
//     let projectsContainer = document.querySelector("#work .box-container");
//     let projectHTML = "";
//     projects.slice(0, 6).forEach(project => {
//         projectHTML += `
//         <div class="box tilt">
//       <img draggable="false" src="/assets/images/projects/${project.image}.png" alt="project" />
//       <div class="content">
//         <div class="tag">
//         <h3>${project.name}</h3>
//         </div>
//         <div class="desc">
//           <p>${project.desc}</p>
//           <div class="btns">
//             <a href="${project.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
//             <a href="${project.links.code}" class="btn" target="_blank">Code <i class="fas fa-code"></i></a>
//           </div>
//         </div>
//       </div>
//     </div>`
//     });
//     projectsContainer.innerHTML = projectHTML;
//
//     // <!-- tilt js effect starts -->
//     VanillaTilt.init(document.querySelectorAll(".tilt"), {
//         max: 15,
//     });
//     // <!-- tilt js effect ends -->
//
//     /* ===== SCROLL REVEAL ANIMATION ===== */
//     const srtop = ScrollReveal({
//         origin: 'top',
//         distance: '80px',
//         duration: 1000,
//         reset: true
//     });
//
//     /* SCROLL PROJECTS */
//     srtop.reveal('.work .box', { interval: 200 });
//
// }

// fetchData().then(data => {
//     if (data && data.length > 0) {
//         console.log(`Loading ${data.length} skills...`); // Debug log
//         showSkills(data);
//     } else {
//         console.error("No skills data available");
//     }
// }).catch(error => {
//     console.error("Error in loading skills:", error);
// });

// fetchData("projects").then(data => {
//     showProjects(data);
// });

// <!-- tilt js effect starts -->
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
});
// <!-- tilt js effect ends -->


// pre loader start
// function loader() {
//     document.querySelector('.loader-container').classList.add('fade-out');
// }
// function fadeOut() {
//     setInterval(loader, 500);
// }
// window.onload = fadeOut;
// pre loader end

// disable developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}

/* ===== SCROLL REVEAL ANIMATION ===== */
const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 200 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .telegram', { interval: 600 });
srtop.reveal('.home .instagram', { interval: 600 });
srtop.reveal('.home .dev', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });


/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 200 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 200 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 200 });
srtop.reveal('.contact .container .content', { delay: 200 });

document.addEventListener('DOMContentLoaded', function() {
  tsParticles.load("particles-js", {
    fpsLimit: 60,
    fullScreen: {
      enable: false,
      zIndex: 0
    },
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: ["#0EECF1", "#0575E6", "#00F260", "#6B73FF"]
      },
      shape: {
        type: "circle",
        stroke: {
          width: 1,
          color: "#ffffff"
        }
      },
      opacity: {
        value: 0.8,
        random: false,
        animation: {
          enable: true,
          speed: 0.3,
          minimumValue: 0.4,
          sync: false
        }
      },
      size: {
        value: 3,
        random: {
          enable: true,
          minimumValue: 1
        },
        animation: {
          enable: true,
          speed: 1,
          minimumValue: 1,
          sync: false
        }
      },
      links: {
        enable: true,
        distance: 120,
        color: "#00FFFF",
        opacity: 0.5,
        width: 1.2
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: false,
        straight: false,
        outModes: {
          default: "bounce",
          top: "bounce",
          left: "bounce",
          right: "bounce",
          bottom: "bounce"
        },
        attract: {
          enable: false
        }
      }
    },
    interactivity: {
      detectsOn: "window",
      events: {
        onHover: {
          enable: true,
          mode: "grab"
        },
        onClick: {
          enable: true,
          mode: "push"
        },
        resize: {
          enable: true,
          delay: 0.5
        }
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 0.5
          }
        },
        push: {
          quantity: 4
        }
      }
    },
    detectRetina: true,
    background: {
      color: "#020133"
    },
    smooth: true,
    pauseOnOutsideViewport: false,
    pauseOnBlur: false,
    responsive: [
      {
        maxWidth: 768,
        options: {
          particles: {
            number: {
              value: 50
            }
          }
        }
      }
    ]
  });
});