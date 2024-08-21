import {getUserInfoFromTGData, processingUser, validateInitData} from '../helpers/index.js'

export default ({pool}) => {
    return async (req, res) => {
        try {
            validateInitData(req.body.tgData)
            const initDataUserInfo = getUserInfoFromTGData(req.body.tgData)
            if (!initDataUserInfo || !initDataUserInfo.id) return res.status(500).json({error: 'Something went wrong'})

            let result = {
                isEmpty: true
            }
            const user = await pool.selectByTelegramId(initDataUserInfo.id)
            if (!user || !user.telegram_id) {
                const createdUser = await pool.createNewUser(initDataUserInfo)
                res.status(200).json(Object.assign(processingUser(createdUser), {isEmpty: false}))
                return
            }

            res.status(200).json(Object.assign(result, processingUser(user), {isEmpty: false}));
        } catch (error) {
            return res.status(500).json({error})
        }
    }
}