/* Sort 0,1,2 */
/*
Approach 1: using sorting o(nlogn) o(1)

Approach 2: count 0,1 and 2 and using extra array put 0,1,2  according to count
complexity O(n) o(n)

Approach 3: Keep three indices low = 1, mid = 1, and high = N and there are four ranges, 1 to low (the range containing 0), low to mid (the range containing 1), mid to high (the range containing unknown elements) and high to N (the range containing 2).
complesity : o(n) o(1)
*/

#include <bits/stdc++.h>
using namespace std;
void sort(int *arr, int n)
{
    int lo = 0;
    int hi = n - 1;
    int mid = 0;

    // Iterate till all the elements
    // are sorted
    while (mid <= hi)
    {
        switch (arr[mid])
        {

        // If the element is 0
        case 0:
            swap(arr[lo++], arr[mid++]);
            break;

        // If the element is 1 .
        case 1:
            mid++;
            break;

        // If the element is 2
        case 2:
            swap(arr[mid], arr[hi--]);
            break;
        }
    }
}
int main()
{

    int arr[] = {0, 1, 1, 0, 1, 2, 1, 2, 0, 0, 0, 1};
    int n = sizeof(arr) / sizeof(arr[0]);

    sort(arr, n);
    for (int i = 0; i < n; i++)
    {
    }
    for (int i = 0; i < n; i++)
    {
        cout << arr[i] << " ";
    }

    return (0);
}
