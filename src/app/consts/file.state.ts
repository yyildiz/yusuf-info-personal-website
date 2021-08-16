export const initialState = [
  {
    matIcon: 'keyboard_arrow_right',
    iconSrc: 'assets/folder_type_e2e.svg',
    text: 'e2e',
    link: null,
    default: false,
  },
  {
    matIcon: 'keyboard_arrow_right',
    iconSrc: 'assets/file_type_ng_module_ts.svg',
    text: 'node_modules',
  },
  {
    matIcon: 'keyboard_arrow_down',
    iconSrc: 'assets/folder_type_src.svg',
    text: 'src',
    children: [
      {
        matIcon: 'keyboard_arrow_down',
        iconSrc: 'assets/file_type_ng_module_ts.svg',
        text: 'connect',
        children: [
          {
            matIcon: '',
            iconSrc: 'assets/file_type_typescript.svg',
            text: 'connect.component.ts',
          },
          {
            matIcon: '',
            iconSrc: 'assets/file_type_html.svg',
            text: 'connect.component.html',
            link: '/connect',
            default: true,
          },
          {
            matIcon: '',
            iconSrc: 'assets/file_type_scss.svg',
            text: 'connect.component.scss',
          },
          {
            matIcon: '',
            iconSrc: 'assets/file_type_typescriptdef.svg',
            text: 'connect.component.spec.ts',
          }
        ]
      },
    ]
  },
  {
    text: '.editorconfig',
    iconSrc: 'assets/file_type_source.svg'
  },
  {
    text: '.gitignore',
    iconSrc: 'assets/file_type_source.svg'
  },
  {
    text: 'angular.json',
    iconSrc: 'assets/file_type_source.svg'
  },
  {
    text: 'browserslist',
    iconSrc: 'assets/file_type_source.svg'
  },
  {
    text: 'package.json',
    iconSrc: 'assets/file_type_source.svg'
  },
  {
    text: 'package-lock.json',
    iconSrc: 'assets/file_type_source.svg'
  },
];
