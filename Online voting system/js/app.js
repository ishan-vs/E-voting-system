document.getElementById("voteButton").addEventListener("click", function () {
  const candidates = document.getElementsByName("candidate");

  let selectedCandidate = null;
  for (let i = 0; i < candidates.length; i++) {
    if (candidates[i].checked) {
      selectedCandidate = candidates[i].value;
      break;
    }
  }

  if (selectedCandidate) {
    alert("You voted for candidate ID: " + selectedCandidate);
    document.getElementById("voteButton").disabled = true;
    document.getElementById("msg").innerText = "Thank you for voting!";
  } else {
    alert("Please select a candidate before voting.");
  }
});
