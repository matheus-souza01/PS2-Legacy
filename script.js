// Menu Mobile
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});


// Smooth Scrolling para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
       
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
       
        // Fechar menu mobile se estiver aberto
        if (document.querySelector('.navbar').classList.contains('active')) {
            document.querySelector('.navbar').classList.remove('active');
        }
    });
});


// Adicionar classe ativa ao scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


// Adicionar ao CSS:
/*
.header.scrolled {
    background-color: rgba(255, 255, 255, 0.95);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
}
*/


// Modo Escuro
const darkModeToggle = document.querySelector('.dark-mode-toggle');
const body = document.body;


darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    body.classList.toggle('dark-mode');
   
    // Salvar preferência no localStorage
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
});


// Verificar preferência salva
if (localStorage.getItem('darkMode') === 'true') {
    body.classList.add('dark-mode');
    body.classList.remove('light-mode');
} else {
    body.classList.add('light-mode');
}


// Menu Mobile
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});


// Fechar menu ao clicar em um link
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.navbar').classList.remove('active');
    });
});


// Smooth Scrolling (existente)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
       
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
       
        if (document.querySelector('.navbar').classList.contains('active')) {
            document.querySelector('.navbar').classList.remove('active');
        }
    });
});


// Header no Scroll (existente)
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});