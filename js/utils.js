function getTimestamp() {
  let d = new Date();
  return d.getTime();
}

function randomDivId() {
  let d = Math.floor(Math.random() * 6) + 1;
  let n = Math.floor(Math.random() * 6) + 1;
  let asd=`#slot-${d}${n}`;
  console.log(asd);
  return `#slot-${d}${n}`;
}
