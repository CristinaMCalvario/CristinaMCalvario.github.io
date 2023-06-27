let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style= "color: #FF78C4;">Desarrollo sitios web y Diseño UX/UI.</span>')
  .pauseFor(200)
  .deleteChars(10)
  .start();
