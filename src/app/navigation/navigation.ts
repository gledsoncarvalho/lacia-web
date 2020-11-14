import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
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
                            title: '5',
                            bg: '#FF6F00',
                            fg: '#FFFFFF'
                        }
                    },
                    {
                        id: 'aprovar-projeto',
                        title: 'Aprovar Projeto',
                        type: 'item',
                        url: '/apps/projetos/aprovar'
                    },
                    {
                        id: 'projetos-cadastrados',
                        title: 'Projetos Cadastrados',
                        type: 'item',
                        url: '/apps/projetos/cadastrados',
                        badge: {
                            title: '1',
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
                id: 'coordenador',
                title: 'Coordenador',
                type: 'item',
                icon: 'assignment_ind',
                url: '/apps/coordenador'
            },
            {
                id: 'pesquisador',
                title: 'Pesquisador',
                type: 'collapsable',
                icon: 'research',
                url: '/apps/pesquisador',
                children: [
                    {
                        id: 'aprovar-pesquisador',
                        title: 'Aprovar Pesquisador',
                        type: 'item',
                        url: '/apps/pesquisador/aprovar-pesquisador'
                    }
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
