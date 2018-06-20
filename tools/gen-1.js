
window.onload = () => {
  const input = document.getElementById('code');
  const form = document.getElementsByTagName('form')[0];
  const button = document.getElementsByTagName('button')[0];
  const output = document.getElementById('output');

  form.addEventListener('submit', processInput);

}

let processInput = (e) => {
  e.preventDefault();
  let data = e.target[0].value;
  let lines = data.split("\n");
  console.log(lines);

  let linesLen = lines.length;
  for(let i = 0; i < linesLen; i++) {
    let nl = "";
    if(i !== 0) nl = "\\n"
    lines[i] = "code += \""+nl+lines[i]+"\"\n";
    output.innerHTML += lines[i];
  }
  console.log(lines);
}
