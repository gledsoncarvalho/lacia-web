import { FuseNavigation } from '../../@fuse/types/fuse-navigation';
export const navigationAluno: FuseNavigation[] = [
    {
        id: 'applications',
        title: 'APLICAÇÕES',
        translate: 'NAV.APPLICATIONS',
        type: 'group',
        icon: 'apps',
        children: [
            {
                id: 'to-do',
                title: 'Projetos',
                translate: 'NAV.TODO',
                type: 'collapsable',
                icon: 'library_books',
                children: [
                    {
                        id: 'tarefas',
                        title: 'Tarefas',
                        type: 'item',
                        url: '/apps/projetos/tarefas'
                    },
                ]
            },
            {
                id: 'aluno',
                title: 'Aluno',
                type: 'item',
                icon: 'person',
                url: '/apps/aluno'
            },
        ]
    }
];
