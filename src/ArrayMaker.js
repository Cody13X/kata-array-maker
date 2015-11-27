function arrayMaker(max) {
  if(isNaN(max)) {
    return null;
  } else if(max === 0) {
    return [];
  }
  var tab =[];
	var pos = 0;
	for (var i = 1; i < max+1; i++) {
 		tab[pos] = i;
    pos++;
  }
  return tab;
}
alert( arrayMaker(7) );
