var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
            ],
            "config": {
                "/": {
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                },
                "/General": {
                    "ToolBoxButtonState": "topcenter",
                    "alignment": "1",
                    "arrangement": "1",
                    "sortDesc": "true",
                    "textLines": "3"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "/usr/share/wallpapers/Next/",
                    "SlidePaths": "/usr/share/wallpapers/"
                },
                "/Wallpaper/org.kde.slideshow/General": {
                    "Image": "file:///usr/share/wallpapers/Next/",
                    "SlidePaths": "/usr/share/wallpapers/"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "center",
            "applets": [
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "0"
                        },
                        "/General": {
                            "compactMode": "true",
                            "favoritesPortedToKAstats": "true",
                            "icon": "/usr/share/icons/start-here-manjaro.svg",
                            "systemFavorites": "suspend\\,hibernate\\,reboot\\,shutdown"
                        },
                        "/Shortcuts": {
                            "global": "Alt+F1"
                        }
                    },
                    "plugin": "org.kde.plasma.kickoff"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "0"
                        },
                        "/General": {
                            "groupPopups": "false",
                            "groupedTaskVisualization": "3",
                            "highlightWindows": "false",
                            "launchers": "",
                            "showOnlyCurrentActivity": "false",
                            "showOnlyCurrentDesktop": "false",
                            "showToolTips": "false",
                            "wheelEnabled": "false",
                            "wheelSkipMinimized": "false"
                        }
                    },
                    "plugin": "org.kde.plasma.taskmanager"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "100"
                        }
                    },
                    "plugin": "org.kde.plasma.marginsseparator"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.showdesktop"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.pager"
                },
                {
                    "config": {
                    },
                    "plugin": "org.kde.plasma.systemtray"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "100",
                            "popupHeight": "400",
                            "popupWidth": "352"
                        },
                        "/Appearance": {
                            "firstDayOfWeek": "1",
                            "fontFamily": "Noto Sans",
                            "fontStyleName": "Regular",
                            "fontWeight": "400",
                            "showDate": "false",
                            "use24hFormat": "2"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "480",
                            "DialogWidth": "640"
                        }
                    },
                    "plugin": "org.kde.plasma.digitalclock"
                },
                {
                    "config": {
                        "/General": {
                            "expanding": "false"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "99",
                    "DialogWidth": "2240"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                },
                "/Shortcuts": {
                    "global": ""
                }
            },
            "height": 1.875,
            "hiding": "normal",
            "location": "top",
            "maximumLength": 94,
            "minimumLength": 94,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
