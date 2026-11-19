/* =========================================================
   Tennessee TSA Competitive Events · rendering
   Data lives in data.js; photo credits in images.js.
   ========================================================= */

(function () {
    "use strict";

    const IMG = window.IMAGES || {};
    const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const TYPE_NAME = { rlc: "Regional", slc: "State", nat: "National" };

    /* Old links used different slugs; keep them working. */
    const ALIASES = {
        "computer-aided-design-architecture": "cad-architecture",
        "computer-aided-design-engineering": "cad-engineering",
        "automated-manufacturing": "automated-manufacturing-systems",
        "data-science": "data-science-and-analytics",
        "structural-design": "structural-design-and-engineering",
        "children-stories": "childrens-stories"
    };

    /* ---------- helpers ---------- */

    const $ = (id) => document.getElementById(id);

    function esc(value) {
        return String(value == null ? "" : value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;");
    }

    function day(iso) {
        const [y, m, d] = iso.split("-").map(Number);
        return new Date(y, m - 1, d);
    }

    function today() {
        const now = new Date();
        return new Date(now.getFullYear(), now.getMonth(), now.getDate());
    }

    function fmtRange(start, end) {
        const a = day(start);
        if (!end) return `${MONTHS[a.getMonth()]} ${a.getDate()}, ${a.getFullYear()}`;
        const b = day(end);
        if (a.getMonth() === b.getMonth()) {
            return `${MONTHS[a.getMonth()]} ${a.getDate()}–${b.getDate()}, ${b.getFullYear()}`;
        }
        return `${MONTHS[a.getMonth()]} ${a.getDate()} – ${MONTHS[b.getMonth()]} ${b.getDate()}, ${b.getFullYear()}`;
    }

    function isPast(item) {
        return day(item.end || item.date) < today();
    }

    function daysUntil(iso) {
        return Math.round((day(iso) - today()) / 86400000);
    }

    function eventBySlug(slug) {
        return EVENTS.find((e) => e.slug === slug);
    }

    function allowsIndividuals(ev) {
        return /individual/i.test(ev.team) || /individual entries are permitted/i.test(ev.eligibility);
    }

    function searchText(ev) {
        const t = ev.theme || {};
        return [
            ev.title, ev.short, ev.summary, ev.team, CATEGORIES[ev.cat],
            t.title, (t.text || []).join(" "), (t.list || []).join(" "),
            (ev.specs || []).map((s) => s.join(" ")).join(" ")
        ].join(" ").toLowerCase();
    }

    function linkList(items) {
        return items.map((r) => `
            <li>
                <a href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">${esc(r.label)}</a>
                ${r.note ? `<span>${esc(r.note)}</span>` : ""}
            </li>`).join("");
    }

    /* =========================================================
       INDEX PAGE
       ========================================================= */

    function renderTitleBlock() {
        $("tbChecked").textContent = SEASON.lastChecked.replace(/, \d{4}$/, "");
        const next = KEY_DATES.find((d) => !isPast(d));
        if (!next) {
            $("tbNextLabel").textContent = "Season complete";
            return;
        }
        const startsIn = daysUntil(next.date);
        $("tbNextLabel").textContent = next.label;
        let when = fmtRange(next.date, next.end);
        if (startsIn > 1) when += ` (in ${startsIn} days)`;
        else if (startsIn === 1) when += " (tomorrow)";
        else if (startsIn === 0) when += " (today)";
        else when += " (happening now)";
        $("tbNextDate").textContent = when;
    }

    function renderSeason() {
        const list = $("seasonList");
        let markedNow = false;
        list.innerHTML = KEY_DATES.map((d) => {
            const past = isPast(d);
            let nowMarker = "";
            if (!past && !markedNow) {
                markedNow = true;
                nowMarker = `<li class="now" aria-label="Today"><span>Today</span></li>`;
            }
            return `${nowMarker}
                <li class="sd ${d.type}${past ? " past" : ""}">
                    <time datetime="${d.date}">${esc(fmtRange(d.date, d.end))}</time>
                    <span class="sd-type">${TYPE_NAME[d.type]}</span>
                    <span class="sd-label">${esc(d.label)}</span>
                </li>`;
        }).join("");
    }

    const state = { cat: "all", q: "", regional: false, presub: false, solo: false };

    function renderChips() {
        const counts = {};
        EVENTS.forEach((e) => [e.cat].concat(e.also || []).forEach((c) => { counts[c] = (counts[c] || 0) + 1; }));
        const chips = [`<button type="button" class="chip" data-cat="all" aria-pressed="true">All <span>${EVENTS.length}</span></button>`]
            .concat(Object.keys(CATEGORIES).map((key) =>
                `<button type="button" class="chip" data-cat="${key}" aria-pressed="false">${esc(CATEGORIES[key])} <span>${counts[key] || 0}</span></button>`));
        $("catChips").innerHTML = chips.join("");
        $("catChips").addEventListener("click", (e) => {
            const btn = e.target.closest(".chip");
            if (!btn) return;
            state.cat = btn.dataset.cat;
            $("catChips").querySelectorAll(".chip").forEach((c) =>
                c.setAttribute("aria-pressed", String(c === btn)));
            renderGrid();
        });
    }

    function availability(ev) {
        const r = ev.tn.rlc ? "on" : "off";
        const s = ev.tn.slc ? "on" : "off";
        return `<span class="avail" aria-label="Regional ${r === "on" ? "yes" : "no"}, State ${s === "on" ? "yes" : "no"}, National yes">
            <i class="${r}" title="TN Regional">R</i><i class="${s}" title="TN State">S</i><i class="on" title="National">N</i>
        </span>`;
    }

    function card(ev) {
        const img = IMG[ev.slug];
        const theme = ev.theme ? ev.theme.title : "No annual theme";
        return `
            <a class="card" href="event.html?event=${ev.slug}">
                <span class="card-img">${img ? `<img src="${esc(img.thumb)}" alt="" loading="lazy" width="480" height="300">` : ""}</span>
                <span class="card-body">
                    <span class="card-title">${esc(ev.short || ev.title)}</span>
                    <span class="card-theme${ev.theme ? "" : " none"}">${esc(theme)}</span>
                    <span class="card-meta">
                        <span>${esc(ev.team)}</span>
                        ${availability(ev)}
                    </span>
                </span>
            </a>`;
    }

    function renderGrid() {
        const matches = EVENTS.filter((ev) => {
            if (state.cat !== "all" && ev.cat !== state.cat && !(ev.also || []).includes(state.cat)) return false;
            if (state.regional && !ev.tn.rlc) return false;
            if (state.presub && !(ev.tn.slc && ev.tn.slc.presub)) return false;
            if (state.solo && !allowsIndividuals(ev)) return false;
            if (state.q && !searchText(ev).includes(state.q)) return false;
            return true;
        });

        const grid = $("eventGrid");
        const grouped = state.cat === "all" && !state.q;

        if (grouped) {
            grid.innerHTML = Object.keys(CATEGORIES).map((key) => {
                const group = matches.filter((e) => e.cat === key);
                if (!group.length) return "";
                return `<div class="group">
                    <h3 class="group-title">${esc(CATEGORIES[key])} <span>${group.length}</span></h3>
                    <div class="cards">${group.map(card).join("")}</div>
                </div>`;
            }).join("");
        } else {
            grid.innerHTML = matches.length ? `<div class="cards">${matches.map(card).join("")}</div>` : "";
        }

        $("noResults").hidden = matches.length > 0;
        $("resultCount").textContent = matches.length === EVENTS.length
            ? `Showing all ${EVENTS.length} events.`
            : `Showing ${matches.length} of ${EVENTS.length} events.`;
    }

    function renderGaps() {
        const rows = [];
        EVENTS.forEach((ev) => (ev.gaps || []).forEach((g) => rows.push({ ev, text: g })));

        const general = [
            "The full 2027 & 2028 High School Competitive Events Guide (rubrics, time limits, page counts) is behind the TSA member login, so per-event rule details beyond the public pages are not included here.",
            "TNTSA’s per-event Regional schedule, Zoom links, and practice exams are listed as “Coming soon” in the 2027 Regional Conference Guide.",
            "TNTSA’s State pre-submission instructions are not out yet. TNTSA says they will be released Monday, February 8, 2027.",
            "Events with no theme on TSA’s 2026–27 Themes and Problems page (for example, Flight Endurance and Automated Manufacturing Systems) show “No annual theme.” If TSA posts one later, it isn’t reflected here yet."
        ];

        $("gapList").innerHTML = `
            <ul class="gap-events">
                ${rows.map((r) => `<li><a href="event.html?event=${r.ev.slug}">${esc(r.ev.title)}</a><p>${esc(r.text)}</p></li>`).join("")}
            </ul>
            <ul class="gap-general">${general.map((g) => `<li>${esc(g)}</li>`).join("")}</ul>`;
    }

    function renderSources() {
        $("sourceList").innerHTML = linkList(Object.values(SOURCES));
    }

    function initIndex() {
        renderTitleBlock();
        renderSeason();
        renderChips();

        $("eventSearch").addEventListener("input", (e) => {
            state.q = e.target.value.trim().toLowerCase();
            renderGrid();
        });
        [["fRegional", "regional"], ["fPresub", "presub"], ["fSolo", "solo"]].forEach(([id, key]) => {
            $(id).addEventListener("change", (e) => {
                state[key] = e.target.checked;
                renderGrid();
            });
        });

        renderGrid();
        renderGaps();
        renderSources();
    }

    /* =========================================================
       EVENT PAGE
       ========================================================= */

    function eventTimeline(ev) {
        const items = [];
        const add = (date, end, label, type) => items.push({ date, end, label, type });

        if (ev.tn.rlc) {
            add("2026-12-01", null, "Affiliation deadline to compete at Regionals", "rlc");
            add("2026-12-08", "2026-12-11", "Regional registration (advisors register chapters)", "rlc");
            if (ev.slug === "future-technology-teacher") {
                add("2027-01-12", "2027-01-16", "Regional pre-submission window for this event (noon ET to noon ET)", "rlc");
            } else if (ev.tn.rlc.live) {
                add("2027-01-12", "2027-01-13", "Sign up for a Regional Zoom time slot", "rlc");
            } else {
                add("2027-01-05", "2027-01-07", "Regional prompt/submission window (noon ET to noon ET)", "rlc");
            }
            add("2027-01-15", null, "Regional Leadership Conference (virtual)", "rlc");
            add("2027-01-19", null, "Regional awards video", "rlc");
        }
        if (ev.tn.slc) {
            add("2027-01-07", null, "Affiliation deadline to compete at State", "slc");
            add("2027-01-21", "2027-01-28", "State registration (advisors register chapters)", "slc");
            if (ev.tn.slc.presub) {
                add("2027-02-08", null, "State pre-submission instructions released", "slc");
                add("2027-02-15", "2027-02-17", "State pre-submission window (9 a.m. ET to 5 p.m. ET)", "slc");
            }
            add("2027-03-03", "2027-03-06", "State Leadership Conference, Chattanooga", "slc");
        }
        add("2027-05-12", null, "National competitive event registration deadline", "nat");
        if (ev.approval) add("2027-05-13", "2027-05-14", "State advisors slot competitors for approval events", "nat");
        if (ev.natPresub) add("2027-05-17", "2027-05-19", "National pre-submission upload window", "nat");
        add("2027-06-23", "2027-06-27", "National TSA Conference, Orlando", "nat");

        return items.sort((a, b) => day(a.date) - day(b.date));
    }

    function tnPanel(kind, data, ev) {
        const isR = kind === "rlc";
        const title = isR ? "Regional" : "State";
        const when = isR ? "Jan 15, 2027, virtual" : "Mar 3–6, 2027, Chattanooga";
        const src = isR ? SOURCES.tnRlcEvents : SOURCES.tnSlcEvents;

        if (!data) {
            const msg = isR
                ? "Not offered at the 2027 Regional conference. TNTSA’s Regional list gives no eligibility for this event."
                : "Not on TNTSA’s 2027 State Leadership Conference list.";
            return `<div class="tn-panel off ${kind}">
                <h3>${title}</h3><p class="tn-when">${esc(when)}</p>
                <p>${esc(msg)}</p>
                <a class="src" href="${esc(src.url)}" target="_blank" rel="noopener noreferrer">TNTSA ${title.toLowerCase()} event list</a>
            </div>`;
        }
        return `<div class="tn-panel ${kind}">
            <h3>${title}</h3><p class="tn-when">${esc(when)}</p>
            <dl>
                <dt>Per chapter</dt>
                <dd>${esc(data.eligibility || "Not listed by TNTSA")}</dd>
                ${data.presub ? `<dt>Pre-submission</dt><dd>Yes, Feb 15–17</dd>` : ""}
                ${data.live ? `<dt>Format</dt><dd>Live on Zoom</dd>` : ""}
            </dl>
            ${data.notes && data.notes.length ? `<ul>${data.notes.map((n) => `<li>${esc(n)}</li>`).join("")}</ul>` : ""}
            <a class="src" href="${esc(src.url)}" target="_blank" rel="noopener noreferrer">TNTSA ${title.toLowerCase()} event list</a>
        </div>`;
    }

    function themeBlock(ev) {
        if (!ev.theme) {
            return `<section class="block" aria-labelledby="hTheme">
                <h2 id="hTheme">2026–27 theme</h2>
                <p class="no-theme">${esc(ev.noTheme || "No annual theme.")}</p>
            </section>`;
        }
        const t = ev.theme;
        return `<section class="block" aria-labelledby="hTheme">
            <h2 id="hTheme">This season’s challenge</h2>
            <div class="spec-sheet">
                <p class="spec-kicker">${esc(t.label)}</p>
                <h3>${esc(t.title)}</h3>
                ${(t.text || []).map((p) => `<p>${esc(p)}</p>`).join("")}
                ${t.list ? `<ul>${t.list.map((li) => `<li>${esc(li)}</li>`).join("")}</ul>` : ""}
                <p class="spec-src">
                    Source: <a href="${esc(SOURCES.themes.url)}" target="_blank" rel="noopener noreferrer">TSA Themes and Problems, 2026–2027</a>
                    ${t.link ? `<br><a class="btn" href="${esc(t.link.url)}" target="_blank" rel="noopener noreferrer">${esc(t.link.label)}</a>` : ""}
                </p>
            </div>
        </section>`;
    }

    function specsBlock(ev) {
        if (!ev.specs) return "";
        return `<section class="block" aria-labelledby="hSpecs">
            <h2 id="hSpecs">Key numbers</h2>
            <table class="specs">
                <tbody>${ev.specs.map(([k, v]) => `<tr><th scope="row">${esc(k)}</th><td>${esc(v)}</td></tr>`).join("")}</tbody>
            </table>
            <p class="fine">From the official 2027 ${ev.slug === "promotional-design" ? "theme" : "problem/brief"}. The linked document is the final word.</p>
        </section>`;
    }

    function submitBlock(ev) {
        const parts = [];
        if (ev.natPresub) {
            parts.push(`<div class="sub-item"><h3>Upload before Nationals</h3>
                <ul>${ev.natPresub.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>
                <p class="fine">Upload window: May 17–19, 2027 on the TSA Student Member Site. PDFs only, 30 MB max. Links must be public; files TSA can’t open are not judged.</p></div>`);
        }
        if (ev.onsiteTest) {
            parts.push(`<div class="sub-item"><h3>Onsite test</h3>
                <p>The qualifying test is taken online on AnswerWrite. Each member brings a laptop or tablet that can run on battery for two hours (Chrome preferred). For team events, every member takes the test and scores are averaged.</p></div>`);
        }
        if (ev.onsiteUpload) {
            parts.push(`<div class="sub-item"><h3>Onsite upload</h3><p>${esc(ev.onsiteUpload)}</p></div>`);
        }
        if (ev.approval) {
            parts.push(`<div class="sub-item"><h3>State advisor approval</h3>
                <p>To compete at Nationals, this event needs approval from your state advisor, who slots competitors May 13–14, 2027.</p></div>`);
        }
        if (!parts.length) {
            parts.push(`<div class="sub-item"><h3>Everything happens at the conference</h3>
                <p>No national pre-conference upload is listed for this event. Bring your entry and materials to check-in.</p></div>`);
        }
        return `<section class="block" aria-labelledby="hSubmit">
            <h2 id="hSubmit">At Nationals</h2>
            <div class="sub-grid">${parts.join("")}</div>
            <p class="fine">Sources: <a href="${esc(SOURCES.presub.url)}" target="_blank" rel="noopener noreferrer">Preconference submission requirements</a>,
            <a href="${esc(SOURCES.natRequirements.url)}" target="_blank" rel="noopener noreferrer">2027 competition requirements</a>,
            <a href="${esc(SOURCES.approval.url)}" target="_blank" rel="noopener noreferrer">state advisor approval events</a>.</p>
        </section>`;
    }

    function updatesBlock(ev) {
        const list = (ev.updates || []).slice();
        if (/display/i.test(ev.summary)) list.push(...GENERAL_UPDATES.map((u) => Object.assign({ general: true }, u)));
        if (!list.length) return "";
        return `<section class="block" aria-labelledby="hUpdates">
            <h2 id="hUpdates">Official rule updates</h2>
            <ul class="updates">
                ${list.map((u) => `<li>
                    <time>${esc(u.date)}</time>
                    <p>${u.general ? "<strong>All events with a display.</strong> " : ""}${esc(u.text)}${u.verbatim ? ` <em class="fine">(Quoted exactly. Check the guide page it references.)</em>` : ""}</p>
                </li>`).join("")}
            </ul>
            <p class="fine">From <a href="${esc(SOURCES.updates.url)}" target="_blank" rel="noopener noreferrer">TSA Competition Updates</a>. TNTSA follows national updates at Regionals and State.</p>
        </section>`;
    }

    function timelineBlock(ev) {
        const items = eventTimeline(ev);
        let markedNow = false;
        return `<section class="block" aria-labelledby="hTimeline">
            <h2 id="hTimeline">Your timeline for this event</h2>
            <ol class="ev-timeline">
                ${items.map((d) => {
                    const past = isPast(d);
                    let now = "";
                    if (!past && !markedNow) { markedNow = true; now = `<li class="now"><span>Today</span></li>`; }
                    return `${now}<li class="sd ${d.type}${past ? " past" : ""}">
                        <time datetime="${d.date}">${esc(fmtRange(d.date, d.end))}</time>
                        <span class="sd-type">${TYPE_NAME[d.type]}</span>
                        <span class="sd-label">${esc(d.label)}</span>
                    </li>`;
                }).join("")}
            </ol>
            <p class="fine">Dates from TNTSA’s <a href="${esc(SOURCES.tnRlc.url)}" target="_blank" rel="noopener noreferrer">Regional</a> and <a href="${esc(SOURCES.tnSlc.url)}" target="_blank" rel="noopener noreferrer">State</a> pages and TSA’s <a href="${esc(SOURCES.natDates.url)}" target="_blank" rel="noopener noreferrer">2027 dates and deadlines</a>. All are subject to change.</p>
        </section>`;
    }

    function resourcesBlock(ev) {
        const official = [];
        if (ev.theme && ev.theme.link) official.push({ label: ev.theme.link.label, url: ev.theme.link.url });
        official.push(SOURCES.themes, SOURCES.eligibility, SOURCES.updates, SOURCES.nationalEvents);
        const tn = [];
        if (ev.tn.rlc) tn.push(SOURCES.tnRlcEvents, SOURCES.tnRlcGuide);
        tn.push(SOURCES.tnSlcEvents, SOURCES.tnSlc);

        return `<section class="block" aria-labelledby="hLinks">
            <h2 id="hLinks">Links</h2>
            <div class="link-cols">
                <div><h3>Official TSA</h3><ul class="links">${linkList(official)}</ul></div>
                <div><h3>Tennessee TSA</h3><ul class="links">${linkList(tn)}</ul></div>
                ${ev.refs ? `<div><h3>Helpful references</h3><ul class="links">${linkList(ev.refs)}</ul></div>` : ""}
            </div>
        </section>`;
    }

    function glance(ev) {
        const where = [
            ["TN Regional", !!ev.tn.rlc],
            ["TN State", !!ev.tn.slc],
            ["Nationals", true]
        ];
        return `<aside class="glance" aria-label="At a glance">
            <h2>At a glance</h2>
            <dl>
                <dt>Team</dt><dd>${esc(ev.team)}</dd>
                <dt>National eligibility</dt><dd>${esc(ev.eligibility)}</dd>
                <dt>Where it runs</dt>
                <dd><ul class="where">${where.map(([n, on]) => `<li class="${on ? "on" : "off"}">${n}<span>${on ? "Yes" : "No"}</span></li>`).join("")}</ul></dd>
                <dt>Uploads</dt>
                <dd>${[
                    ev.tn.slc && ev.tn.slc.presub ? "State: Feb 15–17" : null,
                    ev.natPresub ? "National: May 17–19" : null
                ].filter(Boolean).join("<br>") || "None listed"}</dd>
            </dl>
            <a class="btn wide" href="${esc(SOURCES.eligibility.url)}" target="_blank" rel="noopener noreferrer">Eligibility chart (PDF)</a>
        </aside>`;
    }

    function initEvent() {
        const params = new URLSearchParams(location.search);
        let slug = params.get("event") || "";
        slug = ALIASES[slug] || slug;
        const ev = eventBySlug(slug);

        if (!ev) {
            document.title = "Event not found | Tennessee TSA";
            $("evTitle").textContent = "Event not found";
            $("evBody").innerHTML = `<p class="block">That link doesn’t match a 2026–27 high school event. <a href="index.html#events">Browse all ${EVENTS.length} events</a>.</p>`;
            return;
        }

        document.title = `${ev.title} | Tennessee TSA`;
        $("evTitle").textContent = ev.title;
        $("evCat").textContent = CATEGORIES[ev.cat];
        $("evTeam").textContent = `${ev.team}. ${ev.theme ? ev.theme.title : (ev.noTheme || "")}`;

        const img = IMG[ev.slug];
        if (img) {
            if (img.w && img.w < 1000) $("evHero").classList.add("inset");
            $("evPhoto").innerHTML = `<img src="${esc(img.src)}" alt="${esc(img.alt)}">
                <figcaption>Photo: <a href="${esc(img.page)}" target="_blank" rel="noopener noreferrer">${esc(img.author)}</a>,
                <a href="${esc(img.licenseUrl || img.page)}" target="_blank" rel="noopener noreferrer">${esc(img.license)}</a>, via Wikimedia Commons. Illustration only.</figcaption>`;
        } else {
            $("evHero").classList.add("no-photo");
        }

        $("evBody").innerHTML = `
            <div class="ev-main">
                <section class="block" aria-labelledby="hAbout">
                    <h2 id="hAbout">What you do</h2>
                    <blockquote class="official">
                        <p>${esc(ev.summary)}</p>
                        <cite>Official event description, <a href="${esc(SOURCES.nationalEvents.url)}" target="_blank" rel="noopener noreferrer">tsaweb.org</a></cite>
                    </blockquote>
                </section>
                ${themeBlock(ev)}
                ${specsBlock(ev)}
                <section class="block" aria-labelledby="hTn">
                    <h2 id="hTn">In Tennessee</h2>
                    <p class="fine">TNTSA counts eligibility per chapter and adjusts some rules for its conferences. At Nationals, follow the national guide as written.</p>
                    <div class="tn-grid">${tnPanel("rlc", ev.tn.rlc, ev)}${tnPanel("slc", ev.tn.slc, ev)}</div>
                </section>
                ${timelineBlock(ev)}
                ${submitBlock(ev)}
                ${updatesBlock(ev)}
                ${ev.gaps ? `<section class="block caution" aria-labelledby="hGaps"><h2 id="hGaps">Not confirmed</h2><ul>${ev.gaps.map((g) => `<li>${esc(g)}</li>`).join("")}</ul></section>` : ""}
                ${resourcesBlock(ev)}
            </div>
            ${glance(ev)}`;
    }

    document.addEventListener("DOMContentLoaded", () => {
        if (document.body.classList.contains("event-page")) initEvent();
        else initIndex();
    });
})();
