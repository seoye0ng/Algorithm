function solution(nodeinfo) {
    // 노드 정보를 (x, y)와 인덱스를 함께 저장
    const nodes = nodeinfo.map((node, index) => {
        return { x: node[0], y: node[1], index: index + 1 };
    });

    // y값을 기준으로 내림차순 정렬, y가 같으면 x값 기준으로 오름차순 정렬
    nodes.sort((a, b) => {
        if (b.y === a.y) {
            return a.x - b.x;
        }
        return b.y - a.y;
    });

    // 이진 트리를 구성하는 함수
    const buildTree = (nodes) => {
        if (nodes.length === 0) return null;

        const root = nodes[0];
        const left = [];
        const right = [];

        for (let i = 1; i < nodes.length; i++) {
            if (nodes[i].x < root.x) {
                left.push(nodes[i]);
            } else {
                right.push(nodes[i]);
            }
        }

        return {
            root: root,
            left: buildTree(left),
            right: buildTree(right)
        };
    };

    // 전위 순회
    const preorder = (node, result) => {
        if (!node) return;
        result.push(node.root.index);
        preorder(node.left, result);
        preorder(node.right, result);
    };

    // 후위 순회
    const postorder = (node, result) => {
        if (!node) return;
        postorder(node.left, result);
        postorder(node.right, result);
        result.push(node.root.index);
    };

    const tree = buildTree(nodes);
    const preorderResult = [];
    const postorderResult = [];

    preorder(tree, preorderResult);
    postorder(tree, postorderResult);

    return [preorderResult, postorderResult];
}
