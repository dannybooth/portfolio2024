function downloadResume() {
    // Path to the resume file
    var file = "cv/Daniel_Booth_CV.docx";
  
    // Create a hidden link element
    var link = document.createElement("a");
    link.href = file;
    link.download = "resume";
  
    // Append the link to the document body
    document.body.appendChild(link);
  
    // Simulate a click on the link to start the download
    link.click();
  
    // Clean up the link element
    document.body.removeChild(link);
    
    function displayMessage() {
      var message = "<?php echo $message; ?>";
      document.getElementById("result").textContent = message;
    }
}
  
var link = document.querySelector('a');
    link.addEventListener('click', function(e) {
    e.preventDefault();
    var url = link.getAttribute('href');
    var filename = link.getAttribute('download');
    downloadImage(url, filename);
});

function downloadImage(url, filename) {
    var element = document.createElement('a');
    element.setAttribute('href', url);
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}