/* Kadanes algorithm problem max sub sub array */
/* BroutForce : using 3 loops i will checkout the sub array complexity is O(n Cube) and O(1)  */
/* Seond Approach: using kadanes algo complexity would be o(n) o(1) */

// code for second approach:

#include <bits/stdc++.h>
using namespace std;
int maxSumSubArray(int *a, int n)
{
    int max_so_far = 0, max_ending_here = 0;

    for (int i = 0; i < n; i++)
    {
        max_ending_here = max_ending_here + a[i];
        if (max_so_far < max_ending_here)
            max_so_far = max_ending_here;

        if (max_ending_here < 0)
            max_ending_here = 0;
    }
    return max_so_far;
}
int main()
{
    int a[] = {1, 2, 3, 4, -10};
    int n = sizeof(a) / sizeof(a[0]);
    int max_sum = maxSumSubArray(a, n);
    cout << "Maximum contiguous sum is " << max_sum;
    return 0;
    return (0);
}

/* [4, -1, -2, 1, 5] max sub array*/
