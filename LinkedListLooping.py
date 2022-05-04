
class Node:

    def __init__(self, data):
        self.data = data #Assign the node's data
        self.next = None #Initialize the next node pointer to be null

# A linked list class in which the tail node always points to the head node.
class LinkedListLooping:

    #A looping linked list is initialized using an existing list. It must always have a length of at least two.
    def __init__(self, list):
        if len(list) < 2:
            raise Exception("Length of list provided to LinkedListLooping must be 2 or longer.")
        self.length = 0
        self.head = Node(list[0])
        self.head.next = Node(list[1])
        self.length += 2
        curr = self.head.next
        for i in range(1, len(list)):
            #If this is the last item in the list, have its next node pointer point back to the head.
            if i+1 == len(list):
                curr.next = self.head  
            else:
                curr.next = Node(list[i+1])
                curr = curr.next
                self.length += 1

    def len(self):
        return self.length

    def findNodeData(self, value):
        curr = self.head
        while curr.data != value:
            curr = curr.next
        return curr.data

    def findNode(self, value):
        curr = self.head
        #print(curr.data + " from findNode")
        #print(value + " from findNode")
        while curr.data != value:
            #print("Finding node...")
            curr = curr.next
        #print("Node found!")
        return curr
        

