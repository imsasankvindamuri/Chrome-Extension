function mergeSort(list){
    if (list.length > 1) {
        let mid = Math.floor(list.length/2);
        
        let bottomList = mergeSort(list.slice(0,mid));
        let topList = mergeSort(list.slice(mid));

        console.log(bottomList);
        console.log(topList);

        let listSort = []
        let i = 0, j = 0;

        while ((i < bottomList.length) && (j < topList.length)){
            if (bottomList[i] <= topList[j]) {
                listSort.push(bottomList[i]);
                i++;
            } else{
                listSort.push(topList[j]);
                j++;
            }
        }

        if (i < bottomList.length){
            listSort.push(...bottomList.slice(i));
        } else if (j < topList.length){
            listSort.push(...topList.slice(j));
        }

        console.log(listSort);
        return listSort;
    }

    console.log(list);
    return list;
}

list = [1,9,2,8,3,7,4,6,5,0];
list = mergeSort(list);

console.log(list);