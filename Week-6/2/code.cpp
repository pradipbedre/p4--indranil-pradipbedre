/* Approach: The problem can be solved by dividing the matrix into loops or squares or boundaries. It can be seen that the elements of the outer loop are printed first in a clockwise manner then the elements of the inner loop is printed.     */

/* Time: o(m*n)   and   Space: o(1) */

// C++ Program to print a matrix spirally

#include <bits/stdc++.h>
using namespace std;
#define R 3
#define C 3

void spiralPrint(int m, int n, int a[R][C])
{
    int i, k = 0, l = 0;

    while (k < m && l < n)
    {

        for (i = l; i < n; ++i)
        {
            cout << a[k][i] << " ";
        }
        k++;

        for (i = k; i < m; ++i)
        {
            cout << a[i][n - 1] << " ";
        }
        n--;

        if (k < m)
        {
            for (i = n - 1; i >= l; --i)
            {
                cout << a[m - 1][i] << " ";
            }
            m--;
        }

        if (l < n)
        {
            for (i = m - 1; i >= k; --i)
            {
                cout << a[i][l] << " ";
            }
            l++;
        }
    }
}

int main()
{
    int a[R][C] = {{1, 2, 3},
                   {4, 5, 6},
                   {7, 8, 9},};

    spiralPrint(R, C, a);
    return 0;
}
