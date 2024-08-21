import postgresPackage from 'pg';
const { Pool } = postgresPackage;

export default class PostgresPool {
    constructor() {
        this.pool = new Pool({
            user: 'airdrop_bot',
            host: 'localhost',
            database: 'mydatabase',
            password: 'YWlyZHJvcF9ib3Q=',
            port: 5432,
        });
        this.createIfNotExistBradUserTable()
    }
    createIfNotExistBradUserTable () {
        const createTableQuery = `
            CREATE TABLE IF NOT EXISTS brad_claim_game (
                id SERIAL PRIMARY KEY,
                telegram_id BIGINT,
                username VARCHAR(255) default null,
                first_name VARCHAR(255) default null,
                last_name VARCHAR(255) default null,
                points BIGINT DEFAULT 0,
                claiming_speed BIGINT DEFAULT 20,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
                last_claimed BIGINT
                );
        `;

        this.pool.query(createTableQuery)
            .then(() => console.log('Success'))
            .catch((err) => console.error('Error creating table or trigger:', err));
    }
    async selectByTelegramId (id) {
        const query = `SELECT
           first_name, 
           telegram_id,
           points,
           username,
           claiming_speed,
           last_claimed
        FROM brad_claim_game WHERE telegram_id = $1;`

        try {
            const result = await this.pool.query(query, [id]);
            return result.rows[0]
        } catch (err) {
            console.log('xxxxxxxxxx', err)
            throw err;
        }
    }
    async createNewUser ({username, id, first_name, last_name}) {
        const query = 'INSERT INTO brad_claim_game (username, telegram_id, first_name, last_name) VALUES ($1, $2, $3, $4) RETURNING first_name, telegram_id, points, username, claiming_speed';

        try {
            const result = await this.pool.query(query, [username, id, first_name, last_name]);
            return result.rows[0]
        } catch (err) {
            console.log('xxxxxxxxxx', err)
            throw err;
        }
    }
    async claim (id) {
        try {
            const query = `
              UPDATE brad_claim_game
              SET points = points + claiming_speed,
                  last_claimed = $1
              WHERE telegram_id = $2
              RETURNING first_name, telegram_id, points, username, claiming_speed
            `;
            const values = [Date.now(), id];
            const result = await this.pool.query(query, values);
            return result.rows[0]
        } catch (err) {
            console.log('xxxxxxxxxx', err)
            throw err;
        }
    }
}