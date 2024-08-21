import {getUserInfoFromTGData, validateInitData, processingUser} from '../helpers/index.js'


export default ({pool}) => {
    return async (req, res) => {
        try {
            validateInitData(req.body.tgData)
            const initDataUserInfo = getUserInfoFromTGData(req.body.tgData)
            if (!initDataUserInfo || !initDataUserInfo.id) return res.status(500).end('Something went wrong')

            const user = await pool.selectByTelegramId(initDataUserInfo.id)

            const processedUser = processingUser(user)
            if (!processedUser.can_claim) return res.status(200).json(user)

            const updatedUser = await pool.claim(initDataUserInfo.id)
            return res.status(200).json(updatedUser)
        } catch (error) {
            return res.status(500).end(error.message || error)
        }
    }
}