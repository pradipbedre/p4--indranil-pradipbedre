/* Reverse the linked list */
/*
Approach1: we can traver a linked list and put elements in stack
           then create other linked list and put out stack element in
          in second linked list.

Approach2: using 3 pointers

following is the implementation of the second approach

 */

#include <iostream>
using namespace std;

struct Node
{
    int data;
    struct Node *next;
    Node(int data)
    {
        this->data = data;
        next = NULL;
    }
};

struct LinkedList
{
    Node *head;
    LinkedList() { head = NULL; }

    /* Function to reverse the linked list */
    void reverse()
    {
        // Initialize current, previous and next pointers
        Node *current = head;
        Node *prev = NULL, *next = NULL;

        while (current != NULL)
        {
            // Store next
            next = current->next;
            // Reverse current node's pointer
            current->next = prev;
            // Move pointers one position ahead.
            prev = current;
            current = next;
        }
        head = prev;
    }

    void print()
    {
        struct Node *temp = head;
        while (temp != NULL)
        {
            cout << temp->data << " ";
            temp = temp->next;
        }
    }

    void push(int data)
    {
        Node *temp = new Node(data);
        temp->next = head;
        head = temp;
    }
};

int main()
{

    LinkedList ll;
    ll.push(20);
    ll.push(4);
    ll.push(15);
    ll.push(85);
    cout << "Given linked list\n";
    ll.print();
    ll.reverse();
    cout << "\nReversed Linked list \n";
    ll.print();
    return 0;
}
