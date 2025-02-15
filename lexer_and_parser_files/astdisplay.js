import * as d3 from 'd3';

function transformParseTreeToD3Data(parseTree) {
    // Handle ANTLR4 parse tree node
    const data = {
        name: getNodeName(parseTree),
        children: []
    };

    // Add child nodes if they exist
    if (parseTree.children) {
        parseTree.children.forEach(child => {
            if (child) {
                // Skip null children
                if (child.symbol) {
                    // Handle terminal nodes (tokens)
                    data.children.push({
                        name: child.symbol.text
                    });
                } else {
                    // Handle non-terminal nodes
                    data.children.push(transformParseTreeToD3Data(child));
                }
            }
        });
    }

    return data;
}

function getNodeName(node) {
    if (node.symbol) {
        // Terminal node (token)
        return node.symbol.text;
    } else if (node.ruleIndex !== undefined) {
        // Non-terminal node (parser rule)
        const ruleName = node.parser.ruleNames[node.ruleIndex];
        return ruleName.charAt(0).toUpperCase() + ruleName.slice(1);
    } else {
        // Fallback
        return node.constructor.name.replace('Context', '');
    }
}

function visualizeAST(parseTree, containerId) {
    // Clear previous visualization
    d3.select(containerId).selectAll("*").remove();

    const margin = { top: 20, right: 90, bottom: 30, left: 90 };
    const baseWidth = 960;
    const baseHeight = 500;

    // Calculate dynamic width and height based on the depth and breadth of the tree
    const data = transformParseTreeToD3Data(parseTree);
    const root = d3.hierarchy(data);
    const treeDepth = root.height; // Depth of the tree
    const treeBreadth = root.leaves().length; // Number of leaf nodes

    const width = Math.max(baseWidth, treeBreadth * 100); // Adjust width based on tree breadth
    const height = Math.max(baseHeight, treeDepth * 100); // Adjust height based on tree depth

    const svg = d3.select(containerId)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    // Create a tree layout and set the size for top-down orientation
    const treeLayout = d3.tree()
        .size([width, height]) // Swap width and height for top-down layout
        .separation((a, b) => 1.5); // Increase separation between nodes

    treeLayout(root);

    // Add links (lines between nodes)
    svg.selectAll(".link")
        .data(root.links())
        .enter()
        .append("path")
        .attr("class", "link")
        .attr("d", d3.linkVertical() // Use linkVertical for top-down layout
            .x(d => d.x) // Horizontal position
            .y(d => d.y) // Vertical position
        );

    // Add nodes (circles and text)
    const nodes = svg.selectAll(".node")
        .data(root.descendants())
        .enter()
        .append("g")
        .attr("class", "node")
        .attr("transform", d => `translate(${d.x},${d.y})`);

    // Add circles for nodes
    nodes.append("circle")
        .attr("r", 6);

    // Add text labels for nodes
    nodes.append("text")
        .attr("dy", ".35em")
        .attr("x", d => d.children ? -13 : 13) // Adjust text position
        .style("text-anchor", d => d.children ? "end" : "start")
        .text(d => d.data.name);
}

export { visualizeAST };