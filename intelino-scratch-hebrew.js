// ==UserScript==
// @name         Intelino Scratch Hebrew
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       UncleHezi
// @match        https://scratch.intelino.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=intelino.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Select the node that will be observed for mutations
    let targetNode = document.body;

    // Options for the observer (which mutations to observe)
    const config = { attributes: true, childList: true, subtree: true };

    // Callback function to execute when mutations are observed
    const callback = (_m, _o) => {
        translate();
    };

    // Create an observer instance linked to the callback function
    const observer = new MutationObserver(callback);

    // Start observing the target node for configured mutations
    observer.observe(targetNode, config);

    function getKey(e) {
        if (e.matches("text")) {
            return e.innerHTML;
        } else {
            return e.innerText;
        }
    }

    function setKey(e, value) {
        if (e.matches("text")) {
            e.innerHTML = value;
        } else {
            e.innerText = value;
        }
    }

    function translate() {
        document.querySelectorAll("text, div.goog-menuitem-content").forEach(e => {
            let key = getKey(e);
            // Caution: if the string literal in next line apprears to be empty, it isn't.
            // it contains the 202b unicode character: https://unicode-explorer.com/c/202B
            // TODO: find a way to use HTML entity or some other visual representation of
            // this character such that it is not ignored by JS in processing.
            if (key[0] === "‫") {
                key = key.substring(1);
            }
            // Caution: if the string literal in next line apprears to be empty, it isn't.
            // it contains the 202c unicode character: https://unicode-explorer.com/c/202C
            // TODO: find a way to use HTML entity or some other visual representation of
            // this character such that it is not ignored by JS in processing.
            if (key[key.length - 1] === "‬") {
                key = key.substring(0, key.length - 1);
            }
            // Caution: if the string literals in next lines apprear empty, they arn't.
            // it contains the 202b and 202c unicode characters:
            // https://unicode-explorer.com/c/202B & https://unicode-explorer.com/c/202C
            // TODO: find a way to use HTML entity or some other visual representation of
            // these characters such that they are not ignored by JS in processing.
            if (dictionary.has(key)) {
                setKey(e, "‫" + dictionary.get(key) + "‬");
            }
        });
    }

    let dictionary = new Map();
    dictionary.set("when&nbsp;movement", "כשכיוון התנועה הוא");
    dictionary.set("forward", "קדימה");
    dictionary.set("backward", "אחורה");
    dictionary.set("paused", "עצירה זמנית");
    dictionary.set("stopped", "עצירה מלאה");
    dictionary.set("stop&nbsp;driving", "עצור.י");
    dictionary.set("when&nbsp;distance&nbsp;&gt;=", "כשהמרחק >=");
    dictionary.set("cm", "ס\"מ");
    dictionary.set("cm/s", "סמ\"ש");
    dictionary.set("drive", "סע.י");
    dictionary.set("cm&nbsp;at", "ס\"מ ב");
    dictionary.set("at", "ב");
    dictionary.set("when&nbsp;train&nbsp;sees", "כשהרכבת רואה");
    dictionary.set("pause&nbsp;driving&nbsp;for", "עצור.י למשך");
    dictionary.set("speed&nbsp;(cm/s)", "מהירות (סמ\"ש)");
    dictionary.set("distance&nbsp;(cm)", "מרחק (ס\"מ)");
    dictionary.set("reset&nbsp;distance", "אפס.י מרחק");
    dictionary.set("direction", "כיוון");
    dictionary.set("decouple&nbsp;wagon", "נתק.י קרון");
    dictionary.set("set", "הגדר.י ל");
    dictionary.set("top&nbsp;LED", "לד עליון");
    dictionary.set("top LED", "לד עליון");
    dictionary.set("headlights", "פנסים קדמיים");
    dictionary.set("taillights", "פנסים אחוריים");
    dictionary.set("color&nbsp;to", "את הצבע");
    dictionary.set("hue&nbsp;to", "את הגון");
    dictionary.set("seconds", "שניות");
    dictionary.set("red&nbsp;(1)", "אדום (1)");
    dictionary.set("sensor&nbsp;color", "צבע החיישן");
    dictionary.set("on", "פועל");
    dictionary.set("off", "כבוי");
    dictionary.set("lights", "אורות");
    dictionary.set("when", "כאשר");
    dictionary.set("feedback&nbsp;sounds", "צלילי משוב");
    dictionary.set("action&nbsp;snap&nbsp;commands", "פקודות צמדני פעולה");
    dictionary.set("seen", "נראה");
    dictionary.set("none&nbsp;(0)", "ללא (0)");
    dictionary.set("white&nbsp;(7)", "לבן (7)");
    dictionary.set("none (0)", "ללא (0)");
    dictionary.set("black (0)", "שחור (0)");
    dictionary.set("red (1)", "אדום (1)");
    dictionary.set("green (2)", "ירוק (2)");
    dictionary.set("yellow (3)", "צהוב (3)");
    dictionary.set("blue (4)", "כחול (4)");
    dictionary.set("magenta (5)", "מג'נטה (5)");
    dictionary.set("cyan (6)", "ציאן (6)");
    dictionary.set("white (7)", "לבן (7)");
    dictionary.set("clear&nbsp;stored&nbsp;custom&nbsp;commands", "שכח.י פקודות מותאמות אישית");
    dictionary.set("left", "שמאלה");
    dictionary.set("right", "ימינה");
    dictionary.set("straight", "ישר");
    dictionary.set("default", "ברירת מחדל");
    dictionary.set("last&nbsp;decision", "ההחלטה הקודמת");
    dictionary.set("next&nbsp;decision", "ההחלטה הבאה");
    dictionary.set("on&nbsp;next&nbsp;split&nbsp;go", "בפיצול הבא פנה.י");
    dictionary.set("when&nbsp;on&nbsp;a&nbsp;split&nbsp;track", "כאשר בפיצול, עקוב.עקבי");
    dictionary.set("RGB&nbsp;to", "אי\"כ ל");
})();

/*
<path class="blocklyPath blocklyBlockBackground" stroke="#0B8E69" fill="#0FBD8C" fill-opacity="1" d="m 0,0 c 25,-22 71,-22 96,0 H 310 a 4,4 0 0,1 4,4 v 40  a 4,4 0 0,1 -4,4 H 48   c -2,0 -3,1 -4,2 l -4,4 c -1,1 -2,2 -4,2 h -12 c -2,0 -3,-1 -4,-2 l -4,-4 c -1,-1 -2,-2 -4,-2 H 4 a 4,4 0 0,1 -4,-4 z" transform="scale(-1 1)"></path>

<rect rx="4" ry="4" x="-20" y="0" width="115" height="32" stroke="#0B8E69" fill="#0FBD8C" class="blocklyBlockBackground" fill-opacity="1"></rect>

<text class="blocklyText blocklyDropdownText" x="42" y="18" dominant-baseline="middle" dy="0" text-anchor="middle">‫עצירה זמנית‬</text>

<image height="12px" width="12px" xlink:href="./static/blocks-media/dropdown-arrow.svg" transform="translate(-12,11)"></image>
 */