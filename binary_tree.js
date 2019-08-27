// https://www.geeksforgeeks.org/implementation-binary-search-tree-javascript/?fbclid=IwAR3plbCwNAR2r-wiV6PnwLYxVEHU2yXM13_W8f6V3PxoUhoblAFHLq2Nm1w

class Node{
    constructor(number){
      this.data = number; 
      this.left = null; 
      this.right = null; 
    }
  }
  
  class BinarySearchTree {
  
    constructor() {
      this.root = null;
      this.rootNumber = [];
      this.leftNum = [];
      this.rightNum = [];
    }

    insertNumber(number) {
        let new_Node = new Node(number); 
    
        if (this.root === null) {
    
          this.root = new_Node;
          this.rootNumber.push(number);
    
        } else {
           
            this.helperfunction(this.root, new_Node, number)
          }
      }
  
    helperfunction(nodeToanalize, newNode, number){
  
      if(newNode.data > nodeToanalize.data){
  
          if(nodeToanalize.right === null){
              nodeToanalize.right =  newNode;
  
              this.rightNum.push(number);
  
          } else{
            this.helperfunction(nodeToanalize.right,  newNode, number);
          }
  
      } else {
      
          if(nodeToanalize.left === null){
          
            nodeToanalize.left = newNode;
  
            this.leftNum.push(number)
  
          } else {
  
            this.helperfunction(nodeToanalize.left,  newNode, number);
          }
        }
    }
  
   
  }
  
  let BSTtest = new BinarySearchTree();
  
  BSTtest.insertNumber(10);
  BSTtest.insertNumber(11);
  BSTtest.insertNumber(5);
  BSTtest.insertNumber(12);
  BSTtest.insertNumber(2);
  BSTtest.insertNumber(3);
  BSTtest.insertNumber(15);
  BSTtest.insertNumber(1);
  
  
  BSTtest;
  
  