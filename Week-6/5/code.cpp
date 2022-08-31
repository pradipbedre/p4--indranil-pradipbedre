/* Question: Pair With Given Difference */
/* Approach1: Sort and Binary search array and check
 element and element+1 if  time: o(n.logn) space o(1)
   Approach2: we can use two loop the outer loop picks the first element (smaller element) and the inner loop looks for the element picked by outer loop plus n. Time complexity of this method is O(n2).

*/
#include <bits/stdc++.h>
using namespace std;

bool findPair(int arr[], int size, int n)
{
   int i = 0;
   int j = 1;

   while (i < size && j < size)
   {
      if (i != j && (arr[j] - arr[i] == n || arr[i] - arr[j] == n))
      {
         cout << "Pair Found: (" << arr[i] << ", " << arr[j] << ")";
         return true;
      }
      else if (arr[j] - arr[i] < n)
         j++;
      else
         i++;
   }

   cout << "No such pair";
   return false;
}

int main()
{
   int arr[] = {1, 8, 30, 40, 100};
   int size = sizeof(arr) / sizeof(arr[0]);
   int n = 60;
   findPair(arr, size, n);
   return 0;
}
