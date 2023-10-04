function deleteNote(noteId) {
  fetch("/delete-note", {
    method: "POST",
    body: JSON.stringify({ noteId: noteId }),
  }).then((_res) => {
    window.location.href = "/";
  });
}


$(document).ready(function() {

  async function progressBar() {
    var response = await fetch('/get-game-data', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    });
    const responseData = await response.json();
    const level = responseData['response']['level'];
    let progress = 0
    
    if(level == 1){
      progress = 33
    }else if(level == 2){
      progress = 66
    }else if(level == 3){
      progress = 100
    }
    console.log(progress)
    $("#dynamic")
      .css("width", progress + "%")
      .attr("aria-valuenow", progress)
      .text(progress + "%");
  }
  
  progressBar();
  
});