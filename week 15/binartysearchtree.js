   class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }

}

class binarysearchtree {
    constructor() {
        this.root = null

    }
    isEmpty() {
        return this.root === null
    }
    insert(value) {
        const newnode = new Node(value)
        if (this.isEmpty()) {
            this.root = newnode
        } else {
            this.insertNode(this.root, newnode)
        }

    }

    insertNode(root, newnode) {
        if (newnode.value < root.value) {
            if (root.left === null) {
                root.left = newnode
            } else {
                this.insertNode(root.left, newnode)
            }
        } else {
            if (root.right === null) {
                root.right = newnode
            } else {
                this.insertNode(root.right, newnode)
            }
        }
    }
    search(root, value) {
        if (!root) {
            console.log("tree is empty")
        } else {
            if (root.value === value) {
                return true
            } else if (value < root.value) {
                return this.search(root.left, value)
            } else {
                return this.search(root.right, value)
            }

        }
    }
    preOrder(root) {
        if (root) {
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    inOrder(root) {
        if (root) {
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }

    }
    postOrder(root) {
        if (root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }
    levelOrder() {
        const queue = []

        queue.push(this.root)

        while (queue.length) {
            let curr = queue.shift()
            console.log(curr.value)
            if (curr.left) {
                queue.push(curr.left)
            }
            if (curr.right) {
                queue.push(curr.right)
            }
        }
    }
    min(root) {
        if (!root.left) {
            return root.value
        } else {
            return this.min(root.left)
        }
    }
    max(root) {
        if (!root.right) {
            return root.value
        } else {
            return this.min(root.right)
        }
    }
    delete(value) {

        this.root = this.deleteNode(this.root, value)
    }

    deleteNode(root, value) {
        if (root === null) {
            return root
        }
        if (value < root.value) {
            root.left = this.deleteNode(root.left, value)
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value)
        } else {
            if (!root.left && !root.right) {
                return null
            }
            if (!root.left) {
                return root.right
            } else if (!root.right) {
                return root.left
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right, root.value)
        }
        return root
    }

}

const binary = new binarysearchtree()



binary.insert(10)
binary.insert(5)
binary.insert(15)
binary.insert(3)
console.log(binary.max(binary.root))
//   console.log(binary.search(binary.root,0))

// binary.inOrder(binary.root)
binary.levelOrder()
binary.delete(3)
console.log("hii")
binary.levelOrder()


