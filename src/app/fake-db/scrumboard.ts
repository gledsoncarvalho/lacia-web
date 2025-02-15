export class ScrumboardFakeDb
{
    public static boards = [
        {
            'id'      : '421',
            'name'    : 'Engenharia de Software',
            'uri'     : 'Engenharia-Software',
            'lists'   : [
                
            ],
            'cards'   : [
                
            ],
            'members' : [
                {
                    'id'    : '56027c1930450d8bf7b10758',
                    'name'  : 'Fabio Gomes',
                    'avatar': 'assets/images/avatars/fabio.jpg'
                },
                {
                    'id'    : '26027s1930450d8bf7b10828',
                    'name'  : 'Vinicius Mendonça',
                    'avatar': 'assets/images/avatars/vinicius.jpg'
                },
                {
                    'id'    : '76027g1930450d8bf7b10958',
                    'name'  : 'Gledson Carvalho',
                    'avatar': 'assets/images/avatars/gledson.jpg'
                },
                {
                    'id'    : '36027j1930450d8bf7b10159',
                    'name'  : 'Francisco José',
                    'avatar': 'assets/images/avatars/francisco.jpg'
                }
                ,
                {
                    'id'    : '36027j1930450d8bf7b10151',
                    'name'  : 'Diego Ribeiro',
                    'avatar': 'assets/images/avatars/diego.jpg'
                }
                ,
                {
                    'id'    : '36027j1930450d8bf7b10152',
                    'name'  : 'Brenno Santos',
                    'avatar': 'assets/images/avatars/brenno.jpg'
                }
            ],
            'labels'  : [
            ]
        },
        {
            'id'      : '431',
            'name'    : 'Cidades Inteligentes',
            'uri'     : 'acme-backend-application',
            'lists'   : [
                {
                    'id'     : '56027cf5a2ca3839a5d36103',
                    'name'   : 'Designs',
                    'idCards': [
                        '5603a2a3cab0c8300f6096b3'
                    ]
                },
                {
                    'id'     : '56127cf2a2ca3539g7d36103',
                    'name'   : 'Development',
                    'idCards': [
                        '5637273da9b93bb84743a0f9'
                    ]
                }
            ],
            'cards'   : [
                {
                    'id'               : '5603a2a3cab0c8300f6096b3',
                    'name'             : 'Calendar App Design',
                    'description'      : '',
                    'idAttachmentCover': '56027cfcbe1b72ecf1fc452a',
                    'idMembers'        : [
                        '56027c1930450d8bf7b10758',
                        '36027j1930450d8bf7b10158'
                    ],
                    'idLabels'         : [
                        '56027e4119ad3a5dc28b36cd',
                        '5640635e19ad3a5dc21416b2'
                    ],
                    'attachments'      : [
                    ],
                    'subscribed'       : true,
                    'checklists'       : [
                        {
                            'id'               : '63021cfdbe1x72wcf1fc451v',
                            'name'             : 'Checklist',
                            'checkItemsChecked': 1,
                            'checkItems'       : [
                                {
                                    'name'   : 'Implement a calendar library',
                                    'checked': false
                                },
                                {
                                    'name'   : 'Replace event colors with Material Design colors',
                                    'checked': true
                                },
                                {
                                    'name'   : 'Replace icons with Material Design icons',
                                    'checked': false
                                },
                                {
                                    'name'   : 'Use moment.js',
                                    'checked': false
                                }
                            ]
                        },
                        {
                            'name'             : 'Checklist 2',
                            'id'               : '74031cfdbe1x72wcz1dc166z',
                            'checkItemsChecked': 1,
                            'checkItems'       : [
                                {
                                    'name'   : 'Replace event colors with Material Design colors',
                                    'checked': true
                                },
                                {
                                    'name'   : 'Replace icons with Material Design icons',
                                    'checked': false
                                },
                                {
                                    'name'   : 'Use moment.js',
                                    'checked': false
                                }
                            ]
                        }
                    ],
                    'checkItems'       : 7,
                    'checkItemsChecked': 2,
                    'comments'         : [
                        {
                            'idMember': '56027c1930450d8bf7b10758',
                            'message' : 'We should be able to add moment.js without any problems',
                            'time'    : '12 mins. ago'
                        },
                        {
                            'idMember': '36027j1930450d8bf7b10158',
                            'message' : 'I added a link for a page that might help us deciding the colors',
                            'time'    : '30 mins. ago'
                        }
                    ],
                    'activities'       : [
                        {
                            'idMember': '56027c1930450d8bf7b10758',
                            'message' : 'added a comment',
                            'time'    : '12 mins. ago'
                        },
                        {
                            'idMember': '36027j1930450d8bf7b10158',
                            'message' : 'added a comment',
                            'time'    : '30 mins. ago'
                        },
                        {
                            'idMember': '36027j1930450d8bf7b10158',
                            'message' : 'attached a link',
                            'time'    : '45 mins. ago'
                        }
                    ],
                    'due'              : null
                },
                {
                    'id'               : '5637273da9b93bb84743a0f9',
                    'name'             : 'Fix Splash Screen bugs',
                    'description'      : '',
                    'idAttachmentCover': '5603a2ae2bbd55bb2db57478',
                    'idMembers'        : [
                        '56027c1930450d8bf7b10758'
                    ],
                    'idLabels'         : [],
                    'attachments'      : [
                        {
                            'id'  : '5603a2ae2bbd55bb2db57478',
                            'name': 'mail-app-design.jpg',
                            'src' : 'assets/images/scrumboard/mail.jpg',
                            'time': 'Nov 1 at 12:34PM',
                            'type': 'image'
                        }
                    ],
                    'subscribed'       : true,
                    'checklists'       : [],
                    'checkItems'       : 0,
                    'checkItemsChecked': 0,
                    'comments'         : [],
                    'activities'       : [],
                    'due'              : null
                }
            ],
            'members' : [
                {
                    'id'    : '56027c1930450d8bf7b10758',
                    'name'  : 'Alice Freeman',
                    'avatar': 'assets/images/avatars/alice.jpg'
                },
                {
                    'id'    : '26027s1930450d8bf7b10828',
                    'name'  : 'Danielle Obrien',
                    'avatar': 'assets/images/avatars/danielle.jpg'
                },
                {
                    'id'    : '76027g1930450d8bf7b10958',
                    'name'  : 'James Lewis',
                    'avatar': 'assets/images/avatars/james.jpg'
                },
                {
                    'id'    : '36027j1930450d8bf7b10158',
                    'name'  : 'Vincent Munoz',
                    'avatar': 'assets/images/avatars/vincent.jpg'
                }
            ],
            'labels'  : [
                {
                    'id'   : '56027e4119ad3a5dc28b36cd',
                    'name' : 'Design',
                    'color': 'red-500'
                },
                {
                    'id'   : '5640635e19ad3a5dc21416b2',
                    'name' : 'App',
                    'color': 'blue-500'
                },
                {
                    'id'   : '6540635g19ad3s5dc31412b2',
                    'name' : 'Feature',
                    'color': 'green-400'
                }
            ]
        }
    ];
}
