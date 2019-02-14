var fileSize = 25;

onEvent("uploadbtn", "click", function() {
  for (var i = 0; i <= fileSize; i++) {
    setText("progressbar", (i/fileSize * 100) + "%");
    setProperty("progressbar", "width", i/fileSize * 200);
  }
});
