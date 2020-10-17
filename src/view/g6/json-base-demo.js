export default {
    options: {
        container: 'container',
        width: 500,
        height: 500,
        defaultNode: {
            shape: 'circle',//rect
            size: [100],
            color: '#5B8FF9',
            style: {
                Radius:0,
                fill: '#9EC9FF',
                lineWidth: 3,
            },
            labelCfg: {
                style: {
                    
                    fill: '#fff',
                    fontSize: 20,
                },
            },
        },
        defaultEdge: {
            style: {
                stroke: '#e2e2e2',
            },
        },
    },
    data: {
        nodes: [
            {
                id: 'node1',
                label: '病种名称',
                x: 150,
                y: 150,
            },
            {
                id: 'node2',
                label: '电子病历',
                x: 400,
                y: 150,
            },
            {
                id: 'node3',
                label: '门症系统',
                x: 400,
                y: 150,
            },
        ],
        edges: [
            {
                source: 'node1',
                target: 'node2',
            },
            {
                source: 'node1',
                target: 'node3',
            },
        ]
    }

};