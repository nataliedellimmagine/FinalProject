// Buttons make content appear and disappear
function toggleProjects(){
  var projectList = document.getElementById("projectList");
  if(projectList.style.display == 'none'){
      //If div is showing, don't show content. If div isn't showing, show content
    projectList.style.display = 'block'
  }
  else{
    projectList.style.display = 'none'
  }
}

function toggleTech(){
  var techList = document.getElementById("techList");
  if(techList.style.display == 'none'){
    techList.style.display = 'block'
  }
  else{
    techList.style.display = 'none'
  }
}
