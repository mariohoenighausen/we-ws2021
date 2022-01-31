import {DOMParser, Node, Document} from 'https://deno.land/x/deno_dom/deno-dom-wasm.ts';
import {serve} from "https://deno.land/std@0.117.0/http/server.ts";

class County {
    private _name: string;
    private _amount: number;
    private _deltaToYesterday: number;
    private _casesInTheLastSevenDays: number;
    private _sevenDayIncidence: number;
    private _deathCases: number;

    constructor(name: string, amount: number, deltaToYesterday: number, casesInTheLastSevenDays: number, sevenDayIncidence: number, deathCases: number) {
        this._name = name;
        this._amount = amount;
        this._deltaToYesterday = deltaToYesterday;
        this._casesInTheLastSevenDays = casesInTheLastSevenDays;
        this._sevenDayIncidence = sevenDayIncidence;
        this._deathCases = deathCases;
    }

    get name(): string {
        return this._name;
    }

    get amount(): number {
        return this._amount;
    }

    get casesInTheLastSevenDays(): number {
        return this._casesInTheLastSevenDays;
    }

    get deltaToYesterday(): number {
        return this._deltaToYesterday;
    }

    get sevenDayIncidence(): number {
        return this._sevenDayIncidence;
    }

    get deathCases(): number {
        return this._deathCases;
    }
}
let countyList: County[] = [];

const getTableContent = async function () {
    try {
        const res = await fetch("https://www.rki.de/DE/Content/InfAZ/N/Neuartiges_Coronavirus/Fallzahlen.html");
        const text = await res.text();
        const parser = new DOMParser();
        const dom: Document | null = await parser.parseFromString(text, "text/html");
        if (dom) {
            const tds = dom.querySelectorAll("table > tbody > tr > td"); // first element county, other amount of categories numbers
            let tempSubList: string[] = [];
            let tempIdx = 0;
            const listOfLists: [string[]] = [[]];
            const stopNum = 5;

            tds.forEach((item: Node) => {
                if (tempIdx != stopNum) {
                    tempSubList.push(item.textContent);
                    tempIdx++;
                } else {
                    tempSubList.push(item.textContent);
                    tempIdx = 0;
                    listOfLists.push(tempSubList);
                    tempSubList = [];
                }
            });
            const resultListOfLists = listOfLists.filter((item) => item.length !== 0);
            console.log(resultListOfLists);
            return resultListOfLists;
        } else {
            throw new Error("The fetched data has no matching nodes");
        }
    } catch (err) {
        console.log(err);
    }
}

const parseTableContent = () => getTableContent().then(response => {
    if (response) {
        response.forEach((list: string[]) => countyList.push(new County(list[0], parseFloat(list[1].replace(".", "")),
            parseFloat(list[2].replace(".", "")), parseFloat(list[3].replace(".", "")), parseFloat(list[4].replace(",", ".")), parseFloat(list[5].replace(".", "")))))
    } else {
        throw new Error("The fetched data couldn't be parsed");
    }
    console.log(countyList);
    return countyList;
});

const getMinNumber = (list: number[]): number => list.reduce((min, p) => p < min ? p : min, list[0])
const getMaxNumber = (list: number[]): number => list.reduce((max, p) => p > max ? p : max, list[0]);
const getSumNumber = (list: number[]): number => list.reduce((num: number, total: number) => total += num);
const getAVGNumber = (list: number[]): number => getSumNumber(list) / list.length;

const port = 8080;
const addr = `:${port}`

function createHTMLTable(list: County[]):string {
    const [tableStart, tableEnd, tableRowStart, tableRowEnd,
        tableHeadStart, tableHeadEnd,
        tableDataStart, tableDataEnd] = ["<table>", "</table>", "<tr>", "</tr>", "<th>", "</th>", "<td>", "</td>"];
    let table = "";
    let tableHeadRow = "";
    let tableDataRow = "";
    const headArray = ["", "An­zahl", "Dif­fe­renz zum Vor­tag", "Fälle in den letzten 7 Tagen", "7-Tage-Inzi­denz", "Todes­fälle"];
    headArray.forEach((item, idx) => {
        if (idx == headArray.length) {
            tableHeadRow += tableRowEnd
        }
        if (idx == 0) {
            tableHeadRow += tableRowStart
        }
        tableHeadRow += `${tableHeadStart}${item}${tableHeadEnd}`
    });
    list.forEach((item) => (Object.values(item).forEach((val, idx) => {
        if (idx == list.length) {
            tableDataRow += tableRowEnd
        }
        if (idx == 0) {
            tableDataRow += tableRowStart
        }
        tableDataRow += `${tableDataStart}${val}${tableDataEnd}`;
    })));
    table += tableStart + tableHeadRow + tableDataRow + tableEnd;
    return table;
}
function createStatistics(differenceDayBefore: number[]){
    const category = ["Minimum", "Maximum", "Average", "Summe"];
    let text = "";
    [getMinNumber, getMaxNumber, getAVGNumber, getSumNumber].map((f, idx) => {
        text +=`<span>${category[idx]}: ${f(differenceDayBefore)}</span>`;
    });
    return text;
}
function createHTML(list:County[]):string {
    const unwantedWord = "Gesamt"
    const countyListWithoutTotalEntry: County[] = list.filter((county) => county.name !== unwantedWord);
    const amount: number[] = [];
    countyListWithoutTotalEntry.forEach((county) => {
        amount.push(county.amount)
    });
    let html= '<html lang="de"><head><title>Hello World</title><style> table, th, td{ border:1px solid black;collapse} .container{display:flex;flex-direction:row; justify-content: space-evenly;} div{display:flex;justify-content:center; flex-direction: column;}</style></head><body>';
    const [divStart,divEnd, htmlEnd, bodyEnd] = ["<div>","</div>","</html>","</body>"];

    let unparsedCurrentDate = new Date();
    let time = unparsedCurrentDate.getHours() + ":" + unparsedCurrentDate.getMinutes() + ":" + unparsedCurrentDate.getSeconds();
    let currentDate = unparsedCurrentDate.getDate() + "-" + unparsedCurrentDate.getMonth() + "-" + unparsedCurrentDate.getFullYear();
    const h1 = `<h1>Anzahl Covid 19 Fälle vom ${currentDate} ${time}</h1>`;
    html += "<div class='container'>" + divStart + createHTMLTable(list) + divEnd + divStart + h1 + createStatistics(amount) + divEnd+ bodyEnd + htmlEnd;
    return html;
}
const handler = async (request: Request): Promise<Response> => {
    const list:County[] = await parseTableContent();
    const html: string = createHTML(list);
    return new Response(html, {headers: {"content-type": "text/html; charset=utf-8"}, status: 200});
};
console.log(`Server running on http://localhost:${port}`)
await serve(handler, {addr})
