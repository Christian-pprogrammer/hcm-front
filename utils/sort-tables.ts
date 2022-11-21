
function sortExtractedData(extractedData: any[], order: string) {

  function encreasing(a: { value: number; }, b: { value: number; }) {
    if (a.value < b.value) {
      return -1;
    }
    if (a.value > b.value) {
      return 1;
    }
    return 0;
  }

  function decreasing(a: { value: number; }, b: { value: number; }) {
    if (a.value > b.value) {
      return -1;
    }
    if (a.value < b.value) {
      return 1;
    }
    return 0;
  }


  if (order == "DSC") {
    extractedData.sort(decreasing);
  } else {
    extractedData.sort(encreasing);
  }

  return extractedData;
}

function map(extractedData: any[], realData: any[]) {
  let ids = extractedData.map((item: { [x: string]: any; }) => item["id"]);
  let order: any = {};

  ids.forEach(function (a: string | number, i: any) { order[a] = i; });

  realData.sort(function (a: { _id: string | number; }, b: { _id: string | number; }) {
    return order[a._id] - order[b._id];
  });

  return realData;
}



const SortTables = (extractedData: any, realData: any, order: any) => {
  return map(sortExtractedData(extractedData, order), realData);
}

export default SortTables;
