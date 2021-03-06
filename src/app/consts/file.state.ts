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
        text: 'home',
        children: [
          {
            matIcon: '',
            iconSrc: 'assets/file_type_typescript.svg',
            text: 'home.component.ts',
          },
          {
            matIcon: '',
            iconSrc: 'assets/file_type_html.svg',
            text: 'home.component.html',
            link: 'home',
            default: true,
          },
          {
            matIcon: '',
            iconSrc: 'assets/file_type_scss.svg',
            text: 'home.component.scss',
          },
          {
            matIcon: '',
            iconSrc: 'assets/file_type_typescriptdef.svg',
            text: 'home.component.spec.ts',
          }
        ]
      },
      {
        matIcon: 'keyboard_arrow_down',
        iconSrc: 'assets/file_type_ng_module_ts.svg',
        text: 'blog',
        children: [
          {
            matIcon: '',
            iconSrc: 'assets/file_type_typescript.svg',
            text: 'blog.component.ts',
          },
          {
            matIcon: '',
            iconSrc: 'assets/file_type_html.svg',
            text: 'blog.component.html',
            link: 'blog',
            default: true,
          },
          {
            matIcon: '',
            iconSrc: 'assets/file_type_scss.svg',
            text: 'blog.component.scss',
          },
          {
            matIcon: '',
            iconSrc: 'assets/file_type_typescriptdef.svg',
            text: 'blog.component.spec.ts',
          }
        ]
      },
      {
        matIcon: 'keyboard_arrow_down',
        iconSrc: 'assets/file_type_ng_module_ts.svg',
        text: 'contact',
        children: [
          {
            matIcon: '',
            iconSrc: 'assets/file_type_typescript.svg',
            text: 'contact.component.ts',
          },
          {
            matIcon: '',
            iconSrc: 'assets/file_type_html.svg',
            text: 'contact.component.html',
            link: 'contact',
            default: true,
          },
          {
            matIcon: '',
            iconSrc: 'assets/file_type_scss.svg',
            text: 'contact.component.scss',
          },
          {
            matIcon: '',
            iconSrc: 'assets/file_type_typescriptdef.svg',
            text: 'contact.component.spec.ts',
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
