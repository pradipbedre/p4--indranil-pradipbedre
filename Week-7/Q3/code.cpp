/*
 Detect loop in a linked list
 Approach1: Using Hashing we need to store all element Address to
            map and then check the one by one if any node pointing
            to same address then reture true.
            Time = o(n)  Space= o(n)

 Approach2: By using slow and fast pointers we can detect loop
            slow will move by one and fast will move by 2 if we
            traversing the at some point of time slow and fast
            will sta same position then return true.
            Time= o(n) Space=o(1)
*/

/* Implementation of second approach  */
#include <bits/stdc++.h>
using namespace std;

class Node
{
public:
    int data;
    Node *next;
};

void push(Node **headR, int new_data)
{
    Node *new_node = new Node();

    new_node->data = new_data;

    new_node->next = (*headR);

    (*headR) = new_node;
}

int detectLoop(Node *list)
{
    Node *slowPointer = list, *fastPointer = list;

    while (slowPointer && fastPointer && fastPointer->next)
    {
       slowPointer =slowPointer->next;
        fastPointer = fastPointer->next->next;
        if (slowPointer == fastPointer)
        {
            return 1;
        }
    }
    return 0;
}

int main()
{
    Node *head = NULL;

    push(&head, 20);
    push(&head, 4);
    push(&head, 15);
    push(&head, 10);

    head->next->next->next->next = head;
    if (detectLoop(head))
        cout << "Loop Detected";
    else
        cout << "No Loop";
    return 0;
}
