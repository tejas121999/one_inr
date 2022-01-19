const models = require("../models");
const sequelize = models.Sequelize;
const Op = sequelize.Op;

exports.createRole = async (req, res) => {
  const { roleName, description, isActive } = req.body;
  const createdBy = req.userData.id;
  const updatedBy = req.userData.id;

  const data = await models.role.create({
    roleName,
    description,
    isActive,
    createdBy,
    updatedBy,
  });
  if (!data) {
    res.status(400).json({ message: "Failed to create Roles" });
  } else {
    res.status(201).json({ message: "Roles created successfully " });
  }
};

exports.createRoleswithPermission = async (req, res) => {
  const { entityId, roleId } = req.body;
  let entity  = entityId.split(",")
  // let id = entityId
  const EntityId = await models.entity.findAll({
    where: {
      id: {
        [Op.in]: entity,
      },
    },
  });

  if (!EntityId) {
    return res.status(400).json({
      message: "EntityId Not Found",
    });
  }
  // id = roleId;
  const RoleId = await models.role.findByPk(roleId);
  if (!RoleId) {
    return res.status(400).json({ message: "RoleId Not Found" });
  }

  const findPermission = await models.permission.findAll({
      where: {
          entityId: {
              [Op.in]: entity,
            },
        },
        attributes: ["id"],
  });
  if (!findPermission) {
    return res.status(400).json({ message: "Not found" });
  }

  const permissions = await findPermission.map((data) => data.id);
  const permission = permissions.toString();
  const data = await models.rolePermission.create({
    roleId,
    permissions:permission,
  });
  if (!data) {
    return res.status(401).json({ message: " Failed to Add permission" });
  } else {
    return res.status(201).json({ message: "Permisssion added successfully " });
  }
};

exports.getRoles = async (req, res) => {
  const data = await models.role.findAll({
    attributes: ["id", "roleName"],
  });

  if (!data) {
    return res.status(400).json({ message: "Failed to get roles" });
  } else {
    return res.status(200).json({
      data: data,
      message: "Success.",
    });
  }
};
