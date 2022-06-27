let count = 0;
let sex = "";
function cc(card) {
  // Only change code below this line
  switch (card){
      case 7:
      case 8:
      case 9:
        count+=0;
        if (count > 0) {
          sex = count + " Bet";
          return sex;
      }   else if (count == 0) {
          sex = count + " Hold";
          return sex;
      } else if (count < 0) {
          sex = count + " Hold";
          return sex;
      }
      break;
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count+=1;
      if (count > 0) {
        sex = count + " Bet";
        return sex;
      } else if (count == 0) {
        sex = count + " Hold";
        return sex;
      } else if (count < 0) {
        sex = count + " Hold";
        return sex;
      }
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count-=1;
      if (count > 0) {
        sex = count + " Bet";
        return sex;
      } else if (count == 0) {
        sex = count + " Hold";
        return sex;
      } else if (count < 0) {
        sex = count + " Hold";
        return sex;
      }
    break;
  }

  return "Change Me";
  // Only change code above this line
}
console.log(cc(7));
console.log(cc(8));
console.log(cc(9));
cc(2); cc(3); cc(7); cc('K'); cc('A');
