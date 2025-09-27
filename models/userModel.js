const pool=require('../config/database');

const Users={
    getUser:async (id)=>{
        const [rows]=await pool.query('SELECT * FROM users WHERE id=?',[id]);
        return rows.length>0 ? rows[0] : null;
    }
}

module.exports=Users;