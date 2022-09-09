/*
 Next Greater ELement
 A1: using 2 loops Timne= o(n^2)   Space: o(1)
 A2: using Stack Time= o(n)   Space= o(n)

 */

#include <bits/stdc++.h>
using namespace std;

void printNGE(int arr[], int n)
{
    stack<int> s;

    s.push(arr[0]);

    for (int i = 1; i < n; i++)
    {

        if (s.empty())
        {
            s.push(arr[i]);
            continue;
        }

        while (s.empty() == false && s.top() < arr[i])
        {
            cout << s.top() << " --> " << arr[i] << endl;
            s.pop();
        }

        s.push(arr[i]);
    }

    while (s.empty() == false)
    {
        cout << s.top() << " --> " << -1 << endl;
        s.pop();
    }
}

int main()
{
    int arr[] = {11, 13, 21, 3};
    int n = sizeof(arr) / sizeof(arr[0]);
    printNGE(arr, n);
    return 0;
}
