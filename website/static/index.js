


$(document).ready(function() {
  async function showMessageError() {
      $('.message').show();
      
  }
  if (window.innerWidth <= 1280) {  
    showMessageError();
  }else{
    $('#gamePage').show();
  }

  

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
      progress = 20
    }else if(level == 2){
      progress = 40
    }else if(level == 3){
      progress = 60
    }else if(level == 4){
      progress = 80
    }
    else if(level == 5){
      progress = 100
    }
    $("#dynamic")
      .css("width", progress + "%")
      .attr("aria-valuenow", progress)
      .text(progress + "%");
  }
  
  progressBar();
  
});
async function generatePDF(){
  var response = await fetch('/get-game-data', {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });
  const responseData = await response.json();
  const name = responseData['response']['name'];
  generateCertificate(name);
}

async function generateCertificate (name){
  const existingPdfBytes = await fetch("static/images/Certificado.pdf").then((res) =>
    res.arrayBuffer()
  );
  const { PDFDocument, rgb, degrees } = PDFLib;

  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  pdfDoc.registerFontkit(fontkit);

  const fontBytes = await fetch("static/images/Charm-Regular.ttf").then((res) =>
    res.arrayBuffer()
  );

  const CharmFont = await pdfDoc.embedFont(fontBytes);
  const date = new Date().toLocaleDateString() 

  const pages = pdfDoc.getPages();
  const firstPage = pages[0];
  const { width: pageWidth } = firstPage.getSize()


  firstPage.textAlign = "center";
  

  firstPage.drawText(name, {
    x:   Math.floor(pageWidth / 2)  - (Math.floor(name.length / 2) * 16),
    y: 350,
    size: 42,
    font: CharmFont,
    color: rgb(0.0, 0.0, 0.0),

  });

  firstPage.drawText(date, {
    x: 580,
    y: 150,
    size: 22,
    font: CharmFont,
    color: rgb(0.0, 0.0, 0.0),
  });


  const pdfBytes = await pdfDoc.save();

  var file = new File(
    [pdfBytes],
    "Certificado de Conclusão.pdf",
    {
      type: "application/pdf;charset=utf-8",
    }
  );
  saveAs(file);
  };

