const diff = document.getElementById("diff");
const diffStyle = document.getElementById("diffStyle");
const outputFormat = document.getElementById("outputFormat");

const showDiffHtml = () => {
  const left = document.getElementById("left").value;
  const right = document.getElementById("right").value;
  // console.log(left, right, outputFormat);
  const diffString = window.Diff.createPatch("unnamed", left, right);
  const targetElement = document.getElementById("output");
  const configuration = {
    drawFileList: false,
    diffStyle: diffStyle.value,
    outputFormat: outputFormat.value,
    matching: "lines",
    highlight: true,
  };
  const diff2htmlUi = new Diff2HtmlUI(targetElement, diffString, configuration);
  diff2htmlUi.draw();
  diff2htmlUi.highlightCode();
};

diff.addEventListener("click", showDiffHtml);
diffStyle.addEventListener("change", showDiffHtml);
outputFormat.addEventListener("change", showDiffHtml);
