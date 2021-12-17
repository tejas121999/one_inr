const models = require('../models');
const Sequelize = models.Sequelize;
const Op = Sequelize.Op;

//Creating Images

exports.addProjectImages =  async (req, res) => {
    try{
        let{
            projectId,
            projectImages,
            imageType
        } = req.body;

        let projectImages = await models.projectImages.create({
            projectId,
            projectImages,
            imageType
        })

        if(!projectImages) {
            return res.status(400).json({
                message: 'Failed to add image'
            })
        } else {
            return res.status(200).json({
                message: 'Image added successfully'
            })
        }
    }
    catch(err) {
        console.log(err);
        return res.status(400).josn({
            message: err
        })
    }
}