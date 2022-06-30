module.exports = function toReadable (number) {
    const units = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const dozens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const twozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
    const str = String(number).split('');
    const strLenght = str.length;

    const unitsCount = (n) => {
      return units[Number(str[n])];
    }

    const dozensCount = (n) => {
      return dozens[Number(str[n])]
    }

    const twozensCount = (n) => {
      return twozens[Number(str[n]) - 2];
    }

    switch(strLenght) {
      case 1: 
      return unitsCount(0);

      case 2: 
          if (number <= 19) {
            return dozensCount(1);
        } else if (str[1] == 0) {
            return twozensCount(0); // exclude twenty zero, thirty zero...
        } else {
            return (twozensCount(0) + ' ' + unitsCount(1));
        }

      case 3: 
        if (str[1] == 0) {
          if (str[2] == 0) {
            return (unitsCount(0) + ' hundred'); // exclude hundred zero...
          }
          return (unitsCount(0) + ' hundred ' + unitsCount(2));
        }
        if (str[1] == 1) {
          return (unitsCount(0) + ' hundred ' + dozensCount(2));
        } else if (str[2] == 0) {
          return (unitsCount(0) + ' hundred ' + twozensCount(1)); // exclude twenty zero, thirty zero...
        } else {
          return (unitsCount(0) + ' hundred ' +twozensCount(1) +' '+ unitsCount(2));
        }
  }
}