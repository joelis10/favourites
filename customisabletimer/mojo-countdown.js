/** Countdown widget - Display the remaining Months/Weeks/Days/Hours/Minutes/Seconds until the specified datetime. 
 * <mojo-countdown
 *  title="Hurry! Not a moment to lose..."
 *  date="2021-06-01 20:30:30+01:00"
 *  fields="wdhms"    
 * >
 *  Content displayed after the countdown has expired
 * </mojo-countdown>
 */

const DEFAULT_FIELDS = 'wdhms';

const editTemplate = `<style>
.mojo-counter-edit {
    border: 2px solid #077aa7;
    display: block;
}
.mojo-counter-edit header {
    background: #077aa7; 
    color: #fff;
    font-family: monospace; 
    margin: 0 0 5px;
    padding: 5px;
}       
</style>
<div class="mojo-counter-edit">
    <header>
        &lt;mojo-countdown
        <div>&nbsp;&nbsp;title=<span id="edit-title"></span></div>
        <div>&nbsp;&nbsp;date=<span id="edit-date"></span></div>
        <div>&nbsp;&nbsp;fields=<span id="edit-fields"></span></div>
        &gt;[Shown after countdown ends]&lt;/mojo-countdown&gt;
        <div><small><b>w</b>=Weeks, <b>d</b>=Days, <b>h</b>=Hour, <b>m</b>=Minutes, <b>s</b>=Seconds</small></div>
    </header>
    <div class="mojo-counter-after">
        <slot></slot>
    </div>
    
</div>`;

const countdownTemplate = `<style>
mojo-countdown time {
    display: flex;
    justify-content: space-around;
}
.mojo-countdown-field {
    text-align: center;
}
.mojo-countdown-value {
    display: block;
    font-weight: bold;
}
/*
.mojo-countdown-label {
    font-size: 80%;
}
*/
</style>
<header id="mojo-countdown-title"></header>
<time class="mojo-countdown">
    <span class="mojo-countdown-field" id="mojo-countdown-weeks" style="display: none">
        <span class="mojo-countdown-value"></span>
        <span class="mojo-countdown-label"></span>
    </span>
    <span class="mojo-countdown-field" id="mojo-countdown-days" style="display: none">
        <span class="mojo-countdown-value"></span>
        <span class="mojo-countdown-label"></span>
    </span>
    <span class="mojo-countdown-field" id="mojo-countdown-hours" style="display: none">
        <span class="mojo-countdown-value"></span>
        <span class="mojo-countdown-label"></span>
    </span>
    <span class="mojo-countdown-field" id="mojo-countdown-minutes" style="display: none">
        <span class="mojo-countdown-value"></span>
        <span class="mojo-countdown-label"></span>
    </span>
    <span class="mojo-countdown-field" id="mojo-countdown-seconds" style="display: none">
        <span class="mojo-countdown-value"></span>
        <span class="mojo-countdown-label"></span>
    </span>
</time>`;

const WEEK = 7*24*60*60; // 604800
const DAY = 24*60*60;    // 86400
const HOUR = 60*60;
const MINUTE = 60;

const LABEL_WEEKS = 'Weeks';
const LABEL_DAYS = 'Days';
const LABEL_HOURS = 'Hours';
const LABEL_MINUTES = 'Minutes';
const LABEL_SECONDS = 'Seconds';

class MojoCountdown extends HTMLElement {
    constructor() {
        super();
    }

    static get observedAttributes() {
        return [
            'date', 'fields',
            'title', // Optional title
            'weeks', 'days', 'hours', 'minutes', 'seconds' // Optional replacement labels
        ];
    }

    attributeChangedCallback(attrName, oldValue, newValue) {
        if (newValue !== oldValue) {
            this[attrName] = this.getAttribute(attrName);

            this.setupFields();
        }
    }

    buildField(value, label) {
        return `<span class="mojo-countdown-field">
            <span class="mojo-countdown-value">${value}</span>
            <span class="mojo-countdown-label">${label}</span>
</span>`;
    }


    setupElement() {
        this._timeInterval;
        this._after = this.innerHTML;  // Stash content to be displayed after the countdown expires
        console.log(this._after);
    }

    /** initialise the countdown on load or when the attributes change. */
    setupFields() {        
        this._date = new Date(Date.parse(this.date));
        this._fields = this.fields ? this.fields.toLowerCase() : DEFAULT_FIELDS;

        this._showWeeks = this._fields.includes('w');
        this._showDays = this._fields.includes('d');
        this._showHours = this._fields.includes('h');
        this._showMinutes = this._fields.includes('m');
        this._showSeconds = this._fields.includes('s');
    }

