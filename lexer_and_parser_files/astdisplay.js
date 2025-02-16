import * as d3 from 'd3';

function transformParseTreeToD3Data(parseTree) {
    const data = {
        name: getNodeName(parseTree),
        children: []
    };

    // Add child nodes if they exist
    if (parseTree.children) {
        parseTree.children.forEach(child => {
            if (child) {
                if (child.symbol) {
                    data.children.push({
                        name: child.symbol.text
                    });
                } else {
                    data.children.push(transformParseTreeToD3Data(child));
                }
            }
        });
    }

    return data;
}

function getNodeName(node) {
    if (node.symbol) {
        return node.symbol.text;
    } else if (node.ruleIndex !== undefined) {
        const ruleName = node.parser.ruleNames[node.ruleIndex];
        return ruleName.charAt(0).toUpperCase() + ruleName.slice(1);
    } else {
        return node.constructor.name.replace('Context', '');
    }
}

function visualizeAST(parseTree, containerId) {
    d3.select(containerId).selectAll("*").remove();

    const margin = { top: 20, right: 90, bottom: 30, left: 90 };
    const baseWidth = 960;
    const baseHeight = 500;

    // Calculate dynamic width and height based on the depth and breadth of the tree
    const data = transformParseTreeToD3Data(parseTree);
    const root = d3.hierarchy(data);
    const treeDepth = root.height; 
    const treeBreadth = root.leaves().length; 

    const width = Math.max(baseWidth, treeBreadth * 100); 
    const height = Math.max(baseHeight, treeDepth * 100); 

    const svg = d3.select(containerId)
        .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", `translate(${margin.left},${margin.top})`);

    const treeLayout = d3.tree()
        .size([width, height]) 
        .separation((a, b) => 1.5); 

    treeLayout(root);

    svg.selectAll(".link")
        .data(root.links())
        .enter()
        .append("path")
        .attr("class", "link")
        .attr("d", d3.linkVertical() 
            .x(d => d.x) 
            .y(d => d.y) 
        );

    const nodes = svg.selectAll(".node")
        .data(root.descendants())
        .enter()
        .append("g")
        .attr("class", "node")
        .attr("transform", d => `translate(${d.x},${d.y})`);

    nodes.append("circle")
        .attr("r", 6);

    nodes.append("text")
        .attr("dy", ".35em")
        .attr("x", d => d.children ? -13 : 13) 
        .style("text-anchor", d => d.children ? "end" : "start")
        .text(d => d.data.name);
}

export { visualizeAST };