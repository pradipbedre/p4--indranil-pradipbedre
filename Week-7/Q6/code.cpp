/* 

Implement queue using 2 stack
Time=o(n)
Space= o(n) Use of stack for storing values.

 */
#include <bits/stdc++.h>
using namespace std;

class Queue
{
public:
    stack<int> stack1, stack2;
    void enQueue(int element)
    {
        stack1.push(element);
    }
    int deQueue()
    {
        int ans;
        if (!stack2.empty())
        {
            ans = stack2.top();
            stack2.pop();
        }
        else
        {
            while (!stack1.empty())
            {
                stack2.push(stack1.top());
                stack1.pop();
            }
            if (!stack2.empty())
            {
                ans = stack2.top();
                stack2.pop();
            }
            else
            {
                ans = -1;
            }
        }

        return ans;
    }
};

int main()
{
    Queue q;
    q.enQueue(1);
    q.enQueue(2);
    q.enQueue(2);
    cout << q.deQueue() << endl;
    cout << q.deQueue() << endl;
    cout << q.deQueue() << endl;

    return (0);
}

