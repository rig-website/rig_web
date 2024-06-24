import dbconnect from "@/lib/dbconnect";
import { Cards } from "@/model/card.model";


export default async function GET(req, res) {
    await dbconnect();
    try {
        const cards = await Cards.find({});
        res.status(200).json(cards);
        
    } catch (error) {
        res.status(500).json({error :"Failed to fetch data"})
        
    }
  }