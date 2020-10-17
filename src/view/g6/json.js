export default {
    options: {
        container: 'container',
        width: 500,
        height: 500,
        "modes": {
            "default": ["drag-canvas", "zoom-canvas", "drag-node"]
        },
        "fitView": true,
        "fitViewPadding": [
            16,
            16,
            16,
            16
        ],
        "layout": {
            "type": "grid"
        },
        "defaultNode": {
            "type": "image",
            "size": 20,
            "labelCfg": {
                "position": "center",
                "style": {
                    "textAlign": "center",
                    "fontStyle": "normal",
                    "fill": "#000"
                }
            },
            "clipCfg": {
                "type": "circle"
            }
        },
        "defaultEdge": {
            "type": "line",
            "style": {
                "cursor": "default",
                "endArrow": {
                    "$arrowType": "diy",
                    "$path": "M 0,0 L 10,5 L 10,-5 Z",
                    "$compute": e => e,
                    "path": "M 0,0 L 10,5 L 10,-5 Z",
                    "d": 5,
                    "fill": "#6b8deb",
                    "stroke": "#0c0c0c"
                }
            },
            "labelCfg": {
                "position": "middle",
                "style": {
                    "textAlign": "center",
                    "textBaseline": "middle",
                    "fontStyle": "normal"
                }
            }
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