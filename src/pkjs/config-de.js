module.exports = [
  {
    "type": "heading",
    "defaultValue": "Einstellungen"
  },
  {
    "type": "text",
    "defaultValue": "Dies sind die Einstellungen für die Breathe-App. Sie benutzen Version 2.53 von Breathe.",
  },
  {
    "type": "section",
    "items": [
      {
        "type": "heading",
        "defaultValue": "Farben"
      },
      {
        "type": "color",
        "messageKey": "backgroundColor",
        "defaultValue": "000000",
        "label": "Hintergrundfarbe",
        "sunlight": true,
        "layout": "BLACK_WHITE"
      },
      {
        "type": "color",
        "messageKey": "circleColor",
        "defaultValue": "00AAFF",
        "label": "Kreisfarbe",
        "sunlight": true,
        "capabilities": ["COLOR"]
      }
    ]
  },
  {
    "type": "section",
    "items": [
      {
        "type": "heading",
        "defaultValue": "App"
      },
      {
        "type": "toggle",
        "messageKey": "rememberDuration",
        "defaultValue": false,
        "label": "Letze Dauer merken",
      },
      {
        "type": "toggle",
        "messageKey": "vibrationEnabled",
        "defaultValue": true,
        "label": "Vibrationen beim Einatmen",
      },
      {
        "type": "select",
        "messageKey": "vibrationType",
        "defaultValue": "0",
        "label": "Vibrationstyp",
        "description": "Graduell fühlt sich an wie die Apple-Watch-App, Doppeltippen ist die Standard-Pebble-Vibration.",
        "options": [
          {
            "label": "Graduell - nur Einatmen",
            "value": "0"
          },
          {
            "label": "Graduell - Einatmen und Ausatmen",
            "value": "1"
          },
          { 
            "label": "Doppeltippen", 
            "value": "2"
          }
        ]
      },
      {
        "type": "toggle",
        "capabilities": [
          "NOT_PLATFORM_APLITE", 
          "NOT_PLATFORM_BASALT",
          "NOT_PLATFORM_CHALK"
          ],
        "messageKey": "heartRateVariation",
        "defaultValue": false,
        "label": "Atemgeschwindigkeit nach Herzfrequenz wählen",
        "description" : "Herzfrequenz setzt eine Uhr mit HR-Sensor voraus."
      },
      {
        "type": "slider",
        "messageKey": "breathsPerMinute",
        "defaultValue": 7,
        "label": "Atemzüge pro Minute",
        "min": 2,
        "max": 10,
        "step": 1
      }
    ]
  },
  {
    "type": "section",
    "items": [
      {
        "type": "heading",
        "defaultValue": "Erinnerungen"
      },
      {
        "type": "select",
        "messageKey": "reminderHours",
        "defaultValue": "4",
        "label": "Erinnere mich zu atmen…",
        "description": "Die App wird dich in diesen Abständen erinnern, zu atmen.",
        "options": [
          {
            "label": "Jede Stunde",
            "value": "1"
          },
          { 
            "label": "Alle 2 Stunden", 
            "value": "2" 
          },
          { 
            "label": "Alle 3 Stunden",
            "value": "3" 
          },
          { 
            "label": "Alle 4 Stunden",
            "value": "4" 
          },
          { 
            "label": "Alle 6 Stunden",
            "value": "6" 
          },
          { 
            "label": "Nicht erinnern",
            "value": "0" 
          }
        ]
      },
      {
        "type": "slider",
        "messageKey": "reminderHoursStart",
        "defaultValue": 8,
        "label": "Erinnerungen beginnen um",
        "description": "Breathe wird dich von zu dieser Uhrzeit morgens an (z.B. 8 Uhr vormittags) bis 12 Stunden später benachrichtigen.",
        "min": 6,
        "max": 10,
        "step": 1
      }
    ]
  },
  {
    "type": "section",
    "capabilities": ["NOT_PLATFORM_APLITE"],
    "items": [
      {
        "type": "heading",
        "defaultValue": "App-Glance",
      },
      {
        "type": "toggle",
        "messageKey": "appGlanceEnabled",
        "defaultValue": true,
        "label": "App-Glance-Text im Startmenü anzeigen",
      },
      {
        "type": "select",
        "messageKey": "appGlanceType",
        "defaultValue": "0",
        "label": "App-Glance-Typ",
        "options": [
          {
            "label": "Letzte Sitzung",
            "value": "0"
          },
          {
            "label": "Insgesamt heute",
            "value": "1"
          },
          {
            "label": "Serie",
            "capabilities": ["NOT_PLATFORM_APLITE"],
            "value": "2"
          }
        ]
      },
    ]
  },
  {
    "type": "section",
    "capabilities": ["HEALTH"],
    "items": [
      {
        "type": "heading",
        "defaultValue": "Gesundheit"
      },
      {
        "type": "select",
        "messageKey": "displayText",
        "defaultValue": "1",
        "label": "Schnellinfo",
        "description": "Legt fest, was im Hauptmenü oben angezeigt wird. Herzfrequenz setzt eine Uhr mit HR-Sensor voraus.",
        "options": [
          {
            "label": "Nichts",
            "value": "0"
          },
          {
            "label": "Begrüßung",
            "value": "1"
          },
          { 
            "label": "Schritte", 
            "value": "2" 
          },
          { 
            "label": "Herzfrequenz",
            "capabilities": ["PLATFORM_DIORITE", "PLATFORM_EMERY"],
            "value": "3" 
          }
        ]
      },
    ]
  },
  {
    "type": "section",
    "capabilities": ["NOT_PLATFORM_APLITE"],
    "items": [
      {
        "type": "heading",
        "defaultValue": "Erfolge",
      },
      {
        "type": "toggle",
        "messageKey": "achievementsEnabled",
        "defaultValue": true,
      "label": "Erfolge erhalten"
      },
      {
        "type": "select",
        "messageKey": "bottomTextType",
        "defaultValue": "0",
        "label": "Unterer Text im Hauptmenü",
        "options": [
          {
            "label": "Insgesamt heute",
            "value": "0"
          },
          {
            "label": "Serie",
            "value": "1"
          }
        ]
      },
      {
        "type": "input",
        "messageKey": "achievementsBackup",
        "defaultValue": "0000000000000000000000000000000000000",
        "label": "Erfolge-Backup",
        "description": "Dieser Text enthält die Information zu Ihren Erfolge. Er wird automatisch in der Pebble-App gespeichert, Sie können ihn aber auch kopieren und einfügen, wenn Sie die App neu installieren."
      },
      {
        "type": "button",
        "primary": false,
        "defaultValue": "Einstellungen Zurücksetzen",
        "id": "resetAchievementsButton",
      }
    ]
  },
  {
    "type": "text",
    "defaultValue": "<em><center>Vielen Dank an die Betatester: <br>Paula&nbsp;Bosca, Nikita&nbsp;Cheng, Ayush&nbsp;Gupta, Ellen&nbsp;Huang, Yvonne&nbsp;Tan, David&nbsp;Voicu, /u/dryingsocks, /u/JohnEdwa, and /u/PiwwowPants.</center></em>",
  },
  {
    "type": "submit",
    "defaultValue": "Einstellungen speichern"
  }
];