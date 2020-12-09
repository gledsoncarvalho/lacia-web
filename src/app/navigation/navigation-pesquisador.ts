import { FuseNavigation } from '../../@fuse/types/fuse-navigation';

export const navigationPesquisador: FuseNavigation[] = [
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
                        id: 'submissao',
                        title: 'Submeter Projeto',
                        type: 'item',
                        url: '/apps/projetos/submeter'
                    },
                    {
                        id: 'meus-projetos',
                        title: 'Meus projetos',
                        type: 'item',
                        url: '/apps/projetos/meus',
                        badge: {
                            title: '3',
                            bg: '#FF6F00',
                            fg: '#FFFFFF'
                        }
                    },
                    {
                        id: 'projetos-cadastrados',
                        title: 'Projetos Cadastrados',
                        type: 'item',
                        url: '/apps/projetos/cadastrados',
                        badge: {
                            title: '3',
                            bg: '#FF6F00',
                            fg: '#FFFFFF'
                        },
                    },
                    {
                        id: 'tarefas',
                        title: 'Tarefas',
                        type: 'item',
                        url: '/apps/projetos/tarefas'
                    },
                ]
            },
            {
                id: 'pesquisador',
                title: 'Pesquisador',
                type: 'item',
                icon: 'research',
                url: '/apps/pesquisador',
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
