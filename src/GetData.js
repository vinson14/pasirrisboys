import { GoogleSpreadsheet } from "google-spreadsheet";
import creds from "./creds.json";

class GetData {
    constructor() {
        this.creds = creds;
        this.sheetId = "11dt-oyCdi5iNKrGJrQLg6sMNGmpitiF5rLGiX3yvGoE";
        this.doc = new GoogleSpreadsheet(this.sheetId);
    }

    load = async () => {
        await this.doc.useServiceAccountAuth(this.creds);
        await this.doc.loadInfo();
        this.sheet = this.doc.sheetsByIndex[0];
        this.rows = await this.sheet.getRows();
    };

    winnings = () => {
        let totalWinnings = { vinson: 0, chimin: 0, junhui: 0 };
        this.rows.forEach((row) => {
            totalWinnings.vinson += parseFloat(row.vinson);
            totalWinnings.chimin += parseFloat(row.chimin);
            totalWinnings.junhui += parseFloat(row.junhui);
        });
        return totalWinnings;
    };
}

export default GetData;
