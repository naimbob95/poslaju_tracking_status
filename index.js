const request = require("request-promise");
const cheerio = require("cheerio");
async function get_tracking_status(tracking) {
    const result = await request.get("https://sendparcel.poslaju.com.my/open/trace?tno="+tracking);
    const $ = cheerio.load(result);
    const data = [];
    $("tr").each((index, element) => {
        if (index === 0) return true;
        const tds = $(element).find("td");
        const date_time = $(tds[0]).text();
        const status = $(tds[1]).text();
        const location = $(tds[2]).text();
        const tableRow = { date_time, status, location };
        data.push(tableRow);
    });

    console.log(data);
    
}

module.exports.get_tracking_status = get_tracking_status;