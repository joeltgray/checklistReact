const initialData = {
    tasks: {
        'task-1': {id: 'task-1', content: 'Make breakfast'},
        'task-2': {id: 'task-2', content: 'Take shit'},
        'task-3': {id: 'task-3', content: 'Eat shit'},
        'task-4': {id: 'task-4', content: 'Get up'},
        'task-5': {id: 'task-1', content: 'Put breakfast down toilet'},
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'To do',
            taskIds: ['task-1','task-2','task-3','task-4','task-5',]
        },
    },

    columnOrder: ['column-1']
}

export default initialData;