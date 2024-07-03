import displaySpotify from './components/apps/spotify';
import displayVsCode from './components/apps/vscode';
import { displayTerminal } from './components/apps/terminal';
import { displaySettings } from './components/apps/settings';
import { displayChrome } from './components/apps/chrome';
import { displayTrash } from './components/apps/trash';
import { displayContact } from './components/apps/contact';
import { displayAboutShubham } from './components/apps/shubham';
import { displayTerminalCalc } from './components/apps/calc';
import displayClangSocial from './components/apps/clang-social';
import displayRedditClone from './components/apps/reddit';
import displayInfix from './components/apps/infix';
import displayGDSC_BIT from './components/apps/gdsc-bit';
import displayWePaint from './components/apps/wepaint';
import displayGitHubClone from './components/apps/github';
import displayToDo from './components/apps/todo';
import displayGuessPaint from './components/apps/guesspaint';
import displayFaceAnalysis from './components/apps/face';

const apps = [
    {
        id: "gdsc",
        title: "GDSC BIT",
        icon: './themes/Yaru/apps/gdsc_bit.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayGDSC_BIT,
    },
    {
        id: "chrome",
        title: "Google Chrome",
        icon: './themes/Yaru/apps/chrome.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayChrome,
    },
    {
        id: "calc",
        title: "Calc",
        icon: './themes/Yaru/apps/calc.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayTerminalCalc,
    },
    {
        id: "vscode",
        title: "Visual Studio Code",
        icon: './themes/Yaru/apps/vscode.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayVsCode,
    },
    {
        id: "terminal",
        title: "Terminal",
        icon: './themes/Yaru/apps/bash.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displayTerminal,
    },
    {
        id: "spotify",
        title: "Spotify",
        icon: './themes/Yaru/apps/spotify.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displaySpotify, // My Fav Playlist 😅
    },
    {
        id: "settings",
        title: "Settings",
        icon: './themes/Yaru/apps/gnome-control-center.png',
        disabled: false,
        favourite: true,
        desktop_shortcut: false,
        screen: displaySettings,
    },
    {
        id: "about-shubham",
        title: "About Me",
        icon: './themes/Yaru/apps/my_logo.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayAboutShubham,
    },
    {
        id: "contact",
        title: "Contact Me",
        icon: './themes/Yaru/apps/contact.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayContact,
    },
    {
        id: "trash",
        title: "Trash",
        icon: './themes/Yaru/system/user-trash-full.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayTrash,
    },
    {
        id: "infix",
        title: "Infix Operations",
        icon: './themes/Yaru/apps/infix.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayInfix,
    },
    {
        id: "clang-social",
        title: "Clang Social",
        icon: './themes/Yaru/apps/clang.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayClangSocial,
    },
    {
        id: "reddit-clone",
        title: "Reddit Clone",
        icon: './themes/Yaru/apps/reddit.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayRedditClone,
    },
    {
        id: "github",
        title: "GitHub Clone",
        icon: './themes/Yaru/apps/github.svg',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayGitHubClone
    },
    {
        id: "todo-tasks",
        title: "ToDo Tasks",
        icon: './themes/Yaru/apps/task-track.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayToDo
    },
    {
        id: "drawing",
        title: "WePaint",
        icon: './themes/Yaru/apps/drawing.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayWePaint
    },
    {
        id: "guesspaint",
        title: "GuessPaint",
        icon: './themes/Yaru/apps/guesspaint.ico',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayGuessPaint
    },
    {
        id: "face-analysis",
        title: "Face Analysis",
        icon: './themes/Yaru/apps/face.png',
        disabled: false,
        favourite: false,
        desktop_shortcut: true,
        screen: displayFaceAnalysis
    },
]

export default apps;
