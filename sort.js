list1=[1,0,3,9,2,18,44,4,65]
i=0
while (i<list1.length){
    j=0
    while (j<list1.length){
        if (list1[i]<list1[j]){
            temp=list1[i]
            list1[i]=list1[j]
            list1[j]=temp
        }j=j+1
    }i=i+1
}console.log(list1);
