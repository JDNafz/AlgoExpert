'''
Insertion Sort
🟢Easy Difficulty

https://www.algoexpert.io/questions/insertion-sort
'''
def insertionSort(array):
    # Write your code here.
    for i in range (1,len(array)):
        j = i
        print(array, array[j])
        while j > 0 and array[j] < array[j - 1]:
            array[j-1],array[j] = array[j], array[j-1]
            j-= 1
    return array
    