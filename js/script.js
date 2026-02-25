const tasks = {
  1: {
    title: "Basic HTML Program",
    description: "This task demonstrates a simple HTML structure with heading and paragraph.",
    code: `<html>
<head><title>Basic Page</title></head>
<body>
<h1>Hello World</h1>
<p>This is a basic HTML program.</p>
</body>
</html>`
  },

  28: {
    title: "Change Text using innerHTML",
    description: "JavaScript modifies paragraph text when button is clicked.",
    code: `<p id="demo">Original Text</p>
<button onclick="changeText()">Click</button>

<script>
function changeText(){
  document.getElementById("demo").innerHTML = "Welcome to JavaScript!";
}
</script>`
  }
};

const params = new URLSearchParams(window.location.search);
const taskId = params.get("task");

if (tasks[taskId]) {
  document.getElementById("taskTitle").innerText = tasks[taskId].title;
  document.getElementById("taskDescription").innerText = tasks[taskId].description;
  document.getElementById("taskCode").innerText = tasks[taskId].code;
}