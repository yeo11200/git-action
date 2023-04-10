import getConn from "../utils/database/config";
import status from "../utils/status";

const board = {
    selectAll: async () => {
        const query = `SELECT * FROM board`;

        const db = await getConn();

        const result = await db.query(query);

        db.release();

        return result ? result : [];
    },
    
    selectOne: async (id: string) => {
        const query = `SELECT * FROM board WHERE id = ?`;
        const db = await getConn();
        
        const result = await db.query(query, [id]);

        db.release();

        return result ? result : {};
    },

    insertBoard:async (title: string, content: string) => {
        const query = `INSERT INFO (B_TITLE, B_CONTENT) VALUES (?, ?)`;
        const db = await getConn();
        
        await db.beginTransaction();

        const result = await db.query(query, [title, content]);

        if (result) {
            await db.commit();
        }

        db.release();

        return result ? true : false;
    }
};

export default board;