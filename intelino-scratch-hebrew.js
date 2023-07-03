// ==UserScript==
// @name         Intelino Scratch Hebrew
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
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

    function translate() {
        document.querySelectorAll("text, .goog-menuitem-content").forEach(e => {
            let key = e.innerHTML;
            if (key[0] === "‫") {
                key = key.substring(1);
            }
            if (key[key.length - 1] === "‬") {
                key = key.substring(0, key.length - 1);
            }
            if (dictionary.has(key)) {
                e.innerHTML = "‫" + dictionary.get(key) + "‬";
            } else {
                console.log('"' + key + '"');
            }
        });
    }

    let dictionary = new Map();
    dictionary.set("when&nbsp;movement", "כשכיוון התנועה הוא");
    dictionary.set("forward", "קדימה");
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
    dictionary.set("color&nbsp;to", "את הצבע");
    dictionary.set("hue&nbsp;to", "את הגון");
    dictionary.set("seconds", "שניות");
    dictionary.set("red&nbsp;(1)", "אדום (1)");
    dictionary.set("sensor&nbsp;color", "צבע החיישן");
    dictionary.set("on", "פועל");
    dictionary.set("lights", "אורות");
    dictionary.set("when", "כאשר");
    dictionary.set("feedback&nbsp;sounds", "צלילי משוב");
    dictionary.set("action&nbsp;snap&nbsp;commands", "פקודות צמדני פעולה");
    dictionary.set("seen", "נראה");
    dictionary.set("none&nbsp;(0)", "ללא (0)");
    dictionary.set("white&nbsp;(7)", "לבן (7)");
    dictionary.set("clear&nbsp;stored&nbsp;custom&nbsp;commands", "שכח.י פקודות מותאמות אישית");
    dictionary.set("straight", "ישר");
    dictionary.set("last&nbsp;decision", "ההחלטה הקודמת");
    dictionary.set("next&nbsp;decision", "ההחלטה הבאה");
    dictionary.set("on&nbsp;next&nbsp;split&nbsp;go", "בפיצול הבא פנה.י");
    dictionary.set("when&nbsp;on&nbsp;a&nbsp;split&nbsp;track", "כאשר בפיצול, עקוב.עקבי");
    dictionary.set("RGB&nbsp;to", "אי\"כ ל");
})();