    /** Render an error message instead of the content */
    renderErrorMessage(msg, hint='') {
        let _hint = '';
        if (hint) {
            _hint = `<div style="font-size: 70%;">${hint}</div>`;
        }
        this.innerHTML = `<div style="border: 1px solid #990000; background: #cc0000; color: #ffffff; padding:5px;">
        ${msg}
        ${_hint}
        </div>`;
    }

    renderEditMode() {
        console.log("<mojo-counter>EDIT MODE");
        let shadow = this.attachShadow({ mode: 'open' });
        
        shadow.innerHTML = editTemplate;
        shadow.getElementById('edit-title').textContent = this.title;
        shadow.getElementById('edit-date').textContent = this.date;
        shadow.getElementById('edit-fields').textContent = this._fields;

    }

    renderTemplate() {
        this.innerHTML = countdownTemplate;

        const elWeeks = this.querySelector('#mojo-countdown-weeks');
        const elDays = this.querySelector('#mojo-countdown-days');
        const elHours = this.querySelector('#mojo-countdown-hours');
        const elMinutes = this.querySelector('#mojo-countdown-minutes');
        const elSeconds = this.querySelector('#mojo-countdown-seconds');

        if (this.title) {
            this.querySelector('#mojo-countdown-title').textContent = this.title;
        }
        if (this._showWeeks) {
            elWeeks.querySelector('.mojo-countdown-label').textContent = this.weeks ? this.weeks : LABEL_WEEKS;
            elWeeks.style.removeProperty("display");
        }
        if (this._showDays) {
            elDays.querySelector('.mojo-countdown-label').textContent = this.days ? this.days : LABEL_DAYS;
            elDays.style.removeProperty("display");
        }
        if (this._showHours) {
            elHours.querySelector('.mojo-countdown-label').textContent = this.hours ? this.hours : LABEL_HOURS;
            elHours.style.removeProperty("display");
        }
        if (this._showMinutes) {
            elMinutes.querySelector('.mojo-countdown-label').textContent = this.minutes ? this.minutes : LABEL_MINUTES;
            elMinutes.style.removeProperty("display");
        }
        if (this._showSeconds) {
            elSeconds.querySelector('.mojo-countdown-label').textContent = this.seconds ? this.seconds : LABEL_SECONDS;
            elSeconds.style.removeProperty("display");
        }
    }

    updateClock() {
        if (isNaN(this._date)) {
            this.renderErrorMessage(
                "INVALID DATE: "+this.date,
                "Use ISO8601 format YYYY-MM-DD HH:MM:SS+0:00"
                );
            clearInterval(this._timeInterval);
            return;
        }
        this._now = new Date();
        const diffTime = parseInt((this._date.getTime() - this._now.getTime()) / 1000);
        
        let remainder = diffTime > 0 ? diffTime : 0;

        const elWeeks = this.querySelector('#mojo-countdown-weeks');
        const elDays = this.querySelector('#mojo-countdown-days');
        const elHours = this.querySelector('#mojo-countdown-hours');
        const elMinutes = this.querySelector('#mojo-countdown-minutes');
        const elSeconds = this.querySelector('#mojo-countdown-seconds');

        if (this._showWeeks) {
            elWeeks.querySelector('.mojo-countdown-value').textContent = Math.floor(remainder / WEEK);
            remainder = remainder % WEEK;
        }
        if (this._showDays) {
            elDays.querySelector('.mojo-countdown-value').textContent = Math.floor(remainder / DAY);
            remainder = remainder % DAY;
        }
        if (this._showHours) {
            elHours.querySelector('.mojo-countdown-value').textContent = Math.floor(remainder / HOUR);
            remainder = remainder % HOUR;
        }
        if (this._showMinutes) {
            elMinutes.querySelector('.mojo-countdown-value').textContent = Math.floor(remainder / MINUTE);
            remainder = remainder % MINUTE;
        }
        if (this._showSeconds) {
            elSeconds.querySelector('.mojo-countdown-value').textContent = remainder;
        }

        // Cleanup
        if (diffTime < 0) {
            clearInterval(this._timeInterval);
            const event = new CustomEvent('mojo-countdown-ended', {
                bubbles: true,
                detail: this
            });
            this.dispatchEvent(event);

            // If there's _after content, replace the template with that
            if (this._after) {
                this.innerHTML = this._after;
            }
            return;
        }
    }

    
    connectedCallback() {
        // Don't load data if this is in an editable area.
        if (this.closest('[contenteditable]')) {
            this.renderEditMode();
        } else {
            // https://stackoverflow.com/questions/61971919/wait-for-element-upgrade-in-connectedcallback-firefox-and-chromium-differences
            // Contents are not loaded yet, so delay the setup until it is.
            setTimeout(() => {
                this.setupElement();
                this.setupFields();
                this.renderTemplate();
                this.updateClock();
            });

            this._timeInterval = setInterval(() => {
                this.updateClock();
            }, 1000);
        }
    }
}

customElements.define("mojo-countdown", MojoCountdown);
