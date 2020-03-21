
function ChartToImage (chart) {
  var box = this;
  var svgH = chart.S.parentNode.innerHTML;


  svgH = svgH.slice(svgH.indexOf('<svg'));
  if ((p = svgH.indexOf('<div')) > 0)
    svgH = svgH.slice(0, p);

  svgH = svgH.replace(/sfxid=/g, ' sfxid=');
  svgH = svgH.replace(/sfxtitle=/g, ' sfxtitle=');
  var canvas = document.createElement('canvas');
  canvg(canvas, svgH);
  var imgData = canvas.toDataURL('image/png');

  return imgData;
}


function chart3Img(chart) {
    var svgH = chart.S.parentNode.innerHTML;


    svgH = svgH.slice(svgH.indexOf('<svg'));
    if ((p = svgH.indexOf('<div')) > 0)
        svgH = svgH.slice(0, p);

    svgH = svgH.replace(/sfxid=/g, ' sfxid=');
    svgH = svgH.replace(/sfxtitle=/g, ' sfxtitle=');
    var canvas = document.createElement('canvas');
    canvg(canvas, svgH);
    var imgData = canvas.toDataURL('image/png');
    

   

    src = imgData;
    link = "about:blank";
    var pw = window.open(link, "_new");
    pw.document.open();
    pw.document.write(makepage(src));
    pw.document.close();

   
}




function chart2Img(chart, img) {
    var svgH = chart.S.parentNode.innerHTML;


    svgH = svgH.slice(svgH.indexOf('<svg'));
    if ((p = svgH.indexOf('<div')) > 0)
        svgH = svgH.slice(0, p);

    svgH = svgH.replace(/sfxid=/g, ' sfxid=');
    svgH = svgH.replace(/sfxtitle=/g, ' sfxtitle=');
    var canvas = document.createElement('canvas');
    canvg(canvas, svgH);
    var imgData = canvas.toDataURL('image/png');
    img.src = imgData;

    //alert(imgData.replace(/^data:image\/(png|jpg);base64,/, ""));

    img.onclick = function () {

        hh = document.createElement('a');
        hh.href = imgData;
        hh.download = "hhh.png";
        hh.innerHTML = "inidr";
        ChartDiv1.appendChild(hh);
    };


    //img.onclick = function () {
    //    // atob to base64_decode the data-URI
    //    var image_data = atob(img.src.split(',')[1]);
    //    // Use typed arrays to convert the binary data to a Blob
    //    var arraybuffer = new ArrayBuffer(image_data.length);
    //    var view = new Uint8Array(arraybuffer);
    //    for (var i = 0; i < image_data.length; i++) {
    //        view[i] = image_data.charCodeAt(i) & 0xff;
    //    }
    //    try {
    //        // This is the recommended method:
    //        var blob = new Blob([arraybuffer], { type: 'application/octet-stream' });
    //    } catch (e) {
    //        // The BlobBuilder API has been deprecated in favour of Blob, but older
    //        // browsers don't know about the Blob constructor
    //        // IE10 also supports BlobBuilder, but since the `Blob` constructor
    //        //  also works, there's no need to add `MSBlobBuilder`.
    //        var bb = new (window.WebKitBlobBuilder || window.MozBlobBuilder);
    //        bb.append(arraybuffer);
    //        var blob = bb.getBlob('application/octet-stream'); // <-- Here's the Blob!
    //    }

    //    // Use the URL object to create a temporary URL
    //    var url = (window.webkitURL || window.URL).createObjectURL(blob);
    //    location.href = url; // <-- Download!
    //};
}

function makepage(src) {
    return "<html>\n" +
    "<head>\n" +
    "<title>Yazdır</title>\n" +
    "<script>\n" +
    "function step1() {\n" +
    " setTimeout('step2()', 10);\n" +
    "}\n" +
    "function step2() {\n" +
    " window.print();\n" +
    " window.close();\n" +
    "}\n" +
    "</scr" + "ipt>\n" +
    "</head>\n" +
    "<body onLoad='step1()'>\n" +
    "<img src='" + src + "'/>\n" +
    "</body>\n" +
    "</html>\n";
}
function printme(evt) {
    if (!evt) {
        // Old IE
        evt = window.event;
    }
    var image = document.getElementById("dstImg")
    //var image = evt.target;
    //if (!image) {
    //    // Old IE
    //    image = window.event.srcElement;
    //}
    src = image.src;
    link = "about:blank";
    var pw = window.open(link, "_new");
    pw.document.open();
    pw.document.write(makepage(src));
    pw.document.close();
}