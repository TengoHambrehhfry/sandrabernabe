
/* Custom styles */
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@800&display=swap');
body {
    scroll-behavior: smooth;
    padding-top: 80px;
    font-family: 'Montserrat', sans-serif;
}
@font-face {
    font-family: 'Alphakind';
    src: url('https://fonts.cdnfonts.com/css/alphakind') format('woff2');
}
.section-title {
    font-family: 'Alphakind', sans-serif;
    font-weight: 800;
    color: #FAC504;
    text-transform: uppercase;
    font-size: 3rem;
    letter-spacing: 1px;
    margin: 0 auto 2rem auto;
    line-height: 1.2;
    text-align: center;
    display: block;
    width: 100%;
    padding: 0;
    text-shadow: 
        0 0 10px #85054D,
        0 0 20px #85054D,
        0 0 30px #85054D;
    border-radius: 50px;
    padding: 0 20px;
    display: inline-block;
    -webkit-text-stroke: 0;
}
.project-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.project-card:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}
a[href="#projects"] {
    transition: all 0.3s ease;
    transform-origin: center;
    background-color: #FB8700;
}

a[href="#projects"]:hover {
    transform: scale(1.15);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    background-color: #e07a00;
}
/* Animation for circular images */
#hero > div:first-child {
    position: relative;
    overflow: hidden;
    border-radius: 50%;
    animation: float 3s ease infinite;
    transition: transform 0.3s ease;
}
#hero > div:first-child img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}
/* Animation for small circular images */
@keyframes float {
    0% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
    100% { transform: translateY(0); }
}

#hero div div {
    animation: float 3s ease infinite;
    transition: transform 0.3s ease;
}

#hero div div img {
    transition: transform 0.3s ease;
}
#submit-btn {
    transition: all 0.3s ease;
    background-color: #FB8700;
}

#submit-btn:hover {
    transform: scale(1.05);
    background-color: #e07a00;
}
#submit-btn.pulse {
    animation: pulse 0.5s ease;
}

/* Contact icons animation */
#contact a {
    transition: transform 0.3s ease, opacity 0.3s ease;
}

#contact a:hover {
    transform: scale(1.2);
    opacity: 0.9;
}