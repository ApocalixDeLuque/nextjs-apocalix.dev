import { NextApiRequest, NextApiResponse } from 'next';
import { connect } from '../../../components/utils/connection';

export interface ResponseFuncs {
    GET?: Function;
    POST?: Function;
    PUT?: Function;
    DELETE?: Function;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    //capture request method, we type it as a key of ResponseFunc to reduce typing later
    const method: keyof ResponseFuncs = req.method as keyof ResponseFuncs;

    //function for catch errors
    const catcher = (error: Error) => res.status(400).json({ error });

    // GRAB ID FROM req.query (where next stores params)
    const id: string = req.query.id as string;
    console.log('id', id);

    // potential Responses for /notes/:id
    const handleCase: ResponseFuncs = {
        // RESPONSE FOR GET REQUESTS
        GET: async (req: NextApiRequest, res: NextApiResponse) => {
            const { Note } = await connect(); // connect to database
            res.json(await Note.findById(id).catch(catcher));
        },
        // RESPONSE PUT REQUESTS
        PUT: async (req: NextApiRequest, res: NextApiResponse) => {
            const { Note } = await connect(); // connect to database
            res.json(
                await Note.findByIdAndUpdate(id, req.body, { new: true }).catch(
                    catcher
                )
            );
        },
        // RESPONSE FOR DELETE REQUESTS
        DELETE: async (req: NextApiRequest, res: NextApiResponse) => {
            const { Note } = await connect(); // connect to database
            res.json(await Note.findByIdAndRemove(id).catch(catcher));
        }
    };

    // check if there is a response for the particular method, if so invoke it, if not response with an error
    const response = handleCase[method];
    if (response) response(req, res);
    else res.status(400).json({ error: 'No Response for This Request' });
};

export default handler;
