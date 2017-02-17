function calc1() {
  var gold1, dps1, res1
  gold1 = parseInt(document.getElementById("gold1").value);
  dps1 = parseInt(document.getElementById("dps1").value);
  res1 = gold1/dps1; 
  document.getElementById("res1").value = res1;
}

