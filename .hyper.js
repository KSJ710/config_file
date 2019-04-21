module.exports = {
  config: {
    // Choose either "stable" for receiving highly polished,
    // or "canary" for less polished but more frequent updates
    updateChannel: 'canary',

    // default font size in pixels for all tabs
    fontSize: 12,

    // font family with optional fallbacks
    fontFamily: 'MyricaM, Menlo, "DejaVu Sans Mono", Consolas, "Lucida Console", monospace',

    // terminal cursor background color and opacity (hex, rgb, hsl, hsv, hwb or cmyk)
    cursorColor: 'rgba(248,28,229,0.8)',

    // `BEAM` for |, `UNDERLINE` for _, `BLOCK` for █
    cursorShape: 'UNDERLINE',

    // set to true for blinking cursor
    cursorBlink: true,

    copyOnSelect: true,

    // WSL のクライアントを Hyper にするための根幹
    shell: 'c:\\Windows\\System32\\wsl.exe',

    // 起動時カレントディレクトリをユーザーのホームに
    shellArgs: ['~'],

    // custom css to embed in the main window
    css: '',

    // custom css to embed in the terminal window
    termCSS: '',

    // set to `true` (without backticks) if you're using a Linux setup that doesn't show native menus
    // default: `false` on Linux, `true` on Windows (ignored on macOS)
    showHamburgerMenu: '',

    // set to `false` if you want to hide the minimize, maximize and close buttons
    // additionally, set to `'left'` if you want them on the left, like in Ubuntu
    // default: `true` on windows and Linux (ignored on macOS)
    showWindowControls: '',

    // custom padding (css format, i.e.: `top right bottom left`)
    padding: '12px 14px',

    // for environment variables
    env: {},

    // set to false for no bell
    bell: 'SOUND',

    copyOnSelect: false,

    //ファイルタイプアイコン
    display: 'inline-block',
    marginRight: '0.25rem',
    transition: 'opacity 200ms ease-in',
    verticalAlign: 'middle',
    width: '1rem',

    display: 'inline-block',
    marginRight: '0.25rem',
    transition: 'opacity 200ms ease-in',
    verticalAlign: 'middle',
    width: '1rem',
    opacity: 0.3,

    nodejs: ['node'],
    docker: ['docker-compose'],

    bash: '#FFF',
    fish: '#D8494F',
    zsh: '#C5DB00',

    source: '^(.*?) ',
    flags: '',

    // other configs...
    alwaysOnTop: {
      debug: false,
      default: true // enabled on application start
    }
  },
  plugins: ['hyperpower', 'hyperterm-material', 'hyper-always-on-top', 'hyper-search', 'hyper-statusline', 'hyper-sync-settings', 'hyperlinks', 'hyper-powershell'],
};
