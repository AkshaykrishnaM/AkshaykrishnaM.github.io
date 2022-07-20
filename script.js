window.onload = () => {
    const myInput = document.getElementById('dummyKeyboard');
    myInput.onpaste = e => e.preventDefault();
   }
  const COMMANDS = {
    whoami:
      'guest',
    ls:
      '<span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">acknowledges</span>, <span class="code">certificates</span>, <span class="code">contact</span>',
    help:
      'Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">acknowledges</span>, <span class="code">certificates</span>, <span class="code">contact</span>',
    about:
      "Hello there 👋<br>I'm Akshay Krishna. Information Security enthusiast, I do bug bounty hunting, Capture The Flag as a hobby and passion",
    skills:
      '<span class="code">Skill:</span>Pentesting, Programming, Bughunting...<br>',
    education:
      "unknown",
    certificates: "<a href='https://www.akshaykrishna.live/certificates' class='success link'>certificates</a>",
    resume: "<a href='./resume.pdf' class='success link'>resume.pdf</a>",
    experience: "No Experience😥",
     acknowledges: 
     "No acknowledgements😥",
    contact:
      "You can contact me on any of following :<br><a href='https://t.me/hel1x3' class='success link'>Telegram</a>, <a href='https://www.instagram.com/_.ax5hay._/' class='success link'>Instagram</a>, <a href='https://www.twitter.com/reach_krishna/' class='success link'>Twitter</a>, <a href='mailto:reach.akshaykrishna@gmail.com' class='success link'>Email</a>, <a href='https://wa.me/919995978831?text=Hey,%20enq%20from%20web' class='success link'>whatsapp</a>"
  };
  
  const  userInput = document.getElementById("userInput");
  const  terminalOutput = document.getElementById("terminalOutput");
  const  inputfield = document.getElementById("dummyKeyboard");
  
  inputfield.addEventListener('keypress', (e) =>{
    if (e.key === "Enter") {
      let input = e.target.value;
      input = input.toLowerCase();
      if (input.length === 0) {
        return;
      }
      let output;
      output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
      if (!COMMANDS.hasOwnProperty(input)) {
        output += `<div class="terminal-line">no such command: ${input}</div>`;
        console.log("Oops! no such command");
      } else {
        output += COMMANDS[input];
      };
      terminalOutput.innerHTML = `${
        terminalOutput.innerHTML
      }<div class="terminal-line">${output}</div>`;
      terminalOutput.scrollTop = terminalOutput.scrollHeight; 
      e.target.value = ""
    };
  });
