{
    "homepage": "https://inkscape.org/",
    "license": "GPL-2.0-only,GPL-3.0-only",
    "version": "1.0.0",
    "description": "Inkscape is a professional vector graphics editor",
    "architecture": {
        "32bit": {
            "url": "https://ci.appveyor.com/api/buildjobs/w631q7d8fcqq2trb/artifacts/build%2Finkscape-1.0alpha_2019-03-15_1602477-x86.7z",
        },
        "64bit": {
            "url": "https://ci.appveyor.com/api/buildjobs/dc6dtbhe6se73pej/artifacts/build%2Finkscape-1.0alpha_2019-03-15_1602477-x64.7z",
        }
    },
    "extract_dir": "inkscape",
    "bin": "inkscape.exe",
    "shortcuts": [
        [
            "inkscape.exe",
            "Inkscape 1.0"
        ]
    ],
    "checkver": {
        "url": "https://inkscape.org/",
        "re": "Current stable version: ([\\d.]+)"
    }
}
