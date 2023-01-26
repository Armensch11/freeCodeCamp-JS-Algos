
function arrange(str){
let sortStr="";
let mPoint;
let i=0;

while(i<str.length){
  let sub=str.substring(i,i+2);
  let subLeft;;
  let subRight;
  switch(sub){
    case "00":
      sortStr=sub+sortStr;
      i+=2;
      mPoint+=2
      break;
    case "11":
      sortStr=sortStr+sub;
      i+=2;
      break;
    case "10":
       subLeft=sortStr.substring(0,mPoint);
       subRight=sortStr.substring(mPoint);
      let temp=subLeft+sub+subRight;
      let tempSub=temp.substring(mPoint-1,mPoint+1);
      let tempLeft=temp.substring(0,mPoint-1);
      let tempRight=temp.substring(mPoint+1);
      sortStr=tempLeft+tempRight;
      
       subLeft=sortStr.substring(0,mPoint);
       subRight=sortStr.substring(mPoint);
       sortStr=subLeft+tempSub+subRight;
       mPoint+=1;
       i+=2;
       break;
    default:
      subLeft=sortStr.substring(0,mPoint);
      subRight=sortStr.substring(mPoint);
      sortStr=subLeft+sub+subRight;
      mPoint+=1;
      i+=2;
      break;
  }
}
console.log(sortStr);
return sortStr

}
arrange("0101");

